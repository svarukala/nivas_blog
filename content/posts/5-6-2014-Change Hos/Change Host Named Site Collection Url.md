---
title: Change Host Named Site Collection Url
slug: Change-Host-Named-Site-Collection-Url
cover: ./cover.jpg
generate-card: false
date: 2014-05-06
language: en
tags:
    - SharePoint
---

  

Change Host Named Site Collection Url
=====================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 5/6/2014 3:29:00 PM

* * *

Previously (i.e. until SP2010) zones was applicable only at the Web App level. You can have up to 5 zones and thus five different urls.

With SharePoint 2013 this concept has been extended to the Site Collection level - but only to the [Host Named Site Collections](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCYQFjAA&url=http%3A%2F%2Ftechnet.microsoft.com%2Fen-us%2Flibrary%2Fcc424952(v%3Doffice.15).aspx&ei=4V5pU6biFIrgyQGojIHgCA&usg=AFQjCNFXu2UBDYf5-MWFf7Bu81lPTMbm9A&sig2=48Z9SuIcA5nUfZygr-f9Ow&bvm=bv.66111022,d.aWc) (HNSC). You can have up to 5 different URLs each associated with a zone for a single host named site collection. You can achieve this using the [Set-SPSiteUrl PowerShell cmdlet](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCgQFjAA&url=http%3A%2F%2Ftechnet.microsoft.com%2Fen-us%2Flibrary%2Fjj219633(v%3Doffice.15).aspx&ei=4V9pU-fCF-bgyQH4iYCoAQ&usg=AFQjCNGOkGEwiVq8BXrdJHQcmN_iaSJfUg&sig2=g-hCLUejtNc5py2UY_FLjQ&bvm=bv.66111022,d.aWc).

Before RTM, SharePoint 2013 had the ability to have multiple URL's for the same zone. So you can have any number of URLs not just five. But this feature has been discontinued/deprecated since RTM. Here is a KB article endorsing this: [http://support.microsoft.com/kb/2826457](http://support.microsoft.com/kb/2826457).

There are still some blog posts ([link](http://blog.mastykarz.nl/spsiteurl-sharepoint-2013/), [link](http://blog.christian-heindel.de/2012/07/19/set-spsiteurl-in-sharepoint-2013-an-improvement-for-hosters-of-public-facing-websites/)) which mentions that this is still possible - but its not.

OK. That's enough background I guess. Coming to the title of this post:

Since you cannot have multiple URLs for a single zone. Lets say you have a HNSC that was either built new or restored from an existing one. And now you want to change the URL for this HNSC and for that zone in particular. If the above feature was available you could easily add your required URL using the Set-SPSiteUrl cmdlet. But since the above feature doesn't exist anymore there is an easier way to accomplish this. You can use the [SPSite.Rename](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spsite.rename.aspx) method to change the URL of a HNSC to a new URL. Here is the PowerShell script:

$site = Get-SPSite -Identity [http://contoso.old](http://contoso.old)

$site.Rename("[http://contoso.new](http://contoso.new)")

HTH