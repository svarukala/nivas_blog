---
title: SharePoint Best practices for uploading more than 5000 items to a library/list (aka large lists)
slug: SharePoint-Best-practices-for-uploading-more-than-5000-items-to-a-librarylist-(aka-large-lists)
cover: ./cover.jpg
generate-card: false
date: 2017-05-07
language: en
tags:
    - SharePoint
---

  

SharePoint Best practices for uploading more than 5000 items to a library/list (aka large lists)
=================================================================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 5/7/2017 12:33:01 AM

* * *

**Requirement**: Store thousands of documents in SharePoint Online (or on-premises) document library without facing any threshold (5000 item limit) issues. This post is assuming that you either have a bulk of documents to be uploaded along with the metadata (in a CSV file) or expect the library to grow in thousands. So prepare for that. To being with, you can store up to 30,000,000 documents (as of May 6th, 2017) in a document library by nesting folders (use flat view to get around folders navigation issue – see step 6), or using multiple views with proper filtering on metadata columns. As per [TechNet article](https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.proofpoint.com%2Fv2%2Furl%3Fu%3Dhttps-3A__na01.safelinks.protection.outlook.com_-3Furl-3Dhttps-253A-252F-252Furldefense.proofpoint.com-252Fv2-252Furl-253Fu-253Dhttps-2D3A-5F-5Ftechnet.microsoft.com-5Fen-2D2Dus-5Flibrary-5Fcc262787-2D28v-2D3Doffice.16-2D29.aspx-2526d-253DDwMFAg-2526c-253D-5FhRq4mqlUmqpqlyQ5hkoDXIVh6I6pxfkkNxQuL0p-2DZ0-2526r-253DfR3NG3FQThxTt7kSxn0Cbyc0K4D6v2RSlg4-5FV6UBIR4-2526m-253Dl1IXVzkbKFKElRIbvHESALtIOsX8di9AL0OjDKSdoeQ-2526s-253DqFl61cd8-2Dho3xnGOfrNHQrIiXaWhDq1jh7Q1FVUg-5FiQ-2526e-253D-26data-3D02-257C01-257Csvarukal-2540microsoft.com-257C05a7207d972e45f810f408d48d2938d0-257C72f988bf86f141af91ab2d7cd011db47-257C1-257C0-257C636288655581230026-26sdata-3DhWE8iNZ5zRX2qi1DdWL8tjNP0JFEn0Hekbo6Him8um8-253D-26reserved-3D0%26d%3DDwMFAg%26c%3D_hRq4mqlUmqpqlyQ5hkoDXIVh6I6pxfkkNxQuL0p-Z0%26r%3DfR3NG3FQThxTt7kSxn0Cbyc0K4D6v2RSlg4_V6UBIR4%26m%3D6Vz6WhABmefZ1c4jz0PPf_5gdZkEkI8pcIKFGG7TJS8%26s%3DpwNr1-0jO0v3KcmBchoo3Reb8DQ8jGifNks192ptsTM%26e%3D&data=02%7C01%7Csvarukal%40microsoft.com%7Cd3a4b6c6d9e0447f6c5708d49141b8d1%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C636293158842644218&sdata=c3vyz9XUF%2BkkzukE6Bm0vN7HIJN4tcMsaVeZrP4Gimg%3D&reserved=0)_, This value may vary depending on how documents and folders are organized, and by the type and size of documents stored_. Note, this article is for SP 2013, but this limit is same in SPO too - as noted in the same article. I highly recommend going with multiple document library approach. If documents can be divided into ‘n’ number of categories based on the metadata. Then create ‘n’ number of libraries and upload files to respective libraries. Irrespective of the number of libraries you go with, below are the high level steps that you will need to follow. **Preparation before uploading documents:** It is important that below steps are completed before uploading the documents to the library. This is because once you exceed the 5000 limit, you cannot add indexes, views or columns until and unless the total documents is reduced to <5000.

1.  Finalize the metadata (columns) for the documents. Plan beyond the already identified metadata in your CSV files. This post is based on assumption that you already have the metadata identified and its in a CSV file. Try to think ahead and add additional metadata columns, even if those are empty/placeholder column types.
2.  In SharePoint site, create all the site columns corresponding to the metadata columns identified in Step 1.
3.  Create Content Type. Add all the site columns created in Step 2 to the content type.
4.  Create a single or multiple SP document libraries depending on the approach that’s decided. Associate the Content Type to the Document Library(ies).
5.  Go the library settings, and add indexes for all of the Site Columns, that will be used to filter or sort the data by users. These columns will be used in Step 6 for creating views. Note that you can have max up to 20 indices in a list/library.
6.  Plan and create as many Views as possible for the library. Make sure that the Filter or Sort conditions used for Views are set as Indexed columns. This is to avoid the 5000 item threshold limit. Also, limit the number of items shown in the View using the Item Limit property. If you are using nested folders, then you can leverage the ‘flat view’ property **Show all items without folders** while creating the views.
7.  Another great and useful feature that you can leverage is the Metadata Navigation feature. You must first enable it by navigating to Site Settings – Manage Site Features and activate ‘Metadata Navigation and Filtering’ feature. Once enabled, it will add Key Filters panel to the left navigation whenever a user navigates to this library. It automatically manages indexes too. **Note**: Metadata navigation feature is not supported in Modern library experience. Once this feature is enabled, the library will automatically revert to Classic UI.
8.  You might need additional prep work if you decide to use Search to let users find documents. See the last section in this email.

**Upload documents**: There are multiple approaches to upload large number of files.

1.  Although drag and drop works great, it’s not feasible for a large number of documents.
2.  Use OneDrive for Business (ODB) Next Gen sync client to sync the library to a local machine and then copy all the files to the local machine ODB folder. Then ODB sync client will take care of syncing/uploading those files to the SP library.
3.  Use Content Organizer feature – that will create a drop-off library, upload docs to this library and the documents will be routed to folders automatically. These folders are created automatically for every 5000 items.
4.  Use PowerShell/CSOM to upload the documents, read the metadata from CSV and add metadata to the columns.
5.  Steps 1 to 3, will require additional step to read the CSV and add the metadata to the columns

**How does users consume these documents once uploaded to SharePoint**:

1.  Let users leverage the Views that’s created.
2.  Let users use the Metadata navigation that can be helpful to filter and find data
3.  Let search index the documents and use search center or provide custom page that is powered by search API. If planning to depend on search, you may need additional work:
    1.  Ensure all the crawled properties are mapped to managed properties. If new managed properties are created, then you must re-index the library.
    2.  It’s recommended to setup these mappings before uploading bulk of these documents.