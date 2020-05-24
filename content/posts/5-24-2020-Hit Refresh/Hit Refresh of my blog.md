---
title: Hit Refresh of my blog using GatsbyJS, Netlify
slug: hit-refresh-my-blog
generate-card: true
cover: ./refresh.jpg
date: 2020-05-24
language: en
tags:
    - GatsbyJS
    - General
    - Netlify
---

I started blogging on MSDN Blog platform which is currently retired. My blog articles are still accessible [here](https://docs.microsoft.com/en-us/archive/blogs/svarukala/). Since Microsoft MSDN Blog platform was retired, I have been thinking to migrate my content to another blog platform. I've considered various options, few listed below:
* LinkedIn articles
* Github pages
* Medium
* Go back to my [old blog](https://sharenotes.wordpress.com/)
  
I started learning about static site generators based on JAMStack:
* GatsbyJS
* Hugo
* Jekyll
* Nuxt
* NextJS, etc.

Based on my interest to learn ReactJS and also few other benefits, I decided to go with GatsbyJS. With GatsbyJS, you have 100's of options to create a blog site. Its based on JAMStack. 

Q) **What is JAMStack?** <br/>
A) Web app developed using (J)avaScript, (A)PIs, (M)arkup

GatsByJS provides the ReactJS engine that generates static(html) pages for the site. You can host your Gatsby project in GitHub, and then configure a continuous integration pipeline from GitHub to Netlify Hosting provider (which by the way is free). Essentially, whenever a new page is added to GitHub, it automatically triggers a Build on Netlify servers. Netlify picks the latest code from GitHub, builds the project which generates static pages to serve. Netlify also supports, custom domain configuration.

GitHub repository of my blog: https://github.com/svarukala/nivas_blog<br/>
Netlify Url of my blog: https://nivas.netlify.app/

GatsbyJS: https://www.gatsbyjs.org/ <br/>
Netlify: https://www.netlify.com/


Feel free to reach out if you have any question!