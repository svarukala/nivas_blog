---
title: Solution to handle large SharePoint lists or library
slug: Solution-to-handle-large-SharePoint-lists-or-library
generate-card: false
date: 2009-11-10
language: en
tags:
    - SharePoint
---


SharePoint has limitations at various levels. Below is a quick information table:

|                   |                                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| **Container****** | **\[recommended limitation of contents]******                            |
| Web Application   | \[_150000 Site Collections_ ] _(with the limit of 50000 per content db_) |
| Site Collection   | \[_250000 sites_ ]                                                       |
| Site              | \[_2000 sub sites/sites_]                                                |
| Site/Sub site     | \[_2,000 libraries and lists_]                                           |
| Library/List      | \[_10,000,000 documents/items and 2,000 items per view_]                 |

The above are recommended limitations by Microsoft. Please read the [article](http://technet.microsoft.com/en-us/library/cc262787.aspx) from MSDN for detailed information and benchmarks. However these limitations vary depending on the hardware specs (YMMY): databases, web applications and the arrangement of sites/site collections. Joel Oleson\[MVP] has provided a [limitations chart](http://www.sharepointjoel.com/Lists/Posts/Post.aspx?List=0cd1a63d-183c-4fc2-8320-ba5369008acb&ID=187) based on his real time experience.



Below is an excerpt from a [white paper](http://go.microsoft.com/fwlink/?LinkId=95450&clcid=0x409) released by Microsoft on handling very large lists.

> For typical customer scenarios in which the standard Office SharePoint Server 2007 browser-based user interface is used, the recommendation is that a single list should not have more than 2,000 items per list container. A container in this case means the root of the list, as well as any folders in the list — a folder is a container because other list items are stored within it. A folder can contain items from the list as well as other folders, and each subfolder can contain more of each, and so on. For example, that means that you could have a list with 1,990 items in the root of the site, 10 folders that each contain 2,000 items, and so on. The maximum number of items supported in a list with recursive folders is 5 million items.

Based on the above excerpt and simplifying it further we can achieve a viable scalable and highly available solution to implement very large lists. Here I am going to discuss a use case which involves large lists and how it can be handled.



**Use case/Problem case:**



Highly used sharepoint site where user submits requests using various infopath forms which are submitted to the document libraries which has custom workflow attached to it. On an average there would be around 900 to 1000 requests submitted per day.



**Proposed Solution:**



With the usage rate mentioned in the above use case the list will have accumulate 200000 items in the document library within the first six months. Much against to this the recommended limit is to have 2000 items per list/library before it starts showing a degradation in the performance. The only way to get around this limitation is to use folders within the library and distribute the items/files within these folders. We can even have nested folder structure. The maximum number of items supported in a list with recursive folders is 5 million items. But having a recursive folder structure means more complexity and as data grows there will be manageability concerns. Without using recursive folder structure and thus using a simple solution we can have 4 million items in a single list/library.



The solution is very simple; We will have 2000 folders in a library (since 2000 is the limit on number of items a library can have). Then each folder will have 2000 items within it. Thus the total number of items the library holds with this approach is 2000 \* 2000 which is 4 million.



**Implementation Details**



**_Assumption:_** This implementation is based on the assumption that every new infopath form request submitted will be assigned a unique auto-incremented integer as the identifier. This can be implemented by using custom sql database table with an auto-increment integer column. For each form request submitted a new row will be inserted which will assign an unique integer to it.



The integer id assigned to the request submitted forms the crucial part of this solution. Using this we can identify where to store a new request and what is the location/url of an existing(already saved) request item. This comes in very handy in various places (like sending email with item url, building custom views over the lists, restoring data etc).



To determine the library/list to which the request/item will be saved will be determined by the following algorithm.

> _Input: \[itemid : integer] step 1: set variable thresholdItems = 2000 step 2: var delta = itemid/(thresholdItems\*thresholdItems) step 3: delta = Math.Ceiling(delta); Output: "Repo"+ delta_

Sample Runs:

<!-- Table goes in the document BODY -->

| Input   | Output |
| ------- | ------ |
| 2000    | Repo1  |
| 6500    | Repo1  |
| 2300300 | Repo1  |
| 4000000 | Repo1  |
| 4000001 | Repo2  |

As we can observe in the above table the until the item id is 4 million i.e 4000000 the library name is Repo1 and from 4000001 onwards the library name changed to Repo2. Similarily the next library Repo3 is required for the item id = 4000001 + 4000000 = 8000001. So on and on...



Note: We can utilize elevated privilege code to create the library with the required name on the fly whenever it is needed.



To get to the folder to which the item will be saved with in the library use the following algorithm.

> _Input: \[itemid : integer] step 1: set variable thresholdItems = 2000 step 2: var delta = itemid/(thresholdItems) step 3: delta = Math.Ceiling(delta); Output: delta_

Sample Runs:

<!-- Table goes in the document BODY -->

| Input | Output |
| ----- | ------ |
| 1     | 1      |
| 837   | 1      |
| 2000  | 1      |
| 2001  | 2      |
| 3500  | 2      |
| 4000  | 2      |
| 4001  | 3      |

As you can see the folder name result changes for every 2000th item. So all the items with id between 1 and 2000 goes to the folder named "1". All the items with id between 2001 and 4000 goes into folder named "2". So on and on..



Note: once again you can always use elevated privilege code to create the folders on the fly as and when needed.



Below is the final outcome of this solution:



\[gallery]



Since we now have the library name and folder name we can build the complete path/url easily. The format will be http&#x3A;//yoursitecollection.com/libraryname/foldername/itemname. Using this and wrapped between elevated privileges if required we can always upload the file as per the derived location.



Example: http&#x3A;//yoursitecollection.com/Repo1/1/1.xml http&#x3A;//yoursitecollection.com/Repo1/1/1500.xml http&#x3A;//yoursitecollection.com/Repo1/1/2000.xml http&#x3A;//yoursitecollection.com/Repo1/2/2001.xml http&#x3A;//yoursitecollection.com/Repo1/2/3988.xml http&#x3A;//yoursitecollection.com/Repo1/2000/4000000.xml http&#x3A;//yoursitecollection.com/Repo2/1/4000001.xml http&#x3A;//yoursitecollection.com/Repo2/1/4001390.xml and so on and on....



I will soon provide the code to create the library/folder on the fly and also the code to upload the item to the derived location.