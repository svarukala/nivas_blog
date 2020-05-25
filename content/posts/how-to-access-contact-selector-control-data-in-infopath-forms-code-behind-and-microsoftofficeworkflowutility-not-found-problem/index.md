---
title: How To Access Contact Selector control data in infopath forms code behind and Microsoft.Office.Workflow.Utility not found problem
slug: How-To-Access-Contact-Selector-control-data-in-infopath-forms-code
generate-card: false
date: 2008-03-20
language: en
tags:
    - SharePoint
---


To access the contact selector we need to use the Contact class for which we need to add this line into our code file:



using Microsoft.Office.Workflow.Utility;



The next question is where does this library sit and how to add reference to it. Well, just as any developer does I too opened up the Add Reference window but I couldn't find the library I am looking for i.e Microsoft.Office.Workflow DLL. I couldn't find neither under the .Net tab nor under the Components tab.



You can find the required DLL at: C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\12\\ISAPI\\microsoft.office.workflow.tasks.dll



Later, I realized that you can find it under the .NET tab with the component name: "Microsoft Office Server DLC Component".



<!--[if gte vml 1]&gt;                                                  &lt;![endif]-->

<!--[if !vml]-->

<!--[endif]-->

[![Add Reference](./img/2008-03-add-ref.thumbnail.jpg)](http://sharenotes.files.wordpress.com/2008/03/add-ref.jpg "Add Reference")



I would be glad if this post is helpful to someone or other.



As per the title of this post, to learn how to access the contact selector control's data programmatically in the code behind please read the below posts from msdn.



[Link1](http://msdn2.microsoft.com/en-us/library/ms517395.aspx)and [Link2](http://msdn2.microsoft.com/en-us/library/microsoft.office.workflow.utility.contact.tocontacts.aspx)