---
title: Java Applet Code Signing
slug: Java-Applet-Code-Signing
generate-card: false
date: 2005-10-03
language: en
tags:
    - SharePoint
---


step 1. Creat the keystore. (here my keystore name is mystore)  
cmd>keytool -genkey -alias signFiles -keystore mystore -keypass password1 -dname "cn=emagination" -storepass password2  
  
step 1.5. Preparing the jar files and crap..! ezz do it.  
  
step 2. Sign ur applet. (here I am signing a UI.jar as SignedUI.jar)  
jarsigner -keystore mystore -storepass password2 -keypass password1 -signedjar SignedUI.jar UI.jar signFiles  
  
For real sign applet for production release:  
Read this [PDF](http://www.verisign.com/static/030998.pdf)provided by Verisign. Its pretty clear with steps.