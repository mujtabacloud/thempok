export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatarText: string;
  };
  tags: string[];
  contentHtml: string;
}

export const blogCategories = [
  'All',
  'Astro & Frameworks',
  'CSS & Design Systems',
  'Performance & Web Vitals',
  'Developer Experience',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-astro-is-our-choice-for-thempok',
    title: 'Why We Built Thempok Exclusively on Astro',
    excerpt:
      'Exploring how Astro’s Island architecture, zero-runtime JavaScript default, and stellar developer experience made it the ultimate engine for modern theme building.',
    category: 'Astro & Frameworks',
    publishDate: 'October 24, 2026',
    readTime: '6 min read',
    featured: true,
    author: {
      name: 'Alex Rivera',
      role: 'Lead Architect',
      avatarText: 'AR',
    },
    tags: ['Astro', 'Architecture', 'Web Standards', 'Performance'],
    contentHtml: `
      <p class="lead">When we set out to build Thempok, we evaluated modern web frameworks with a ruthless set of criteria: near-zero JavaScript payload, instant Time to Interactive (TTI), pure static output compatibility, and supreme developer joy.</p>

      <h2>The Problem with Modern SPA Bloat</h2>
      <p>For the past decade, web development leaned heavily towards Single Page Application (SPA) meta-frameworks. While excellent for dashboard applications with state machines, shipping 400KB of hydrated JavaScript simply to render a technical blog or a documentation site was an anti-pattern.</p>
      <p>Developers visit documentation and portfolio themes for content, not complex client-side reconciliation algorithms. Astro solves this problem at its root through <em>Islands Architecture</em>.</p>

      <h2>Zero JavaScript by Default</h2>
      <p>Astro renders every template to static HTML and CSS ahead of time. JavaScript is stripped away completely unless you explicitly request a client directive like <code>client:load</code> or <code>client:visible</code>. For Thempok themes, this translates to:</p>
      <ul>
        <li><strong>Sub-50ms First Contentful Paint:</strong> The browser renders ready HTML immediately.</li>
        <li><strong>No Hydration Penalty:</strong> Memory usage remains minimal on mobile devices.</li>
        <li><strong>Frictionless Hosting:</strong> Output is plain static files that can live on GitHub Pages, Cloudflare, S3, or any basic HTTP server.</li>
      </ul>

      <h2>Astro Component Model vs. Heavy Runtimes</h2>
      <p>Astro components (<code>.astro</code>) feel like enhanced HTML. You have access to TypeScript at the front of the file, clean template logic, and scoped styles in the same file without needing CSS-in-JS abstractions. It is the closest thing to native web development that modern tooling has produced.</p>

      <h2>The Bottom Line</h2>
      <p>By picking Astro as Thempok's foundational standard, every theme we ship guarantees world-class performance, effortless maintenance, and future-proof simplicity.</p>
    `,
  },
  {
    slug: 'mastering-css-variables-for-dark-mode',
    title: 'Building a Bulletproof Zero-Flicker Dark Mode with CSS Variables',
    excerpt:
      'Say goodbye to annoying white flashes on page reload. A complete guide to building accessible, flicker-free dark mode using CSS variables and tiny inline scripts.',
    category: 'CSS & Design Systems',
    publishDate: 'October 18, 2026',
    readTime: '5 min read',
    featured: false,
    author: {
      name: 'Elena Rostova',
      role: 'UI/UX Engineer',
      avatarText: 'ER',
    },
    tags: ['CSS', 'Dark Mode', 'Accessibility', 'Frontend'],
    contentHtml: `
      <p class="lead">Few things ruin an otherwise beautiful dark theme experience quite like the dreaded "flash of unstyled light theme" (FOUT) when navigating between pages. Here is how we solved it across all Thempok themes.</p>

      <h2>The Anatomy of the Flash</h2>
      <p>When a web page loads, the browser parses HTML from top to bottom. If your theme detection code is packaged inside a deferred JavaScript bundle or a React <code>useEffect</code>, the browser will render the default stylesheet (usually light mode) for a fraction of a second before the JavaScript executes and flips the class.</p>

      <h2>The Solution: Blocking Head Scripts</h2>
      <p>The fix is surprisingly lightweight: run a synchronous, non-deferred 5-line inline script inside the <code>&lt;head&gt;</code> before any stylesheet or body markup is drawn:</p>

      <pre><code class="language-html">&lt;script is:inline&gt;
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mode = saved ? saved : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', mode);
  })();
&lt;/script&gt;</code></pre>

      <h2>Semantic CSS Variable Pairing</h2>
      <p>Instead of hardcoding color names like <code>--white</code> or <code>--gray-900</code>, structure your tokens semantically:</p>
      <ul>
        <li><code>--bg-primary</code>: Base page canvas</li>
        <li><code>--bg-card</code>: Surface for elevated elements</li>
        <li><code>--text-primary</code>: High contrast prose</li>
        <li><code>--text-muted</code>: Secondary descriptions and metadata</li>
        <li><code>--border-subtle</code>: Card borders and dividers</li>
      </ul>
      <p>This allows your markup components to remain completely agnostic of whether light mode or dark mode is currently active.</p>
    `,
  },
  {
    slug: 'speed-optimization-for-static-developer-sites',
    title: 'Achieving Perfect 100 Lighthouse Scores on Developer Sites',
    excerpt:
      'A practical checklist of image optimization, font loading strategies, and DOM cleanliness that consistently achieves straight 100s on Core Web Vitals.',
    category: 'Performance & Web Vitals',
    publishDate: 'October 10, 2026',
    readTime: '7 min read',
    featured: false,
    author: {
      name: 'Kenji Sato',
      role: 'Performance Engineer',
      avatarText: 'KS',
    },
    tags: ['Performance', 'Lighthouse', 'Core Web Vitals', 'Optimization'],
    contentHtml: `
      <p class="lead">High Lighthouse scores are not just vanity metrics. For developer portfolios and documentation sites, speed conveys craft, professionalism, and respect for the user's bandwidth.</p>

      <h2>1. Eliminate Third-Party Font Latency</h2>
      <p>Loading multiple weights of Google Fonts over external CDNs introduces DNS handshakes, connection handshakes, and layout shifts (CLS). Wherever possible, utilize modern system font stacks:</p>
      <pre><code class="language-css">font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;</code></pre>
      <p>System fonts render with zero milliseconds of network delay, guarantee native OS legibility, and eliminate cumulative layout shifts entirely.</p>

      <h2>2. Vector SVGs Over Raster Screenshots</h2>
      <p>For theme previews, icons, and diagrams, SVG graphic code embedded in templates compresses down to tiny byte sizes and scales infinitely without pixelation on Retina displays.</p>

      <h2>3. Accessible Color Contrast Ratios</h2>
      <p>Lighthouse audits penalize poor text contrast. Ensure your muted text tokens pass at least 4.5:1 contrast against their card background. Testing tools like WebAIM or the Chrome DevTools color picker make auditing contrast seamless.</p>
    `,
  },
  {
    slug: 'creating-maintainable-component-design-systems',
    title: 'From Spaghetti Code to Scalable Component Libraries',
    excerpt:
      'Designing clean, modular Astro components with clear TypeScript prop interfaces that withstand years of iterative updates.',
    category: 'Developer Experience',
    publishDate: 'September 28, 2026',
    readTime: '5 min read',
    featured: false,
    author: {
      name: 'Thempok Core',
      role: 'Editorial Team',
      avatarText: 'TP',
    },
    tags: ['Design Systems', 'TypeScript', 'Astro', 'Architecture'],
    contentHtml: `
      <p class="lead">As a codebase grows from a few prototype pages into a full-scale publishing platform, undisciplined component duplication is the fastest path to maintainability nightmares.</p>

      <h2>Type-Safe Component Props</h2>
      <p>In Astro, every component can define a strict TypeScript interface for its accepted props in the code fence:</p>
      <pre><code class="language-typescript">---
interface Props {
  title: string;
  category: 'Portfolio' | 'Documentation' | 'Blog';
  variant?: 'compact' | 'featured';
  showBadge?: boolean;
}

const { title, category, variant = 'compact', showBadge = false } = Astro.props;
---</code></pre>
      <p>This provides instant IDE autocomplete, catches missing required parameters at compile time, and serves as living documentation for anyone reviewing or contributing to your templates.</p>

      <h2>Keep Components Atomic and Single-Purposed</h2>
      <p>Separate presentational components (like <code>Badge.astro</code> or <code>Icon.astro</code>) from data-fetching or layout wrappers. This ensures visual elements remain effortlessly reusable across documentation, homepages, and blog indexes.</p>
    `,
  },
];
