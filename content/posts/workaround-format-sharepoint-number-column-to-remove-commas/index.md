---
title: Workaround Format SharePoint number column to remove commas
slug: Workaround-Format-SharePoint-number-column-to-remove-commas
generate-card: false
date: 2010-05-11
language: en
tags:
    - SharePoint
---


Let's say you have a column named "TicketNumber" of number type in your list. By default SharePoint formats it to show with commas. If your requirement is not to show those comma's then here is a workaround.



Create another column of 'Calculated' column type and set the formula as follows:



=TEXT(Original_Number_Column_Name,"0")



_Ex:__=TEXT(\[TicketNumber],"0")_



And then use the calculated column in place of your original column for display purposes.