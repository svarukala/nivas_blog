---
title: InfoPath cannot connect to a data source when viewed in browser - Cross Domain Issues - Universal Data Connection
slug: InfoPath-cannot-connect-to-a-data-source-when-viewed-in-browser-Cross-Domain-Issues-Universal-Data-Connection
generate-card: false
date: 2008-03-06
language: en
tags:
    - SharePoint
---


**InfoPath cannot run the specified query.**



**InfoPath cannot connect to the data source.**



**Access is denied.**



One of the big issues with InfoPath Forms is its error reporting. It could sometimes piss you off. It says there is a problem that is it! We have to spend lot of time clicking and clicking and clicking buttons all over trying to find where is the problem. May be that is how these tools should work...



Steps to go with when you get the above error:

1. The above error seems to be quite often and it hints that there is some problem with the 'Data Source/Connection'. If the form is showing the error while loading i.e form never loads but shows a message to 'continue or start over', then there is some problem with the data source which is set up to 'Automatically retrieve data when form is opened'.

2. If the above is the situation then open up the Data Sources window (Tools - Data Connections) and make sure that the data connection is set up properly and the data source is in place, working and serves requests.

3. If the above error is shown when user does some action like clicking on button, then check the Rules in the properties of that control (button) and check for those data sources/connections.

4. If the form works fine when previewed as an application but throws the above error after publishing to SharePoint site or when viewed as a browser form, then most probably the problem will be with the cross domain issue. If the InfoPath is trying to query or submitting to a web service (could be any other data source) and that web service is hosted as http&#x3A;//xyz.com/service.asmx and the sharepoint site is hosted as http&#x3A;//abc.com then thats called a cross domain issue. The infopath form is trying to talk to a service which is hosted in a different domain and it can't trust it. This can be solved by giving full trust to the form(Tools - Form Options - Security and Trust) but its not the right way to go and your SharePoint admin might restrict that. The only way to go is setting the security and trust to 'Domain' and converting the existing data connections or just the cross domain connections to **Universal Data Connection** (UDC) format. Its very simple to do and gets rid of any cross domain issues. To create UDC connections read this [article](http://blogs.msdn.com/infopath/archive/2006/10/02/Data-Connections-in-Browser-Forms.aspx). For those who have no patience to read the article, below are the quick steps involved:

   1. If Universal data connection document library doesn't exist in the SharePoint site then create one or request your admin to create one and give you proper rights for you. (Go to 'View all site content' - Create - Universal Data Connection Library)
   2. Open up the InfoPath forms Data Connections window, select the cross domain data source connect and then click the 'Convert' button and follow the wizar. You need to provide the above created UDC library along with a name for the file for example: http&#x3A;//abc.com/udclibraryname/sampleudc.udcx
   3. Now that is not enough, either you or your admin should approve the sampleudc.udcx document created in the UDC library.
   4. Re-publish the InfoPath form to SharePoint and test it.

5. In central administration, under InfoPath Forms Services configuration, there is a checkbox to allow cross-domain issues. I am not sure if this is done then above UDC is still required or not. I will update as I learn about it.

More links worth to read:

[http://blogs.msdn.com/infopath/archive/2006/10/02/Data-Connections-in-Browser-Forms.aspx](http://blogs.msdn.com/infopath/archive/2006/10/02/Data-Connections-in-Browser-Forms.aspx "http&#x3A;//blogs.msdn.com/infopath/archive/2006/10/02/Data-Connections-in-Browser-Forms.aspx")

[http://blogs.msdn.com/infopath/archive/2006/10/05/Where-do-UDC-files-come-from_3F00\_.aspx](http://blogs.msdn.com/infopath/archive/2006/10/05/Where-do-UDC-files-come-from_3F00_.aspx "http&#x3A;//blogs.msdn.com/infopath/archive/2006/10/05/Where-do-UDC-files-come-from_3F00\_.aspx")

[http://blogs.msdn.com/infopath/archive/2007/02/12/udc-file-authoring-tool.aspx](http://blogs.msdn.com/infopath/archive/2007/02/12/udc-file-authoring-tool.aspx "http&#x3A;//blogs.msdn.com/infopath/archive/2007/02/12/udc-file-authoring-tool.aspx")

[http://blogs.msdn.com/infopath/archive/2007/01/29/submitting-to-a-database-via-web-services-in-infopath-forms-services.aspx](http://blogs.msdn.com/infopath/archive/2007/01/29/submitting-to-a-database-via-web-services-in-infopath-forms-services.aspx "http&#x3A;//blogs.msdn.com/infopath/archive/2007/01/29/submitting-to-a-database-via-web-services-in-infopath-forms-services.aspx")

[http://blogs.msdn.com/infopath/archive/2006/10/30/the-anatomy-of-a-udc-file.aspx](http://blogs.msdn.com/infopath/archive/2006/10/30/the-anatomy-of-a-udc-file.aspx "http&#x3A;//blogs.msdn.com/infopath/archive/2006/10/30/the-anatomy-of-a-udc-file.aspx")