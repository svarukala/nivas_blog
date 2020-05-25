---
title: InfoPath Forms Code Error Schema validation found non-data type errors
slug: InfoPath-Forms-Code-Error-Schema-validation-found-non-data-type-errors
generate-card: false
date: 2008-03-23
language: en
tags:
    - SharePoint
---


As per Microsoft InfoPath [blog](http://blogs.msdn.com/infopath/archive/2006/11/28/the-xsi-nil-attribute.aspx) this error occurs when we are trying to set a nodes element value and the node has an xsi:null attribute. So, before setting any value check if the node has the xsi:nil attribute and if so delete that attribute. Belowcode snippe is from the same [blog](http://blogs.msdn.com/infopath/archive/2006/11/28/the-xsi-nil-attribute.aspx) which can be used as a generic method before setting any value.

> publicvoid DeleteNil(XPathNavigator node)
>
> {
>
> if(node.MoveToAttribute("nil", "http&#x3A;//www.w3.org/2001/XMLSchema-instance"))
>
> node.DeleteSelf();
>
> }

I had similar problem while appending rows to a repeating table using the XmlWriter in the code behind for an InfoPath Form. Unfortunately, the code snippet didn't solved my problem. Examining the xml contained in the node using the innerxml property, I didn't find any xsi:nil anywhere. However after struggling for 2 hours I was able to find the solution and this problem is specific to the repeating table. Solution: **The order in which we are appending the values in the code should be in the same order as is in the form design's data source.** Below is a more detailed explanation. The repeating table in the InfoPath Form design was as follows:



\-commentTable --commentRow ---userID ---commentText ---occurrenceTime



commentTable being the root of the repeating table control. commentRow is the repeating table. The columns within a row are and its order is as show above: userID, commentText, occurrenceTime.



In the code behind of the form, I have my code as follows:



`myRoot = MainDataSource.CreateNavigator(); node = myRoot.SelectSingleNode("/my:Main/my:commentTable", NamespaceManager); DeleteNil(node); using(XmlWriter writer = node.AppendChild()) {`

> `writer.WriteStartElement("commentRow", myNamespace);` `writer.WriteElementString("userID", myNamespace, "user id");` `writer.WriteElementString("occurrenceTime", myNamespace, "12/20/08 10:00:00");` `writer.WriteElementString("commentText", myNamespace, "test comment");` `writer.WriteEndElement();` `writer.Close();` ``

`}`



Everything looks perfect! Err... No!, the order in which I am writing the xml into the node is not in the correct sequence as it is in the InfoPath form design. In my code i am trying to write the 'occurrenceTime' before the 'commentText' which is not as per the design. So swapping it solved my problem. Though it is silly its important for the xml schema and that is the reason the schema validation fails.