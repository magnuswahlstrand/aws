# InlineResponse20014Attempts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The UUID of the Authentication attempt. | [optional] [default to null]
**ApplicantId** | **string** | The UUID of the applicant that made the attempt. | [optional] [default to null]
**Timestamp** | [**time.Time**](time.Time.md) | The date and time at which the attempt was made. | [optional] [default to null]
**Success** | **bool** | The result of the Authentication attempt. | [optional] [default to null]
**Error_** | **string** | The reason why an Authentication attempt failed. | [optional] [default to null]
**SdkSource** | **string** | SDK type used in the Authentication attempt. | [optional] [default to null]
**SdkVersion** | **string** | SDK version used in the Authentication attempt. | [optional] [default to null]
**SdkMetadata** | [***InlineResponse20014SdkMetadata**](inline_response_200_14_sdk_metadata.md) |  | [optional] [default to null]
**ImageHref** | [****os.File**](*os.File.md) | The href to download the audit image used for the attempt. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

