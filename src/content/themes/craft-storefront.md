---
title: "CraftStore Showcase"
tagline: "Digital product storefront for indie hackers, UI kits & icon packs"
description: "A sleek product showcase and catalog template designed for digital makers selling icons, UI components, fonts, or ebooks. Features category filters, price badges, modal previews, and LemonSqueezy / Gumroad checkout links."
category: "E-commerce"
tags:
  - "E-commerce"
  - "Digital Goods"
  - "Showcase"
  - "Store"
  - "Gumroad"
technologies:
  - "Astro"
  - "TypeScript"
  - "CSS Grid"
  - "Modal Dialogs"
featured: false
latest: true
author:
  name: "Thempok Core"
  avatarText: "TP"
  url: "https://github.com/thempok"
version: "1.0.1"
lastUpdated: "October 2026"
license: "MIT"
stars: 215
downloads: 870
preview:
  themeColor: "#0f172a"
  accentColor: "#f59e0b"
  heroHeadline: "Handcrafted digital assets for modern creators."
  mockupType: "card-grid"
demoUrl: "https://demo.thempok.dev/preview/craft-storefront"
githubUrl: "https://github.com/thempok/theme-craft-storefront"
requirements:
  - "Node.js 18+"
features:
  - "Filterable product catalog with instant category tabs"
  - "Product detail modal with high-res asset previews"
  - "Configurable checkout buttons for Gumroad, LemonSqueezy, or Stripe Links"
  - "Customer reviews and rating stars rating component"
  - "Product FAQ accordion and license terms explanation"
installCommands:
  create: "npm create astro@latest -- --template thempok/craft-storefront"
  gitClone: "git clone https://github.com/thempok/theme-craft-storefront.git my-store"
  install: "npm install"
  run: "npm run dev"
projectStructure:
  - "src/components/ProductCard.astro"
  - "src/components/ProductFilter.astro"
  - "src/components/CheckoutButton.astro"
  - "src/data/products.json"
  - "src/layouts/StoreLayout.astro"
highlights:
  - title: "Zero Backend Required"
    desc: "Works with third-party checkout URLs, keeping hosting 100% static & free."
  - title: "Quick Preview Modals"
    desc: "Buyers can inspect screenshots and spec sheets without page reloads."
  - title: "Bundle Discounts"
    desc: "Promotional announcement banner ready for coupon codes and sales."
---

CraftStore Showcase enables creators to present digital downloads, font licenses, icon packs, and design systems with zero hosting costs.
