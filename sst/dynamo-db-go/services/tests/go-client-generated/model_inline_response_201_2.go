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

type InlineResponse2012 struct {
	// The unique identifier for the Workflow Run.
	Id string `json:"id,omitempty"`
	// The unique identifier for the Applicant.
	ApplicantId string `json:"applicant_id,omitempty"`
	// The unique identifier for the Workflow.
	WorkflowId string `json:"workflow_id,omitempty"`
	// The identifier for the Workflow version.
	WorkflowVersionId string `json:"workflow_version_id,omitempty"`
	// The URL for viewing the Workflow Run results on your Onfido Dashboard.
	DashboardUrl string `json:"dashboard_url,omitempty"`
	// The status of the Workflow Run. Possible values are 'processing', 'awaiting_input', 'approved', 'declined', 'review', 'abandoned' and 'error'.
	Status string `json:"status,omitempty"`
	// Output object contains all of the properties configured on the Workflow version.
	Output *interface{} `json:"output,omitempty"`
	// The reasons the Workflow Run outcome was reached. Configurable when creating the Workflow version.
	Reasons []string `json:"reasons,omitempty"`
	Error_ *InlineResponse2012Error `json:"error,omitempty"`
	// The date and time when the Workflow Run was created.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// The date and time when the Workflow Run was last updated.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	Link *InlineResponse2012Link `json:"link,omitempty"`
}
