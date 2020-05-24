---
title: Issue with peoplepicker-searchadforests stsadm
slug: Issue-with-peoplepicker-searchadforests-stsadm
cover: ./cover.png
generate-card: false
date: 2014-03-26
language: en
tags:
    - SharePoint
---

  

Issue with peoplepicker-searchadforests stsadm
==============================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 3/26/2014 1:15:00 PM

* * *

Some might be thinking that STSADM is no more valid especially with SP 2013. Well, its not. STSADM can still be used in SP2013 and some settings like PeoplePicker settings can be easily configured using the STSADM commands. One of the commands (PeoplePicker-SearchADForersts) is used to add/remove AD domains in SharePoint servers so that the users can be recognized in the people picker.People Picker will only query the forests or domains that you specify in the peoplepicker-searchadforests property setting. This is how you add new domains and forests to the people picker for a particular web app:

Below command will add the domains (aaa.com, bbb.com & ddd.com) and forest (ccc.com) to the people picker for [http://webappurl](http://webappurl) site.

STSADM.exe -o setproperty -pn peoplepicker-searchadforests -pv "domain:aaa.com;domain:bbb.com;domain:ccc.com;domain:ddd.com" -url [http://webappurl](http://webappurl)

Issue:

If the above command is executed as below you will see mixed results.The difference between the above and below command is that there is a space after each domain name (after the semi-colon).

STSADM.exe -o setproperty -pn peoplepicker-searchadforests -pv "domain:aaa.com; domain:bbb.com; domain:ccc.com;domain:ddd.com" -url [http://webappurl](http://webappurl)

After running the above command you can check the property settings using below command:

STSADM.exe -o getproperty -pn peoplepicker-searchadforests -url [http://webappurl](http://webappurl)

The results might look something like this:

<Property Exist="Yes" Value="domain:aaa.com;forest:bbb.com;forest:ccc.com;domain:ddd.com"/>

As I highlighted above the domains changed to forest in this property. This happens only when there is a space after each domain name in the setproperty command. I took sometime before I realized this issue and one of my colleagues helped me identify this problem.

Hopefully this will save some time for anyone running these commands.

References:

[http://technet.microsoft.com/en-us/library/gg602075(v=office.15).aspx](http://technet.microsoft.com/en-us/library/gg602075(v=office.15).aspx) (SP 2013)

[http://technet.microsoft.com/en-us/library/gg602075(v=office.14).aspx](http://technet.microsoft.com/en-us/library/gg602075(v=office.14).aspx) (SP 2010)