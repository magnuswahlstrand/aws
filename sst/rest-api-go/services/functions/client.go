package main

import (
	"fmt"
	"log"
	"main/functions/helloworld"
)

func main() {
	url := "https://hlnce6bn5a.execute-api.us-east-1.amazonaws.com"
	resp, err := helloworld.Call(url, helloworld.Req{Name: "Magnus"})
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Printf("received response: %q\n", resp.Greeting)
}
