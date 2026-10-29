---
title: "DocsNova"
tagline: "High-speed technical documentation with collapsible sidebar & instant search"
description: "Engineered for developers publishing API references, SDK documentation, and knowledge bases. Features responsive split-pane navigation, syntax-highlighted code blocks, copy-to-clipboard buttons, callout banners, and version dropdown support."
category: "Documentation"
tags:
  - "Docs"
  - "Technical"
  - "Search"
  - "Markdown"
  - "API"
technologies:
  - "Astro"
  - "TypeScript"
  - "Content Collections"
  - "Vanilla CSS"
featured: true
latest: false
author:
  name: "Alex Rivera"
  avatarText: "AR"
  url: "https://github.com/thempok"
version: "2.0.4"
lastUpdated: "October 2026"
license: "MIT"
stars: 512
downloads: 2890
preview:
  themeColor: "#18181b"
  accentColor: "#10b981"
  heroHeadline: "API Reference & Architecture Documentation"
  mockupType: "docs"
demoUrl: "https://demo.thempok.dev/preview/docs-nova"
githubUrl: "https://github.com/thempok/theme-docs-nova"
requirements:
  - "Node.js 18+"
  - "Astro 4+"
  - "Markdown or MDX files"
features:
  - "Collapsible multilevel sidebar with active scroll spy"
  - "Instant client-side doc search indexed at build time"
  - "GitHub-style alert banners (Note, Tip, Warning, Caution)"
  - "Interactive code blocks with tabbed languages and one-click copy"
  - "Breadcrumb navigation and Next/Previous article footer links"
  - "Mobile-friendly drawer menu with touch-friendly navigation"
installCommands:
  create: "npm create astro@latest -- --template thempok/docs-nova"
  gitClone: "git clone https://github.com/thempok/theme-docs-nova.git my-docs"
  install: "npm install"
  run: "npm run dev"
projectStructure:
  - "src/content/docs/ [Markdown articles]"
  - "src/components/DocSidebar.astro"
  - "src/components/TableOfContents.astro"
  - "src/components/SearchModal.astro"
  - "src/layouts/DocsLayout.astro"
highlights:
  - title: "Astro Content Collections"
    desc: "Strict frontmatter schema validation protects against typos."
  - title: "Zero Third-Party Search Cloud"
    desc: "Pure lightweight static search indices without Algolia fees."
  - title: "Keyboard Shortcuts"
    desc: "Quick Ctrl+K search modal access and Esc to close."
---

DocsNova provides documentation infrastructure with instant client-side search, zero third-party tracking, and accessible navigation.
