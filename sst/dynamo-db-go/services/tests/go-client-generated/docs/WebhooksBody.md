# WebhooksBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the webhook. Read-only. | [optional] [default to null]
**Token** | **string** | Webhook secret token used to sign the webhook&#x27;s payload. Read-only. | [optional] [default to null]
**Href** | **string** | The API endpoint to retrieve the webhook. Read-only. | [optional] [default to null]
**Url** | **string** | The url that will listen to notifications (must be https). | [default to null]
**Enabled** | **bool** | Determine if the webhook is active. | [optional] [default to null]
**Environments** | **[]string** | The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments.  | [optional] [default to null]
**Events** | **[]string** | The events that will be published to the webhook. The supported events are: &#x60;report.completed&#x60;, &#x60;report.withdrawn&#x60;, &#x60;check.completed&#x60;, &#x60;check.started&#x60;, &#x60;check.form_opened&#x60;, &#x60;check.form_completed&#x60;. If the events parameter is omitted all the events will be subscribed.  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

