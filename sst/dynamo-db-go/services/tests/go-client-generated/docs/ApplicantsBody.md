# ApplicantsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier for the applicant. Read-only. | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | The date and time when this applicant was created. Read-only. | [optional] [default to null]
**DeleteAt** | [**time.Time**](time.Time.md) | The date and time when this applicant is scheduled to be deleted. Read-only. | [optional] [default to null]
**Href** | **string** | The uri of this resource. Read-only. | [optional] [default to null]
**Sandbox** | **bool** | Read-only. | [optional] [default to null]
**FirstName** | **string** | The applicant’s first name | [optional] [default to null]
**LastName** | **string** | The applicant’s surname | [optional] [default to null]
**Email** | **string** | The applicant’s email address. Required if doing a US check, or a UK check for which &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. | [optional] [default to null]
**Dob** | **string** | The applicant’s date of birth | [optional] [default to null]
**Address** | [***ApplicantsAddress**](applicants_address.md) |  | [optional] [default to null]
**IdNumbers** | [**[]ApplicantsIdNumbers**](applicants_id_numbers.md) |  | [optional] [default to null]
**PhoneNumber** | **string** | The applicant’s phone number | [optional] [default to null]
**Consents** | [**[]ModelMap**](map.md) |  | [optional] [default to null]
**Location** | [***ApplicantsLocation**](applicants_location.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

