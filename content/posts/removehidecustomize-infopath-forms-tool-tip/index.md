---
title: Remove/Hide/Customize InfoPath Forms Tool Tip
slug: RemoveHideCustomize-InfoPath-Forms-Tool-Tip
generate-card: false
date: 2009-10-29
language: en
tags:
    - SharePoint
---


On your sharepoint front end servers, go to the following location C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\12\\TEMPLATE\\LAYOUTS\\INC\\



Make a backup copy of ifsmain.css. Then edit the ifsmain.css file as follows: Search (ctrl + F) for the css class ".errorDiv", it is something like below:



**To hide/remove tool tip:** .errorDiv { z-index:100;position:absolute;top:0px;left:0px;display:none;width:300px;padding:2px 3px; border:1px solid #B22828;background:#FFFED7;color:#B22828;



font-family:Verdana; font-size:x-small; text-decoration:none;font-weight:normal;



}



Modify the above script by adding "!important" just beside display:none. The modified .errorDiv is as follows:



.errorDiv { z-index:100;position:absolute;top:0px;left:0px;display:none !important;width:300px;padding:2px 3px; border:1px solid #B22828;background:#FFFED7;color:#B22828;



font-family:Verdana; font-size:x-small; text-decoration:none;font-weight:normal; }



You can further customize the tool tips as per your needs if that is your requirement instead of hiding it.



The only **drawback**with this approach is that it will affect the complete server farm. Thus, all the infopath forms on all the sites will be affected with this change.



**_Update (12/1/09):_**



Good news is that we were able to figure out how to customize the tool tip specific to a site or page level thus avoiding the drawback mentioned in the above method of implementation. Using a content editor web part you can insert the required Html (also CSS) into a page. Leveraging this technique we were able to add a content editor web part (CEWP) to our custom application page which hosts the infopath form. This content editor web part envelopes the CSS changes required to the tool tip. Below is the CEWP content we added to our page:

> &lt;WebPartPages:ContentEditorWebPart runat="server" \_\_MarkupType="xmlmarkup" WebPart="true" \_\_WebPartId="{87D17157-ECD0-49D6-9906-2DAA4C400992}"> &lt;WebPart xmlns:xsi="http&#x3A;//www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http&#x3A;//www.w3.org/2001/XMLSchema" xmlns="http&#x3A;//schemas.microsoft.com/WebPart/v2"> &lt;Title>Content Editor Web Part&lt;/Title> &lt;FrameType>None&lt;/FrameType> &lt;Description>Use for formatted text, tables, and images.&lt;/Description> &lt;IsIncluded>true&lt;/IsIncluded> &lt;PartOrder>1&lt;/PartOrder> &lt;FrameState>Normal&lt;/FrameState> &lt;Height /> &lt;Width /> &lt;AllowRemove>true&lt;/AllowRemove> &lt;AllowZoneChange>true&lt;/AllowZoneChange> &lt;AllowMinimize>true&lt;/AllowMinimize> &lt;AllowConnect>true&lt;/AllowConnect> &lt;AllowEdit>true&lt;/AllowEdit> &lt;AllowHide>true&lt;/AllowHide> &lt;IsVisible>true&lt;/IsVisible> &lt;DetailLink /> &lt;HelpLink /> &lt;HelpMode>Modeless&lt;/HelpMode> &lt;Dir>Default&lt;/Dir> &lt;PartImageSmall /> &lt;MissingAssembly>Cannot import this Web Part.&lt;/MissingAssembly> &lt;PartImageLarge>/\_layouts/images/mscontl.gif&lt;/PartImageLarge> &lt;IsIncludedFilter /> &lt;ExportControlledProperties>true&lt;/ExportControlledProperties> &lt;ConnectionID>00000000-0000-0000-0000-000000000000&lt;/ConnectionID> &lt;ID>g_87d17157_ecd0_49d6_9906_2daa4c400992&lt;/ID> &lt;ContentLink xmlns="http&#x3A;//schemas.microsoft.com/WebPart/v2/ContentEditor" /> &lt;Content xmlns="http&#x3A;//schemas.microsoft.com/WebPart/v2/ContentEditor">&lt;!\[CDATA\[&lt;style type="text/css"> **.errorDiv** { z-index:100;position:absolute;top:0px;left:0px;display:none;width:200px;padding:2px 3px;border:1px solid #B22828;background:#FFFED7;color:#B22828;font-family:Arial; font-size:xx-small; text-decoration:none;font-weight:normal; } **.errorDivClickable** { z-index:100;position:absolute;top:0px;left:0px;display:none;width:300px;padding:2px 3px; border:1px solid #B22828;background:#FFFED7;color:#B22828; font-family:Arial; font-size:xx-small; cursor:pointer;cursor:hand;font-weight:normal; } &lt;/style>]]>&lt;/Content> &lt;PartStorage xmlns="http&#x3A;//schemas.microsoft.com/WebPart/v2/ContentEditor" /> &lt;/WebPart> &lt;/WebPartPages:ContentEditorWebPart>