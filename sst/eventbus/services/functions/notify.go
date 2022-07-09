package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/sns"
	"github.com/davecgh/go-spew/spew"
	"os"
	"time"
)

var snsTopicArn = os.Getenv("SNS_TOPIC_ARN")

type Order struct {
	Amount    int64    `json:"amount"`
	LineItems []string `json:"line_items"`
}

type CloudWatchEvent struct {
	Version    string    `json:"version"`
	ID         string    `json:"id"`
	DetailType string    `json:"detail-type"`
	Source     string    `json:"source"`
	AccountID  string    `json:"account"`
	Time       time.Time `json:"time"`
	Region     string    `json:"region"`
	Resources  []string  `json:"resources"`
	Detail     Order     `json:"detail"`
}

func NotifyHandler(request CloudWatchEvent) error {
	// 2. Set up EventBridge client
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		return err
	}
	snsClient := sns.NewFromConfig(cfg)

	res, err := snsClient.Publish(context.Background(), &sns.PublishInput{
		Message: aws.String("my message here"),
		//MessageStructure: nil,
		Subject:  aws.String("Something about AWS"),
		TopicArn: aws.String(snsTopicArn),
	})
	if err != nil {
		spew.Dump(err)
		return err
	}

	fmt.Printf("send event %v\n", res)
	return nil
}

func main() {
	lambda.Start(NotifyHandler)
}
