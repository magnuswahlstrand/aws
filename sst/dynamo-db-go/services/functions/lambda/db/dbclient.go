package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

type DBClient struct {
	*dynamodb.Client
	tableName string
}

func New(tableName string) *DBClient {
	cfg, err := config.LoadDefaultConfig(context.TODO(), func(o *config.LoadOptions) error {
		o.Region = "us-east-1"
		return nil
	})

	if err != nil {
		panic(err)
	}

	svc = dynamodb.NewFromConfig(cfg)
	return &DBClient{svc, tableName}
}

func (c *DBClient) PutItem(ctx context.Context, r Record) error {
	r.PK = r.ID
	r.SK = r.ID
	av, err := attributevalue.MarshalMap(r)
	if err != nil {
		return fmt.Errorf("failed to marshal Record, %w", err)
	}

	_, err = svc.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(c.tableName),
		Item:      av,
	})
	if err != nil {
		return err
	}
	return nil
}
