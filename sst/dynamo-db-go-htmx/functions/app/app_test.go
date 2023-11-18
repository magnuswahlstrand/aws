package app_test

import (
	"github.com/stretchr/testify/assert"
	"main/functions/app"
	"testing"
)

func GetIDs(users []app.User) []string {
	var ids []string
	for _, user := range users {
		ids = append(ids, user.UserID)
	}
	return ids
}

var allUsers = []app.User{
	{
		UserID:    "1",
		FirstName: "John",
		LastName:  "Doe",
	},
	{
		UserID:    "2",
		FirstName: "Jane",
		LastName:  "Doe",
	},
	{
		UserID:    "3",
		FirstName: "Magnus",
		LastName:  "Mag",
	},
}

var fs = app.NewFuzzySearcher(allUsers)

func TestFuzzySearch(t *testing.T) {
	matches := fs.Search("john")
	assert.Equal(t, GetIDs(matches), []string{"1"})
}

func TestFuzzySearch2(t *testing.T) {
	matches := fs.Search("doe")
	assert.Equal(t, []string{"1", "2"}, GetIDs(matches))
}

func TestFuzzySearch3(t *testing.T) {
	matches := fs.Search("mag")
	assert.Equal(t, []string{"3"}, GetIDs(matches))
}
