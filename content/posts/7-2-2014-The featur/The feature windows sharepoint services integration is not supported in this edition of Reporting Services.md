---
title: The feature "windows sharepoint services integration" is not supported in this edition of Reporting Services
slug: The-feature-windows-sharepoint-services-integration-is-not-supported-in-this-edition-of-Reporting-Services
cover: ./cover.jpg
generate-card: false
date: 2014-07-02
language: en
tags:
    - SharePoint
---

  

The feature: "windows sharepoint services integration" is not supported in this edition of Reporting Services
=============================================================================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 7/2/2014 9:51:00 PM

* * *

Setup: SharePoint 2013, SQL 2012 Reporting Services

After setting up and configuring SSRS in SharePoint 2013; Once you navigate to Reporting Services Service Application and click on the Settings link you might see below error:

_The feature: "Windows SharePoint Services integration" is not supported in this edition of Reporting Services. ---> Microsoft.ReportingServices.Diagnostics.Utilities.OperationNotSupportedException: The feature: "Windows SharePoint Services integration" is not supported in this edition of Reporting Services._

_If this happens make sure you have the right SQL 2012 edition for the Reporting Services and Add-ins on the SharePoint server. For this navigate to Reporting Services log files location: C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\WebServices\\LogFiles\\_

_Check for the following string in the log files:_

_"INFO: Reporting Services starting SKU: Express"_

_If you are able to find this line then it signifies that you have the wrong edition (i.e. SQL Express) on the server. SQL Express edition does not support Reporting Services integration and PowerPivot integration with SharePoint 2013._

_To fix the issue:_

_Uninstall the existing SQL 2012 bits from the server. You can do that via control panel - add remove programs. Select SQL Server and then uninstall it._

_Install SQL 2012 Enterprise/Standard now and follow the SSRS integration steps (running the PowerShell cmdlts and creating the Service Application)._