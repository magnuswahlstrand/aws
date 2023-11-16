package main

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Req struct {
	orderID string
}

// LambdaFunctionURLRequest contains data coming from the HTTP Req to a Lambda Function URL.
type LambdaFunctionURLRequest struct {
	Body string `json:"body,omitempty"`
}

//func GetHandler(Req lambda) (events.APIGatewayProxyResponse, error) {
func GetHandler(request LambdaFunctionURLRequest) (events.APIGatewayProxyResponse, error) {

	fmt.Println(request)

	return events.APIGatewayProxyResponse{
		Body:       "Hello, World! Your Req was received at " + request.Body + ".",
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(GetHandler)
}
