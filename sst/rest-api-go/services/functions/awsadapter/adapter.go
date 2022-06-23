package awsadapter

import (
	"bytes"
	"encoding/json"
	"github.com/aws/aws-lambda-go/events"
	"log"
	"net/http"
	"net/url"
)

func APIGatewayV2Adapter[T, V any](fn func(T) (V, error)) func(events.APIGatewayV2HTTPRequest) (events.APIGatewayProxyResponse, error) {
	return func(request events.APIGatewayV2HTTPRequest) (events.APIGatewayProxyResponse, error) {
		var req T
		if err := json.Unmarshal([]byte(request.Body), &req); err != nil {
			message := http.StatusText(http.StatusBadRequest)
			return ReturnError(message, 400)
		}

		resp, err := fn(req)
		if err != nil {
			return ReturnError(err.Error(), 400)
		}

		b, err := json.Marshal(resp)
		if err != nil {
			return ReturnError(err.Error(), 500)
		}

		return events.APIGatewayProxyResponse{
			Body:       string(b),
			StatusCode: 200,
		}, nil
	}
}

type Error struct {
	Error      string `json:"error"`
	StatusCode int    `json:"status_code"`
}

func ReturnError(message string, statusCode int) (events.APIGatewayProxyResponse, error) {
	e := Error{Error: message, StatusCode: statusCode}

	b, err := json.Marshal(e)
	if err != nil {
		log.Fatalln(err)
	}

	return events.APIGatewayProxyResponse{
		Body:       string(b),
		StatusCode: statusCode,
	}, nil
}

func APIGatewayClient[T, V any](fn func(T) (V, error)) func(string, T) (V, error) {
	return func(gatewayURL string, req T) (V, error) {
		u, err := url.Parse(gatewayURL)
		if err != nil {
			return *new(V), err
		}

		b, err := json.Marshal(req)
		if err != nil {
			return *new(V), err
		}

		resp, err := http.DefaultClient.Post(u.String(), "application/json", bytes.NewReader(b))
		if err != nil {
			return *new(V), err
		}

		var out V
		if err := json.NewDecoder(resp.Body).Decode(&out); err != nil {
			return *new(V), err
		}
		return out, nil
	}
}
