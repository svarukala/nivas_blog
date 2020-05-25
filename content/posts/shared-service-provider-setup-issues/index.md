---
title: Shared Service Provider Setup Issues
slug: Shared-Service-Provider-Setup-Issues
generate-card: false
date: 2007-12-11
language: en
tags:
    - SharePoint
---


**Provisioning failed: Windows NT user or group domain\\username not found. Check the name again.**



**The search service is currently offline. Visit the Services on Server page in SharePoint Central Administration to verify whether the service is enabled. This might also be because an indexer move is in progress.**



If you are seeing the above errors while setting up Shared Service Provider and or with Search Settingsand looking for a solution you are in the right place. I had similar problems setting up a single server sharepoint 2007 server. I found the below steps from [here](http://forums.microsoft.com/TechNet/ShowPost.aspx?PostID=2417144&SiteID=17). Below I am reproducing the same steps with a minor correction in step# 8.

1. In the Component Services snap-in, expand Computers, expand My Computer, and double-click DCOM Config.
2. Locate application OSearch.
3. Right-click the program name, and then select Properties.
4. On the Security tab, in the Launch and Activation Permissions group box, select Customize, and then click Edit.
5. Add the user Network Services and grant permissions Local Launch and Local Activation.
6. Restart the computer.
7. Go to Central Administration. Under Application management, go to Manage Search Service under Search column. There, under the "Query and Index Servers" group, click on the Search Service(Clickable link).
8. Fill all necessary details.~~Select PREDEFINED option for "Select an account for this component" field and select Network Service in the following list box~~. This page clearly mentions not to use Network Service or any other inbuilt accounts. So give the domain\\username which it says it didnt found in the above error. It works fine.
9. Perform iisreset command.
10. Check if SSP is working now.