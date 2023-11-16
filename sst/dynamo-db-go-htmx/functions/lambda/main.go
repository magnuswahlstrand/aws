package main

import (
	"context"
	"log"
	"main/functions/app"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	fiberadapter "github.com/awslabs/aws-lambda-go-api-proxy/fiber"
)

var fiberLambda *fiberadapter.FiberLambda

// init the Fiber Server
func init() {
	log.Printf("Fiber cold start")
	fiberLambda = fiberadapter.New(app.SetupApp())
}

// Handler will deal with Fiber working with Lambda
func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// If no name is provided in the HTTP request body, throw an error
	req.Path = req.PathParameters["proxy"]
	return fiberLambda.ProxyWithContext(ctx, req)
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	lambda.Start(Handler)
}
