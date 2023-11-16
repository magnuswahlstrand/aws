package app

import (
	"github.com/gofiber/fiber/v2"
)

func SetupApp() *fiber.App {
	var app *fiber.App
	app = fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Bellow, World!")
	})
	app.Get("/foo", func(c *fiber.Ctx) error {
		return c.SendString("Foo")
	})
	app.Get("/foo/fam", func(c *fiber.Ctx) error {
		return c.SendString("Foom")
	})
	return app
}
