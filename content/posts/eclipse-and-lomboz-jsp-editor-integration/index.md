---
title: Eclipse and Lomboz JSP editor Integration
slug: Eclipse-and-Lomboz-JSP-editor-Integration
generate-card: false
date: 2005-09-16
language: en
tags:
    - SharePoint
---


Visit this [link](http://weblogs.asp.net/jdanforth/articles/149111.aspx).  
  
I thought Lomboz plugin integration with eclipse would be as easy as just dropping  
in the files in the plug-in directory.  
But there are many issues to consider and handle and configure before u go-ahead  
and start a web-project or a J2EE project.  
I wasted 2 days of mine due to this. At first glance I can say that Lomboz is very good plugin for J2EE projects. Worth to give a try if u are looking for a JSP editor.  
Other editors are either trial for limited # of days or too complex.  
  


>   
>   
> Installation of Eclipse  
>   
> How to install and configure Eclipse.  
>   
> 1) First of all, download and install a Java 2 SDK, Eclipse needs version 1.3 or higher, but Lomboz needs 1.4, so use J2SDK 1.4.2 from Sun http&#x3A;//java.sun.com/j2se/1.4.2/download.html.  
> 2) Download Eclipse from http&#x3A;//www.eclipse.org/, preferably the latest 3.0 version.  
> 3) Unzip the file to the root of the drive, for example C:\\, this will give you a C:\\eclipse\\ directory where you’ll find the eclipse.exe binary.  
> 4) Start eclipse by executing the eclipse.exe file.  
> 5) Go to Window->Preferences then look at the settings for Java->Installed JREs and make sure that your JSDK is used. If it is not, add it to the list of installed JREs and check it. When I change JRE, I usually exit Eclipse and restart it... just to be sure.  
> Installation of EMF  
>   
> How to install and configure EMF, a required J2EE plug-in for Eclipse if you want to use Lomboz.  
>   
> 1) Download EMF (in my case, version 2.0.0) from the EMF site.  
> 2) Unzip it so it fits nicely into the existing Eclipse directory, in my case I unzip it to the C:\\ because that's where I unzipped Eclipse (default).  
> Installation of Lomboz  
>   
> How to install and configure Lomboz, a J2EE plug-in for Eclipse.  
>   
> PRE-REQ: Lomboz v3.0 uses models based on eclipse EMF project. If you do not have it installed already, You will need to download and install EMF runtime builds release 2.0.0 or later. Download the "ALL" package.  
>   
> 1) First, download a version of Lomboz that runs well with the version of Eclipse that you use. In my case I use Lomboz version 3 RC 2 available from http&#x3A;//forge.objectweb.org/project/showfiles.php?group_id=97  
> 2) Exit Eclipse if it is running.  
> 3) The plug-in is distributed in ZIP format, therefore, using your ZIP file utility, unzip lomboz.zip file into the directory. This will create a couple new plug-in directories named com.objectlearn.jdt.j2ee and com.objectlearn.jdt.j2ee.editors. Make sure that Lomboz is extracted properly into the C:\\eclipse\\plugins directory.  
> 4) Start Eclipse.  
> 5) Select menu "Window>Customize Perspective...", in the "Shortcuts" tab choose the "New" submenu and check "Java->Lomboz J2EE Wizards".  
> 6) Select menu "Window>Customize Perspective...", in the "Shortcuts" tab choose the "Show View" submenu and check "Lomboz J2EE".  
> 7) Select menu "Window>Customize Perspective...", in the "Command"s tab in the available commands tab, check Lomboz Actions.  
> 8) Close the "Customize Perspective" dialog by presseing the OK button.  
> 9) Select menu "Window>Preferences", in the "Workbench->Label Decorations", check "Lomboz J2EE Decorators".  
> 10) Once you confirmed your selections, you will see the newly added toolbar button in the Eclipse toolbar and the different Lomboz wizards will be available to you from the “File->New ” menu.  
> Configure Lomboz  
> Some settings really MUST be properly configured for Lomboz to work. Follow these instructions to the point.  
>   
> Java Settings  
> You must make sure that Java projects have separate source and binary folders. Open the preferences dialog from "Window->Preferences" menu and expand the "Java->Build Path->New Project" settings. Make sure you set it up with this values:  
>   
> o Check the "folders" radio button.  
> o Source folder name should be "src".  
> o Output folder name should be "bin".  
> o Select "JRE_LIB variable" in the drop-down list for JRE libraries.  
>   
> Lomboz Settings  
> Most application servers use the standard Java compiler (javac) to compile JSP files. Javac is found in the tools.jar distributed with standard Java JSDKs (NOT JREs), that is why a proper JSDK must be installed for Lomboz (see above). You must select the tools.jar that will be used by the application servers here. It is normally found inside the “lib” folder under the JSDK installation.  
>   
> Open the preferences dialog from "Window->Preferences" menu and expand the Lomboz settings. Then enter the path to the tools.jar file, something like: C:\\j2sdk1.4.2_03\\lib\\tools.jar (depending on where you installed your JSDK). Leave the default values, but if Tomcat is used, you might want to check the setting for restarting server after deploy.  
>   
>