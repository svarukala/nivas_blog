---
title: SQL AlwaysOn - Failed to join the database to the Availability Group (Error 35250)
slug: SQL-AlwaysOn-Failed-to-join-the-database-to-the-Availability-Group-(Error-35250)
cover: ./cover.jpg
generate-card: false
date: 2014-03-31
language: en
tags:
    - SharePoint
---

  

SQL AlwaysOn - Failed to join the database to the Availability Group (Error 35250)
=================================================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 3/31/2014 2:26:52 PM

* * *

**\[Updated on 5/16/2017\]** Alternate solution for fix# 2 You might get this particular error "Failed to join the database to the Availability Group (Error 35250)" when you are creating a new Availability Group (AG) and initiated a Full sync which basically copies the backup and attaches the DBs on the replica servers. You will see tin he New AG Wizard that the 'joining to the database to the availability group" stage keeps on spinning for a while before it gives up and shows this error. There are good number of reason for this to fail. There are primarily two possible causes:

1\. Firewall blocking the port (5022 by default) that is used for communication between primary and secondary replicas of the AG.

2\. Incorrect permissions on the mirroring end point on the SQL servers

Here is a msdn article that mentions the resolution based on the above: [http://msdn.microsoft.com/en-us/library/ff878308.aspx#JoinDbFails](http://msdn.microsoft.com/en-us/library/ff878308.aspx#JoinDbFails) To fix #1 just add a firewall inbound rule to allow communications on the AG port (default 5022). Follow this link for detailed steps: [http://technet.microsoft.com/en-us/library/ms175043.aspx](http://technet.microsoft.com/en-us/library/ms175043.aspx) To fix #2, read on: Here is a good post on this topic: [http://blogs.msdn.com/b/alwaysonpro/archive/2013/12/09/trouble-shoot-error.aspx](http://blogs.msdn.com/b/alwaysonpro/archive/2013/12/09/trouble-shoot-error.aspx). This article discusses other various possibilities that might cause this error. It also explain about the 'incorrect permissions on the endpoint'. The article mentions the following:

"If database mirroring endpoints are configured to use Windows authentication, ensure that the SQL Server instances hosting your availability replicas run with a SQL Server startup account are _**domain accounts**_."

But in my lab environment the SQL Server startup accounts were not using domain accounts instead using the NT Service\\MSSQLSERVER. Then I found this TechNet article: [http://technet.microsoft.com/en-us/library/ms178029.aspx](http://technet.microsoft.com/en-us/library/ms178029.aspx) which mentions this:

"If the instances of SQL Server run as the Network Service account, the login of the each host computer account (DomainName**\\**ComputerName$) must be created in**master**on each of the remote server instances and that login must be granted CONNECT permissions on the endpoint. This is because a server instance running under the Network Service account authenticates using the domain account of the host computer"

I think this explains better and it is more closer to my environment. After reading the above I gave the CONNECT permissions to all of the SQL server computer accounts to the endpoint and resolved the issue. Here are steps to identify the endpoint and how to give CONNECT permissions to a computer account: To identify the endpoint:

     USE master;
     GO
     SELECT name, state_desc, port from sys.tcp_endpoints where type_desc='DATABASE_MIRRORING'
     GO

To give CONNECT permissions on the endpoint for my SQL Servers. Note: In my lab I have 1 primary (SQL1) and 2 Replica Servers (SQL2, SQL3). Execute below for each server on each server. Replace the highlighted parts corresponding to your environment.

     USE master;
     GO
     CREATE LOGIN [Contoso\SQL1$] FROM WINDOWS;
     GO
     GRANT CONNECT on ENDPOINT::Hadr_endpoint TO [Contoso\SQL1$];
     GO

**Alternate Solution**: This is provided by Lawrence Wheat in the Comments section. Note that I have not verified this fix.

> If your SQL servers are on your domain, you can run the SQL services on all nodes under the same domain account.