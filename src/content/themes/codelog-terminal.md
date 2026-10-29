---
title: "CodeLog Terminal"
tagline: "Terminal-inspired developer journal with monospace typography & devlogs"
description: "For developers who live in the CLI. CodeLog is a fast, terminal-aesthetic blog with ASCII art accents, prompt-style headings, keyboard navigation shortcuts, and syntax-highlighted code diffs."
category: "Blog & Editorial"
tags:
  - "Terminal"
  - "CLI"
  - "Devlog"
  - "Hacker"
  - "Monospace"
technologies:
  - "Astro"
  - "TypeScript"
  - "Monospace CSS"
featured: false
latest: false
author:
  name: "Dave Vance"
  avatarText: "DV"
  url: "https://github.com/thempok"
version: "1.0.4"
lastUpdated: "July 2026"
license: "MIT"
stars: 264
downloads: 1390
preview:
  themeColor: "#0c1017"
  accentColor: "#22c55e"
  heroHeadline: '$ cat devlog.txt | grep --color=always "INSIGHTS"'
  mockupType: "code"
demoUrl: "https://demo.thempok.dev/preview/codelog-terminal"
githubUrl: "https://github.com/thempok/theme-codelog-terminal"
requirements:
  - "Node.js 18+"
features:
  - "Authentic Unix terminal vibe with configurable prompt symbols"
  - "Interactive terminal commands for navigating pages (e.g. `cd /blog`)"
  - "Git commit diff viewer styling for before/after code changes"
  - "Matrix rain easter egg toggle and CRT scanline filter option"
  - "Ultra-fast build time (< 500ms for 50 posts)"
installCommands:
  create: "npm create astro@latest -- --template thempok/codelog-terminal"
  gitClone: "git clone https://github.com/thempok/theme-codelog-terminal.git my-devlog"
  install: "npm install"
  run: "npm run dev"
projectStructure:
  - "src/components/TerminalPrompt.astro"
  - "src/components/DiffViewer.astro"
  - "src/layouts/CliLayout.astro"
  - "src/styles/terminal.css"
highlights:
  - title: "Keyboard-First"
    desc: "Full arrow-key and vim key (j/k) navigation support between articles."
  - title: "Green Screen or Amber"
    desc: "Easily switch color palettes between phosphor green, amber, or cyan."
  - title: "Pure Nostalgia"
    desc: "Crisp monospace fonts with optional CRT curvature emulation."
---

CodeLog Terminal is engineered for engineers who appreciate simplicity, monospace aesthetics, and devlogs.
