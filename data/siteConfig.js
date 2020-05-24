module.exports = {
  siteTitle: 'Srinivas Varukala\'s Blog',
  siteDescription: 'Personal blog - mostly technical topics related to Microsoft Technologies',
  authorName: 'Srinivas Varukala',
  twitterUsername: 'svarukala',
  authorAvatar: 'me.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  I work with customers helping them achieve more using Microsoft Technologies. I am in my 9th year with Microsoft as of March 2020. I get to work with really smart people (both at Microsoft and Customers). Helping customers, removing any blockers, rapid prototyping is my core work.
  `,
  siteUrl: 'https://nivas.org/',
  disqusSiteUrl: 'https://nivas.org',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/blog', // Note: it must *not* have a trailing slash.
  siteCover: 'code.jpg', // file in content/images
  googleAnalyticsId: 'UA-99814-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/me.png',
  postsPerPage: 6,
  disqusShortname: 'nivas',
  headerTitle: 'Srinivas Varukala\'s Blog',
  headerLinksIcon: 'me.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-me',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-me',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/svarukala',
        },
        {
          label: 'Website',
          url: 'https://nivas.org',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/svarukala',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/svarukala/',
        },
      ],
    },
  ],
}
