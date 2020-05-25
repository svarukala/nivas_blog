---
title: Static variables issue in shared hosting or multiple web servers
slug: Static-variables-issue-in-shared-hosting-or-multiple-web-servers
generate-card: false
date: 2010-01-07
language: en
tags:
    - SharePoint
---


I just want to share with everyone a lesson learned recently.



**Issue:** All the static variables which are initialized as class variables are reset to empty, null or 0 depending on the data type of the variable. This happens randomly and cannot be reproduced in the development environment. This issue is specific to web applications and not stand alone/windows apps.



**Explanation:** Firstly to clarify what I meant by "_static variables which are initialized as class variables_", below is an example code snippet.

> public class MyUtility { static string myURL = "http&#x3A;//somesite.com"; static int count = 10; ... ... }

In the above code snippet, the variables 'myURL' and 'count' will be set to empty string and '0' respectively at any time randomly on your production servers if its a load balanced servers and or shared hosting environment. The static variables are initialized properly the first time when the application starts. But whenever the application domain which is the isolated memory in which the web application process runs is reset or recycled all the memory allocated is lost. The application domain reset/recycling is possible in multiple cases. For example:

- If the web application is not requested for an extended period of time.
- In shared environment multiple web applications share the limited RAM. Thus, if one web app is idle and doing nothing that will be unloaded and reloaded on demand.
- The IIS server settings can be set to recycle/reload the application pool periodically or set to recycle whenever the memory allocation exceeds a threshold limit.

Whenever this recycling or reload occurs all the static variables are reset. Not only do these not get reset to their original state but they are also not re-initialised with their design time default values. They will always be given values like null, empty string and zero. The worst part is that we cannot reproduce this in our development environment as we don't mimic the production environment.



So the solution is simple, do not use static variables in web applications.



Below is a very good post which mentions more technical details related to this topic.



<http://www.navwin.com/Topics/AppDomainRecycling/AppDomainRecycling.aspx>