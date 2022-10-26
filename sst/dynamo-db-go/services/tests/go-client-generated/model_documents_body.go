/*
 * Onfido API
 *
 * The Onfido API is used to submit check requests.
 *
 * API version: 3.4.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger
import (
	"os"
)

type DocumentsBody struct {
	// The ID of the applicant whose document is being uploaded.
	ApplicantId string `json:"applicant_id"`
	// The type of document.
	Type_ string `json:"type"`
	// The file to be uploaded.
	File **os.File `json:"file"`
	// Either the `front` or `back` of the document.
	Side string `json:"side,omitempty"`
	// The issuing country of the document, a 3-letter ISO code.
	IssuingCountry string `json:"issuing_country,omitempty"`
	// Defaults to false. When true the submitted image will undergo an image quality validation which may take up to 5 seconds.
	ValidateImageQuality bool `json:"validate_image_quality,omitempty"`
	Location *ApplicantsLocation `json:"location,omitempty"`
}
