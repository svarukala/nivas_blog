---
title: SAML Claims User Id Format
slug: SAML-Claims-User-Id-Format
cover: ./cover.png
generate-card: false
date: 2014-03-26
language: en
tags:
    - SharePoint
---

  

SAML Claims User Id Format
==========================

[Srinivas Varukala](https://social.msdn.microsoft.com/profile/Srinivas Varukala) 3/26/2014 11:31:00 AM

* * *

I was working with a customer and shared this information about the format in which user identity claims (aka user id) appears in any Claims based site. I shared below information with the customer and it appeared they didn't know about this until then. Sharing this information here for the greater community.

SharePoint 2013 and SharePoint 2010 display identity claims with the following encoding format:
```xml
<IdentityClaim>:0<ClaimType><ClaimValueType><AuthMode>|<OriginalIssuer (optional)>|<ClaimValue>
```
_Example: i:05.t|saml [provider|spuserid@contoso.lab](mailto:provider|spuserid@contoso.lab)_

Where:

*     
    **IdentityClaim** indicates the type of claim and is the  
    following:
    1. “**i**” for an identity claim
    2. “**c**” for any other claim

*    **ClaimType** indicates the format for the claim value and  is the following:

    1.   **#** for a user logon name
    2.   **.** for  an anonymous user
    3.   **5** for an email address
    4.   **!** for an identity provider
    5.   **+** for a Group security identifier (SID)
    6.   **\-** for a role
    7.   **%** for a farm ID
    8.   **?** for a name identifier
    9.   **\\** for a private personal identifier (PPID)

*   **ClaimValueType** indicates the type of formatting for the claim value and is the following:
    1.   **.** for a string
    2.   **+** for an RFC 822-formatted name
    
*   **AuthMode** indicates the type of authentication used to obtain the identity claim and is the following:
    1. **w** for Windows claims (no original issuer)
    2.    **s** for the local SharePoint security token service (STS)  (no original issuer)
    3. **t** for a trusted issuer
    4. **m** for a membership issuer
    5. **r** for a role provider issuer
    6. **f** for forms-based authentication
    7. **c** for a claim provider
               
*   **OriginalIssuer** indicates the original issuer of the claim.
*   **ClaimValueType** indicates the value of the claim in the  
*   **ClaimType** format.