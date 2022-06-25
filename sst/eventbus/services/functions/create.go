package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	cwe "github.com/aws/aws-sdk-go-v2/service/cloudwatchevents"
	"github.com/aws/aws-sdk-go-v2/service/cloudwatchevents/types"
	"log"
	"os"
)

var client *cwe.Client

func init() {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatalln(err)
	}
	client = cwe.NewFromConfig(cfg)
}

func putEvents(busName string, typ string, v interface{}) (*cwe.PutEventsOutput, error) {
	b, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}

	resp, err := client.PutEvents(context.Background(),
		&cwe.PutEventsInput{
			Entries: []types.PutEventsRequestEntry{
				{
					Detail:       aws.String(string(b)),
					DetailType:   aws.String(typ),
					EventBusName: aws.String(busName),
				},
			},
		})
	return resp, nil
}

type CreateOrderRequest struct {
	LineItems []string `json:"line_items"`
}

type CreateOrderResponse struct {
	ID string `json:"id"`
	CreateOrderRequest
}

var busName = os.Getenv("EVENT_BUS_NAME")

func Handler3(request CreateOrderRequest) (events.APIGatewayProxyResponse, error) {
	//var req CreateOrderRequest
	//fmt.Println("received request", request)
	//if err := json.Unmarshal([]byte(request.Body), &req); err != nil {
	//	return events.APIGatewayProxyResponse{StatusCode: 400, Body: "hej" + err.Error()}, nil
	//}

	b, err := json.Marshal(request)
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	}

	fmt.Println("SENDING TO", busName)
	_, err = client.PutEvents(context.Background(),
		&cwe.PutEventsInput{
			Entries: []types.PutEventsRequestEntry{
				{
					Detail: aws.String(string(b)),
					//Detail:       aws.String("hej"),
					DetailType:   aws.String("order.created"),
					EventBusName: aws.String(busName),
					Source:       aws.String("create_order_fn"),
					Resources:    []string{"resource1", "resource2"},
				},
			},
		})
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	}

	resp := CreateOrderResponse{
		ID:                 "123",
		CreateOrderRequest: request,
	}

	b, err = json.Marshal(resp)
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	}

	return events.APIGatewayProxyResponse{
		Body:       string(b),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(Handler3)
}
