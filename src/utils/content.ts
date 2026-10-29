import { getCollection, type CollectionEntry } from 'astro:content';

export type Theme = CollectionEntry<'themes'>['data'] & {
  id: string;
  slug: string;
};

export type DocEntry = CollectionEntry<'docs'>;

export type BlogPost = CollectionEntry<'blog'>['data'] & {
  slug: string;
};

export interface DocSectionItem {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  readTime?: string;
}

export interface DocSection {
  title: string;
  items: DocSectionItem[];
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

export const blogCategories = [
  'All',
  'Astro & Frameworks',
  'CSS & Design Systems',
  'Performance & Web Vitals',
  'Developer Experience',
] as const;

export const SECTION_ORDER = ['Getting Started', 'Customization', 'Deployment & Publishing'];

/**
 * Fetch all themes formatted with id and slug.
 */
export async function getAllThemes(): Promise<Theme[]> {
  const entries = await getCollection('themes');
  return entries.map((e) => ({
    id: e.id,
    slug: e.id,
    ...e.data,
  }));
}

/**
 * Fetch all blog posts sorted by publishDate descending.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  return posts
    .map((p) => ({
      slug: p.id,
      ...p.data,
    }))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

/**
 * Build documentation sections dynamically from content collection docs.
 */
export async function getDocSections(): Promise<DocSection[]> {
  const docs = await getCollection('docs');
  const sortedDocs = [...docs].sort((a, b) => (a.data.order || 0) - (b.data.order || 0));

  const map = new Map<string, DocSectionItem[]>();
  for (const s of SECTION_ORDER) {
    map.set(s, []);
  }

  for (const doc of sortedDocs) {
    const sec = doc.data.section || 'General';
    if (!map.has(sec)) {
      map.set(sec, []);
    }
    map.get(sec)!.push({
      slug: doc.id,
      title: doc.data.title,
      description: doc.data.summary || doc.data.subtitle || '',
      badge: doc.data.badge,
      readTime: doc.data.readTime,
    });
  }

  return Array.from(map.entries())
    .filter(([_, items]) => items.length > 0)
    .map(([title, items]) => ({ title, items }));
}
