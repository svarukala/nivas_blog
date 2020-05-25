---
title: Excel Services Charts, Spreadsheets & Worksheets in SharePoint - Issues
slug: Excel-Services-Charts-Spreadsheets-and-Worksheets-in-SharePoint-Issues
generate-card: false
date: 2007-12-21
language: en
tags:
    - SharePoint
---


**You do not have permissions to open this file on excel services.**



**Make sure that the file is in an Excel Services trusted location and that you have access to the file.**



If you are troubled with the above errors in SharePoint while publishing and viewing the excel services forms in browser then I believe you are in the right place. I am not sure if my guidelines will solve your problem but at least it solved my issues.

1. In central admin site, in operations page, under services in the server farm enable the Excel Services.
2. Open up the Shared Services Admin site. Under "Excel Services settings" section, open the 'Edit Excel Services settings '. Set the File Access Method to Process Account. In the same page under the 'External Data' section assign the appropriate user.
3. Back to SSP Admin site. Open the "Excel Services Trusted File Locations". Give the URL Address of the location where you publish your excel workbooks. Potentially this will be the document library of type excel services. **If it's a document library make sure not to put the complete URL i.e DON'T PUT something like http&#x3A;//server:5050/doclibraryname/Forms/AllItems.aspx, instead put it like http&#x3A;//server:5050/doclibraryname. In my case this is the main reason which showed the above error. If I use full URL I get those errors and no site mentions this after spending hours searching on google.**
4. In the same page under the 'External Data' select the Trusted data connection libraries and embedded or just the Trusted data connection libraries.