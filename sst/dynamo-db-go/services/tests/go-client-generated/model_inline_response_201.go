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
	"time"
)

type InlineResponse201 struct {
	// The unique identifier for the document
	Id string `json:"id,omitempty"`
	// The date and time at which the document was uploaded
	CreatedAt time.Time `json:"created_at,omitempty"`
	// The name of the uploaded file
	FileName string `json:"file_name,omitempty"`
	// The size of the file in bytes
	FileSize int32 `json:"file_size,omitempty"`
	// The file type of the uploaded file
	FileType string `json:"file_type,omitempty"`
	// The type of document
	Type_ string `json:"type,omitempty"`
	// The side of the document, if applicable. The possible values are front and back
	Side string `json:"side,omitempty"`
	// The issuing country of the document, a 3-letter ISO code.
	IssuingCountry string `json:"issuing_country,omitempty"`
	// The uri of this resource
	Href string `json:"href,omitempty"`
	// The uri that can be used to download the document
	DownloadHref string `json:"download_href,omitempty"`
}