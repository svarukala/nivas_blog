---
title: Tomcat and Mysql
slug: Tomcat-and-Mysql
generate-card: false
date: 2005-09-03
language: en
tags:
    - SharePoint
---


To execute mysql .sql script files.  
Go to [here](http://dev.mysql.com/doc/mysql/en/batch-commands.html).  
Ex:  
The mysql client typically is used interactively, like this:  
  
shell> mysql db_name  
  
However, it's also possible to put your SQL statements in a file and then tell mysql to read its input from that file. To do so, create a text file text_file that  
contains the statements you wish to execute. Then invoke mysql as shown here:  
  
shell> mysql db_name &lt; text_file  
You can also start your text file with a USE db_name statement. In this case, it is unnecessary to specify the database name on the command line:  
  
shell> mysql &lt; text_file  
  
If you are running mysql, you can execute an SQL script file using the source or \\. command:  
  
mysql> source filename  
mysql> \\. filename  
  
  
Tomcat:  
----------  
After installation, set the path to server-api.jar in the local class path so that  
v can compile the servlet java files. The servlet-api is found under tomcat-install-dir/common/lib  
  
And in config/web.xml , UNCOMMENT the xml tags having the invoker term.  
  
otherwise it sucks!