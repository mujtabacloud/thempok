---
title: "Theme Architecture"
subtitle: "A tour of the folder layout, layout wrappers, components, and static asset handling."
section: "Getting Started"
order: 2
readTime: "4 min read"
lastUpdated: "October 2026"
summary: "All Thempok themes adhere to a standardized, predictable folder architecture so you can switch between themes without relearning where everything lives."
prev:
  title: "Quick Start Guide"
  slug: "getting-started"
next:
  title: "Styling & Dark Mode"
  slug: "styling-and-themes"
---

## Standard Directory Layout

Every Thempok theme follows this clean structure:

```text
my-thempok-site/
├── public/                 # Static assets copied directly to build output
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/         # Reusable UI components (Header, Footer, Cards)
│   ├── layouts/            # Page shell wrappers with HTML head & meta
│   ├── pages/              # File-based routes (.astro & .md files)
│   ├── styles/             # Global CSS variables, resets, and typography
│   └── data/               # Configuration, navigation, and structured datasets
├── astro.config.mjs        # Astro configuration file
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

## Pages & File-Based Routing

Astro uses file-based routing. Every file in `src/pages/` maps directly to a public URL:

- `src/pages/index.astro` &rarr; `/`
- `src/pages/about.astro` &rarr; `/about/`
- `src/pages/blog/[slug].astro` &rarr; Dynamic routes like `/blog/first-post/`

## Components & Layouts

Components in `src/components/` are atomic, reusable building blocks. Layouts in `src/layouts/` provide consistent header, footer, SEO metadata, and theme toggling logic across your site.

## Static Assets

Place raw static images, icons, and fonts in the `public/` folder. Astro serves them at the root path (e.g. `public/logo.svg` is available at `/logo.svg`).
