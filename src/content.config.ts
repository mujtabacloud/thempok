import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const themes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/themes' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum([
      'Portfolio',
      'Documentation',
      'Blog & Editorial',
      'SaaS & Landing',
      'E-commerce',
      'Agency',
    ]),
    tags: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    latest: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      avatarText: z.string().default('TP'),
      url: z.string().default('https://github.com/thempok'),
    }),
    version: z.string().default('1.0.0'),
    lastUpdated: z.string().default(''),
    license: z.string().default('MIT'),
    stars: z.number().default(0),
    downloads: z.number().default(0),
    preview: z.object({
      themeColor: z.string().default('#0f172a'),
      accentColor: z.string().default('#38bdf8'),
      heroHeadline: z.string().default(''),
      mockupType: z.enum(['browser', 'code', 'docs', 'card-grid']).default('browser'),
    }),
    demoUrl: z.string(),
    githubUrl: z.string(),
    requirements: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    installCommands: z.object({
      create: z.string().default(''),
      gitClone: z.string().default(''),
      install: z.string().default('npm install'),
      run: z.string().default('npm run dev'),
    }),
    projectStructure: z.array(z.string()).default([]),
    highlights: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    ).default([]),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional().default(''),
    section: z.string().default('General'),
    order: z.number().default(1),
    readTime: z.string().default('3 min read'),
    lastUpdated: z.string().default(''),
    summary: z.string().default(''),
    badge: z.string().optional(),
    prev: z
      .object({
        title: z.string(),
        slug: z.string(),
      })
      .optional(),
    next: z
      .object({
        title: z.string(),
        slug: z.string(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    publishDate: z.string(),
    readTime: z.string().default('5 min read'),
    featured: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      role: z.string().default('Editor'),
      avatarText: z.string().default('TP'),
    }),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { themes, docs, blog };
