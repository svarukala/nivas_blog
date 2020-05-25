---
title: InfoPath Form HyperLink Open in Same Window
slug: InfoPath-Form-HyperLink-Open-in-Same-Window
generate-card: false
date: 2009-08-13
language: en
tags:
    - SharePoint
---


**Problem:**The hyperlink control in a browser enabled infopath form opens up in a new window. This might not be a good thing as a usability perspective. It might work for some and might not for many. This post is for those 'many'.



Solution:

_Note: This solution is valid only for the forms with managed code behind._



The solution I have is very trivial. Just drop a button on the form, stylize it to change its look and feel like an hyperlink. Then on the button click event of the form, just redirect the page to the URL you wanted to. There is a catch or two here.



**A)** On the click event, you make sure that the existing web request is completed before redirecting to your desierd page. So the code should look something like this:

> HttpContext.Current.Response.Redirect("http&#x3A;//somesite.com/page.html", **false**);

Passing the second parameter as 'false' we are ensuring that the current web request is completed and then redirected.



**B)**To make the button to be a hyperlink you need to do the following:



Right click the button select 'borders and shading', select None under presets. Then under the 'shading' tab select the radio button for 'No color'. Then change the font color to blue(hyperlinks are usually blue) and make it underlined.



After doign all this there is still one thing that remains, i.e the mouse turning into a hand on hover over the button. To accomplish this, from file menu, select save as source files. From the source files, edit the view1.xls file, to set the style to cursor:pointer for the button element. Then open up the manifest.xsf in design mode. You will see the button as an hyper link including mouse hover.



_**Update (09/03/09):**_



There is a kind of caveat for the above implementation. Whenever the Response.Redirect is done, the new page from code behind of the InfoPath Form, eventhough the page is redirected, the URL in the browser address bar remains the same. It behaves as the Server.Transfer method.



To fix this anomaly the workaround is redirect to an intermediary page which in turn redirects to the actual page you want to redirect. The intermediary page could be a simple page with java script redirect method.