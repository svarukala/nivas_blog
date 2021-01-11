---
title: August 2014 CU/Security Updates/Public Updates for SharePoint 2010/2013
slug: August-2014-CUSecurity-UpdatesPublic-Updates-for-SharePoint-20102013
cover: ./cover.jpg
generate-card: false
date: 2014-08-14
language: en
tags:
    - SharePoint
---

  

August 2014 CU/Security Updates/Public Updates for SharePoint 2010/2013
=======================================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 8/14/2014 10:00:00 PM

* * *

This week (8/12/14) there were a bunch of updates (Security updates, Public updates and Cumulative Updates) released for SharePoint 2010 and SharePoint 2013. Below are some highlights, things to note and links to KB/Download the updates.

Security Updates  
SharePoint 2010:  
         No security updates for SP 2010

SharePoint 2013:

MS14-050 Security Update

KB Article:  
[http://support.microsoft.com/kb/2880994](http://support.microsoft.com/kb/2880994)  
Download:  
[http://www.microsoft.com/en-us/download/details.aspx?id=43902](http://www.microsoft.com/en-us/download/details.aspx?id=43902)  
Security Bulletin Additional Info:  
[https://technet.microsoft.com/library/security/MS14-050](https://technet.microsoft.com/library/security/MS14-050)  
Severity Rating: **Important**  
Restart Requirement:  
Depending on the services and components being used on your servers and if they are affected by this update you will be prompted to restart the server.  
PS Config:  
Config wizard needs to be run once the updates are installed.

Non-Security Updates/Public Updates  
SharePoint Server 2010:  
        • [http://support.microsoft.com/kb/2880518](http://support.microsoft.com/kb/2880518)           
        • [http://support.microsoft.com/kb/2880542](http://support.microsoft.com/kb/2880542)

  
SharePoint Server 2013:  
        • [http://support.microsoft.com/kb/2881034](http://support.microsoft.com/kb/2881034)  
        • [http://support.microsoft.com/kb/2880998](http://support.microsoft.com/kb/2880998)  
        • [http://support.microsoft.com/kb/2760319](http://support.microsoft.com/kb/2760319)

  
OWA 2013:  
        • [http://support.microsoft.com/kb/2883057](http://support.microsoft.com/kb/2883057)

August 2014 Cumulative Update

SharePoint 2010:  
[http://support.microsoft.com/kb/2987238](http://support.microsoft.com/kb/2987238)  
Pre-requisite:  SP2010 SP2

*   The KB articles for August CU are available at the following locations:
    *   KB [2889825 ](http://support.microsoft.com/kb/2889825)\- SharePoint Foundation 2010
    *   KB [2889831](http://support.microsoft.com/kb/2889831) - SharePoint Server 2010
    *   KB [2883011](http://support.microsoft.com/kb/2883011) - WAC and Word Server for SharePoint 2010
    *   _Be aware that no project server related fixes were  
        released in this CU_
*   The Packages for August 2014 CU are available through the following links:
    *   Download SharePoint Foundation 2010 August 2014 CU: [2889825](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2889825&kbln=en-us)
    *   Download SharePoint Server 2010 August 2014 CU: [2889831](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2889831&kbln=en-us)
    *   Download WAC and Word Server for SharePoint 2010 August 2014 CU: [2883011](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883011&kbln=de)

SharePoint 2013:  
[http://support.microsoft.com/kb/2989078](http://support.microsoft.com/kb/2989078)  
Pre-requisite:  SP2013 SP1 or March 2013 PU for SharePoint 2013

*   The KB articles for August CU are available at the following locations:
    *   KB [2883081](http://support.microsoft.com/kb/2883081) - SharePoint Foundation 2013 August 2014 CU
    *   KB [2883086](http://support.microsoft.com/kb/2883086), KB [2883085](http://support.microsoft.com/kb/2883085), KB [2883078](http://support.microsoft.com/kb/2883078), KB [2880559](http://support.microsoft.com/kb/2880559), KB [2760213](http://support.microsoft.com/kb/2760213) - SharePoint Server 2013 August 2014 CU
    *   KB [2883083](http://support.microsoft.com/kb/2883083) - SharePoint Server 2013 with Project Server August 2014 CU
    *   KB [2883093](http://support.microsoft.com/kb/2883093) - Office Web Apps Server 2013 August 2014 CU (KB delayed)
*   The Packages for August 2014 CU are available through the following links:
    *   Download SharePoint Foundation 2013 August 2014 CU: [2883081](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883081)
    *   Download SharePoint Server 2013 August 2014 CU: [2883086](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883086), [2883085](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883085), [2883078](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883078), [2880559](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2880559), [2760213](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2760213)
    *   Download Project Server 2013 August 2014 CU: [2883083](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883083)
    *   Download Office Web Apps Server 2013 August 2014 CU: [2883093](http://support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2883093)

Below notes applies to both SP2010 and 2013 unless mentioned explicitly:

*   Note that there is no “uber” or “server” package released for August 2014 CU. This means that if you are on SP2013 SP1 and want to get to the latest build, you cannot skip July 2014 CU and install August 2014 CU. You have to install July 2014 CU and then install Aug 2014 CU packages. If it was a “uber” package then that would not be a problem – you could have deployed just Aug 2014 CU to be on latest build. Due to some technical issues late in the release cycle the decisions was made to release individual package instead of a “uber” package. Product Group aiming to release “uber” package for next month CU.
*   I can confirm that for SP 2013: The above security updates and the public updates are part of this CU. This means you can install Aug CU and that ensure you have all the updates.
*   For SP 2013: Please follow this link to read about best practices when patching a farm with Search components and Search topologies deployed in high availability mode.([link](http://blogs.technet.com/b/tothesharepoint/archive/2013/03/13/how-to-install-update-packages-on-a-sharepoint-farm-where-search-component-and-high-availability-search-topologies-are-enabled.aspx))
*   Config wizard needs to be run once the updates are installed.