package db

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"os"
	"time"
)

var ordersTable = os.Getenv("TABLE_NAME")
var eventsTable = os.Getenv("EVENTS_TABLE_NAME")

var client *dynamodb.Client

func init() {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic(err)
	}
	client = dynamodb.NewFromConfig(cfg)

}

func GetEvents(orderID string) ([]Events, error) {
	var records []Events
	var PK = fmt.Sprintf("EVENT#%s", orderID)
	results, err := client.Query(context.TODO(), &dynamodb.QueryInput{
		TableName:              aws.String(eventsTable),
		KeyConditionExpression: aws.String("PK = :pk"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":pk": &types.AttributeValueMemberS{Value: PK},
		},
	})
	if err != nil {
		return nil, err
	}

	if err := attributevalue.UnmarshalListOfMaps(results.Items, &records); err != nil {
		return nil, err
	}

	return records, nil
}

type DbOrder struct {
	PK        string
	SK        string
	ID        string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Events struct {
	PK string
	SK string
	//URLs         []string `dynamodbav:",stringset"`
	//IgnoredField string   `dynamodbav:"-"`
	//RenamedField string   `dynamodbav:"renamed" json:"myName"`
}

func CreateOrder(orderID string) ([]Events, error) {
	now := time.Now()
	order := DbOrder{
		PK:        fmt.Sprintf("ORDER#%s", orderID),
		SK:        fmt.Sprintf("ORDER#%s", orderID),
		ID:        orderID,
		CreatedAt: now,
		UpdatedAt: now,
	}
	vals, err := attributevalue.MarshalMap(order)
	if err != nil {
		return nil, err
	}

	eventVals, err := attributevalue.MarshalMap(map[string]interface{}{
		"id":        aws.String(order.ID),
		"type":      aws.String("order.created"),
		"timestamp": now,
		"data":      order,
	})
	if err != nil {
		return nil, err
	}

	fmt.Println("XXXXX")
	fmt.Println(ordersTable)
	fmt.Println(vals)
	fmt.Println(eventsTable)

	_, err = client.TransactWriteItems(context.TODO(), &dynamodb.TransactWriteItemsInput{
		TransactItems: []types.TransactWriteItem{
			{Put: &types.Put{
				TableName:           aws.String(ordersTable),
				Item:                vals,
				ConditionExpression: aws.String("attribute_not_exists(PK)"),
			}},
			{Put: &types.Put{
				TableName: aws.String(eventsTable),
				Item:      eventVals,
			}},
		},
	})
	if err != nil {
		return nil, err
	}
	return nil, nil
}
