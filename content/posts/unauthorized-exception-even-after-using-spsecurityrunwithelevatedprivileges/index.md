---
title: Unauthorized exception even after using SPSecurity.RunWithElevatedPrivileges
slug: Unauthorized-exception-even-after-using-SPSecurity.RunWithElevatedPrivileges
generate-card: false
date: 2008-09-04
language: en
tags:
    - SharePoint
---


In various cases while developing custom web parts or controls for SharePoint we have to use the SPSecurity.RunWithElevatedPrivileges construct to execute some part of the code which needs elevated permissions or which cannot be run with the current user permissions. For example, updating a SPWeb object or SPList object needs elevated permissions.



If you are getting an unauhtorized access exception even after using this block then the reason could be as follows:



While using this construct: You cannot use the objects available through the [Microsoft.SharePoint.SPContext.Current](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spcontext.current.aspx)property. That is because those objects were created in the security context of the current user.



So the best practice for using the SPSecurity.RunWithElevatedPrivileges is to get the SPSite/SPWeb objects using the SPContext.Current and then create the SPSite and SPWeb objects seperately. See the code below:



> ```
> SPSite siteColl = SPContext.Current.Site;
> SPWeb site = SPContext.Current.Web;
> SPSecurity.RunWithElevatedPrivileges(delegate() {
>   using (SPSite ElevatedsiteColl = new SPSite(siteColl.ID)) {
>     using (SPWeb ElevatedSite = ElevatedsiteColl.OpenWeb(site.ID)) {
>         //Code to execute
>     }
>   }
> });
> ```

The following code is wrong:

```


SPSecurity.RunWithElevatedPrivileges(delegate() {


    SPSite siteColl =    SPContext.Current.Site;
    SPWeb site = SPContext.Current.Web;
 //Code to execute

});
```