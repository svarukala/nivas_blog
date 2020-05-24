---
title: Office 365 CDN - Preview vs General Availability
slug: Office-365-CDN-Preview-vs-General-Availability
cover: ./cover.png
generate-card: false
date: 2017-05-24
language: en
tags:
    - SharePoint
---

  

Office 365 CDN - Preview vs General Availability
================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 5/24/2017 4:06:00 PM

* * *

Office 365 CDN which provides a way to configure a SharePoint Document Library as a CDN is now Generally Available. The preview was released few months back and if customers already using it while in Preview must know that the PowerShell commands and the way this works has changed a lot in General Availability. With GA, we now have a public CDN and a private CDN. Note that Private CDN is in Preview. The main point to note is that the CDN URL generator /\_vti\_bin/publiccdn.ashx is not working anymore. This essentially means do not use it, update your URLs with the GA api. Preview vs General Availability

### Preview

### General Availability

Link

https://dev.office.com/blogs/office-365-public-cdn-developer-preview-release

https://dev.office.com/blogs/general-availability-of-office-365-cdn

Enable CDN (Tenant level setting)

Set-SPOTenant -PublicCdnEnabled $true  

#**NOTE**: Public CDN is GA. Private CDN is in preview. Set-SPOTenantCdnEnabled -CdnType Public   #-NoDefaultOrigins Set-SPOTenantCdnEnabled -CdnType Private #-NoDefaultOrigins #Alternatively enable both using below cmdlet #Set-SPOTenantCdnEnabled -CdnType Both

Verify CDN Enabled
```
Get-SPOTenant | FL \*cdn\*  

Get-SPOTenantCdnEnabled -CdnType Public Get-SPOTenantCdnEnabled -CdnType Private
```

Get CDN Policies
```
Get-SPOTenant | Select PublicCdnAllowedFileTypes  

Get-SPOTenantCdnPolicies -CdnType Private Get-SPOTenantCdnPolicies -CdnType Public
```

Set CDN Policy
```
Set-SPOTenant -PublicCdnAllowedFileTypes "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,TXT"  

Set-SPOTenantCdnPolicy -PolicyType {IncludeFileExtensions | ExcludeRestrictedSiteClassifications | ExcludeIfNoScriptDisabled} -PolicyValue [string] -CdnType {Public | Private}
```

New CDN Origin
```
New-SPOPublicCdnOrigin -Url "https://contoso.sharepoint.com/siteassets/folder1"  

Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl sites/dev/cdnlib Add-SPOTenantCdnOrigin -CdnType Private -OriginUrl sites/pub/cdnlib Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl \*/imageassets Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl \*/photos
```

Get CDN Origins
```
Get-SPOPublicCdnOrigins  

Get-SPOTenantCdnOrigins -CdnType Public Get-SPOTenantCdnOrigins -CdnType Private
```

Remove CDN Origins
```
Remove-SPOPublicCdnOrigin -Identity 193700617159…  

Remove-SPOTenantCdnOrigin -CdnType Public -OriginUrl sites/dev/cdnlib Remove-SPOTenantCdnOrigin -CdnType Private -OriginUrl sites/pub/cdnlib
```

CDN Url Structure

https://publiccdn.sharepointonline.com/[tenant host name1130bbbb93becf13dd9ec288398ef3f53a8dd131d7f1116f9d3f0b89a5277b45/[ID of the public CDN origin]/[sub-path under the origin]   E.g: _https://publiccdn.sharepointonline.com/_ _contoso.sharepoint.com_ _/159..e352d/jigsaw.jpg_  

https://publiccdn.sharepointonline.com/[tenant host name]/sites/site/library E.g:_https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/photos/jigsaw.jpg_ _“https://privatecdn.sharepointonline.com/contoso.sharepoint.com/sites/pub/CDNLib/3.png?\_eat\_=1495567990\_1130bbbb93becf13dd9ec288398ef3f53a8dd131d7f1116f9d3f0b89a5277b45_ _&\_oat\_=1495567990\_de85e8d775578ba993690038577140247188eb5a69c7855ffffb89d5f8525519”_  

Generate CDN Url

https://contoso.sharepoint.com/\_vti\_bin/publiccdn.ashx/ url?itemurl=https://contoso.sharepoint.com/ sites/Dev/SiteAssets/Photos/jigsaw.jpg NOTE: This CDN Url generator is not working anymore since the GA. I am assuming this is to discourage using the Preview api. I will update this as I learn more about it. See Vesa's note [here](https://techcommunity.microsoft.com/t5/SharePoint-Developer/Office-365-CDN-Not-working-File-not-found/td-p/54769).

https://contoso.sharepoint.com/\_vti\_bin/publiccdn.ashx/url?itemurl=https:// contoso.sharepoint.com/sites/Dev/SiteAssets/Photos/jigsaw.jpg  

CDN URL Validation in Fiddler

Add header “Referer: https://contoso.sharepoint.com” to the GET request

Auto-Rewrite of URls

Not Applicable

Only in GA
```
Connect-SPOService [https://contoso-admin.sharepoint.com](https://contoso-admin.sharepoint.com/) ###GENERAL AVAILABILITY API###### Get-SPOTenantCdnEnabled \-CdnType  Public Get-SPOTenantCdnEnabled \-CdnType  Private Set-SPOTenantCdnEnabled \-CdnType  Public #-NoDefaultOrigins Set-SPOTenantCdnEnabled \-CdnType  Private  #-NoDefaultOrigins #Set-SPOTenantCdnEnabled -CdnType Both   Get-SPOTenantCdnPolicies \-CdnType  Public Get-SPOTenantCdnPolicies \-CdnType  Private Set-SPOTenantCdnPolicy \-PolicyType {IncludeFileExtensions  |  ExcludeRestrictedSiteClassifications  |  ExcludeIfNoScriptDisabled} \-PolicyValue  [string]  \-CdnType     {Public  |  Private}  Add-SPOTenantCdnOrigin \-CdnType  Public  \-OriginUrl  sites/dev/cdnrepo Add-SPOTenantCdnOrigin \-CdnType  Private  \-OriginUrl  sites/pub/cdnlib Add-SPOTenantCdnOrigin \-CdnType  Public  \-OriginUrl  \*/imageassets Add-SPOTenantCdnOrigin \-CdnType  Public  \-OriginUrl  \*/photos  Get-SPOTenantCdnOrigins \-CdnType  Public Get-SPOTenantCdnOrigins \-CdnType  Private  Remove-SPOTenantCdnOrigin \-CdnType  Public  \-OriginUrl  sites/dev/cdnlib Remove-SPOTenantCdnOrigin \-CdnType  Private  \-OriginUrl  sites/pub/cdnlib Set-SPOTenantCdnEnabled \-CdnType  Both  \-Enable  $false #GA SAMPLES URL FORMAT: [https://publiccdn.sharepointonline.com/[tenant](https://publiccdn.sharepointonline.com/%3ctenant) host  name]/sites/site/library [https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/cdnlib/3.png](https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/cdnlib/3.png) [https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/cdnlib/SharePointCapabilities.jpg](https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/cdnlib/SharePointCapabilities.jpg) [https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/ImageAssets/ProdMgmt.png](https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev/ImageAssets/ProdMgmt.png) [https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev1/photos/jigsaw.jpg](https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/dev1/photos/jigsaw.jpg) [https://privatecdn.sharepointonline.com/contoso.sharepoint.com/sites/pub/CDNLib/3.png?\_eat\_=1495567990\_1130bbbb93becf13dd9ec288398ef3f53a8dd131d7f1116f9d3f0b89a5277b45&\_oat\_=1495567990\_de85e8d775578ba993690038577140247188eb5a69c7855ffffb89d5f8525519](https://privatecdn.sharepointonline.com/contoso.sharepoint.com/sites/pub/CDNLib/3.png?_eat_=1495567990_1130bbbb93becf13dd9ec288398ef3f53a8dd131d7f1116f9d3f0b89a5277b45&_oat_=1495567990_de85e8d775578ba993690038577140247188eb5a69c7855ffffb89d5f8525519) [https://contoso.sharepoint.com/sites/pub/CDNLib/3.png](https://contoso.sharepoint.com/sites/pub/CDNLib/3.png) ###PREVIEW API######## Get-SPOTenant |  FL  \*cdn\* Set-SPOTenant \-PublicCdnEnabled  $true Get-SPOTenant |  Select  PublicCdnAllowedFileTypes Set-SPOTenant \-PublicCdnAllowedFileTypes  "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,TXT" New-SPOPublicCdnOrigin \-Url  "[https://contoso.sharepoint.com/siteassets/folder1](https://contoso.sharepoint.com/siteassets/folder1)" Get-SPOPublicCdnOrigins Remove-SPOPublicCdnOrigin \-Identity  1937006161eeae8fe7159… #PREVIEW SAMPLES URL FORMAT: [https://publiccdn.sharepointonline.com/[tenant](https://publiccdn.sharepointonline.com/%3ctenant) host  name]/[ID  of  the  public  CDN  origin]/[sub-path  under  the  origin] [https://publiccdn.sharepointonline.com/contoso.sharepoint.com/159000625d30dd0f368ee9b30b58438a863871fc93f2d0256cb1169ad6cee080807e352d/jigsaw.jpg](https://publiccdn.sharepointonline.com/contoso.sharepoint.com/159000625d30dd0f368ee9b30b58438a863871fc93f2d0256cb1169ad6cee080807e352d/jigsaw.jpg) [https://contoso.sharepoint.com/sites/Dev/SiteAssets/adal-lib/jigsaw.jpg](https://contoso.sharepoint.com/sites/Dev/SiteAssets/adal-lib/jigsaw.jpg) [https://contoso.sharepoint.com/\_vti\_bin/publiccdn.ashx/url?itemurl=https://contoso.sharepoint.com/sites/Dev/SiteAssets/adal-lib/jigsaw.jpg](https://contoso.sharepoint.com/_vti_bin/publiccdn.ashx/url?itemurl=https://contoso.sharepoint.com/sites/Dev/SiteAssets/adal-lib/jigsaw.jpg)
```

How does image renditions work in combination with the Office 365 CDN:
----------------------------------------------------------------------

SharePoint Online and 2013/2016, it supports image renditions. Image renditions are configured using the Site Settings ] Look & Feel ] Image Renditions page. Example entry: RenditionID: 8, Width: 200, Height: 400 Image renditions are used by appending the renditionid to the image url. For example: https://contoso.sharepoint.com/sites/pub/cdnlib/jigsaw.png?RenditionID=8 This same approach is not supported with the images in a CDN enabled library. That means if you append RenditionID to CDN url (example: https://publiccdn.sharepointonline.com/mod362200.sharepoint.com/sites/pub/photos/jigsaw.jpg?RenditionID=8), its not honored. Image Renditions for CDN images can be achieved much more easily by just appending the width and height to the CDN Url. Example: https://publiccdn.sharepointonline.com/contoso.sharepoint.com/sites/pub/photos/jigsaw.jpg?height=100&width=100&cropMode=fit

*   Image rendition support for images from the CDN can be enabled with height and width query parameters in the URL
    *   Note. both height and width parameters are required for the renditions to work
    *   You can also control the cropMode for the images with cropMode query parameter with following options: fit, fill, top and bottom (fit is default value).
*   You can use renditions with query parameters for the image URL