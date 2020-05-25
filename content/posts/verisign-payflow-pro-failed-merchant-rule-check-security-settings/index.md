---
title: Verisign Payflow Pro Failed merchant rule check : Security Settings
slug: Verisign-Payflow-Pro-Failed-merchant-rule-check-:-Security-Settings
generate-card: false
date: 2006-10-25
language: en
tags:
    - SharePoint
---


I was working on a project which needs credit card transaction processing. I had this problem with the Verisign Payflow Pro: "Failed merchant rule check". Google ain't much helpful to solve the problem. Here is what you got to do:  
Go to [https://manager.paypal.com](https://manager.paypal.com/)  
Sign in with ur Verisign credentials. Don't panic but paypal and verisign are working together like brothers.  
Once you logged in, you can see a neat interface to administer ur account.  
Click on 'Account Administration'  
Click on 'Transaction Settings' and the set the settings as follows to solve the above problem.  
  
Maximum Amount per Transaction - blank  
Maximum Amount for Credits - blank  
Allow Non-referenced Credits - YES  
Credits may exceed original transaction amount - YES  
Allow reference transactions – NO  
  
<http://blogs.vandamme.com/kb/archives/2005/07/failed_merchant.php provides more details.>