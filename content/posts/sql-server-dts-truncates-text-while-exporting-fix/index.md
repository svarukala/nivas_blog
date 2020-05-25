---
title: Sql Server DTS Truncates Text While Exporting Fix
slug: Sql-Server-DTS-Truncates-Text-While-Exporting-Fix
generate-card: false
date: 2006-10-14
language: en
tags:
    - SharePoint
---


When you use the Data Transformation Services (DTS) Export/Import wizard, DTS may truncate column strings that are over 255 characters long if all of the following conditions exist:

|   |                                                                                                                              |
| - | ---------------------------------------------------------------------------------------------------------------------------- |
| • | The column is a character data type (varchar, char, nvarchar, nchar) and the column length is greater than 255 characters.   |
| • | DTS exports the column to a text file.                                                                                       |
| • | Delimited fields are used for exporting.                                                                                     |

  


## WORKAROUND

loadTOCNode(1, 'workaround'); Here are several methods that you can use to work around this problem:

|   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| • | Use fixed fields and export to a text file with the DTS Wizard or Package Designer. Both the DTS Export/Import Wizard and the DTS Package Designer provide the option to use fixed fields when you export data to a text file.  To use the DTS Export/Import wizard, you will see the following prompt when you choose the destination text file:Select Destination File FormatYou want to select **Fixed field - information is assigned into columns of equal width**.  To use the DTS Package Designer, you will see the following prompt when you are setting up the destination text file:Select file formatYou want to select **Fixed field - information is assigned into columns of equal width**. |