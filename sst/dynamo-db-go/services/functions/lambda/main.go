package main

import (
	"context"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/google/uuid"
	"os"
)

var svc *dynamodb.Client

var dbClient DBClient

func Handler(request events.APIGatewayV2HTTPRequest) (string, error) {
	db := New(os.Getenv("TABLE_NAME"))

	_, err := db.PutItem(context.TODO(), map[string]interface{}{
		"PK": uuid.New().String(),
		"SK": uuid.New().String(),
	})
	if err != nil {
		return "", err
	}

	return "success", nil
}

func main() {
	lambda.Start(Handler)
}
