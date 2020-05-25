---
title: Run batch files invisible mode or minimized
slug: Run-batch-files-invisible-mode-or-minimized
generate-card: false
date: 2006-12-08
language: en
tags:
    - SharePoint
---


The process take 3 files. one launch.bat one invis.vbs and one (your program)

in launch.bat(this files runs your program silently) put in...  


wscript.exe "C:\\yourpath\\invis.vbs" "your file.bat"  


in invis.vbs put...  
  
CreateObject("Wscript.Shell").Run """" & WScript.Arguments(0) & """", 0, False  
  
and finaly in your file put whatever u want...  
  
echo off  
erase c:\\junk.txt  


well your done just open up launch.bat