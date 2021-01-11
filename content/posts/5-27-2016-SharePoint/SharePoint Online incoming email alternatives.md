---
title: SharePoint Online incoming email alternatives
slug: SharePoint-Online-incoming-email-alternatives
cover: ./cover.jpg
generate-card: false
date: 2016-05-27
language: en
tags:
    - SharePoint
---

  

SharePoint Online incoming email alternatives
=============================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 5/27/2016 8:58:31 PM

* * *

  Incoming email is one of the features that’s not available in SharePoint Online. Customer with on-premises SharePoint deployments have been using incoming email since a long time and hits this feature gap when migrating to SharePoint Online. A quick search online shows that there are a number of third party solutions filling this gap. In this blog I just want to put forth the out of the box options and alternatives to incoming email in SharePoint Online. Here you go:

*   Site Mailbox ( _This is no more an option as SPO deprecated Site Mailbox feature as of July 2017 - Thank you for posting this info in the comments - Maruthachalam Krishnamurthy and Pramod Gupta _)
    *   Site mailbox is available in the ‘Add an app’ page. So, its essentially an app that uses shared exchange mailbox foundation but users can interact with it within the SharePoint UI. Note that you can create only one Site Mailbox per SharePoint site. So, this is a limitation that you have to live with if you decide to go with Site Mailbox. You can create n number of subsites and create n number of site mailboxes if needed. Site mailboxes
    *   Site mailbox name is created automatically. The naming convention is like this: [SMO-SiteName@tenant.onmicrosoft.com](mailto:SMO-SiteName@tenant.onmicrosoft.com). Replace the SiteName with the Site name in which the site mailbox is created. You can control the prefix though. The default prefix used is SMO. You can use the [Set-SiteMailboxProvisioningPolicy](http://technet.microsoft.com/en-us/library/jj218624.aspx) Exchange OnlineWindows PowerShell cmdlet with the –AliasPrefix parameter to create a prefix to use with all new site mailboxes.
*   Office 365 Groups
    *   O365 groups is created at the tenant level (not at the site collection or site level). So a tenant admin must create the O365 group for you. Similar to Site mailbox this is based on the shared mailbox infrastructure. The way you access these groups are either through Outlook web app, Outlook or even OneDrive site (in the left nav).
    *   The email address created can be of your choice unlike Site Mailbox.
    *   Every O365 group created also creates a new Site Collection associated with it. These sites are hidden and are not listed (as of July 2017) in the SharePoint admin center. O365 groups uses this site to provide a shared document workspace, shared calendar, shared OneNote file and of course more.
*   Microsoft Teams (_Thanks to Tom Nellikkan for posting this in comments_)
    *   https://wonderlaura.com/2017/04/11/teams-incoming-email-in-sharepoint-online/
*   Some other options that I am evaluating if viable are:
    *   Office File Web Service - OfficeFile.asmx (Content Organizer)
        *   [https://msdn.microsoft.com/en-us/library/aa981121(v=office.12).aspx](https://msdn.microsoft.com/en-us/library/aa981121(v=office.12).aspx)
*   Azure Logic apps or Microsoft Flow
    *   Either Flow or Logic Apps can be used to create a solution where it can monitor a shared exchange mailbox and trigger an action when there is an attachment to email and copy those files to a SPO site document library. You can use one of the existing templates in Flow.