---
title: API Hub Portal
tagline: Developer portal and REST API reference with interactive request tabs
description: The ultimate API reference and developer documentation template.
  Features three-column layout (sidebar, documentation prose, interactive code
  samples), endpoint method badges (GET, POST, DELETE), and response payload
  tabs.
category: Documentation
featured: false
latest: false
tags:
  - API
  - Developer Portal
  - REST
  - Swagger
  - SDK
technologies:
  - Astro
  - TypeScript
  - Content Collections
  - CSS Tabs
version: 1.4.0
lastUpdated: September 2026
license: MIT
stars: 378
downloads: 1910
demoUrl: https://mujtabacloud.github.io/qr-code-generator-scanner/
githubUrl: https://mujtabacloud.github.io/qr-code-generator-scanner/
author:
  name: Alex Rivera
  avatarText: TP
  url: https://github.com/thempok
preview:
  mockupType: browser
  themeColor: "#0b1120"
  accentColor: "#06b6d4"
  heroHeadline: RESTful API v2.4 Reference & SDK Documentation
features:
  - Three-column developer portal layout inspired by Stripe & Twilio
  - "Endpoint badges: GET, POST, PUT, DELETE with distinct semantic colors"
  - Language switcher tabs for cURL, JavaScript, Python, Go, and Ruby
  - Interactive payload schema table with required/optional indicators
  - Authentication header explanation and error code reference table
requirements:
  - Node.js 18+
highlights:
  - title: Stripe-Like Three Column
    desc: Navigation, description, and interactive code side-by-side.
  - title: Multi-SDK Snippets
    desc: Pre-formatted examples for Node, Python, Go, and cURL.
  - title: Status Code Reference
    desc: Detailed error explanations with 400, 401, 404, and 500 examples.
installCommands:
  create: npm create astro@latest -- --template thempok/api-hub
  gitClone: git clone https://github.com/thempok/theme-api-hub.git my-api-portal
  install: npm install
  run: npm run dev
projectStructure:
  - src/components/EndpointCard.astro
  - src/components/CodeRequestTabs.astro
  - src/components/SchemaTable.astro
  - src/content/api/ [Endpoint markdown specs]
  - src/layouts/ApiLayout.astro
---
API Hub Portal gives SaaS and infrastructure developers an interactive three-column reference layout for endpoints, response codes, and SDK commands.