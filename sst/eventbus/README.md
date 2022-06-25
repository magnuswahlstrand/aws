


# Troubleshooting

The `PutEventsRequestEntry` must have a source defined, otherwise the event will not be published (or at least not reach the subscriber)
```go
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
```

I got the error
```
2022/06/24 21:32:12 operation error CloudWatch Events: PutEvents, https response error StatusCode: 400, RequestID: 100f939f-0fff-45a8-8741-0b4edaa51f71, api error MissingAuthenticationTokenException: Missing Authentication Token
```

Solution
```go
client := cwe.New(cwe.Options{Region: "us-east-1",})
```

```
cfg, err := config.LoadDefaultConfig(context.Background())
    if err != nil {
        log.Fatalln(err)
    }
    client := cwe.NewFromConfig(cfg)
```
