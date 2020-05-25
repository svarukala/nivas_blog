---
title: IIS Authentication Model and Options
slug: IIS-Authentication-Model-and-Options
generate-card: false
date: 2007-10-15
language: en
tags:
    - SharePoint
---


**IIS 6.0 Authentication Model**: An important part of many distributed applications is the ability to identify someone, known as a principal or client, and to control the client's access to resources. Authentication is the act of validating a client's identity. Generally, clients must present some form of evidence, known as credentials, proving who they are for authentication. Typically, credentials include a username/password pair.



SharePoint Portal 2003 is built upon IIS 6.0. Lets first take a look at the authentication model of IIS.



IIS provides a variety of authentication schemes:



![](http://www.theserverside.net/tt/articles/content/ImplementingSSO/images/AuthModes.JPG)



**Anonymous (enabled by default):** Anonymous authentication allows a user to access web and FTP sites without having to provide a username and password. When a client user accesses a web or FTP site, IIS uses the Internet Guest Account to authenticate that user.



The Internet Guest Account is created when IIS is installed, and it is named IUSR\_&lt;Computername>, where &lt;Computername> is the name of the host machine. Having an account to use for anonymous access allows you to configure which resources all anonymous users can access on your server. The anonymous account is also added to the Guests group when IIS is installed, so any restrictions or permissions applied to that group also apply to the account.



**Basic Authentication:** When a server uses Basic Authentication, the Web browser (or the FrontPage client) prompts the user for a name and password. The user name and password are then transmitted across HTTP, in clear text. Using this user name and password, IIS authenticates the corresponding Windows NT user. To use Basic authentication, a user account must be defined on either the local machine or on a trusted domain controller. The account-based access control is all done through the NT File System (NTFS) permissions on the file system.



**Integrated Windows authentication:** Integrated Windows authentication is the most secure method of authentication, but it is available only with Internet Explorer. In Integrated Windows authentication, the user's browser proves itself to the server using a cryptographic exchange during the authentication process.



Integrated Windows authentication supports both the Kerberos v5 and the NTLM (NT LAN Manager) protocols for authentication through the Negotiate package.



**Digest Authentication:** Like Basic Authentication, Digest Access Authentication is based on a simple challenge-response method. The Digest scheme challenges using a nonce value (a server-specified data string which may be uniquely generated each time a 401 error is made.). A valid response contains a checksum of the user name, the password, the given nonce value, the HTTP method, and the requested URL. In this way, the password is never sent as easily decoded text, which is Basic Authentication's biggest weakness.



**.NET Passport Authentication:** IIS 6 can use Microsoft's .NET Passport to authenticate users requesting resources from a web site or a web site virtual directory. The benefit that this solution offers is that the credentials are stored and managed on another server that you are not responsible for building or maintaining. Users can authenticate using the .NET Passport service and then be allowed access to the web site hosted on your WS03 server.



This is an extract from [here](http://www.theserverside.net/tt/articles/showarticle.tss?id=ImplementingSSO). I will soon post on sharepoint authentication model and integration with SiteMinder LDAP.