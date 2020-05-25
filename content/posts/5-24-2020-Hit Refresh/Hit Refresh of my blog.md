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
This is my second 'Hit Refresh' for my blogging. Pre-Microsoft life I used to blog using Wordpress hosted site. Post-Microsoft my first 'hit refresh' happened and I started blogging on MSDN Blog platform. My blog articles are still accessible [here](https://docs.microsoft.com/en-us/archive/blogs/svarukala/). Since Microsoft MSDN Blog platform was retired, I have been thinking to migrate my content to any other blog platform. I've considered various options, few listed below:
* LinkedIn articles
* Github pages
* Medium
* Go back to my [old blog](https://sharenotes.wordpress.com/)

Q) **What is JAMStack?** <br/>
A) Static web apps developed using (J)avaScript, (A)PIs, (M)arkup

I started learning about static site generators based on JAMStack. To name a few:
* GatsbyJS
* Hugo
* Jekyll
* Nuxt
* NextJS, etc.

Based on my interest to learn ReactJS and also few other benefits, I decided to go with GatsbyJS. With GatsbyJS, you have 100's of starter template options to create a blog site.

GatsByJS provides the ReactJS engine that generates static(html) pages for the site. You can host your Gatsby project in GitHub, and then configure a continuous integration pipeline from GitHub to Netlify Hosting provider (which by the way is free). Essentially, whenever a new page is added to GitHub, it automatically triggers a Build on Netlify servers. Netlify picks the latest code from GitHub, builds the project which generates static pages to serve. Netlify also supports, custom domain with SSL configuration ( I am using custom domain for this site).

GatsbyJS also supports GraphQL. Using GraphQL, there is a way to source articles/posts from other blog engines (like Wordpress). I also decided to consolidate all my posts from my old Wordpress blog. So I exported the posts and created some scripts to create markdown files. I will link to the scripts soon.


GitHub repository of my blog: https://github.com/svarukala/nivas_blog<br/>
Netlify Url of my blog: https://nivas.netlify.app/

GatsbyJS: https://www.gatsbyjs.org/ <br/>
Netlify: https://www.netlify.com/
Convert wordpress to md: https://swizec.com/blog/moving-13-years-of-wordpress-blog-to-gatsby-markdown/swizec/9204