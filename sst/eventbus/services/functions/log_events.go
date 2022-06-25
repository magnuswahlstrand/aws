package main

import (
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/davecgh/go-spew/spew"
	"time"
)

type OrderCreated struct {
	Key1 string `json:"key1"`
	Key2 string `json:"key2"`
}

type CloudWatchEvent[T any] struct {
	Version    string    `json:"version"`
	ID         string    `json:"id"`
	DetailType string    `json:"detail-type"`
	Source     string    `json:"source"`
	AccountID  string    `json:"account"`
	Time       time.Time `json:"time"`
	Region     string    `json:"region"`
	Resources  []string  `json:"resources"`
	Detail     T         `json:"detail"`
}

func Handler(request CloudWatchEvent[OrderCreated]) error {
	fmt.Printf("received event %#v\n", request)
	spew.Dump(request)

	//for _, record := range request.Records {
	//	var evt CloudWatchEvent[OrderCreated]
	//	err := json.Unmarshal([]byte(record.Body), &evt)
	//	if err != nil {
	//		return events.APIGatewayProxyResponse{}, err
	//	}
	//
	//	spew.Dump(evt)
	//	//err := json.Unmarshal([]byte(record.Body), &rec)
	//	//if err != nil {
	//	//	log.Fatalln(err)
	//	//}
	//	//fmt.Printf("received record:\n%s\n ", spew.Sdump(rec))
	//}

	return nil
}

func main() {
	lambda.Start(Handler)
}
