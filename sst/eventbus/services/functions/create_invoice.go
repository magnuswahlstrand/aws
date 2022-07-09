package main

import (
	"encoding/json"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type OrderCreatedEvent struct {
	Amount    int64    `json:"amount"`
	LineItems []string `json:"line_items"`
}

func CreateInvoiceHandler(request events.CloudWatchEvent) error {
	var event OrderCreatedEvent
	if err := json.Unmarshal(request.Detail, &event); err != nil {
		return err
	}

	fmt.Printf("received event of type %q\n", request.DetailType)
	fmt.Println("creating invoice for event", event)
	return nil
}

func main() {
	lambda.Start(CreateInvoiceHandler)
}
