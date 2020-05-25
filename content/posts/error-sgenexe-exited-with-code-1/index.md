---
title: Error "sgen.exe" exited with code 1 
slug: Error-sgen.exe-exited-with-code-1
generate-card: false
date: 2008-03-23
language: en
tags:
    - SharePoint
---


While building a project or solution, if you get the error like: "sgen.exe" exited with code 1, then the most probable reason is because you have a different version of the same project's DLL in the GAC.



Solution:

1. Open the GAC (C:\\Windows\\Assembly), find the DLL corresponding to your project.
2. Right click on it and select uninstall

Now re-build your project and the problem must be gone.