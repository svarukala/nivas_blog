---
title: MySQL 4.1 Post-Installation Problems
slug: MySQL-4.1-Post-Installation-Problems
generate-card: false
date: 2005-09-11
language: en
tags:
    - SharePoint
---


I spent the whole one and half day searching and playing with java/tomcat/mysql.  
Version details:  
Java : 1.5  
Tomcat: 5.28  
Mysql: 4.1  
  
The problem is with mysql, the famous problem of:  
Access denied for user: user@localhost (using password: yes)  
  
The problem is with the new version of mysql 4.1, which uses a new mechanism  
for authentication and storing passwords in the database. So due to this, the  
old Java Connector/Driver is not compatible with the 4.1 and above.  
[](http://dev.mysql.com/downloads/connector/j/3.2.html)So download the current version of the Java Driver here.  
Uzip the driver. Unjar the driver again  
and place the com and org folders in tomcat/common/classes.  
Using the driver connection string: com.mysql.jdbc.Driver  
  
Create users carefully using this [link](http://dev.mysql.com/doc/mysql/en/adding-users.html).  
Dont forget to do the following after creating users:  
>flush hosts;  
>flush privileges;