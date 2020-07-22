---
title: Using Azure AD App and certificate with Office 365 CLI 
slug: Using-Azure-AD-App-and-certificate-with-Office-365-CLI 
cover: ./pipes.jpg
generate-card: false
date: 2020-07-22
language: en
tags:
    - SharePoint
    - SharePoint Online
    - SharePoint Framework
    - Azure DevOps
    - Office365 CLI
    - YAML
---

Using Azure AD App and certificate with Office 365 CLI in Azure DevOps YAML Pipelines
=====================================================================================

After MSDN Blogs platform got decommissioned (due to various good reasons), we have been using TechCommunity as the blog platform. My first post on this platform is posted. I wanted to put out a stub here linking to the original article.

Here is the context to the this post:
While using Azure DevOps Continuous Integration and Continuous Delivery (CICD) pipelines, most of the documentation and articles show how to use Office 365 Command Line Interface (CLI) to upload, add and deploy the SPFx packages. It’s because Office 365 CLI is a cross-platform command line tool and thus you get the benefit of using either a Windows or a Linux machine as your build agent. 

These articles all depict how to use username and password to login using Office 365 CLI. There are ways to secure the password in Azure DevOps using variables or Azure Key Vault. However, enterprise organizations who are still not comfortable to use passwords and looking for other like certificates. 

With this blog post I showcase two aspects: 
- How to setup Office 365 CLI with Azure AD App and Certificate based authentication and 
- How to login using O365 CLI and certificates in Azure DevOps YAML pipelines 

Here is the link to the [blog post on TechCommunity](https://goeshere).