package main

import (
	"context"
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/google/uuid"
	"main/functions/lambda/db"
	"os"
)

func Handler(request events.APIGatewayV2HTTPRequest) (string, error) {
	dbClient := db.New(os.Getenv("TABLE_NAME"))

	r := db.Record{
		ID: uuid.New().String(),
		URLs: []string{
			"https://example.com/first/link",
			"https://example.com/second/url",
		},
		IgnoredField: "this will be ignored",
		RenamedField: "this will be renamed",
	}
	if err := dbClient.PutItem(context.TODO(), r); err != nil {
		return "", err
	}

	items, err := dbClient.GetItems(context.TODO())
	if err != nil {
		return "", err
	}

	b, err := json.MarshalIndent(items, "", "  ")
	if err != nil {
		return "", err
	}

	return string(b), nil
}

func main() {
	lambda.Start(Handler)
}
