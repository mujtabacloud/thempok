---
title: "GitHub Pages Deployment"
subtitle: "Deploy your Thempok website to GitHub Pages with automated CI/CD in 5 minutes."
section: "Deployment & Publishing"
order: 5
readTime: "4 min read"
lastUpdated: "October 2026"
summary: "Deploying an Astro static site to GitHub Pages is completely free, secure, and fully automated using GitHub Actions."
badge: "GitHub"
prev:
  title: "Content & Markdown"
  slug: "content-management"
next:
  title: "Contributing Themes"
  slug: "contributing-themes"
---

## Astro Configuration

If you are deploying to a GitHub Pages user/organization site or project site, update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/my-repo-name/', // Only if deployed to a subfolder
});
```

## GitHub Actions Workflow

Create a file named `.github/workflows/deploy.yml` in your repository with standard Astro deployment settings:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install dependencies
        run: npm ci
      - name: Build static site
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Enabling GitHub Pages

In your GitHub repository, navigate to **Settings &rarr; Pages** and set **Source** to *GitHub Actions*. Every push to `main` will trigger an automated build and deploy!
