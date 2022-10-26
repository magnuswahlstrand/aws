# ChecksBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier for the check. Read-only. | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | The date and time when this check was created. Read-only. | [optional] [default to null]
**Href** | **string** | The uri of this resource. Read-only. | [optional] [default to null]
**Status** | **string** | The current state of the check in the checking process. Read-only. | [optional] [default to null]
**Result** | **string** | The overall result of the check, based on the results of the constituent reports. Read-only. | [optional] [default to null]
**DownloadUri** | **string** | A link to a PDF output of the check results. Append &#x60;.pdf&#x60; to get the pdf file. Read-only. | [optional] [default to null]
**FormUri** | **string** | A link to the applicant form, if &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;. Read-only. | [optional] [default to null]
**RedirectUri** | **string** | For checks where &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;, redirect to this URI when the applicant has submitted their data. Read-only. | [optional] [default to null]
**ResultsUri** | **string** | A link to the corresponding results page on the Onfido dashboard. | [optional] [default to null]
**ReportNames** | **[]string** | An array of report names (strings). | [optional] [default to null]
**ApplicantId** | **string** | The ID of the applicant to do the check on. | [optional] [default to null]
**PrivacyNoticesReadConsentGiven** | **bool** | Indicates whether the privacy notices and terms of service have been read and, where specific laws require, that consent has been given for Onfido. | [optional] [default to null]
**Tags** | **[]string** | Array of tags being assigned to this check. | [optional] [default to null]
**ApplicantProvidesData** | **bool** | Send an applicant form to applicant to complete to proceed with check. Defaults to false.  | [optional] [default to null]
**SuppressFormEmails** | **bool** | For checks where &#x60;applicant_provides_data&#x60; is &#x60;true&#x60;, applicant form will not be automatically sent if &#x60;suppress_form_emails&#x60; is set to &#x60;true&#x60;. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. Defaults to false.  | [optional] [default to null]
**Asynchronous** | **bool** | Defaults to &#x60;true&#x60;. Write-only. If set to &#x60;false&#x60;, you will only receive a response when all reports in your check have completed.  | [optional] [default to null]
**WebhookIds** | **[]string** | Optional. An array of strings describing which webhooks to trigger for this check. By default, all webhooks registered in the account will be triggered and this value will be null in the responses. | [optional] [default to null]
**ReportIds** | **[]string** | An array of report ids. | [optional] [default to null]
**DocumentIds** | **[]string** | Optional. Array of strings describing which document to process in checks containing a Document report or a Facial Similarity report, or both. By default, the most recently uploaded document is used. &#x60;document_ids&#x60; is only usable with Document and Facial Similarity reports. | [optional] [default to null]
**Consider** | **[]string** | Returns a pre-determined consider sub-result in sandbox for the specific reports in the consider array. | [optional] [default to null]
**SubResult** | **string** | Triggers a pre-determined sub-result response for sandbox Document reports. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

