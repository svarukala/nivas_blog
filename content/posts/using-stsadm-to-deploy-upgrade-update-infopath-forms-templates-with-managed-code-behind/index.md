---
title: Using stsadm to deploy, upgrade, update InfoPath Forms Templates with Managed code behind
slug: Using-stsadm-to-deploy-upgrade-update-InfoPath-Forms-Templates-with-Managed-code-behind
generate-card: false
date: 2008-03-18
language: en
tags:
    - SharePoint
---


This post talks about using stsadm and batch scripts to deploy InfoPath form with code behind which usually is called as InfoPath forms with managed code or the InfoPath forms managed templates.



The problem: If it's just a couple of InfoPath forms with simple code behind we can deploy the form using the InfoPath Forms Client application itself. As laid out neatly [here](http://geekswithblogs.net/jgmeyer/archive/2006/06/26/83087.aspx). To summarize, it involves the following steps:

1. Publish to a network location
2. Verify its browser compatible while uploading to InfoPath managed templates in Central Admin.
3. Upload to InfoPath managed templates found in Central Administration
4. Wait for the status to upload complete.
5. SharePoint admin should activate it for a particular site where the developer want to use it.
6. Wait for the activation to complete.

Imagine doing all this every time you make change to the code behind of the form or change the user interface. The worst part is waiting for the status to get completed as SharePoint does those kind of jobs based on the timer job service. To run these tasks forcefully the stsadm's execsrvcjobs command operation comes handy.



Below is the script to install a new infopath form template and activate for a particular site collection: `::Publish the form to a location lets say it is published at C:\InfoPathForms\Publish\sample.xsn cd C:\Program Files\Common Files\Microsoft Shared\web server extensions\12\BIN ::uncomment the below three lines if you want to uninstall and re-install the infopath form template ::stsadm.exe -o DeActivateFormTemplate -url http://demosite -filename ::C:\InfoPathForms\Publish\sample.xsn ::stsadm.exe -o RemoveFormTemplate C:\InfoPathForms\Publish\sample.xsn ::stsadm.exe -o execadmsvcjobs stsadm.exe -o verifyformtemplate -filename C:\InfoPathForms\Publish\sample.xsn stsadm.exe -o UploadFormTemplate -filename C:\InfoPathForms\Publish\sample.xsn stsadm.exe -o execadmsvcjobs stsadm.exe -o ActivateFormTemplate -url http://demosite -filename C:\InfoPathForms\Publish\sample.xsn`



Below is the script to upgrade or update the existing infopath form template for a site collection: `cd C:\Program Files\Common Files\Microsoft Shared\web server extensions\12\BIN stsadm.exe -o DeActivateFormTemplate -url http://demosite -filename C:\InfoPathForms\Publish\sample.xsn stsadm.exe -o verifyformtemplate -filename C:\InfoPathForms\Publish\sample.xsn stsadm.exe -o UpgradeFormTemplate -filename C:\InfoPathForms\Publish\sample.xsn stsadm.exe -o execadmsvcjobs stsadm.exe -o ActivateFormTemplate -url http://demosite -filename C:\InfoPathForms\Publish\sample.xsn`



**UPDATE:** If you just changed the code behind of the form and want to deploy it there is even better and quicker way to do it. When the form is deployed using the above stsadm scripts what it does is, it depoys the form as a content type feature and the folder name is some what like FT- which is found under C:\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\12\\TEMPLATE\\FEATURES\\ Under this you will find folder liek solution.xsn.1.0.0.210.1.0.0.210. Find the latest one and drop the updated DLL's in there and then reset the IIS or recycle the app pool for the site collection. That is it!!



PS: I got the initial help of preparing the batch script from [here](http://www.j-nunn.com/Blog/tabid/54/EntryID/5/Default.aspx).