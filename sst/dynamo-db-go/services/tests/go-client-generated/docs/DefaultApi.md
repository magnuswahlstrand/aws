# {{classname}}

All URIs are relative to *https://api.{region}.onfido.com/v3.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelReport**](DefaultApi.md#CancelReport) | **Post** /reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
[**CreateApplicant**](DefaultApi.md#CreateApplicant) | **Post** /applicants | Create Applicant
[**CreateCheck**](DefaultApi.md#CreateCheck) | **Post** /checks | Create a check
[**CreateTrustedFace**](DefaultApi.md#CreateTrustedFace) | **Post** /applicants/{applicant_id}/face | Create a trusted face from a file or a live photo or live video id
[**CreateWebhook**](DefaultApi.md#CreateWebhook) | **Post** /webhooks | Create a webhook
[**CreateWorkflowRun**](DefaultApi.md#CreateWorkflowRun) | **Post** /workflow_runs | Create a workflow run.
[**DeleteWebhook**](DefaultApi.md#DeleteWebhook) | **Delete** /webhooks/{webhook_id} | Delete a webhook
[**DestroyApplicant**](DefaultApi.md#DestroyApplicant) | **Delete** /applicants/{applicant_id} | Delete Applicant
[**DestroyTrustedFace**](DefaultApi.md#DestroyTrustedFace) | **Delete** /applicants/{applicant_id}/face | Deletes a trusted face.
[**DownloadCheck**](DefaultApi.md#DownloadCheck) | **Get** /checks/{check_id}/download | Download a PDF of the check
[**DownloadDocument**](DefaultApi.md#DownloadDocument) | **Get** /documents/{document_id}/download | Download a documents raw data
[**DownloadLivePhoto**](DefaultApi.md#DownloadLivePhoto) | **Get** /live_photos/{live_photo_id}/download | Download live photo
[**DownloadLiveVideo**](DefaultApi.md#DownloadLiveVideo) | **Get** /live_videos/{live_video_id}/download | Download live video
[**DownloadLiveVideoFrame**](DefaultApi.md#DownloadLiveVideoFrame) | **Get** /live_videos/{live_video_id}/frame | Download live video frame
[**DownloadTrustedFace**](DefaultApi.md#DownloadTrustedFace) | **Get** /applicants/{applicant_id}/face/download | Downloads an applicant&#x27;s trusted face.
[**EditWebhook**](DefaultApi.md#EditWebhook) | **Put** /webhooks/{webhook_id} | Edit a webhook
[**FindAddresses**](DefaultApi.md#FindAddresses) | **Get** /addresses/pick | Search for addresses by postcode
[**FindApplicant**](DefaultApi.md#FindApplicant) | **Get** /applicants/{applicant_id} | Retrieve Applicant
[**FindCheck**](DefaultApi.md#FindCheck) | **Get** /checks/{check_id} | Retrieve a Check
[**FindDocument**](DefaultApi.md#FindDocument) | **Get** /documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
[**FindLivePhoto**](DefaultApi.md#FindLivePhoto) | **Get** /live_photos/{live_photo_id} | Retrieve live photo
[**FindLiveVideo**](DefaultApi.md#FindLiveVideo) | **Get** /live_videos/{live_video_id} | Retrieve live video
[**FindReport**](DefaultApi.md#FindReport) | **Get** /reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
[**FindWebhook**](DefaultApi.md#FindWebhook) | **Get** /webhooks/{webhook_id} | Retrieve a Webhook
[**GenerateSdkToken**](DefaultApi.md#GenerateSdkToken) | **Post** /sdk_token | Generate a SDK token
[**ListApplicants**](DefaultApi.md#ListApplicants) | **Get** /applicants | List Applicants
[**ListAuthenticationAttempts**](DefaultApi.md#ListAuthenticationAttempts) | **Get** /auth/attempts | List authentication attempts
[**ListChecks**](DefaultApi.md#ListChecks) | **Get** /checks | Retrieve Checks
[**ListDocuments**](DefaultApi.md#ListDocuments) | **Get** /documents | List documents
[**ListLivePhotos**](DefaultApi.md#ListLivePhotos) | **Get** /live_photos | List live photos
[**ListLiveVideos**](DefaultApi.md#ListLiveVideos) | **Get** /live_videos | List live videos
[**ListReports**](DefaultApi.md#ListReports) | **Get** /reports | All the reports belonging to a particular check can be listed from this endpoint.
[**ListTasks**](DefaultApi.md#ListTasks) | **Get** /workflow_runs/{workflow_run_id}/tasks | The Tasks of a Workflow can be retrieved by calling this endpoint with the unique identifier of the Workflow Run.
[**ListWebhooks**](DefaultApi.md#ListWebhooks) | **Get** /webhooks | List webhooks
[**Ping**](DefaultApi.md#Ping) | **Get** /ping | Run a health check on the Onfido API
[**RestoreApplicant**](DefaultApi.md#RestoreApplicant) | **Post** /applicants/{applicant_id}/restore | Restore Applicant
[**ResumeCheck**](DefaultApi.md#ResumeCheck) | **Post** /checks/{check_id}/resume | Resume a Check
[**ResumeReport**](DefaultApi.md#ResumeReport) | **Post** /reports/{report_id}/resume | This endpoint is for resuming individual paused reports.
[**RetrieveAuditImage**](DefaultApi.md#RetrieveAuditImage) | **Get** /auth/attempts/{attempt_id}/image | Retrieves the audit image used for the given Authentication attempt.
[**RetrieveTask**](DefaultApi.md#RetrieveTask) | **Get** /workflow_runs/{workflow_run_id}/tasks/{task_id} | A single Task can be retrieved by calling this endpoint with the unique identifier of the Task and Workflow Run.
[**RetrieveTrustedFace**](DefaultApi.md#RetrieveTrustedFace) | **Get** /applicants/{applicant_id}/face | Retrieves an applicant&#x27;s trusted face.
[**RetrieveWorkflowRun**](DefaultApi.md#RetrieveWorkflowRun) | **Get** /workflow_runs/{workflow_run_id} | A single Workflow Run can be retrieved by calling this endpoint with the unique identifier of the Workflow Run.
[**UpdateApplicant**](DefaultApi.md#UpdateApplicant) | **Put** /applicants/{applicant_id} | Update Applicant
[**UploadDocument**](DefaultApi.md#UploadDocument) | **Post** /documents | Upload a document
[**UploadLivePhoto**](DefaultApi.md#UploadLivePhoto) | **Post** /live_photos | Upload live photo
[**VerifyAuthenticationToken**](DefaultApi.md#VerifyAuthenticationToken) | **Get** /auth/keys | Returns a JWKS (JSON Web Key Set) with public keys to verify the JWT token returned in the Authentication result.

# **CancelReport**
> CancelReport(ctx, reportId)
This endpoint is for cancelling individual paused reports.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **reportId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateApplicant**
> Paths1applicantspostrequestBodycontentapplication1jsonschema CreateApplicant(ctx, body)
Create Applicant

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ApplicantsBody**](ApplicantsBody.md)|  | 

### Return type

[**Paths1applicantspostrequestBodycontentapplication1jsonschema**](#/paths/~1applicants/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateCheck**
> Paths1checkspostrequestBodycontentapplication1jsonschema CreateCheck(ctx, body)
Create a check

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ChecksBody**](ChecksBody.md)|  | 

### Return type

[**Paths1checkspostrequestBodycontentapplication1jsonschema**](#/paths/~1checks/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateTrustedFace**
> Paths1applicants17BapplicantId7D1facegetresponses200contentapplication1jsonschema CreateTrustedFace(ctx, file, livePhotoId, liveVideoId, applicantId)
Create a trusted face from a file or a live photo or live video id

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **file** | ***os.File*****os.File**|  | 
  **livePhotoId** | **string**|  | 
  **liveVideoId** | **string**|  | 
  **applicantId** | **string**|  | 

### Return type

[**Paths1applicants17BapplicantId7D1facegetresponses200contentapplication1jsonschema**](#/paths/~1applicants~1%7Bapplicant_id%7D~1face/get/responses/200/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateWebhook**
> Paths1webhookspostrequestBodycontentapplication1jsonschema CreateWebhook(ctx, body)
Create a webhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**WebhooksBody**](WebhooksBody.md)|  | 

### Return type

[**Paths1webhookspostrequestBodycontentapplication1jsonschema**](#/paths/~1webhooks/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateWorkflowRun**
> InlineResponse2012 CreateWorkflowRun(ctx, body)
Create a workflow run.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**WorkflowRunsBody**](WorkflowRunsBody.md)|  | 

### Return type

[**InlineResponse2012**](inline_response_201_2.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeleteWebhook**
> DeleteWebhook(ctx, webhookId)
Delete a webhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **webhookId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DestroyApplicant**
> DestroyApplicant(ctx, applicantId)
Delete Applicant

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DestroyTrustedFace**
> DestroyTrustedFace(ctx, applicantId)
Deletes a trusted face.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadCheck**
> DownloadCheck(ctx, checkId)
Download a PDF of the check

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **checkId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadDocument**
> *os.File DownloadDocument(ctx, documentId)
Download a documents raw data

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **documentId** | **string**|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadLivePhoto**
> *os.File DownloadLivePhoto(ctx, livePhotoId)
Download live photo

Live photos are downloaded using this endpoint.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **livePhotoId** | **string**| The live photo’s unique identifier. | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadLiveVideo**
> *os.File DownloadLiveVideo(ctx, liveVideoId)
Download live video

Live videos are downloaded using this endpoint.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **liveVideoId** | **string**| The live video’s unique identifier. | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadLiveVideoFrame**
> *os.File DownloadLiveVideoFrame(ctx, liveVideoId)
Download live video frame

Live video frames are downloaded using this endpoint.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **liveVideoId** | **string**| The live video’s unique identifier. | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DownloadTrustedFace**
> *os.File DownloadTrustedFace(ctx, applicantId)
Downloads an applicant's trusted face.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **EditWebhook**
> Paths1webhookspostrequestBodycontentapplication1jsonschema EditWebhook(ctx, webhookId)
Edit a webhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **webhookId** | **string**|  | 

### Return type

[**Paths1webhookspostrequestBodycontentapplication1jsonschema**](#/paths/~1webhooks/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindAddresses**
> InlineResponse20011 FindAddresses(ctx, postcode)
Search for addresses by postcode

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **postcode** | **string**|  | 

### Return type

[**InlineResponse20011**](inline_response_200_11.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindApplicant**
> Paths1applicantspostrequestBodycontentapplication1jsonschema FindApplicant(ctx, applicantId)
Retrieve Applicant

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[**Paths1applicantspostrequestBodycontentapplication1jsonschema**](#/paths/~1applicants/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindCheck**
> Paths1checkspostrequestBodycontentapplication1jsonschema FindCheck(ctx, checkId)
Retrieve a Check

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **checkId** | **string**|  | 

### Return type

[**Paths1checkspostrequestBodycontentapplication1jsonschema**](#/paths/~1checks/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindDocument**
> Paths1documentspostresponses201contentapplication1jsonschema FindDocument(ctx, documentId)
A single document can be retrieved by calling this endpoint with the document’s unique identifier.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **documentId** | **string**|  | 

### Return type

[**Paths1documentspostresponses201contentapplication1jsonschema**](#/paths/~1documents/post/responses/201/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindLivePhoto**
> Paths1livePhotospostresponses201contentapplication1jsonschema FindLivePhoto(ctx, livePhotoId)
Retrieve live photo

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **livePhotoId** | **string**| The live photo’s unique identifier. | 

### Return type

[**Paths1livePhotospostresponses201contentapplication1jsonschema**](#/paths/~1live_photos/post/responses/201/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindLiveVideo**
> InlineResponse2004 FindLiveVideo(ctx, liveVideoId)
Retrieve live video

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **liveVideoId** | **string**| The live video’s unique identifier. | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindReport**
> InlineResponse2007 FindReport(ctx, reportId)
A single report can be retrieved using this endpoint with the corresponding unique identifier.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **reportId** | **string**|  | 

### Return type

[**InlineResponse2007**](inline_response_200_7.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FindWebhook**
> Paths1webhookspostrequestBodycontentapplication1jsonschema FindWebhook(ctx, webhookId)
Retrieve a Webhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **webhookId** | **string**|  | 

### Return type

[**Paths1webhookspostrequestBodycontentapplication1jsonschema**](#/paths/~1webhooks/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GenerateSdkToken**
> Paths1sdkTokenpostrequestBodycontentapplication1jsonschema GenerateSdkToken(ctx, body)
Generate a SDK token

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**SdkTokenBody**](SdkTokenBody.md)|  | 

### Return type

[**Paths1sdkTokenpostrequestBodycontentapplication1jsonschema**](#/paths/~1sdk_token/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListApplicants**
> InlineResponse200 ListApplicants(ctx, optional)
List Applicants

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DefaultApiListApplicantsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DefaultApiListApplicantsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **optional.Int32**| The page to return. The first page is &#x60;page&#x3D;1&#x60; | [default to 1]
 **perPage** | **optional.Int32**| The number of objects per page. | [default to 20]
 **includeDeleted** | **optional.Bool**| Whether to also include applicants scheduled for deletion. | [default to false]

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListAuthenticationAttempts**
> InlineResponse20014 ListAuthenticationAttempts(ctx, applicantId, optional)
List authentication attempts

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 
 **optional** | ***DefaultApiListAuthenticationAttemptsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DefaultApiListAuthenticationAttemptsOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **after** | **optional.Time**| A timestamp used to get attempts after a certain date and time. | 
 **before** | **optional.Time**| A timestamp used to get attempts before a certain date and time. | 

### Return type

[**InlineResponse20014**](inline_response_200_14.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListChecks**
> InlineResponse2005 ListChecks(ctx, applicantId)
Retrieve Checks

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[**InlineResponse2005**](inline_response_200_5.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListDocuments**
> InlineResponse2001 ListDocuments(ctx, applicantId)
List documents

All documents belonging to an applicant can be listed from this endpoint

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListLivePhotos**
> InlineResponse2002 ListLivePhotos(ctx, applicantId)
List live photos

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**| The id of the applicant the live photos belong to. | 

### Return type

[**InlineResponse2002**](inline_response_200_2.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListLiveVideos**
> InlineResponse2003 ListLiveVideos(ctx, applicantId)
List live videos

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**| The id of the applicant the live videos belong to. | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListReports**
> InlineResponse2006 ListReports(ctx, checkId)
All the reports belonging to a particular check can be listed from this endpoint.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **checkId** | **string**|  | 

### Return type

[**InlineResponse2006**](inline_response_200_6.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListTasks**
> InlineResponse2008 ListTasks(ctx, workflowRunId)
The Tasks of a Workflow can be retrieved by calling this endpoint with the unique identifier of the Workflow Run.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **workflowRunId** | **string**| The unique identifier of the Workflow Run to which the Tasks belong. | 

### Return type

[**InlineResponse2008**](inline_response_200_8.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListWebhooks**
> InlineResponse20010 ListWebhooks(ctx, )
List webhooks

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20010**](inline_response_200_10.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Ping**
> string Ping(ctx, )
Run a health check on the Onfido API

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RestoreApplicant**
> RestoreApplicant(ctx, applicantId)
Restore Applicant

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ResumeCheck**
> ResumeCheck(ctx, checkId)
Resume a Check

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **checkId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ResumeReport**
> ResumeReport(ctx, reportId)
This endpoint is for resuming individual paused reports.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **reportId** | **string**|  | 

### Return type

 (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RetrieveAuditImage**
> *os.File RetrieveAuditImage(ctx, attemptId)
Retrieves the audit image used for the given Authentication attempt.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **attemptId** | **string**|  | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RetrieveTask**
> InlineResponse2009 RetrieveTask(ctx, workflowRunId, taskId)
A single Task can be retrieved by calling this endpoint with the unique identifier of the Task and Workflow Run.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **workflowRunId** | **string**| The unique identifier of the Workflow Run to which the Task belongs. | 
  **taskId** | **string**| The identifier of the Task you want to retrieve. | 

### Return type

[**InlineResponse2009**](inline_response_200_9.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RetrieveTrustedFace**
> InlineResponse20012 RetrieveTrustedFace(ctx, applicantId)
Retrieves an applicant's trusted face.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[**InlineResponse20012**](inline_response_200_12.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RetrieveWorkflowRun**
> Paths1workflowRunspostresponses201contentapplication1jsonschema RetrieveWorkflowRun(ctx, workflowRunId)
A single Workflow Run can be retrieved by calling this endpoint with the unique identifier of the Workflow Run.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **workflowRunId** | **string**| The unique identifier of the Workflow Run. | 

### Return type

[**Paths1workflowRunspostresponses201contentapplication1jsonschema**](#/paths/~1workflow_runs/post/responses/201/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateApplicant**
> Paths1applicantspostrequestBodycontentapplication1jsonschema UpdateApplicant(ctx, applicantId)
Update Applicant

Applicant details can be updated between check creations. - Partial updates - Addresses and ID numbers present will replace existing ones - Same applicant validations to create applicant 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 

### Return type

[**Paths1applicantspostrequestBodycontentapplication1jsonschema**](#/paths/~1applicants/post/requestBody/content/application~1json/schema.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadDocument**
> InlineResponse201 UploadDocument(ctx, applicantId, type_, file, side, issuingCountry, validateImageQuality, location)
Upload a document

Documents are uploaded using this endpoint. Along with the file upload the relevant document type must be specified. Documents must be uploaded as a multipart form. The valid file types are: jpg, png and pdf. The file size must be between 2KB and 3MB. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 
  **type_** | **string**|  | 
  **file** | ***os.File*****os.File**|  | 
  **side** | **string**|  | 
  **issuingCountry** | **string**|  | 
  **validateImageQuality** | **bool**|  | 
  **location** | [**ApplicantsLocation**](.md)|  | 

### Return type

[**InlineResponse201**](inline_response_201.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UploadLivePhoto**
> InlineResponse2011 UploadLivePhoto(ctx, applicantId, file, advancedValidation)
Upload live photo

You can upload live photos to this endpoint. Like document upload, files must be uploaded as a multipart form. Valid file types are jpg, png and pdf. The file size must be between 32KB and 10MB. Live photos are validated at the point of upload to check that they contain exactly one face. This validation can be disabled by setting the advanced_validation argument to false. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **applicantId** | **string**|  | 
  **file** | ***os.File*****os.File**|  | 
  **advancedValidation** | **bool**|  | 

### Return type

[**InlineResponse2011**](inline_response_201_1.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **VerifyAuthenticationToken**
> InlineResponse20013 VerifyAuthenticationToken(ctx, )
Returns a JWKS (JSON Web Key Set) with public keys to verify the JWT token returned in the Authentication result.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20013**](inline_response_200_13.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

