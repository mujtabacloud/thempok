---

title: "DevFolio Pro"
tagline: "Minimalist developer portfolio with clean project showcases & tech badges"
description: "A sleek, content-focused portfolio template built specifically for software engineers, designers, and open-source contributors. Features an interactive project grid, tech stack tags, experience timeline, and automatic dark mode support."
category: "Portfolio"
tags:

- "Developer"
- "Minimal"
- "Dark Mode"
- "Responsive"
- "Portfolio"
technologies:
- "Astro"
- "TypeScript"
- "CSS Modules"
- "SVG Icons"
featured: true
latest: true
author:
  name: "Thempok Core"
  avatarText: "TP"
  url: "[https://github.com/thempok](https://github.com/thempok)"
version: "1.2.0"
lastUpdated: "October 2026"
license: "MIT"
stars: 342
downloads: 1420
preview:
  themeColor: "#0f172a"
  accentColor: "#38bdf8"
  heroHeadline: "Hi, I craft resilient web systems & open tools."
  mockupType: "browser"
demoUrl: "[https://demo.thempok.dev/preview/devfolio-pro](https://demo.thempok.dev/preview/devfolio-pro)"
githubUrl: "[https://github.com/thempok/theme-devfolio-pro](https://github.com/thempok/theme-devfolio-pro)"
requirements:
- "Node.js 18 or higher"
- "npm, pnpm, or bun"
- "Basic Astro knowledge"
features:
- "Zero-JS by default for ultra-light page loads (< 25KB total transfer)"
- "Built-in light and dark mode with system preference auto-detection"
- "Filterable projects grid with category badges and live demo links"
- "Interactive timeline for career experience and education history"
- "Contact form ready with Formspree or static mailto integration"
- "100/100 Lighthouse performance, accessibility, and SEO audit score"
installCommands:
  create: "npm create astro@latest -- --template thempok/devfolio-pro"
  gitClone: "git clone [https://github.com/thempok/theme-devfolio-pro.git](https://github.com/thempok/theme-devfolio-pro.git) my-portfolio"
  install: "npm install"
  run: "npm run dev"
projectStructure:
- "src/components/ProjectCard.astro"
- "src/components/ExperienceTimeline.astro"
- "src/components/TechStackPills.astro"
- "src/layouts/PortfolioLayout.astro"
- "src/data/projects.json"
- "public/images/projects/"
highlights:
- title: "Sub-second Load Times"
desc: "No client-side runtime overhead ensures instant page rendering."
- title: "Type-Safe Data"
desc: "TypeScript interfaces guard project items, experience entries, and socials."
- title: "GitHub Pages Ready"
desc: "Pre-configured workflow for automatic CI/CD deployment on every git push."

---

DevFolio Pro is designed for software engineers, UX designers, and technical founders who need a polished personal portfolio without spending weeks on styling and responsive adjustments.