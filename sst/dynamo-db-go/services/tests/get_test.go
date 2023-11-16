package main

import (
	"context"
	"fmt"
	"net/http"
	"testing"
)
import "github.com/stretchr/testify/assert"
import "github.com/carlmjohnson/requests"

import cli "main/tests/go-client-generated"

const url = "https://fiew4rcxunocjhlzuuo5uzrjii0ztqym.lambda-url.us-east-1.on.aws"

func TestGet(t *testing.T) {
	c := cli.NewAPIClient(cli.NewConfiguration())
	err := c.DefaultApi.Ping(context.Background())
	resp, err := http.Get(url)
	assert.Nil(t, err)

	assert.Equal(t, 200, resp.StatusCode)
}

const urlGet = "https://httpbin.org/get"
const url401 = "https://httpbin.org/status/401"

func TestGet2(t *testing.T) {
	var s string
	err := requests.
		URL(urlGet).
		ToString(&s).
		Fetch(context.Background())

	assert.NoError(t, err)
	assert.Equal(t, "Hello, world!", s)
}

func TestStatusCode(t *testing.T) {
	var s string
	err := requests.
		URL(url401).
		ToString(&s).
		CheckStatus(http.StatusUnauthorized).
		Fetch(context.Background())

	fmt.Printf("%T\n", err)
	assert.NoError(t, err)
}

func TestStatusCode2(t *testing.T) {
	var s string
	err := requests.
		URL(url401).
		ToString(&s).
		CheckStatus(http.StatusUnauthorized).
		Fetch(context.Background())

	fmt.Printf("%T\n", err)
	assert.NoError(t, err)
}
