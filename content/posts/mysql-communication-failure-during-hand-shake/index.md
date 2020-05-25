---
title: Mysql communication failure during hand shake
slug: Mysql-communication-failure-during-hand-shake
generate-card: false
date: 2005-08-28
language: en
tags:
    - SharePoint
---


Communication failure during hand shake: is mysql server running on  
localhost 3306 port.  
  
This is the most common error which mysql users encounter.  
  
The following is the solution for the mentioned versions below:  
  
Mysql Ver: 4.1  
  
Solution:  
Go to mysql prompt.  
run the command:  
set password for (user-name)@(server-name) = old_password("ur-password");  
  
Fill in the brackets with ur details and there u go!!!  
  
Another common problem, is unable to find the mysql driver.  
Just put the driver in tomcat/shared/classes  
or tomcat/common/classes