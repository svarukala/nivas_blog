---
title: SharePoint Delete / Purge / Remove Orphaned Sites or Site Collections
slug: SharePoint-Delete-Purge-Remove-Orphaned-Sites-or-Site-Collections
generate-card: false
date: 2007-11-19
language: en
tags:
    - SharePoint
---


If you are here just to know how to delete a site or a site collection: Go to [here](http://office.microsoft.com/en-us/sharepointserver/HA100947731033.aspx). If you are here to learn how to find and purge the orphan sites or site collections, go ahead and read the below article.



Microsoft makes it tough with simple things like finding and deleting the orhpaned sites/site collections. There seems to be no well documented way to do this task. After googling for many search strings, below are few resources and steps you can take to clean up your content and config databases.



1\. Run the following command:



**stsadm -o databaserepair -url http&#x3A;//&lt;URL_of_WindowsSharePointServices_Site> -databasename &lt;name of database that contains the orphan item>**



2\. If the above command reveals any orhpaned sites, then run the above command with -deletecorruption parameter:



**stsadm -o databaserepair -url http&#x3A;//&lt;URL_of_WindowsSharePointServices_Site> -databasename &lt;name of database that contains the orphan item that is to be deleted> -deletecorruption**



For more details: [read this](http://technet2.microsoft.com/Office/en-us/library/cdd727b1-ee01-41d7-99bf-5e38a2faa0941033.mspx?mfr=true). Bloggers say that these seem to do nothing but might be doing something.



3\. If the above stsadm command doesnt reveal any orphan sites, then there is a DB script provided in this [blog post](http://blogs.technet.com/corybu/archive/2007/05/31/sharepoint-orphans-explained.aspx), which help you find out the orhpaned sites. Its not a good practice to run queries against the sharepoint database but this really works so who cares. ``

> Use MSDB Drop table orphanlist
>
> CREATE TABLE \[dbo].\[orphanlist]( \[farm] \[varchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, \[databasename] \[varchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, \[SiteID] \[uniqueidentifier] NULL, \[sitepath] \[varchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NULL, \[type] \[varchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NULL )
>
> drop table orphan_hopper declare @dbname as varchar(250), @cmdstr as varchar(2000), @dbid as varchar(250), @configdb as varchar(250)
>
> /\*\* only change the following line and nothing else, change spskills_config_db to your config db name \*\*/ select @configdb = 'spskills_config_db'
>
>
>
> /\*\* Change nothing below this line \*\*/ select @cmdstr = 'select distinct b.name as ''databasename'', b.id as ''dbid'' into orphan_hopper from \[' + @configdb + '].dbo.sitemap as a inner join \[' + @configdb + '].dbo.objects as b on a.databaseid=b.id inner join \[' + @configdb + '].dbo.objects as c on c.id=a.applicationid inner join \[' + @configdb + '].dbo.objects as d on b.parentid=d.id inner join \[' + @configdb + '].dbo.objects as e on d.parentid=e.id ' exec (@cmdstr)  DECLARE DBCursor CURSOR For Select databasename, dbid From orphan_hopper  OPEN DBCursor FETCH NEXT FROM DBCursor into @DBName, @dbid  WHILE @@FETCH_STATUS =0 BEGIN INSERT INTO orphanlist(\[Type], farm, databasename,\[sitepath], SiteID) EXEC (' select ''Potential ConfigDB orphan:'' +['''+@dbname+'''](mailto:'''+@dbname+''')as \[Type],['''+@configdb+'''](mailto:'''+@configdb+''')as \[farm],['''+@dbname+'''](mailto:'''+@dbname+''')as \[databasename],path as \[sitepath], id as \[SiteID] from \['+@configdb+'].dbo.sitemap where id not in (select id from \['+@dbname+'].dbo.sites) and databaseid =['''+@dbid+'''](mailto:'''+@dbid+''') union select ''Potential ConfigDB orphan:'' +['''+@dbname+'''](mailto:'''+@dbname+''')as \[Type],['''+@configdb+'''](mailto:'''+@configdb+''')as \[farm],['''+@dbname+'''](mailto:'''+@dbname+''')as \[databasename],path as \[sitepath], id as \[SiteID] from \['+@configdb+'].dbo.sitemap where id not in (select siteid from \['+@dbname+'].dbo.webs where parentwebid is null) and databaseid =['''+@dbid+'''](mailto:'''+@dbid+''') union select ''Potential ContentDB orphans:'' +['''+@dbname+'''](mailto:'''+@dbname+''')as \[Type],['''+@configdb+'''](mailto:'''+@configdb+''')as \[farm],['''+@dbname+'''](mailto:'''+@dbname+''')as \[databasename],fullurl as \[sitepath], siteid as \[SiteID] from \['+@dbname+'].dbo.webs where parentwebid is null and siteid not in (select id from \['+@configdb+'].dbo.sitemap where databaseid =['''+@dbid+'''](mailto:'''+@dbid+''')) union select ''Potential ContentDB orphan:'' +['''+@dbname+'''](mailto:'''+@dbname+''')as \[Type],['''+@configdb+'''](mailto:'''+@configdb+''')as \[farm],['''+@dbname+'''](mailto:'''+@dbname+''')as \[databasename],fullurl as \[sitepath], siteid as \[SiteID] from \['+@dbname+'].dbo.webs where parentwebid is null and siteid not in (select id from \['+@dbname+'].dbo.sites) ') FETCH NEXT FROM DBCursor into @DBName, @dbid END CLOSE DBCursor DEALLOCATE DBCursor  select \* from orphanlist

4\. If either of the above show that your sharepoint db has orhpaned objects, the recommended practice is to detach and re-attach the content database for that particular web application. The detach and attach process can be done in the central adminsitration. Read this [blog post](http://clarktechie.wordpress.com/2007/05/31/delete-orphaned-sites-in-sharepoint/) which I think mentions how to detach/re-attach using the SPS 2003 Centram Admin. In SPS 2007, just find out the Manage Content Database section under which you should be able to find the web application and then there is a way to re-attach the content db. If you face any problems re-attaching, try to do the same using stsadm tool.