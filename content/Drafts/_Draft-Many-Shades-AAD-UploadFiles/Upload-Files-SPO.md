---
title: Upload Files to SPO using the various shades of Azure AD Application
slug: Upload-Files-to-SPO-using-the-various-shades-of-Azure-AD-Application
cover: ./cover.jpg
generate-card: false
date: 2020-07-11
language: en
tags:
    - SharePoint
    - AzureAD
    - MicrosoftGraph
    - SharePoint Online
---

Azure Active Directory (AD) Applications can be used in various ways. In this post I am using the scenario: uploading files (of all sizes supported) to SharePoint Online. I will register "one" Azure AD Application and use it in various combinations to meet this scenario. I will provide sample project repository for each. Here is the list:
1. Use Microsoft Graph to upload files while in user context (ASP.NET)
2. Use CSOM to upload files while in user context (ASP.NET)
3. Use SPO registered app (ACS App) to upload files as app-only (ASP.NET)
    1. PowerShell Script version of this same application (PS Script)
4. Use SPO registered app (ACS App) as PHA to upload files in user context (PHA)
5. Use Microsoft Graph to upload files using .NET Core (TBD)



