export interface Theme {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Portfolio' | 'Documentation' | 'Blog & Editorial' | 'SaaS & Landing' | 'E-commerce' | 'Agency';
  tags: string[];
  technologies: string[];
  featured: boolean;
  latest: boolean;
  author: {
    name: string;
    avatarText: string;
    url: string;
  };
  version: string;
  lastUpdated: string;
  license: string;
  stars: number;
  downloads: number;
  preview: {
    themeColor: string;
    accentColor: string;
    heroHeadline: string;
    mockupType: 'browser' | 'code' | 'docs' | 'card-grid';
  };
  demoUrl: string;
  githubUrl: string;
  requirements: string[];
  features: string[];
  installCommands: {
    create: string;
    gitClone: string;
    install: string;
    run: string;
  };
  projectStructure: string[];
  highlights: { title: string; desc: string }[];
}

export const themeCategories = [
  'All',
  'Portfolio',
  'Documentation',
  'Blog & Editorial',
  'SaaS & Landing',
  'E-commerce',
  'Agency',
] as const;

export const themesData: Theme[] = [
  {
    id: 'devfolio-pro',
    slug: 'devfolio-pro',
    title: 'DevFolio Pro',
    tagline: 'Minimalist developer portfolio with clean project showcases & tech badges',
    description:
      'A sleek, content-focused portfolio template built specifically for software engineers, designers, and open-source contributors. Features an interactive project grid, tech stack tags, experience timeline, and automatic dark mode support.',
    category: 'Portfolio',
    tags: ['Developer', 'Minimal', 'Dark Mode', 'Responsive', 'Portfolio'],
    technologies: ['Astro', 'TypeScript', 'CSS Modules', 'SVG Icons'],
    featured: true,
    latest: true,
    author: {
      name: 'Thempok Core',
      avatarText: 'TP',
      url: 'https://github.com/thempok',
    },
    version: '1.2.0',
    lastUpdated: 'October 2026',
    license: 'MIT',
    stars: 342,
    downloads: 1420,
    preview: {
      themeColor: '#0f172a',
      accentColor: '#38bdf8',
      heroHeadline: 'Hi, I craft resilient web systems & open tools.',
      mockupType: 'browser',
    },
    demoUrl: 'https://demo.thempok.dev/preview/devfolio-pro',
    githubUrl: 'https://github.com/thempok/theme-devfolio-pro',
    requirements: ['Node.js 18 or higher', 'npm, pnpm, or bun', 'Basic Astro knowledge'],
    features: [
      'Zero-JS by default for ultra-light page loads (< 25KB total transfer)',
      'Built-in light and dark mode with system preference auto-detection',
      'Filterable projects grid with category badges and live demo links',
      'Interactive timeline for career experience and education history',
      'Contact form ready with Formspree or static mailto integration',
      '100/100 Lighthouse performance, accessibility, and SEO audit score',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/devfolio-pro',
      gitClone: 'git clone https://github.com/thempok/theme-devfolio-pro.git my-portfolio',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/ProjectCard.astro',
      'src/components/ExperienceTimeline.astro',
      'src/components/TechStackPills.astro',
      'src/layouts/PortfolioLayout.astro',
      'src/data/projects.json',
      'public/images/projects/',
    ],
    highlights: [
      { title: 'Sub-second Load Times', desc: 'No client-side runtime overhead ensures instant page rendering.' },
      { title: 'Type-Safe Data', desc: 'TypeScript interfaces guard project items, experience entries, and socials.' },
      { title: 'GitHub Pages Ready', desc: 'Pre-configured workflow for automatic CI/CD deployment on every git push.' },
    ],
  },
  {
    id: 'docs-nova',
    slug: 'docs-nova',
    title: 'DocsNova',
    tagline: 'High-speed technical documentation with collapsible sidebar & instant search',
    description:
      'Engineered for developers publishing API references, SDK documentation, and knowledge bases. Features responsive split-pane navigation, syntax-highlighted code blocks, copy-to-clipboard buttons, callout banners, and version dropdown support.',
    category: 'Documentation',
    tags: ['Docs', 'Technical', 'Search', 'Markdown', 'API'],
    technologies: ['Astro', 'TypeScript', 'Content Collections', 'Vanilla CSS'],
    featured: true,
    latest: false,
    author: {
      name: 'Alex Rivera',
      avatarText: 'AR',
      url: 'https://github.com/thempok',
    },
    version: '2.0.4',
    lastUpdated: 'October 2026',
    license: 'MIT',
    stars: 512,
    downloads: 2890,
    preview: {
      themeColor: '#18181b',
      accentColor: '#10b981',
      heroHeadline: 'API Reference & Architecture Documentation',
      mockupType: 'docs',
    },
    demoUrl: 'https://demo.thempok.dev/preview/docs-nova',
    githubUrl: 'https://github.com/thempok/theme-docs-nova',
    requirements: ['Node.js 18+', 'Astro 4+', 'Markdown or MDX files'],
    features: [
      'Collapsible multilevel sidebar with active scroll spy',
      'Instant client-side doc search indexed at build time',
      'GitHub-style alert banners (Note, Tip, Warning, Caution)',
      'Interactive code blocks with tabbed languages and one-click copy',
      'Breadcrumb navigation and Next/Previous article footer links',
      'Mobile-friendly drawer menu with touch-friendly navigation',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/docs-nova',
      gitClone: 'git clone https://github.com/thempok/theme-docs-nova.git my-docs',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/content/docs/ [Markdown articles]',
      'src/components/DocSidebar.astro',
      'src/components/TableOfContents.astro',
      'src/components/SearchModal.astro',
      'src/layouts/DocsLayout.astro',
    ],
    highlights: [
      { title: 'Astro Content Collections', desc: 'Strict frontmatter schema validation protects against typos.' },
      { title: 'Zero Third-Party Search Cloud', desc: 'Pure lightweight static search indices without Algolia fees.' },
      { title: 'Keyboard Shortcuts', desc: 'Quick Ctrl+K search modal access and Esc to close.' },
    ],
  },
  {
    id: 'hyperblog',
    slug: 'hyperblog',
    title: 'HyperBlog',
    tagline: 'High-performance publication theme for technical writers & engineering teams',
    description:
      'A typography-first publishing template designed for deep-dive technical articles, tutorials, and engineering journals. Includes reading time calculation, author bios, tag filtering, RSS feed generation, and social share cards.',
    category: 'Blog & Editorial',
    tags: ['Blog', 'Publishing', 'RSS', 'Editorial', 'SEO'],
    technologies: ['Astro', 'TypeScript', 'Responsive CSS', 'RSS'],
    featured: true,
    latest: true,
    author: {
      name: 'Elena Rostova',
      avatarText: 'ER',
      url: 'https://github.com/thempok',
    },
    version: '1.1.5',
    lastUpdated: 'September 2026',
    license: 'MIT',
    stars: 288,
    downloads: 1840,
    preview: {
      themeColor: '#09090b',
      accentColor: '#ec4899',
      heroHeadline: 'Thoughts on Distributed Systems & Web Standards',
      mockupType: 'browser',
    },
    demoUrl: 'https://demo.thempok.dev/preview/hyperblog',
    githubUrl: 'https://github.com/thempok/theme-hyperblog',
    requirements: ['Node.js 18+', 'Markdown editor'],
    features: [
      'Refined editorial typography with fluid responsive scaling',
      'Estimated reading time calculation based on word count',
      'Dynamic OpenGraph social preview images generated at build time',
      'Automated RSS 2.0 XML feed and sitemap.xml generation',
      'Tag filtering and related articles recommendation algorithm',
      'Newsletter subscription callout section',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/hyperblog',
      gitClone: 'git clone https://github.com/thempok/theme-hyperblog.git my-blog',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/content/blog/ [Markdown posts]',
      'src/components/ArticleCard.astro',
      'src/components/AuthorBio.astro',
      'src/pages/rss.xml.ts',
      'src/layouts/PostLayout.astro',
    ],
    highlights: [
      { title: 'Optimal Reading Measure', desc: 'Strict 65-75 character line lengths ensure effortless readability.' },
      { title: 'Native Code Highlighting', desc: 'Shiki syntax highlighting rendered at build time with zero client JS.' },
      { title: 'Search Engine Optimized', desc: 'Semantic Article JSON-LD structured data included out-of-the-box.' },
    ],
  },
  {
    id: 'launchpad-saas',
    slug: 'launchpad-saas',
    title: 'Launchpad SaaS',
    tagline: 'Conversion-ready landing page template with pricing tables & feature grids',
    description:
      'A modern developer-focused landing page for SaaS tools, developer APIs, and open-source software. Features a high-converting hero section with interactive code demos, feature cards, pricing tiers with monthly/yearly toggle, and customer reviews.',
    category: 'SaaS & Landing',
    tags: ['SaaS', 'Landing Page', 'Pricing', 'Conversion', 'Modern'],
    technologies: ['Astro', 'TypeScript', 'Modern CSS', 'Accessible Forms'],
    featured: false,
    latest: true,
    author: {
      name: 'Thempok Core',
      avatarText: 'TP',
      url: 'https://github.com/thempok',
    },
    version: '1.0.8',
    lastUpdated: 'October 2026',
    license: 'MIT',
    stars: 419,
    downloads: 2150,
    preview: {
      themeColor: '#030712',
      accentColor: '#6366f1',
      heroHeadline: 'Ship resilient micro-services at lightning speed.',
      mockupType: 'browser',
    },
    demoUrl: 'https://demo.thempok.dev/preview/launchpad-saas',
    githubUrl: 'https://github.com/thempok/theme-launchpad-saas',
    requirements: ['Node.js 18+', 'Modern web browser'],
    features: [
      'Conversion-optimized hero with simulated terminal preview',
      'Feature matrix with hover micro-interactions',
      'Billing tier switcher (Monthly vs. Annual with 20% discount flag)',
      'Interactive FAQ accordion with accessible ARIA attributes',
      'Testimonials carousel with verifiable customer avatars',
      'Sticky navigation with quick Sign-Up / Get Started call to action',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/launchpad-saas',
      gitClone: 'git clone https://github.com/thempok/theme-launchpad-saas.git my-saas',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/Hero.astro',
      'src/components/PricingTiers.astro',
      'src/components/FeatureGrid.astro',
      'src/components/FaqAccordion.astro',
      'src/layouts/MarketingLayout.astro',
    ],
    highlights: [
      { title: 'Zero JavaScript Bloat', desc: 'Interactive accordions and toggles built with accessible native HTML.' },
      { title: 'High Contrast Mode', desc: 'Tested against WCAG AAA color standards for maximum readability.' },
      { title: 'Modular Components', desc: 'Easily re-order or remove sections to fit your launch requirements.' },
    ],
  },
  {
    id: 'zen-minimal',
    slug: 'zen-minimal',
    title: 'Zen Minimal',
    tagline: 'Monochrome typographic portfolio with distraction-free layout',
    description:
      'Stripped of all visual noise, Zen Minimal puts the complete focus on your creative work, typography, and case studies. Includes smooth page transitions, high-contrast monochrome design, and clean image galleries.',
    category: 'Portfolio',
    tags: ['Minimal', 'Typography', 'Monochrome', 'Design', 'Case Study'],
    technologies: ['Astro', 'TypeScript', 'Pure CSS'],
    featured: false,
    latest: false,
    author: {
      name: 'Kenji Sato',
      avatarText: 'KS',
      url: 'https://github.com/thempok',
    },
    version: '1.0.2',
    lastUpdated: 'August 2026',
    license: 'MIT',
    stars: 195,
    downloads: 980,
    preview: {
      themeColor: '#000000',
      accentColor: '#ffffff',
      heroHeadline: 'Simplicity is the ultimate sophistication.',
      mockupType: 'browser',
    },
    demoUrl: 'https://demo.thempok.dev/preview/zen-minimal',
    githubUrl: 'https://github.com/thempok/theme-zen-minimal',
    requirements: ['Node.js 18+'],
    features: [
      'Radical monochrome aesthetic with custom Swiss-style grid layout',
      'Detailed case study template with before/after comparison slides',
      'Zero external font files required (utilizes system font stack)',
      'Tiny payload size: under 12KB total uncompressed CSS',
      'Subtle page animations without heavy animation libraries',
      'Print-friendly stylesheet automatically enabled',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/zen-minimal',
      gitClone: 'git clone https://github.com/thempok/theme-zen-minimal.git my-zen-site',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/pages/index.astro',
      'src/pages/work/[slug].astro',
      'src/components/CaseStudyCard.astro',
      'src/styles/swiss-grid.css',
    ],
    highlights: [
      { title: 'Zero Bloat', desc: 'No dependencies outside of Astro core.' },
      { title: 'Art Direction', desc: 'Carefully tuned typographic scale with golden ratio proportioning.' },
      { title: 'Evergreen', desc: 'Timeless aesthetic that never looks dated.' },
    ],
  },
  {
    id: 'apex-agency',
    slug: 'apex-agency',
    title: 'Apex Agency',
    tagline: 'Modern creative studio theme with project showcases & client testimonials',
    description:
      'Crafted for creative agencies, consultancies, and digital product studios. Includes project case studies, services grid, team member profiles, client logos marquee, and interactive inquiry forms.',
    category: 'Agency',
    tags: ['Agency', 'Studio', 'Portfolio', 'Client Work', 'Creative'],
    technologies: ['Astro', 'TypeScript', 'CSS Grid', 'Custom SVG'],
    featured: false,
    latest: true,
    author: {
      name: 'Studio Nova',
      avatarText: 'SN',
      url: 'https://github.com/thempok',
    },
    version: '1.3.1',
    lastUpdated: 'October 2026',
    license: 'MIT',
    stars: 310,
    downloads: 1620,
    preview: {
      themeColor: '#0a0f1d',
      accentColor: '#3b82f6',
      heroHeadline: 'We build digital products that scale businesses.',
      mockupType: 'browser',
    },
    demoUrl: 'https://demo.thempok.dev/preview/apex-agency',
    githubUrl: 'https://github.com/thempok/theme-apex-agency',
    requirements: ['Node.js 18+'],
    features: [
      'Full-width hero with project preview reel and client logos',
      'Categorized services breakdown with interactive cards',
      'Filterable case study gallery with client outcome metrics',
      'Team members section with social handles and bio modals',
      'Contact inquiry modal with budget selector and validation',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/apex-agency',
      gitClone: 'git clone https://github.com/thempok/theme-apex-agency.git my-agency',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/ServiceCard.astro',
      'src/components/CaseStudyGrid.astro',
      'src/components/ClientMarquee.astro',
      'src/components/ContactModal.astro',
      'src/layouts/StudioLayout.astro',
    ],
    highlights: [
      { title: 'Client Metrics', desc: 'Highlight ROI, revenue growth, and key achievements directly on project cards.' },
      { title: 'SEO Optimized', desc: 'Local business and organization schema markup built-in.' },
      { title: 'Fluid Responsiveness', desc: 'Flawless presentation across phones, tablets, laptops, and ultra-wide screens.' },
    ],
  },
  {
    id: 'codelog-terminal',
    slug: 'codelog-terminal',
    title: 'CodeLog Terminal',
    tagline: 'Terminal-inspired developer journal with monospace typography & devlogs',
    description:
      'For developers who live in the CLI. CodeLog is a fast, terminal-aesthetic blog with ASCII art accents, prompt-style headings, keyboard navigation shortcuts, and syntax-highlighted code diffs.',
    category: 'Blog & Editorial',
    tags: ['Terminal', 'CLI', 'Devlog', 'Hacker', 'Monospace'],
    technologies: ['Astro', 'TypeScript', 'Monospace CSS'],
    featured: false,
    latest: false,
    author: {
      name: 'Dave Vance',
      avatarText: 'DV',
      url: 'https://github.com/thempok',
    },
    version: '1.0.4',
    lastUpdated: 'July 2026',
    license: 'MIT',
    stars: 264,
    downloads: 1390,
    preview: {
      themeColor: '#0c1017',
      accentColor: '#22c55e',
      heroHeadline: '$ cat devlog.txt | grep --color=always "INSIGHTS"',
      mockupType: 'code',
    },
    demoUrl: 'https://demo.thempok.dev/preview/codelog-terminal',
    githubUrl: 'https://github.com/thempok/theme-codelog-terminal',
    requirements: ['Node.js 18+'],
    features: [
      'Authentic Unix terminal vibe with configurable prompt symbols',
      'Interactive terminal commands for navigating pages (e.g. `cd /blog`)',
      'Git commit diff viewer styling for before/after code changes',
      'Matrix rain easter egg toggle and CRT scanline filter option',
      'Ultra-fast build time (< 500ms for 50 posts)',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/codelog-terminal',
      gitClone: 'git clone https://github.com/thempok/theme-codelog-terminal.git my-devlog',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/TerminalPrompt.astro',
      'src/components/DiffViewer.astro',
      'src/layouts/CliLayout.astro',
      'src/styles/terminal.css',
    ],
    highlights: [
      { title: 'Keyboard-First', desc: 'Full arrow-key and vim key (j/k) navigation support between articles.' },
      { title: 'Green Screen or Amber', desc: 'Easily switch color palettes between phosphor green, amber, or cyan.' },
      { title: 'Pure Nostalgia', desc: 'Crisp monospace fonts with optional CRT curvature emulation.' },
    ],
  },
  {
    id: 'craft-storefront',
    slug: 'craft-storefront',
    title: 'CraftStore Showcase',
    tagline: 'Digital product storefront for indie hackers, UI kits & icon packs',
    description:
      'A sleek product showcase and catalog template designed for digital makers selling icons, UI components, fonts, or ebooks. Features category filters, price badges, modal previews, and LemonSqueezy / Gumroad checkout links.',
    category: 'E-commerce',
    tags: ['E-commerce', 'Digital Goods', 'Showcase', 'Store', 'Gumroad'],
    technologies: ['Astro', 'TypeScript', 'CSS Grid', 'Modal Dialogs'],
    featured: false,
    latest: true,
    author: {
      name: 'Thempok Core',
      avatarText: 'TP',
      url: 'https://github.com/thempok',
    },
    version: '1.0.1',
    lastUpdated: 'October 2026',
    license: 'MIT',
    stars: 215,
    downloads: 870,
    preview: {
      themeColor: '#0f172a',
      accentColor: '#f59e0b',
      heroHeadline: 'Handcrafted digital assets for modern creators.',
      mockupType: 'card-grid',
    },
    demoUrl: 'https://demo.thempok.dev/preview/craft-storefront',
    githubUrl: 'https://github.com/thempok/theme-craft-storefront',
    requirements: ['Node.js 18+'],
    features: [
      'Filterable product catalog with instant category tabs',
      'Product detail modal with high-res asset previews',
      'Configurable checkout buttons for Gumroad, LemonSqueezy, or Stripe Links',
      'Customer reviews and rating stars rating component',
      'Product FAQ accordion and license terms explanation',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/craft-storefront',
      gitClone: 'git clone https://github.com/thempok/theme-craft-storefront.git my-store',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/ProductCard.astro',
      'src/components/ProductFilter.astro',
      'src/components/CheckoutButton.astro',
      'src/data/products.json',
      'src/layouts/StoreLayout.astro',
    ],
    highlights: [
      { title: 'Zero Backend Required', desc: 'Works with third-party checkout URLs, keeping hosting 100% static & free.' },
      { title: 'Quick Preview Modals', desc: 'Buyers can inspect screenshots and spec sheets without page reloads.' },
      { title: 'Bundle Discounts', desc: 'Promotional announcement banner ready for coupon codes and sales.' },
    ],
  },
  {
    id: 'api-hub',
    slug: 'api-hub',
    title: 'API Hub Portal',
    tagline: 'Developer portal and REST API reference with interactive request tabs',
    description:
      'The ultimate API reference and developer documentation template. Features three-column layout (sidebar, documentation prose, interactive code samples), endpoint method badges (GET, POST, DELETE), and response payload tabs.',
    category: 'Documentation',
    tags: ['API', 'Developer Portal', 'REST', 'Swagger', 'SDK'],
    technologies: ['Astro', 'TypeScript', 'Content Collections', 'CSS Tabs'],
    featured: false,
    latest: false,
    author: {
      name: 'Alex Rivera',
      avatarText: 'AR',
      url: 'https://github.com/thempok',
    },
    version: '1.4.0',
    lastUpdated: 'September 2026',
    license: 'MIT',
    stars: 378,
    downloads: 1910,
    preview: {
      themeColor: '#0b1120',
      accentColor: '#06b6d4',
      heroHeadline: 'RESTful API v2.4 Reference & SDK Documentation',
      mockupType: 'docs',
    },
    demoUrl: 'https://demo.thempok.dev/preview/api-hub',
    githubUrl: 'https://github.com/thempok/theme-api-hub',
    requirements: ['Node.js 18+'],
    features: [
      'Three-column developer portal layout inspired by Stripe & Twilio',
      'Endpoint badges: GET, POST, PUT, DELETE with distinct semantic colors',
      'Language switcher tabs for cURL, JavaScript, Python, Go, and Ruby',
      'Interactive payload schema table with required/optional indicators',
      'Authentication header explanation and error code reference table',
    ],
    installCommands: {
      create: 'npm create astro@latest -- --template thempok/api-hub',
      gitClone: 'git clone https://github.com/thempok/theme-api-hub.git my-api-portal',
      install: 'npm install',
      run: 'npm run dev',
    },
    projectStructure: [
      'src/components/EndpointCard.astro',
      'src/components/CodeRequestTabs.astro',
      'src/components/SchemaTable.astro',
      'src/content/api/ [Endpoint markdown specs]',
      'src/layouts/ApiLayout.astro',
    ],
    highlights: [
      { title: 'Stripe-Like Three Column', desc: 'Navigation, description, and interactive code side-by-side.' },
      { title: 'Multi-SDK Snippets', desc: 'Pre-formatted examples for Node, Python, Go, and cURL.' },
      { title: 'Status Code Reference', desc: 'Detailed error explanations with 400, 401, 404, and 500 examples.' },
    ],
  },
];
