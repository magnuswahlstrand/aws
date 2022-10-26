# DocumentsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicantId** | **string** | The ID of the applicant whose document is being uploaded. | [default to null]
**Type_** | **string** | The type of document. | [default to null]
**File** | [****os.File**](*os.File.md) | The file to be uploaded. | [default to null]
**Side** | **string** | Either the &#x60;front&#x60; or &#x60;back&#x60; of the document. | [optional] [default to null]
**IssuingCountry** | **string** | The issuing country of the document, a 3-letter ISO code. | [optional] [default to null]
**ValidateImageQuality** | **bool** | Defaults to false. When true the submitted image will undergo an image quality validation which may take up to 5 seconds. | [optional] [default to null]
**Location** | [***ApplicantsLocation**](applicants_location.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

