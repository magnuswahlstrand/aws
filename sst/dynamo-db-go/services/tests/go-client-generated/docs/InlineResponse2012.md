# InlineResponse2012

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier for the Workflow Run. | [optional] [default to null]
**ApplicantId** | **string** | The unique identifier for the Applicant. | [optional] [default to null]
**WorkflowId** | **string** | The unique identifier for the Workflow. | [optional] [default to null]
**WorkflowVersionId** | **string** | The identifier for the Workflow version. | [optional] [default to null]
**DashboardUrl** | **string** | The URL for viewing the Workflow Run results on your Onfido Dashboard. | [optional] [default to null]
**Status** | **string** | The status of the Workflow Run. Possible values are &#x27;processing&#x27;, &#x27;awaiting_input&#x27;, &#x27;approved&#x27;, &#x27;declined&#x27;, &#x27;review&#x27;, &#x27;abandoned&#x27; and &#x27;error&#x27;. | [optional] [default to null]
**Output** | [***interface{}**](interface{}.md) | Output object contains all of the properties configured on the Workflow version. | [optional] [default to null]
**Reasons** | **[]string** | The reasons the Workflow Run outcome was reached. Configurable when creating the Workflow version. | [optional] [default to null]
**Error_** | [***InlineResponse2012Error**](inline_response_201_2_error.md) |  | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | The date and time when the Workflow Run was created. | [optional] [default to null]
**UpdatedAt** | [**time.Time**](time.Time.md) | The date and time when the Workflow Run was last updated. | [optional] [default to null]
**Link** | [***InlineResponse2012Link**](inline_response_201_2_link.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

