---
title: "Quick Start Guide"
subtitle: "Learn how to set up, customize, and preview any Thempok theme on your local machine."
section: "Getting Started"
order: 1
readTime: "3 min read"
lastUpdated: "October 2026"
summary: "Thempok themes are designed to be zero-friction. With standard Node.js installed, you can clone or scaffold a theme repository and have a live dev server running in seconds."
badge: "Essential"
next:
  title: "Theme Architecture"
  slug: "theme-structure"
---

## Prerequisites

Before launching a Thempok theme, verify that your development machine has the following tools installed:

- **Node.js:** Version 18.17.1 or higher (LTS recommended)
- **Package Manager:** `npm` (bundled with Node), `pnpm`, `yarn`, or `bun`
- **Git:** For version control and cloning repositories

> **Pro Tip:** Run `node -v` in your terminal to verify your current Node version before starting.

## Installation Options

You can start with a Thempok theme using either Astro's template initializer or directly cloning the Git repository:

### Option A: Using the Astro CLI Starter (Recommended)

Create a fresh project directly from the theme template in one command:

```bash
npm create astro@latest -- --template thempok/devfolio-pro
```

The interactive CLI wizard will prompt you for a project folder name and install dependencies automatically.

### Option B: Cloning via Git

If you prefer full control over your Git commit history:

```bash
git clone https://github.com/thempok/theme-devfolio-pro.git my-site
cd my-site
npm install
```

## Starting the Dev Server

Once your dependencies are installed, launch the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:4321` to see your new site live with Hot Module Replacement (HMR).

## Building for Production

To compile your static files for production deployment:

```bash
npm run build
```

Astro compiles your templates, compresses CSS, and produces pure, static HTML in the `dist/` folder ready to upload to any static hosting service.

## Next Steps

Now that your development server is running, explore our guide on [Theme Architecture](/documentation/theme-structure/) to learn how files and pages are structured.
