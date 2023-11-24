package app

import (
	"embed"
	"fmt"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html/v2"
	"github.com/guregu/dynamo"
	"github.com/lithammer/fuzzysearch/fuzzy"
	"golang.org/x/exp/maps"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

type User struct {
	UserID    string
	FirstName string
	LastName  string
}

type FuzzySearcher struct {
	attributeToUserID map[string][]string
	//wordsMap    map[string]bool
	words    []string
	IDtoUser map[string]User
}

func NewFuzzySearcher(users []User) *FuzzySearcher {
	attributeToUserID := map[string][]string{}
	wordsMap := map[string]bool{}
	for _, user := range users {
		wordsMap[user.UserID] = true
		wordsMap[user.FirstName] = true
		wordsMap[user.LastName] = true

		attributeToUserID[user.UserID] = append(attributeToUserID[user.UserID], user.UserID)
		if user.FirstName != user.UserID {
			attributeToUserID[user.FirstName] = append(attributeToUserID[user.FirstName], user.UserID)
		}
		if user.LastName != user.UserID && user.LastName != user.FirstName {
			attributeToUserID[user.LastName] = append(attributeToUserID[user.LastName], user.UserID)
		}
	}
	idToUser := map[string]User{}
	for _, user := range users {
		idToUser[user.UserID] = user
	}

	return &FuzzySearcher{
		attributeToUserID: attributeToUserID,
		words:             maps.Keys(wordsMap),
		IDtoUser:          idToUser,
	}
}

func (fs *FuzzySearcher) Search(q string) []User {
	foundMatches := fuzzy.FindNormalizedFold(q, fs.words)
	var matchedUsers []User
	seen := map[string]bool{}
	for _, m := range foundMatches {
		for _, id := range fs.attributeToUserID[m] {
			if !seen[id] {
				matchedUsers = append(matchedUsers, fs.IDtoUser[id])
				seen[id] = true
			}
		}
	}

	return matchedUsers
}

func SetupDynamo() dynamo.Table {
	sess := session.Must(session.NewSession())
	db := dynamo.New(sess, &aws.Config{Region: aws.String("eu-north-1")})
	table := db.Table(os.Getenv("TABLE_NAME"))
	return table
}

var fuzzySearcher *FuzzySearcher
var updateAt = time.Time{}

//go:embed templates/*
var templates embed.FS

var count = 0
var mutex = &sync.Mutex{}

func SetupApp() *fiber.App {
	table := SetupDynamo()
	fmt.Println(templates.ReadDir("."))
	fmt.Println(templates.ReadDir("/"))
	engine := html.NewFileSystem(http.FS(templates), ".html")
	engine.Debug(true)

	var app *fiber.App
	app = fiber.New(fiber.Config{
		Views: engine,
	})
	app.Use(logger.New())
	app.Use(cors.New(
		cors.Config{
			AllowOrigins: "*",
			AllowHeaders: "*",
			AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
		},
	))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Bellow, World!")
	})
	app.Get("/foo", func(c *fiber.Ctx) error {
		return c.SendString("Foo")
	})

	app.Get("/error", func(c *fiber.Ctx) error {
		success := c.QueryBool("success", false)
		if !success {
			mutex.Lock()
			defer mutex.Unlock()
			count++
			return c.Render("templates/error", fiber.Map{"Count": count})
		}
		return c.Render("templates/success", fiber.Map{})
	})
	searchFallback := "<tr><td colspan=\"3\" class=\"text-center\">No matches</td></tr>"
	app.Get("/search", func(c *fiber.Ctx) error {
		q := c.Query("q", "")
		fmt.Println("q", q)
		if q == "" {
			return c.SendString(searchFallback)
		}

		// get all items
		if fuzzySearcher == nil || time.Since(updateAt) > time.Minute {
			var allUsers []User
			if err := table.Scan().All(&allUsers); err != nil {
				return c.SendString(err.Error())
			}
			fmt.Println("results", len(allUsers))
			fuzzySearcher = NewFuzzySearcher(allUsers)
		}

		// fuzzy search
		results := fuzzySearcher.Search(q)

		fmt.Println("results", len(results))

		if len(results) == 0 {
			return c.SendString(searchFallback)
		}
		s := strings.Builder{}
		for _, m := range results {
			s.WriteString("<tr>")
			s.WriteString("<td>")
			s.WriteString(m.UserID)
			s.WriteString("</td>")
			s.WriteString("<td>")
			s.WriteString(m.FirstName)
			s.WriteString("</td>")
			s.WriteString("<td>")
			s.WriteString(m.LastName)
			s.WriteString("</td>")
			s.WriteString("<tr>")
		}

		return c.SendString(s.String())
	})
	app.Get("/profile/{id}", func(c *fiber.Ctx) error {
		id := c.Params("id", "")
		return c.SendString("Foom" + id)
	})
	return app
}
