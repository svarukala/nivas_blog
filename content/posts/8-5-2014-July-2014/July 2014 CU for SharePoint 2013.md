---
title: July 2014 CU for SharePoint 2013
slug: July-2014-CU-for-SharePoint-2013
cover: ./cover.jpg
generate-card: false
date: 2014-08-05
language: en
tags:
    - SharePoint
---

  

July 2014 CU for SharePoint 2013
================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 8/5/2014 10:58:16 PM

* * *

I intended to post this in July 2014 but it just got pushed and pushed. I realize we are getting closer to Aug 2014 CU so thought I would post this before that actually happens.

Note some important changes in the release cycle and packaging from July 2014:

*   Release cycle
    *   The standard bi-monthly CU release cycle is being changed to monthly cycle. Productgroup is now going to **release CUs every month rather every other month**.
*   Packaging update
    *   Previously, SharePoint 2013 Cumulative Updates included both the executable and the .CAB file in the same self-extracting executable download. Due to the file size, the SharePoint Server 2013 package has been divided into two separate downloads in December 2013. One package contains the executable file (identified as ubersrv2013kb2850024fullfilex64glb), while the other contains the .CAB file (identified as ubersrv\_1). **Both are necessary and must be extracted to the same folder to successfully install the update.** Both are available via the same Hotfix Download Available link in the KB article. (Reference - [http://blogs.technet.com/b/office\_sustained\_engineering/archive/2013/12/20/change-sharepoint-2013-rollup-update-for-the-december-2013-cumulative-update-packaging.aspx](http://blogs.technet.com/b/office_sustained_engineering/archive/2013/12/20/change-sharepoint-2013-rollup-update-for-the-december-2013-cumulative-update-packaging.aspx))
*   How to install updates in farm with Search components

*   Please follow this link to read about best practices when patching a farm with Search components and Search topologies deployed in high availability mode. [http://blogs.technet.com/b/tothesharepoint/archive/2013/03/13/how-to-install-update-packages-on-a-sharepoint-farm-where-search-component-and-high-availability-search-topologies-are-enabled.aspx](http://blogs.technet.com/b/tothesharepoint/archive/2013/03/13/how-to-install-update-packages-on-a-sharepoint-farm-where-search-component-and-high-availability-search-topologies-are-enabled.aspx)

Some highlights in this CU related to Search:

*   This CU contains updates to improve the stability of Search components in large farms.
*   It brings back the capability to use custom (3rd party) iFilters replacing OOTB format handlers.
*   Improvements to Query Builder feature.
*   More details and the list of fixes can be noted in the KB articles mentioned below.

Build number: **15.0.4631.1001**

Download Links

*   SharePoint Foundation 2013 July 2014 CU             - [KB2882999](http://support.microsoft.com/default.aspx?scid=kb;EN-US;2882999) | [Download](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2882999)
*   SharePoint Server 2013 July 2014 CU                     - [KB2882989](http://support.microsoft.com/default.aspx?scid=kb;EN-US;2882989) | [Download](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2882989)
*   Project Server 2013 July 2014 CU                            - [KB2882990](http://support.microsoft.com/default.aspx?scid=kb;EN-US;2882990) | [Download](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2882990)
*   Office Web Apps Server 2013 July 2014 CU            - [KB2883003](http://support.microsoft.com/default.aspx?scid=kb;EN-US;2883003) | [Download](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883003)