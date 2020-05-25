---
title: SSRS Logon failed. (rsLogonFailed)  or Logon failure the user has not been granted the requested logon type at this computer
slug: SSRS-Logon-failed.-(rsLogonFailed)-or-Logon-failure-the-user-has-not-been-granted-the-requested-logon-type-at-this-computer
generate-card: false
date: 2010-03-23
language: en
tags:
    - SharePoint
---


_Logon failed. (rsLogonFailed)_



_Logon failure: the user has not been granted the requested logon type at this computer. (Exception from HRESULT: 0x80070569)_



**Solution:**



Add the user account which you provided for the 'Execution Account' in the Reporting Services Configuration Manager to the local Administrators group. By default the 'Administrators' group is added the 'Content Manager' role by SSRS so when you add the execution account to the administrator you are giving that user the 'Content Manager' role/permission. I am not sure neither if this is the best solution nor the only solution for the above error. The solution might vary on the setup and environment.