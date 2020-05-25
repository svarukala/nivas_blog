---
title: Tool to purge or delete site collections safely and quickly
slug: Tool-to-purge-or-delete-site-collections-safely-and-quickly
generate-card: false
date: 2007-11-17
language: en
tags:
    - SharePoint
---


I had to develop this tiny utility to delete around 1500 site collections which are autogenerated by some other tool. The autogenerated site collections were created in the format like this: http&#x3A;//sharepointsite.com/clients//



So this tool of mine identifies the site collections which matches the above format and deletes them. At the same time it keeps log of each and every action taken in the log file provided. If anyone needs to delete site collections in thousands then just modify the code according to your need.



Belowis a screenshot of the tool:



[![Utility Tool](http://sharenotes.files.wordpress.com/2007/11/tool.jpg)](./img/2007-11-tool.jpg "Utility Tool")

## [Solution Files](http://sharenotes.files.wordpress.com/2007/11/sharepointtoolssolutionzip.doc "Direct link to file")

(since wordpress doesnt allow to upload zip files, I renamed the zip file with a .doc extension.)