export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

export const siteConfig = {
  name: "Thempok",
  tagline: "Free Website Themes, Documentation & Tech Blogs",
  description:
    "Thempok is a developer-first platform delivering high-performance, 100% free open-source website themes, clear technical documentation, and in-depth engineering articles.",
  url: "https://thempok.dev",
  github: "https://github.com/thempok/thempok",
  license: "MIT",
  navItems: [
    { title: "Home", href: "/" },
    { title: "Themes", href: "/themes/", badge: "Free" },
    { title: "Documentation", href: "/documentation/" },
    { title: "Blog", href: "/blog/" },
    { title: "About", href: "/about/" },
  ] as NavItem[],
  footerSections: [
    {
      title: "Explore Themes",
      links: [
        { label: "All Themes", href: "/themes/" },
        { label: "Portfolio Themes", href: "/themes/?category=Portfolio" },
        { label: "Documentation Themes", href: "/themes/?category=Documentation" },
        { label: "Blog & Editorial", href: "/themes/?category=Blog+%26+Editorial" },
        { label: "SaaS & Landing", href: "/themes/?category=SaaS+%26+Landing" },
      ],
    },
    {
      title: "Documentation",
      links: [
        { label: "Quick Start Guide", href: "/documentation/getting-started/" },
        { label: "Theme Architecture", href: "/documentation/theme-structure/" },
        { label: "Styling & Dark Mode", href: "/documentation/styling-and-themes/" },
        { label: "Content Management", href: "/documentation/content-management/" },
        { label: "GitHub Pages Deploy", href: "/documentation/deployment-guide/" },
      ],
    },
    {
      title: "Community & Blog",
      links: [
        { label: "Latest Engineering Posts", href: "/blog/" },
        { label: "Why Astro for Thempok", href: "/blog/why-astro-is-our-choice-for-thempok/" },
        { label: "Bulletproof Dark Mode", href: "/blog/mastering-css-variables-for-dark-mode/" },
        { label: "About Thempok", href: "/about/" },
        { label: "GitHub Repository", href: "https://github.com/thempok/thempok", isExternal: true },
      ],
    },
  ] as FooterSection[],
};
