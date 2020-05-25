---
title: InfoPath Managed Form Templates - upload status stuck or remains forever in installing or deleting state
slug: InfoPath-Managed-Form-Templates-upload-status-stuck-or-remains-forever-in-installing-or-deleting-state
generate-card: false
date: 2008-06-09
language: en
tags:
    - SharePoint
---


The standard approach to upload any managed form template is to go to central admin and select 'Manage form templates' and upload the form template. The process isn't complete, the 'status' column should show as 'Ready', only then we can activate it to a site collection. Once we upload the status shows as 'Installing' and once the SharePoint timer job kicks in it completes the installation behind the scenes and the status is changed to 'Ready'. The same happens with 'Deleting' which completes only when the timer job completes it.



This whole process is long and gruesome if we have to repeat for many forms so I [posted](http://sharenotes.wordpress.com/2008/03/18/using-stsadm-to-deploy-upgrade-update-infopath-forms-templates-with-managed-code-behind/) some time back on how to use stsadm.exe script to upload/delete/update the managed form templates. That works great.



But it didn't work for few days back, once the upload is done, the status remained as 'Installing' forever . I ran the 'stsadm.exe -o execadmsvcjobs' command which forces the timer jobs to complete. Even that didn't help. Just to get rid of the form, I opted to remove the template which changed the status column to 'Deleting' which remained like that forever.



I then started looking out for the reasons behind this weird behavior, and I see that either there should be a problem with the form template itself or the server farm. I ruled out the first reason because, I was not able to complete the upload process for none of the forms.



So, the problem is with the server farm, in which we have a single application server, a single front end web server and a database server. For the upload process to complete, the form template has to be propagated properly to all the servers in the farm. For this propagation, there are 2 important services which should be ON and working, they are: SPTimerV3 and SPAdmin Run the following command to make sure those services are up and running on the servers in the farm:

- net start SPTimerV3
- net start SPAdmin

I checked the both on App and Front end servers and both those services were up and running. I was taken aback because this leads me to no where but back to the problem. After some time I ran those commands on the Database server too and I found that the SPAdmin service was not started on it. Once it is started all my form templates worked like a magic.



So just make sure the above services are up and running on not just the application and front end web servers but also on the database servers. Here is a good [post](http://blogs.msdn.com/infopath/archive/2006/10/23/behind-the-scenes-of-administrator-approved-form-templates.aspx) which talks about the same.



UPDATE: I completely missed writing about how to undo the stalled status after uploading the form. Please follow the below instructions as per the post I mentioned above:



From Central Administration, go to the Operations page, under the Global configuration group, click on Timer Job Status. On that page, look for timer jobs that have the name in the following formatting. If you filename is FOO.xsn, it will look like: Windows SharePoint Services Solution Deployment for "form-FOO.wsp"



See if there was a failure. If so, go back a page, and go to Timer Job Definitions. Drill down in the timer job definition that you care about and you can perform the following:



\>> For the case of status stuck on “Uploading”: 1. Try to restart the job if that is available. 2. If restart is not available, delete the job, then attempt to upgrade again.



\>> For the case of status stuck on "Upgrading": 1. Try to restart the job if that is available. 2. If restart is not available, delete the job, then attempt to upgrade again.



\>> For the case of status stuck on "Removing": 1. Try to restart the job if that is available. 2. Else, Remove the job. (continue to step 3) 3. Then, go back to the Manage Form Templates and try again to Remove the form template.



**In simple terms, open the Timer Job Definitions and open the wsp entry you are having the problem with and delete it. Now go back to the 'Manage Form Templates' page and delete the problematic form template.**