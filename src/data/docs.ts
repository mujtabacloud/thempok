export interface DocSection {
  title: string;
  items: {
    slug: string;
    title: string;
    description: string;
    badge?: string;
  }[];
}

export interface DocArticle {
  slug: string;
  title: string;
  subtitle: string;
  section: string;
  order: number;
  readTime: string;
  lastUpdated: string;
  summary: string;
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
  toc: { id: string; title: string }[];
  contentHtml: string;
}

export const docSections: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        slug: 'getting-started',
        title: 'Quick Start Guide',
        description: 'How to choose, download, and launch any Thempok theme in under 3 minutes.',
        badge: 'Essential',
      },
      {
        slug: 'theme-structure',
        title: 'Theme Architecture',
        description: 'Understand the directory layout, layouts, components, and asset handling.',
      },
    ],
  },
  {
    title: 'Customization',
    items: [
      {
        slug: 'styling-and-themes',
        title: 'Styling & Dark Mode',
        description: 'Configure CSS variables, brand color palettes, fonts, and dark mode mechanics.',
        badge: 'Popular',
      },
      {
        slug: 'content-management',
        title: 'Content & Markdown',
        description: 'Organize pages, write technical documentation, and add blog articles with frontmatter.',
      },
    ],
  },
  {
    title: 'Deployment & Publishing',
    items: [
      {
        slug: 'deployment-guide',
        title: 'GitHub Pages Deployment',
        description: 'Set up automated GitHub Actions workflows for continuous static deployments.',
        badge: 'GitHub',
      },
      {
        slug: 'contributing-themes',
        title: 'Contributing Themes',
        description: 'Submission guidelines, quality checklist, and license criteria for open source themes.',
      },
    ],
  },
];

export const docArticles: Record<string, DocArticle> = {
  'getting-started': {
    slug: 'getting-started',
    title: 'Quick Start Guide',
    subtitle: 'Learn how to set up, customize, and preview any Thempok theme on your local machine.',
    section: 'Getting Started',
    order: 1,
    readTime: '3 min read',
    lastUpdated: 'October 2026',
    summary:
      'Thempok themes are designed to be zero-friction. With standard Node.js installed, you can clone or scaffold a theme repository and have a live dev server running in seconds.',
    next: { title: 'Theme Architecture', slug: 'theme-structure' },
    toc: [
      { id: 'prerequisites', title: 'Prerequisites' },
      { id: 'installation-options', title: 'Installation Options' },
      { id: 'starting-dev-server', title: 'Starting the Dev Server' },
      { id: 'building-for-production', title: 'Building for Production' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    contentHtml: `
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before launching a Thempok theme, verify that your development machine has the following tools installed:</p>
        <ul>
          <li><strong>Node.js:</strong> Version 18.17.1 or higher (LTS recommended)</li>
          <li><strong>Package Manager:</strong> <code>npm</code> (bundled with Node), <code>pnpm</code>, <code>yarn</code>, or <code>bun</code></li>
          <li><strong>Git:</strong> For version control and cloning repositories</li>
        </ul>
        <div class="doc-callout doc-callout-tip">
          <div class="doc-callout-icon">💡</div>
          <div class="doc-callout-content">
            <strong>Pro Tip:</strong> Run <code>node -v</code> in your terminal to verify your current Node version before starting.
          </div>
        </div>
      </section>

      <section id="installation-options">
        <h2>Installation Options</h2>
        <p>You can start with a Thempok theme using either Astro's template initializer or directly cloning the Git repository:</p>

        <h3>Option A: Using the Astro CLI Starter (Recommended)</h3>
        <p>Create a fresh project directly from the theme template in one command:</p>
        <pre><code class="language-bash">npm create astro@latest -- --template thempok/devfolio-pro</code></pre>
        <p>The interactive CLI wizard will prompt you for a project folder name and install dependencies automatically.</p>

        <h3>Option B: Cloning via Git</h3>
        <p>If you prefer full control over your Git commit history:</p>
        <pre><code class="language-bash">git clone https://github.com/thempok/theme-devfolio-pro.git my-site
cd my-site
npm install</code></pre>
      </section>

      <section id="starting-dev-server">
        <h2>Starting the Dev Server</h2>
        <p>Once your dependencies are installed, launch the local development server:</p>
        <pre><code class="language-bash">npm run dev</code></pre>
        <p>Open your browser and navigate to <code>http://localhost:4321</code> to see your new site live with Hot Module Replacement (HMR).</p>
      </section>

      <section id="building-for-production">
        <h2>Building for Production</h2>
        <p>To compile your static files for production deployment:</p>
        <pre><code class="language-bash">npm run build</code></pre>
        <p>Astro compiles your templates, compresses CSS, and produces pure, static HTML in the <code>dist/</code> folder ready to upload to any static hosting service.</p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <p>Now that your development server is running, explore our guide on <a href="/documentation/theme-structure/">Theme Architecture</a> to learn how files and pages are structured.</p>
      </section>
    `,
  },
  'theme-structure': {
    slug: 'theme-structure',
    title: 'Theme Architecture',
    subtitle: 'A tour of the folder layout, layout wrappers, components, and static asset handling.',
    section: 'Getting Started',
    order: 2,
    readTime: '4 min read',
    lastUpdated: 'October 2026',
    summary:
      'All Thempok themes adhere to a standardized, predictable folder architecture so you can switch between themes without relearning where everything lives.',
    prev: { title: 'Quick Start Guide', slug: 'getting-started' },
    next: { title: 'Styling & Dark Mode', slug: 'styling-and-themes' },
    toc: [
      { id: 'directory-tree', title: 'Standard Directory Layout' },
      { id: 'pages-and-routing', title: 'Pages & File-Based Routing' },
      { id: 'components-and-layouts', title: 'Components & Layouts' },
      { id: 'static-assets', title: 'Static Assets' },
    ],
    contentHtml: `
      <section id="directory-tree">
        <h2>Standard Directory Layout</h2>
        <p>Every Thempok theme follows this clean structure:</p>
        <pre><code class="language-text">my-thempok-site/
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
└── tsconfig.json           # TypeScript configuration</code></pre>
      </section>

      <section id="pages-and-routing">
        <h2>Pages & File-Based Routing</h2>
        <p>Astro uses file-based routing. Every file in <code>src/pages/</code> maps directly to a public URL:</p>
        <ul>
          <li><code>src/pages/index.astro</code> &rarr; <code>/</code></li>
          <li><code>src/pages/about.astro</code> &rarr; <code>/about/</code></li>
          <li><code>src/pages/blog/[slug].astro</code> &rarr; Dynamic routes like <code>/blog/first-post/</code></li>
        </ul>
      </section>

      <section id="components-and-layouts">
        <h2>Components & Layouts</h2>
        <p>Components in <code>src/components/</code> are atomic, reusable building blocks. Layouts in <code>src/layouts/</code> provide consistent header, footer, SEO metadata, and theme toggling logic across your site.</p>
      </section>

      <section id="static-assets">
        <h2>Static Assets</h2>
        <p>Place raw static images, icons, and fonts in the <code>public/</code> folder. Astro serves them at the root path (e.g. <code>public/logo.svg</code> is available at <code>/logo.svg</code>).</p>
      </section>
    `,
  },
  'styling-and-themes': {
    slug: 'styling-and-themes',
    title: 'Styling & Dark Mode',
    subtitle: 'Customize CSS variables, color palettes, fonts, and learn how the zero-flash dark mode works.',
    section: 'Customization',
    order: 3,
    readTime: '5 min read',
    lastUpdated: 'October 2026',
    summary:
      'Thempok uses native CSS Custom Properties for theme tokens. There are no heavy runtime CSS-in-JS libraries or bloated utility frameworks required.',
    prev: { title: 'Theme Architecture', slug: 'theme-structure' },
    next: { title: 'Content & Markdown', slug: 'content-management' },
    toc: [
      { id: 'css-variables', title: 'CSS Variables Overview' },
      { id: 'dark-mode-mechanism', title: 'Zero-Flash Dark Mode' },
      { id: 'changing-colors', title: 'Customizing Colors' },
      { id: 'typography', title: 'Changing Fonts' },
    ],
    contentHtml: `
      <section id="css-variables">
        <h2>CSS Variables Overview</h2>
        <p>All theme colors, spacing scales, and radii are declared at the root level in <code>src/styles/global.css</code>:</p>
        <pre><code class="language-css">:root {
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
}</code></pre>
      </section>

      <section id="dark-mode-mechanism">
        <h2>Zero-Flash Dark Mode</h2>
        <p>To eliminate the infamous "white flash" when loading dark mode, an inline script in the HTML <code>&lt;head&gt;</code> resolves user preference before rendering:</p>
        <pre><code class="language-javascript">const stored = localStorage.getItem('thempok-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = stored || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);</code></pre>
      </section>

      <section id="changing-colors">
        <h2>Customizing Colors</h2>
        <p>To give your site your own identity, simply modify <code>--brand-primary</code> and <code>--brand-accent</code> in <code>global.css</code>. All buttons, hover states, badges, and focus rings will automatically update.</p>
      </section>

      <section id="typography">
        <h2>Changing Fonts</h2>
        <p>By default, Thempok uses modern system font stacks for instant rendering with zero layout shift. You can easily hook into Google Fonts or local WOFF2 files by updating <code>--font-sans</code> and <code>--font-mono</code>.</p>
      </section>
    `,
  },
  'content-management': {
    slug: 'content-management',
    title: 'Content & Markdown',
    subtitle: 'Add documentation pages, blog posts, and projects using clean Markdown files.',
    section: 'Customization',
    order: 4,
    readTime: '4 min read',
    lastUpdated: 'October 2026',
    summary:
      'Write your technical articles and documentation in plain Markdown or MDX with type-safe frontmatter schema validation.',
    prev: { title: 'Styling & Dark Mode', slug: 'styling-and-themes' },
    next: { title: 'GitHub Pages Deployment', slug: 'deployment-guide' },
    toc: [
      { id: 'markdown-frontmatter', title: 'Frontmatter Setup' },
      { id: 'adding-blog-posts', title: 'Adding New Blog Posts' },
      { id: 'adding-doc-pages', title: 'Adding Documentation Pages' },
    ],
    contentHtml: `
      <section id="markdown-frontmatter">
        <h2>Frontmatter Setup</h2>
        <p>Astro pages and content collections use YAML frontmatter at the top of markdown files to declare metadata:</p>
        <pre><code class="language-yaml">---
title: "My New Article"
description: "A comprehensive guide on performance tuning."
publishDate: "2026-10-29"
author: "Thempok Contributor"
tags: ["Astro", "Performance", "Web"]
---</code></pre>
      </section>

      <section id="adding-blog-posts">
        <h2>Adding New Blog Posts</h2>
        <p>Simply create a new <code>.md</code> file in your blog directory. The title, tags, reading time, and date will automatically populate in the article index and RSS feed.</p>
      </section>

      <section id="adding-doc-pages">
        <h2>Adding Documentation Pages</h2>
        <p>For technical documentation, configure the section ordering and table of contents in your data files or content collections. Sidebars automatically highlight the active article.</p>
      </section>
    `,
  },
  'deployment-guide': {
    slug: 'deployment-guide',
    title: 'GitHub Pages Deployment',
    subtitle: 'Deploy your Thempok website to GitHub Pages with automated CI/CD in 5 minutes.',
    section: 'Deployment & Publishing',
    order: 5,
    readTime: '4 min read',
    lastUpdated: 'October 2026',
    summary:
      'Deploying an Astro static site to GitHub Pages is completely free, secure, and fully automated using GitHub Actions.',
    prev: { title: 'Content & Markdown', slug: 'content-management' },
    next: { title: 'Contributing Themes', slug: 'contributing-themes' },
    toc: [
      { id: 'astro-config', title: 'Astro Configuration' },
      { id: 'github-action-workflow', title: 'GitHub Actions Workflow' },
      { id: 'enabling-pages', title: 'Enabling GitHub Pages' },
    ],
    contentHtml: `
      <section id="astro-config">
        <h2>Astro Configuration</h2>
        <p>If you are deploying to a GitHub Pages user/organization site or project site, update <code>astro.config.mjs</code>:</p>
        <pre><code class="language-javascript">import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/my-repo-name/', // Only if deployed to a subfolder
});</code></pre>
      </section>

      <section id="github-action-workflow">
        <h2>GitHub Actions Workflow</h2>
        <p>Create a file named <code>.github/workflows/deploy.yml</code> in your repository with standard Astro deployment settings:</p>
        <pre><code class="language-yaml">name: Deploy to GitHub Pages

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
          node-version: 20
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
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4</code></pre>
      </section>

      <section id="enabling-pages">
        <h2>Enabling GitHub Pages</h2>
        <p>In your GitHub repository, navigate to <strong>Settings &rarr; Pages</strong> and set <strong>Source</strong> to <em>GitHub Actions</em>. Every push to <code>main</code> will trigger an automated build and deploy!</p>
      </section>
    `,
  },
  'contributing-themes': {
    slug: 'contributing-themes',
    title: 'Contributing Themes',
    subtitle: 'Share your creations with the developer community. Quality guidelines and checklist.',
    section: 'Deployment & Publishing',
    order: 6,
    readTime: '3 min read',
    lastUpdated: 'October 2026',
    summary:
      'We welcome theme submissions from creators worldwide! Learn the quality checklist and licensing requirements to feature your theme on Thempok.',
    prev: { title: 'GitHub Pages Deployment', slug: 'deployment-guide' },
    toc: [
      { id: 'guidelines', title: 'Theme Quality Guidelines' },
      { id: 'checklist', title: 'Submission Checklist' },
      { id: 'how-to-submit', title: 'How to Submit' },
    ],
    contentHtml: `
      <section id="guidelines">
        <h2>Theme Quality Guidelines</h2>
        <p>To ensure high quality and safety for all developers downloading Thempok themes, all submissions must meet these principles:</p>
        <ul>
          <li><strong>Open Source License:</strong> MIT, Apache 2.0, or BSD-3-Clause license.</li>
          <li><strong>Zero Tracking or Ads:</strong> No third-party trackers, telemetries, or crypto miners.</li>
          <li><strong>Performance:</strong> Minimum 90+ score on Google Lighthouse across all categories.</li>
          <li><strong>Accessibility:</strong> Semantic HTML, appropriate ARIA attributes, and accessible color contrast.</li>
        </ul>
      </section>

      <section id="checklist">
        <h2>Submission Checklist</h2>
        <ul>
          <li>[ ] Working live demo deployed on a public URL.</li>
          <li>[ ] Public GitHub repository with clear README instructions.</li>
          <li>[ ] Light and Dark mode support verified.</li>
          <li>[ ] Clean codebase with minimal external dependencies.</li>
        </ul>
      </section>

      <section id="how-to-submit">
        <h2>How to Submit</h2>
        <p>Open a Pull Request or create an Issue on the <a href="https://github.com/thempok/thempok">Thempok GitHub repository</a> with your theme details, demo URL, and repository link.</p>
      </section>
    `,
  },
};
