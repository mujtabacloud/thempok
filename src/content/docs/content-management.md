---
title: "Content & Markdown"
subtitle: "Add documentation pages, blog posts, and projects using clean Markdown files."
section: "Customization"
order: 4
readTime: "4 min read"
lastUpdated: "October 2026"
summary: "Write your technical articles and documentation in plain Markdown or MDX with type-safe frontmatter schema validation."
prev:
  title: "Styling & Dark Mode"
  slug: "styling-and-themes"
next:
  title: "GitHub Pages Deployment"
  slug: "deployment-guide"
---

## Frontmatter Setup

Astro pages and content collections use YAML frontmatter at the top of markdown files to declare metadata:

```yaml
---
title: "My New Article"
description: "A comprehensive guide on performance tuning."
publishDate: "2026-10-29"
author: "Thempok Contributor"
tags: ["Astro", "Performance", "Web"]
---
```

## Adding New Blog Posts

Simply create a new `.md` file in your blog directory. The title, tags, reading time, and date will automatically populate in the article index and RSS feed.

## Adding Documentation Pages

For technical documentation, configure the section ordering and table of contents in your data files or content collections. Sidebars automatically highlight the active article.
