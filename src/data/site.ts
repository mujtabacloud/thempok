export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const getRelativePath = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const siteConfig = {
  name: "Thempok",
  tagline: "Free Website Themes, Documentation & Tech Blogs",
  description:
    "Thempok is a developer-first platform delivering high-performance, 100% free open-source website themes, clear technical documentation, and in-depth engineering articles.",
  url: "https://thempok.dev",
  github: "https://github.com/mujtabacloud/thempok",
  license: "MIT",
  navItems: [
    { title: "Home", href: getRelativePath("/") },
    { title: "Themes", href: getRelativePath("/themes/"), badge: "Free" },
    { title: "Documentation", href: getRelativePath("/documentation/") },
    { title: "Blog", href: getRelativePath("/blog/") },
    { title: "About", href: getRelativePath("/about/") },
  ] as NavItem[],
  footerSections: [
    {
      title: "Explore Themes",
      links: [
        { label: "All Themes", href: getRelativePath("/themes/") },
        { label: "Portfolio Themes", href: getRelativePath("/themes/?category=Portfolio") },
        { label: "Documentation Themes", href: getRelativePath("/themes/?category=Documentation") },
        { label: "Blog & Editorial", href: getRelativePath("/themes/?category=Blog+%26+Editorial") },
        { label: "SaaS & Landing", href: getRelativePath("/themes/?category=SaaS+%26+Landing") },
      ],
    },
    {
      title: "Documentation",
      links: [
        { label: "Quick Start Guide", href: getRelativePath("/documentation/getting-started/") },
        { label: "Theme Architecture", href: getRelativePath("/documentation/theme-structure/") },
        { label: "Styling & Dark Mode", href: getRelativePath("/documentation/styling-and-themes/") },
        { label: "Content Management", href: getRelativePath("/documentation/content-management/") },
        { label: "GitHub Pages Deploy", href: getRelativePath("/documentation/deployment-guide/") },
      ],
    },
    {
      title: "Community & Blog",
      links: [
        { label: "Latest Engineering Posts", href: getRelativePath("/blog/") },
        { label: "Why Astro for Thempok", href: getRelativePath("/blog/why-astro-is-our-choice-for-thempok/") },
        { label: "Bulletproof Dark Mode", href: getRelativePath("/blog/mastering-css-variables-for-dark-mode/") },
        { label: "About Thempok", href: getRelativePath("/about/") },
        { label: "GitHub Repository", href: "https://github.com/mujtabacloud/thempok", isExternal: true },
      ],
    },
  ] as FooterSection[],
};
