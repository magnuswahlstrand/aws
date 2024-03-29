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

type InlineResponse20012 struct {
	// The unique identifier for the applicant.
	ApplicantId string `json:"applicant_id,omitempty"`
	// The date and time when this trusted face was created.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// The date and time when this trusted face was last updated.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// The URI that can be used to download the trusted face.
	DownloadHref string `json:"download_href,omitempty"`
}
