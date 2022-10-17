---
title: Run your personal web site for pennies a day
date: 2022-10-15
tags: ['posts']
layout: blog-post
---

<!-- Excerpt Start -->
If the best programmers are lazy, are the best architects cheap? That's a topic for a future post, but today, I'll share how this site is hosted for $12 a year.

My requirements were simple:

1. quick & easy blog publishing ([WYSIWIG](https://en.wikipedia.org/wiki/WYSIWYG) not needed, but I don't want to author posts in HTML)
1. scores of 100 in [Lighthouse](https://github.com/GoogleChrome/lighthouse) categories of Performance, Accessibility, Best Practices & SEO 
1. full control of my domain name and [permalink](https://en.wikipedia.org/wiki/Permalink) URLs
1. web analytics of my choice (Google Analytics and CloudFlare)
1. custom code, as needed, with automated deployment
1. as close to free as possible (what can I say &mdash; I'm cheap!)  

<!-- Excerpt End -->
[Static site generation (SSG) is all the rage](https://hackernoon.com/rise-of-static-site-generators-and-the-destiny-of-cms-e2b8ff0d5fcc) and for good reason: pre-generated web pages are simple, fast, server and client resource efficient, and portable for hosting. I started with [Next.js with Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export) deploying to [GitHub Pages](https://pages.github.com/) using [GitHub Actions](https://github.com/features/actions). That checked the boxes for requirements 3 through 6, but 1 & 2 were going to be a bit more work, so I went looking for alternatives.

[Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) may be the most popular SSG, and it's endorsed by GitHub, but I just wasn't excited about brushing up on Ruby programming. Then I discovered [11ty](https://www.11ty.dev/). It was just what I needed! Here are some of **11ty's highlights**:

* It's written in JavaScript. Bonus, there's a [TypeScript starter on GitHub](https://github.com/eszterkv/eleventy-starter-typescript), but I haven't tried it yet.
* 'No code' in all the right places with support for a dozen [template languages](https://www.11ty.dev/docs/languages/). I went with  [Nunjucks](https://mozilla.github.io/nunjucks/) for site pages and Markdown for blog posts like this one.
* Robust support for [collections](https://www.11ty.dev/docs/collections/), [pagination](https://www.11ty.dev/docs/pagination/), and [permalinks](https://www.11ty.dev/docs/permalinks/) &mdash; requirements 1 & 3, check & check.
* Development is fast! Blazing fast builds (0.2s for this site) with [live reloading](https://www.11ty.dev/docs/usage/) & [minification](https://www.11ty.dev/docs/quicktips/inline-css/). Requirement 2 just got easier.
* A slew of [useful plugins](https://www.11ty.dev/docs/plugins/). Since I want to support feed readers, I quickly added the RSS plugin. Oops, I forgot that requirement.
* [Slinkity](https://slinkity.dev/)! _"Add React, Vue or Svelte components to your existing site with zero extra setup."_ What?! I'm definitely exploring this in the near future.

So that brings us to now: 11ty SSG, using GitHub Actions, deploying to GitHub Pages, hosted for free. Nice! You can check out the code for this site on [https://github.com/karlmayer/karlmayer-dev](https://github.com/karlmayer/karlmayer-dev); it's also open-source.

And the $12? That's just for the [Google .dev domain name](https://domains.google/tld/dev/). I like that Google put .dev on the [HSTS preload list](https://hstspreload.org/) &mdash; it's time to deprecate HTTP and go 'HTTPS only'.
