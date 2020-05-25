---
title: First Step Towards Migration of Sharepoint 2003 to 2007
slug: First-Step-Towards-Migration-of-Sharepoint-2003-to-2007
generate-card: false
date: 2007-10-15
language: en
tags:
    - SharePoint
---


**Install and run the pre-upgrade scan tool**([Link](http://technet2.microsoft.com/Office/en-us/library/7db0484f-a19e-4398-a40a-21d79d3ab0f41033.mspx?mfr=true))

1. Download and install the pre-upgrade scan tool from the Microsoft Download center (http&#x3A;//go.microsoft.com/fwlink/?LinkId=92383). You must be a member of the Administrators group on the local computer to run this tool.
2. On the command line, change to the folder that contains the two files, and then run the following command to scan all servers in your server farm:

_prescan.exe /c preupgradescanconfig.xml /all_

> You can use the pre-upgrade scan tool to scan all Web sites in your environment (by using the /all parameter) or to scan a specific URL (by using the /v URL parameter). If you do not supply a scoping parameter, all Web sites will be scanned.

> If you have already installed the new version but have not yet run the SharePoint Products and Technologies Configuration wizard, you can run the pre-upgrade scan tool from the following folder: %PROGRAMFILES% \\Common Files\\Microsoft Shared\\web server extensions\\12\\BIN. Running the scan can take several minutes or a few hours, depending on the amount of content in your environment.

> After the scan has completed, a summary report is displayed in the command-line window.

If there were any errors or if any upgrade issues were found for your sites, you can review the full report to see the details. The report is named PreupgradeReport_uniqueID_Log.txt (where uniqueID is a number string) and it is located in the temp directory on the computer of the user who ran the tool (for example, %SYSTEMDRIVE%:\\Documents and Settings\\User1\\Local Settings\\Temp).