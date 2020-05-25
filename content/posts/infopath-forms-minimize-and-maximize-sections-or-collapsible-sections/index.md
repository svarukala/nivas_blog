---
title: InfoPath Forms - Minimize and Maximize Sections or Collapsible Sections
slug: InfoPath-Forms-Minimize-and-Maximize-Sections-or-Collapsible-Sections
generate-card: false
date: 2008-04-28
language: en
tags:
    - SharePoint
---


Recently, I have been working on a project, in which we used InfoPath extensively for designing various forms. Many of the forms has repeated information which we categorized as Header, Footer, Tracking Details etc. [InfoPath template parts](http://office.microsoft.com/en-us/infopath/HA101507461033.aspx) helped in this aspect.



Having solved that, the form still looks a little bit huge with many fields most of which are pre-populated and the user doesn't have to worry about them. So, I thought having them collapsed initially by default and provide the user a way to maximize and minimize(collapse) the various sections would solve this issue. Something like below. See the screenshots.



At first thought, we go about searching for those tiny buttons to use for the maximize and minimize, instead there is a tricky way to do this which Microsoft uses in many windows applications. Just drop 2 buttons and put the label as 3 and 6. Now, selecting the buttons, change the font to "Marlett", boom!, you will see the buttons changed to nice tiny triangular buttons. To make it even better, right click the button, select border/shading and select None for outline. This will merge the buttons with the background. See the below screen shots:



\[gallery]

1. Just put those 2 button in a single row table and place the table above the section, you want to minimize/maximize.
2. Add a boolean field to the datasource lets say, sectionToggler. Set default to false.
3. Open the conditional formatting settings for the section: add rules to hide it if sectionToggler = false and show it(not hide) when sectionToggler = true.
4. Add rules on the buttons: to set the sectionToggler value to true or false depending on the button.
5. Open up the conditional formatting settings for both the buttons and add rules to hide it based on teh sectionToggler.

More links:

-
- <http://blogs.msdn.com/infopath/archive/2004/06/01/145557.aspx>
- <http://>blogs.msdn.com/**infopath**/archive/2005/02/23/378968.aspx
- <http://office.microsoft.com/en-us/infopath/HA010833481033.aspx>
- <http://office.microsoft.com/en-us/infopath/CH010421861033.aspx>