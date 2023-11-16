package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func Handler(request events.APIGatewayV2HTTPRequest) (string, error) {
	s := request.Body
	return s + s, nil
}

func main() {
	lambda.Start(Handler)
}
