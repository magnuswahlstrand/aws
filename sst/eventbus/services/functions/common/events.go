package common

type OrderCreated struct {
	Amount    int64    `json:"amount"`
	LineItems []string `json:"line_items"`
}
