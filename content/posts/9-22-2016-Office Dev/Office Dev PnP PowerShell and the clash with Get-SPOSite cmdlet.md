---
title: Office Dev PnP PowerShell and the clash with Get-SPOSite cmdlet
slug: Office-Dev-PnP-PowerShell-and-the-clash-with-Get-SPOSite-cmdlet
cover: ./cover.jpg
generate-card: false
date: 2016-09-22
language: en
tags:
    - SharePoint
---

  

Office Dev PnP PowerShell and the clash with Get-SPOSite cmdlet
===============================================================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 9/22/2016 2:57:57 AM

* * *
Office Dev PnP PowerShell library provide a number of useful commandlets that comes handy when administering SharePoint Online. As per the [instructions on GitHub](https://github.com/OfficeDev/PnP-PowerShell), you could easily install Office Dev PnP PowerShell cmdlets by running below PowerShell command:

```
Install-Module SharePointPnPPowerShellOnline
```

If this works without any issue then you are good and you can start using the awesome cmdlets. However, if you already have SharePoint Online Management Shell installed, then chances are that you will see an error that says something like:

```
A command with name 'Get-SPOSite' is already available on this system. To override this cmdlet use -AllowClobber.
```

The reason it is throwing this error because there is this one cmdlet (Get-SPOSite) that is common in both SPO PowerShell and Office Dev PnP PowerShell library. To avoid overriding of the SPO PowerShell Get-SPOSite cmdlet, I chose to install the Office Dev Pnp PowerShell using the [MSI package available here](https://github.com/officedev/pnp-powershell/releases). This completes installation of the library without issues. If you now open the PowerShell command and try to execute one of PnP cmdlets, you will most probably see an error like:

```
import-module : The specified module 'OfficeDevPnP.PowerShell.Commands' was not loaded because no valid module file was found in any module
```

The reason for this is because you need a reboot of the machine so that the system picks up the Environment Variable: PSMODULEPATH that's automatically added when you installed the PnP library. This PSMODULEPATH points to the the below location containing the PnP library: C:\\Users\\[UserId]\\AppData\\Local\\Apps\\SharePointPnPPowerShellOnline\\ If you have too many windows opened that you dont want to reboot or just lazy then you can explicitly load the PnP PowerShell module by running below cmd:
```
>  Import-Module C:\\Users\\[UserId]\\AppData\\Local\\Apps\\SharePointPnPPowerShellOnline\\Modules\\SharePo
>  intPnPPowerShellOnline
```
Let's continue the Get-SPOSite ambiguity story. When you try to use Get-SPOSite or try to get help, you see that it always tries to use the PnP Powershell version of the Get-SPOSite. There are couple of ways to get around this and to use the Get-SPOSite of the SPO PowerShell library instead. To begin with, you can get help for the cmdlet by passing the module name qualifier as follows:

```
> Get-Help Microsoft.Online.SharePoint.PowerShell\\Get-SPOSite
> 
> Get-Help SharePointPnPPowerShellOnline\\Get-SPOSite
```

To explicitly execute the Get-SPOSite from one of the modules, you do the similar thing again, by executing below cmds:
```
> Microsoft.Online.SharePoint.PowerShell\\Get-SPOSite
> 
> SharePointPnPPowerShellOnline\\Get-SPOSite
```
The second way to get around this is using the Prefix when importing the module. When importing Pnp Powershell I will add a prefix say "pnp", using below cmd:
```
> Import-Module SharePointPnPPowerShellOnline -Prefix "pnp"
```
Now, all the PnP powershell cmdlets can be access using the prefix pnp as below:
```
> Get-PnpSPOSite
> 
> Get-PnpSPOWeb and so on.
```