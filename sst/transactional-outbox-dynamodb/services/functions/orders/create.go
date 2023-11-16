package main

import (
	"errors"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"github.com/aws/smithy-go"
	"github.com/davecgh/go-spew/spew"
	"log"
	"main/functions/orders/db"
)

type Req2 struct {
	ID string
}

func CreateHandler(request Req2) (events.APIGatewayProxyResponse, error) {

	spew.Dump(request)
	_, err := db.CreateOrder(request.ID)
	if err != nil {

		fmt.Printf("Error type %v", err)
		fmt.Printf("Error type %T", err)
		var oe *smithy.OperationError
		if errors.As(err, &oe) {
			log.Printf("failed to call service: %s\n, operation: %s\n, error: %v\n", oe.Service(), oe.Operation(), oe.Unwrap())
			fmt.Println("Z")
			fmt.Println(oe.Unwrap())
			fmt.Println("Z3")
			fmt.Printf("%T\n", oe.Err)

			var oe2 *types.TransactionCanceledException
			if errors.As(err, &oe.Err) {
				fmt.Println("\nXXX2")
				fmt.Println(oe2)
			}

		}
		var oe2 *types.TransactionCanceledException
		if errors.As(err, &oe2) {
			fmt.Println("XXX")
			fmt.Println(oe2)
		}

		//spew.Dump(err)
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "something went wrong",
		}, err
	}

	return events.APIGatewayProxyResponse{
		Body:       "Hello, World! Your Req was received at " + request.ID + ".",
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(CreateHandler)
}
