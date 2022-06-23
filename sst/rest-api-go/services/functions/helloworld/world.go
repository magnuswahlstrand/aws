package helloworld

import (
	"fmt"
	"main/functions/awsadapter"
)

type Req struct {
	Name string `json:"name"`
}

type Resp struct {
	Greeting string `json:"greeting"`
}

func HelloWorld(req Req) (Resp, error) {
	return Resp{Greeting: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}

var Call = awsadapter.APIGatewayClient(HelloWorld)
var Handler = awsadapter.APIGatewayV2Adapter(HelloWorld)
