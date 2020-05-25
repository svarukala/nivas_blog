---
title: SharePoint Solutions Manager or The WSP Manager
slug: SharePoint-Solutions-Manager-or-The-WSP-Manager
generate-card: false
date: 2009-04-13
language: en
tags:
    - SharePoint
---


**Tool Description** Here is a nifty tool which can be used to deploy, redeploy, upgrade and retract/delete the solutions in the SharePoint environment. It handles all these jobs using the object model. This tool will be definitely handy for developers for quick deployment while debugging.



**Purpose** The best way to get anything or any component into SharePoint environment is by creating a WSP aka Solution file. Many tools exists to create the WSP like WSPBuilder, STSDEV and Andrew Connell's way of doing it. Having done that the next step would be deploying the same into SharePoint environment. WSPBuilder supports deploying directly though Visual Studio but some times it could get messy. It also limits to the project you set up using WSPBuilder. This tool is built in a generic way which can be used to manage already deployed solutions and also for deploying new solutions. So given a WSP file this tool can help you get that into SharePoint environment.



I agree there is another tool SharePoint Solution Installer on codeplex but I never was happy with that as it didn't serve the purpose many a times for me. Moreover that tools was closed to administrators.



ShareTools Solution Manager does many things which can be done with stsadm command line tool. Below are a salient list of those:

- View existing solutions in our server environment
- Add new solutions
- Upgrade existing solutions either immediately or at a given time
- Redeploy an existing solution if you have a latest WSP of the same solution
- Retract and Delete the existing solution
- Deploy a new solution with all the parameters used in stsadm command line tool
- Execute the administrative timer job definitions i.e stsadm.exe -o execadmsvcjobs with a single click of the button

Currently you can take action on a single item at a time.![](http://i3.codeplex.com/Project/Download/FileDownload.aspx?ProjectName=solutionmanager&DownloadId=64930 "solution-manager-new")



![](http://i3.codeplex.com/Project/Download/FileDownload.aspx?ProjectName=solutionmanager&DownloadId=64931 "solution-manager-existing")



You can download it from: <http://solutionmanager.codeplex.com/>