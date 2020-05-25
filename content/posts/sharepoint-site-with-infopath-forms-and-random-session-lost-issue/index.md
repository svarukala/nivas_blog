---
title: SharePoint site with InfoPath forms and Random session lost issue
slug: SharePoint-site-with-InfoPath-forms-and-Random-session-lost-issue
generate-card: false
date: 2010-08-16
language: en
tags:
    - SharePoint
---


We were able to fix a sticky issue which was bugging us since a long time. Its a sporadic issue and its always interesting to debug issues like these.



**Issue details:** This is in reference to SharePoint portal site which uses InfoPath Forms extensively which was extended into multiple zones (intranet, extranet) with dual authentication (AD and LDAP with MFA/FBA). The issue with the site was that it was losing the session randomly while the user is actively working on it. The random time period could be anywhere from 8 mins to 20mins or more.



**Debugging the issue:** We started facing this issue in our (staging/no-harm) environment and later we realized it wasn't isolated to a specific environment as this was reproducible in our QA, UAT etc environments too. Changing or increasing the session timeout value was certainly not having any kind of effect on the random timeout issue. That was ruled out of the picture. I started looking into SharePoint logs, IIS logs and Application specific event logs, still hitting the wall.



With the infrastructure we have one hits the SharePoint site through a multi-factored authenticated (MFA) site which is basically a single point of entry for external partners. This MFA site authenticates using SiteMinder/LDAP. The extranet forms based authenticated (FBA) based SharePoint site picks up the user context from this site without prompting the user to log in again. The next step was pushing this issue to the MFA/Application-security team to verify if all is well from their side. Yes, everything remains the same and fine on their side.



We have been using Fiddler/HTTPWatcher to track the http headers exchanged while trying to reproduce the session lost issue. After tracking down the HTTP headers while reproducing the session lost I found that the ASP.NET_SessionId cookie which was supposed to be sent in the header is not being sent at that moment and thus session is lost.



Below is a small useful excerpt from a [blog](http://blogs.msdn.com/david.wang/archive/2005/09/19/Why_do_I_lose_ASP_Session_State_on_IIS6.aspx) link:

> How a web application uses cookies to maintain session state is simple: the application framework simply associates all the runtime state of the application with the ID (i.e. SessionID) and makes sure to send that ID with a Set-Cookie on the initial HTTP response, and whenever the web browser makes a subsquent request to the application's URL namespace, the application framework inspects the cookie header for an ID and if it is found, look up all of the associated runtime state and continue processing the web application with that state. Good application frameworks would also control the time period of validity for this runtime state via something like Session

But now the question arises about what and why this is happening? Why does the browser stop sending the ASP.NET_SessionId cookie randomly?



One thing that I noticed is that there are multiple cookies that are maintained and the number of cookies are increasing for each page refresh or access. On close observation we narrowed it down that on page access that has an XMLFormView control which contains the InfoPath form is adding 2 cookies which look something like below:



[![](http://sharenotes.files.wordpress.com/2010/08/sessioncookies.jpg "InfoPath Cookies")](./img/2010-08-sessioncookies.jpg)



2877de91-2fc1-48bd-b134-7e5480751aa1_sel Sent / test..com (Session)



2d12188c-1f35-427c-b741-634acde50a8e_pb Sent 0 / test.com (Session)



I couldn't find any good documentation/links on how InfoPath Forms Services use cookies especially the above ones. However, the \_sel and \_pb represents the selection and postback cookies.



As the number of cookies are increasing and as it exceeds the browser limitation of max 20 cookies per domain the ASP.NET_SessionId is dropped and thus the session is lost. Here is the copy one of the lines from [Microsoft KB Article](http://support.microsoft.com/kb/306070):

> If a Web application uses more than 19 custom cookies, ASP session state may be lost.

In order to conclude this I wrote a quick and dirty (my favorite) java script solution to remove the InfoPath form cookies that are not used or empty and retain only the latest 2 cookies. With this script plugged into the master page the session lost issue never happened again.



I uploaded the script to SkyDrive. Here is the link to the folder and you will see a file named: CookieCleanupScript.txt



<https://skydrive.live.com/redir?resid=52790689DEA81341!6040>