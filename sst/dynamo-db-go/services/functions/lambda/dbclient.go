package main

import (
	"context"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"github.com/google/uuid"
)

type DBClient struct {
	*dynamodb.Client
	tableName string
}

func init() {

}

func New(tableName string) *DBClient {
	cfg, err := config.LoadDefaultConfig(context.TODO(), func(o *config.LoadOptions) error {
		o.Region = "us-east-1"
		return nil
	})
	config.
	if err != nil {
		panic(err)
	}

	svc = dynamodb.NewFromConfig(cfg)
	return &DBClient{svc, tableName}
}

func (c *DBClient) PutItem(ctx context.Context, item map[string]interface{}) (*dynamodb.PutItemOutput, error) {

	out, err := svc.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(c.tableName),
		Item: map[string]types.AttributeValue{
			"PK": &types.AttributeValueMemberS{Value: uuid.New().String()},
			"SK": &types.AttributeValueMemberS{Value: uuid.New().String()},
		},
	})
	if err != nil {
		return nil, err
	}
	return out, nil
}

type Order struct {
	ID string
}

func (c *DBClient) CreateOrder() {

}
