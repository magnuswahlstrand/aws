package main

import (
	"github.com/aws/aws-lambda-go/lambda"
	"main/functions/helloworld"
)

//
//func main() {
//	resp, err := world.Greet.Bind(url, world.Req{Name: "Magnus"})
//	if err != nil {
//		log.Fatalln(err)
//	}
//
//	fmt.Printf("received response: %q\n", resp.Greeting)
//}

func main() {
	lambda.Start(helloworld.Handler)
}
