---
title: Site Collection Administrators - SharePoint Online vs On-Premises
slug: Site-Collection-Administrators-SharePoint-Online-vs-On-Premises
cover: ./cover.png
generate-card: false
date: 2016-05-18
language: en
tags:
    - SharePoint
---

  

Site Collection Administrators - SharePoint Online vs On-Premises
=================================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 5/18/2016 3:04:04 AM

* * *

**SharePoint Online**
---------------------

**                Primary Site collection Admin**                                 
SPSite.Owner returns the Primary Site Collection Administrator. This is a single user property. Below is sample CSOM code:
```
$owner = $site.Owner

$Context.Load($owner)

$Context.ExecuteQuery()

Write-Host $owner.LoginName
```
                **Site collection Admins**

In SPO, we are allowed to add multiple users as Site Collection Administrators. This can be done at SPO Admin Center UI or at the root site collection Site Settings > Site collection administrators page. You can even add groups as one of the Site collection administrators. There is no SecondaryContact property in SPO for the SPSite object. To validate that you can list out the properties on a SPSite object using below powershell:

```
_foreach ($property in $site.PSObject.Properties) { $property.Name  }_
```

To get a list of all site collection admins, we must use the IsSiteAdmin property per SPUser object. Below is PowerShell way of doing it:

```
                                                _Get-SPOUser -Site $site.Url | FT LoginName, IsSiteAdmin -AutoSize_    
```

 We can get the same result programmatically using CSOM. Below is sample line of code.

```
$users = $web.SiteUsers

$Context.Load($users)

$Context.ExecuteQuery()

$users.Count

$users | %{if($\_.IsSiteAdmin \-eq $True) {Write-Host $\_.LoginName}}
```

**SharePoint On-Premises**
--------------------------

                **Primary Site collection admin** SPSite.Owner gets the primary admin.                 **Secondary Site collection admin**                                 SPSite.SecondaryContact gets the secondary admin.

You can also use the [SPWeb.SiteAdministrators](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spweb.siteadministrators.aspx) property to get all of the administrators for a given SPWeb. Use the RootWeb to get the admins for the site collection.