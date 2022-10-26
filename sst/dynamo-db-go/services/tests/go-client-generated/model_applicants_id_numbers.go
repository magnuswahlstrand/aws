/*
 * Onfido API
 *
 * The Onfido API is used to submit check requests.
 *
 * API version: 3.4.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type ApplicantsIdNumbers struct {
	// Type of ID number. Valid values are `ssn`, `social_insurance`, `tax_id`, `identity_card`, `passport` and `driving_license`
	Type_ string `json:"type,omitempty"`
	// Value of ID number
	Value string `json:"value,omitempty"`
	// Two letter code of issuing state (state-issued driving licenses only)
	StateCode string `json:"state_code,omitempty"`
}
