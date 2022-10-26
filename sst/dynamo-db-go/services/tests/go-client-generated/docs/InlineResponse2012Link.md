# InlineResponse2012Link

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | Link to access the Workflow Run without the need to integrate with Onfido&#x27;s SDKs. | [optional] [default to null]
**CompletedRedirectUrl** | **string** | When the interactive section of the Workflow Run has completed successfully, the user will be redirected to this URL instead of seeing the default Onfido &#x27;thank you&#x27; page. | [optional] [default to null]
**ExpiredRedirectUrl** | **string** | When the link has expired, the user will be immediately redirected to this URL instead of seeing the default Onfido error message. | [optional] [default to null]
**ExpiresAt** | [**time.Time**](time.Time.md) | Date and time when the link will expire. | [optional] [default to null]
**Language** | **string** | The code for the language when the workflow run is acessed using the link. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

