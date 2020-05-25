---
title: Office SharePoint Server Publishing Infrastructure - Access Denied
slug: Office-SharePoint-Server-Publishing-Infrastructure-Access-Denied
generate-card: false
date: 2007-12-28
language: en
tags:
    - SharePoint
---


**Failed to provision the scheduling job definitions. Page scheduling will not succeed.** **office sharepoint server publishing infrastructure - Access Denied**



If you see the above errors while Activating the Office SharePoint Server Publishing Infrastructure either in the application event log or the web page respectively, then the solution is to elevate the permissions for the application pool corresponding to that web application. As a short cut solution, just change the App Pool for the web application to point to the Central Admin's App Pool which has enough rights/permissions. After IISRESET, Acticate the Publishing Infrastructure feature and then revert back the web application app pool to its original pool. This solution is from this [blog post](http://blog.thekid.me.uk/archive/2007/02/05/activating-office-sharepoint-server-publishing-infrastructure-access-denied.aspx).