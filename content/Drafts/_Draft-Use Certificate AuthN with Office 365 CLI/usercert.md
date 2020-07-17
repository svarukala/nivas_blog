Contents {#contents .TOC-Heading}
========

[CERTIFICATE GENERATION 1](#certificate-generation)

[AZURE AD APPLICATION REGISTRATION
2](#azure-ad-application-registration)

[TEST LOCALLY 3](#test-locally)

[Use Certificate in Azure DevOps Pipeline
4](#use-certificate-in-azure-devops-pipeline)

[Sample Pipeline 5](#sample-pipeline)

Using certificate authN with Office 365 CLI

\#Using username and password

login \--authType password \--userName user\@contoso.com \--password
pass\@word1

\#Using certificate and AAD app id (app only)

https://pnp.github.io/office365-cli/user-guide/connecting-office-365/\#log-in-using-a-certificate

CERTIFICATE GENERATION
======================

1.  Create self-signed certificate of type Personal Information Exchange
    (PFX) or Privacy Enhanced Mail (PEM)

2.  For windows, install openssl client. I used:
    <http://slproweb.com/products/Win32OpenSSL.html>

> NOTE: Instructions are assuming openssl client is extracted to
> **c:\\OpenSSL** folder.

3.  Navigate to the OpenSSL bin directory.

    a.  c:\\OpenSSL\\bin\\ in our example.

4.  Right-click the openssl.exe file and select Run as administrator.

5.  Enter the following command to begin generating a certificate and
    private key

> openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout
> privateKey.key -out certificate.cer

6.  You will then be prompted to enter applicable Distinguished Name
    (DN) information, totaling seven fields:

7.  Once completed, you will find the certificate.crt and privateKey.key
    files created under the \\OpenSSL\\bin\\ directory.

8.  Create a new Personal Information Exchange (.PFX) file using the
    certificate and private key as inputs from above step.

> openssl pkcs12 -export -out protected.pfx -inkey privateKey.key -in
> certificate.cer -password pass:pass\@word1

9.  At this point the protected.pfx file can be used to log in the
    Office 365 CLI. We will come back to this step later.

Artifacts from this section:

a.  Certificate.cer

b.  privateKey.key

c.  protected.pfx

AZURE AD APPLICATION REGISTRATION
=================================

1.  Create new Azure AD App with a valid name. Leave all other
    fields/options as-is.

2.  Save the app id and tenant id.

3.  Give below "application" permissions to the app

> NOTE: Microsoft Graph permission is not a prerequisite. Ignore it.

4.  Make sure the Admin Consent is provided for all the permissions.

5.  Go to "Certificates & Secrets" and choose "Upload certificate" to
    upload the certificate.cer file created in step 7 in first section.

> NOTE: Instead of upload certificate, its also possible to manually
> update the manifest file.

6.  Save the thumbprint to use later.

Artifacts from this section:

a.  App Id

b.  Tenant ID

c.  Thumbprint

TEST LOCALLY
============

1.  Add below environment variables on your PC.

    a.  OFFICE365CLI\_AADAPPID = App Id

    b.  OFFICE365CLI\_TENANT = Tenant ID

2.  Test your certificate by trying to login using O365 CLI in terminal
    window (PS or Command Win)

> login \--authType certificate \--certificateFile
> C:\\OpenSSL-Win64\\bin\\protected.pfx \--thumbprint
> 5D500FE3BTRUNCATED563173009BC \--password pass\@word1
>
> Note: Change the certificateFile, thumbprint, password as per your env

3.  Run some sample commands

    a.  Status

    b.  Spo app list

Use Certificate in Azure DevOps Pipeline
========================================

1.  Go to your ADO project. Go to Pipelines \> Library page.

2.  Select "Secure files" tab. Use the + Secure file button to upload
    the pfx file.

3.  To access the certificate in your YAML pipeline, please use below
    script tasks.

> - script: echo Building!
>
>     - task: DownloadSecureFile\@1
>
>       name: caCertificate
>
>       displayName: \'Download CA certificate\'
>
>       inputs:
>
>         secureFile: \'protected.pfx\'
>
>     - script: \|
>
>         echo Found cert at \$(caCertificate.secureFilePath) 
>
>  \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
>
>     \#\# login to Office 365 CLI
>
>  \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
>
>     - script: o365 login \$(o365\_app\_catalog\_site\_url) \--authType certificate \--certificateFile \$(caCertificate.secureFilePath) \--thumbprint \$(cert\_thumbprint) \--password pass\@word1
>
>       displayName: Login to Office365

4.  When the pipeline executes the first time, you will see a prompt to
    approve the usage of the certificate. See below screenshot:

Sample Pipeline
===============

Below is a sample yaml pipeline in full that worked for me:

trigger:

  branches:

    include:

      - \'\*\'

variables:

  OFFICE365CLI\_AADAPPID: \'80fdc955-8677-4251-8d49-050d02071c15\'

  OFFICE365CLI\_TENANT: \'216e190d-67e4-4a6e-98bd-15b8468e5928\'

  o365\_app\_catalog\_site\_url: \'https://m365x130314.sharepoint.com/sites/appcat\'

  o365cli\_app\_catalog\_scope: \'tenant\'

  node\_version: \'10.x\'

  cert\_thumbprint: \'5D500FE3B7543FCC61D4DCFD0C164563173009BC\'

pool:

  vmImage: ubuntu-latest

stages:

- stage: Build

  jobs:

  - job: BuildJob

    steps:

    - script: echo Building!

    - task: DownloadSecureFile\@1

      name: caCertificate

      displayName: \'Download CA certificate\'

      inputs:

        secureFile: \'protected.pfx\'

    - script: \|

        echo Found cert at \$(caCertificate.secureFilePath) 

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    \#\# specify which node version to use

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    - task: UseNode\@1

      displayName: Set to Node.js \$(node\_version)

      inputs:

        version: \$(node\_version)

      condition: ne(\'\$(node\_version)\', \'\')

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    \#\# install Office 365 CLI

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    - script: sudo npm install \--global \@pnp/office365-cli

      displayName: Install Office365 CLI

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    \#\# login to Office 365 CLI

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    - script: o365 login \$(o365\_app\_catalog\_site\_url) \--authType certificate \--certificateFile \$(caCertificate.secureFilePath) \--thumbprint \$(cert\_thumbprint) \--password pass\@word1

      displayName: Login to Office365

    - script: ls -R

      displayName: List all files in working directory

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    \#\# upload \*.sppkg to the target app catalog

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    - script: o365 spo app add \--filePath \"./test-cert/react-application-injectcss.sppkg\" \--appCatalogUrl \$(o365\_app\_catalog\_site\_url) \--scope tenant \--overwrite

      displayName: Upload SharePoint package to Site Collection App Catalog

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    \#\#deploy the package

    \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

    - script: o365 spo app deploy \--name react-application-injectcss.sppkg \--appCatalogUrl \$(o365\_app\_catalog\_site\_url) \--scope tenant

      displayName: Deploy SharePoint package      
