---
title: the query processor could not produce a query plan from the optimizer because a query cannot update a text ntext or image column and a clustering key
slug: the-query-processor-could-not-produce-a-query-plan-from-the-optimizer-because-a-query-cannot-update-a-text-ntext-or-image-column-and-a-clustering-key
generate-card: false
date: 2006-07-09
language: en
tags:
    - SharePoint
---


Heres is the solution if see the error something like:  
  


> the query processor could not produce a query plan from the optimizer because a query cannot update a text ntext or image column and a clustering key at the same time.

  
  
  
In your update sql statement dont set the primary key and index/clustered key values  
and also i guess the ntext or image fields.... and that shud fix this silly problem which I know is annoying.