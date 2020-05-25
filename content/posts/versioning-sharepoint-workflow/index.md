---
title: Versioning SharePoint Workflow
slug: Versioning-SharePoint-Workflow
generate-card: false
date: 2010-03-24
language: en
tags:
    - SharePoint
---


Lets say you developed and deployed a complex state workflow using Visual Studio with WSPBuilder add on. Things are going smooth and the business came up with new set of requirements/changes to the workflow. What would be your approach?



You cannot just modify/update the Visual Studio project according to the new requirements and deploy it. This might entirely mess up your existing workflow items, especially the workflow instances which are in waiting mode i.e waiting for an external event are serialized and persisted in the SharePoint content database. When you deploy your modified workflow and when the workflow engine tries to deserialize the existing instance from DB it might fail as it cannot match with the updated workflow dll and thus end up halting the workflow process.



There is no out of the box solution to maintain versions of the same workflow. However there are workarounds to it. Please read [this blog entry](https://blogs.pointbridge.com/Blogs/herzog_daniel/Pages/Post.aspx?_ID=4) which is widely accepted and implemented.



The basic idea is to create a complete new workflow project with different name and solution id. Then deploy it and attach to the same doc. library. Then using the doc. library workflow settings select "no instances" for the old workflow and "allow" for the new workflow. This will attach the new workflow for any new items and the existings items will still continue with the old workflow.



\*\*If you are using InfoPath form to build the workflow task form then make sure that you have a new version of the infopath form with a different name.



Follow the below steps to easily make a new version of the existing workflow project:

1. Create a new project based on the WSPBuilder with Workflow project template and name it as same as your old workflow name appended with the version number. Ex. MyCompany.StateWorkflow.Ver2
2. Now right click the project and new state workflow project item from the WSPbuilder items. Provide the same name as exists in the old workflow project so that it creates the .CS and .Designer files with the same name.
3. Copy the .CS and .Designer files from your old workflow project to the new project replacing the newly created ones.
4. Compile and make sure the project is having no build errors. Its almost done.
5. Next steps would be to modify the workflow/elements xml files to bring it up to speed with the old workflow xml file entries. Also, make a new copy of the InfoPath task form name it appending the version number and copy to the new project structure.

The above may not apply for everyone and may not apply for SharePoint 2010 workflow. I documented the above steps so that I can come back and follow them whenever required.