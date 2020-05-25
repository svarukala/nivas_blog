---
title: Multiple or Dual Authentication for a Single Web Application in Sharepoint Office System 2007
slug: Multiple-or-Dual-Authentication-for-a-Single-Web-Application-in-Sharepoint-Office-System-2007
generate-card: false
date: 2007-10-19
language: en
tags:
    - SharePoint
---


Below two blog posts are an excellent help if anyone is looking for implementing more than one authentication mechanism.

- [Blog by Dan Attis](http://devcow.com/blogs/jdattis/archive/2007/02/23/Office_SharePoint_Server_2007_Forms_Based_Authentication_FBA_Walkthrough_Part_1.aspx)
- [Blog by Andrew Connell](http://www.andrewconnell.com/blog/articles/HowToConfigPublishingSiteWithDualAuthProvidersAndAnonAccess.aspx)

Let me clarify why would someone look for implementing multiple authentication: Usually companies and corporations have their user or employee accounts in Windows Active Directory. When Sharepoint/MOSS is installed by default it has the support to authenticate the users in the active directory. Thus, when a web application is extended the default zone which would be the intranet zone authenticates users against the Active Directory. The same application could be extended to an extranet zone still using the Activation Directory. But lets say a company want to provide the sharepoint site to its clients or partners who are not in their employee active directory. The company might have all of its clients/partners in a separate directory or data store like SQL Server or ther LDAP implementations like SiteMinder. So the webapplication should be able to authenticate users both from its employee active directory and the partners or clients who are in a separate directory.



Assuming that all of the users in a SQL Server, the same web application can be extended to internet zone and provide a form based authentication to authenticate users in the SQL Server. If the company wants to have anonymous access i.e anyone can see the default content on the site, the same internet zone properties can be changed to allow anonymous access. Thus a company can have:

1. Internet Website which can be accessed by anyone (Limited access)
2. Internet/Extranet access for the clients or partners using the form based authentication
3. Intranet/Extranet for the employees of the company who could use their Active Directory Credentials.

### **Case Study:**

**Company name:** orange **Extranet site:** http&#x3A;//ext.orange.com - Active Directory **Internet site:** http&#x3A;//clients.orange.com - Forms Base Authentication



I would like to add a point which the above 2 blogs didn't mention but is crucial for the setup to work properly.

> The Identity(User Account) of the Application Pool associated to the web application must be given access to both the site related database and the Membership database in SQL Server. Unless this is done, the form based authentication fails even though you are giving the correct user credentials.
>
>
>
> On the Internet zone even after enabling the Forms base authentication, opening the site might ask for the windows credentials and then open up the sign in page. If this happens, Enable Anonymous access either through Central Administration or using IIS.