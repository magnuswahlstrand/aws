package db

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

type Record struct {
	PK           string
	SK           string
	ID           string
	URLs         []string `dynamodbav:",stringset"`
	IgnoredField string   `dynamodbav:"-"`
	RenamedField string   `dynamodbav:"renamed" json:"myName"`
}

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

	return &DBClient{dynamodb.NewFromConfig(cfg), tableName}
}

func (c *DBClient) PutItem(ctx context.Context, r Record) error {
	r.PK = r.ID
	r.SK = r.ID
	av, err := attributevalue.MarshalMap(r)
	if err != nil {
		return fmt.Errorf("failed to marshal Record, %w", err)
	}

	_, err = c.Client.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(c.tableName),
		Item:      av,
	})
	return err
}

func (c *DBClient) GetItems(ctx context.Context) ([]Record, error) {
	var records []Record
	results, err := c.Client.Scan(
		ctx,
		&dynamodb.ScanInput{
			TableName: aws.String(c.tableName),
		},
	)
	if err != nil {
		return nil, err
	}

	if err := attributevalue.UnmarshalListOfMaps(results.Items, &records); err != nil {
		return nil, err
	}

	return records, nil
}
