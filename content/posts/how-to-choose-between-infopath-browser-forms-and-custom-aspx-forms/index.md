---
title: How To Choose between InfoPath Browser Forms and Custom ASPX Forms
slug: How-To-Choose-between-InfoPath-Browser-Forms-and-Custom-ASPX-Forms
generate-card: false
date: 2008-06-02
language: en
tags:
    - SharePoint
---


Choosing between InfoPath forms and ASPX pages, depends totally on the nature of the problems we are solving on one side and level of skill set we are investing in solving that problem on the other side. Usually, in most cases, any manager or developer would want to use InfoPath Forms part of Office 2007 because it’s quick and easy. But, as the requirements get more complex and requires more and more customization, one might feel its better to go with ASPX pages and Visual Studio 2005 and SharePoint designer. Technically, InfoPath Forms by itself is incomplete; It needs a container which is again an ASPX web form using the XmlViewer web part. If we go with custom ASPX form, then it has to be designed either using SharePoint designer or Visual Studio leveraging web parts to show the required forms. So for this, developing web parts and its complexity needs to be taken into consideration.



So, to decide on one, we may have to take the decision step by step.

1. If the requirement is for a single form and showing data from an external data store or from within SharePoint, then going with InfoPath Forms is recommended.
2. If it’s a single form and needs complex actions, to and fro between the form and the data store, then choosing custom aspx pages is recommended.
3. If the requirement needs wizard kind of feature i.e. which requires user to go through multiple screens, then custom aspx is the solution.
4. If the data submitted through the form has to be saved to multiple locations (database, SharePoint, file storage) then InfoPath Forms is a good solution.
5. If the requirement is for designing numerous forms which are simple enough and well documented, then InfoPath Forms should be considered. InfoPath can help deliver the solution in a short time period.
6. InfoPath browser based forms has few limitations on the repository of controls one can use. For example: combo box, master/detail view control and many advanced controls are not supported in browser based InfoPath Forms. Depending on these limitations we have to decide on InfoPath or ASPX. ASPX has no such limitations.
7. InfoPath forms is based on XML. The form is rendered using XSLT stylesheets and the data submitted through the form is available in XML format. The data is well structured to retrieve later on and dump the data/forms in some external system. This in combination with BizTalk server is a perfect architecture for document transition through multiple levels.
8. InfoPath forms certainly have an edge over ASPX forms as a quick and neat solution. It has some complex out of the box controls, like date picker, file attachment control, repeating sections. InfoPath forms can also have code-behind if needed to manipulate the data on the form or behind the form.
9. ASPX can have and do everything InfoPath Forms does, with an exception of additional development effort. Apart from it, the deployment process of aspx forms is much better and easier than InfoPath Forms.

Below are some of the excerpts from few blogs I follow which provides some valuable input comparing InfoPath and ASPX forms. Below are the Pros and Cons in using InfoPath Forms:



**Pros:**

- Ideal for simple forms
- Easy to build a form – no coding involved
- InfoPath form itself is an xml document.
- Support versioning
- Works very nicely with SharePoint custom workflows as a workflow association tool.
- Fully integrated in Microsoft Office 2007 suites like Outlook e-mail messages that can be deployed as Outlook e-mail messages, so colleagues can complete forms without leaving the familiar Outlook environment.
- Firewall friendly. InfoPath Forms Services make it easy to extend forms solutions beyond firewall because of using many different Web browsers and mobile devices.
- InfoPath can easily convert Word documents and Excel spreadsheets to forms and build templates to work with.
- InfoPath provides data integrity and version control for document management purposes, and add structure to information gathering by converting legacy documents to rich InfoPath form templates.
- Design of a form is much easier in InfoPath forms with a simple drag-and-drop interface and provides support for prebuilt template parts and shared data connections.
- Creates PDF or XPS and other important document formats and is extensible by addition of a free plug-in to install third party tools and components for document, archival and records management
- Fully integrated with MOSS 2007 and capable of using integrated workflow management tools in Office 2007
- Fully Web browsed technology, includes a design checker to help ensure consistency for forms.
- Support for information rights management to help manage permission control and building a powerful document management team site.
- Fully centralized for entire organization and enables organizations to centrally

**Cons:**

- A web browser-enabled InfoPath form does not support all features of InfoPath client.
- Inflexible -- Difficult or impossible to customize (well, you can argue that you can hack the xsl file of InfoPath)
- No support for image buttons
- No support for html
- No support for tree control
- Difficult to support Forms Based Authentication
- By default, InfoPath cannot support SharePoint web services data connections in FBA.
- Forms Services does not support username() function in FBA. This means that InfoPath form does not recognize the current user.
- Difficult to perform automated web test against Forms Services.
- Difficult to support automated deployment. Basically, you have to unzip the xsn file and programmatically modify the manifest.xsf file, and zip back to the xsn file for automated publishing.
- The way that Forms Services supports deployment of InfoPath forms is quirky – It creates SharePoint solution packages with GUID and creates features with meaningless names on the SharePoint Features folder.

Below are the blog links which talk more about this topic:



<http://www.jyhuh.com/blog/archive/2008/03/02/AspNet_vs_InfoPath_Forms_Services.aspx>



<http://office12.blogspot.com/2007/06/infopath-web-forms-vs-aspx.html>