---
title: "Styling & Dark Mode"
subtitle: "Customize CSS variables, color palettes, fonts, and learn how the zero-flash dark mode works."
section: "Customization"
order: 3
readTime: "5 min read"
lastUpdated: "October 2026"
summary: "Thempok uses native CSS Custom Properties for theme tokens. There are no heavy runtime CSS-in-JS libraries or bloated utility frameworks required."
badge: "Popular"
prev:
  title: "Theme Architecture"
  slug: "theme-structure"
next:
  title: "Content & Markdown"
  slug: "content-management"
---

## CSS Variables Overview

All theme colors, spacing scales, and radii are declared at the root level in `src/styles/global.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --border-subtle: #e2e8f0;
  --brand-primary: #4f46e5;
  --brand-accent: #06b6d4;
}

[data-theme="dark"] {
  --bg-primary: #090d16;
  --bg-secondary: #0f172a;
  --bg-card: #131b2e;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-subtle: rgba(255, 255, 255, 0.08);
}
```

## Zero-Flash Dark Mode

To eliminate the infamous "white flash" when loading dark mode, an inline script in the HTML `<head>` resolves user preference before rendering:

```javascript
const stored = localStorage.getItem('thempok-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = stored || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);
```

## Customizing Colors

To give your site your own identity, simply modify `--brand-primary` and `--brand-accent` in `global.css`. All buttons, hover states, badges, and focus rings will automatically update.

## Changing Fonts

By default, Thempok uses modern system font stacks for instant rendering with zero layout shift. You can easily hook into Google Fonts or local WOFF2 files by updating `--font-sans` and `--font-mono`.
