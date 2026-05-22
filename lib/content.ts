import fs from 'node:fs';
import path from 'node:path';

export type Tag = {
  slug: string;
  label: string;
  description: string;
};

export type PostBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'callout'; typeLabel: string; text: string }
  | { type: 'code'; code: string; language: string };

export type MarginNote = {
  anchorText: string;
  note: string;
  type: 'annotation' | 'aside' | 'source' | 'concept';
};

export type Backlink = {
  title: string;
  slug: string;
};

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'ai' | 'cinema' | 'software' | 'philosophy' | 'life';
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  coverImage?: string;
  body: PostBodyBlock[];
  marginNotes: MarginNote[];
  backlinks: Backlink[];
  order?: number;
};

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  mood: 'thinking' | 'watching' | 'reading' | 'building' | 'questioning' | 'reflecting';
  accent: string;
  rotation: number;
  order?: number;
};

export type CinemaFrame = {
  title: string;
  director: string;
  aspectRatio: string;
  image: string;
  note: string;
};

export type SiteContent = {
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredNote: string;
    topicsEyebrow: string;
    topicsTitle: string;
    postsEyebrow: string;
    postsTitle: string;
    notesEyebrow: string;
    notesTitle: string;
    notesLink: string;
  };
  about: {
    eyebrow: string;
    name: string;
    role: string;
    image: string;
    lead: string;
    paragraphs: string[];
    reachEyebrow: string;
    links: { label: string; href: string }[];
  };
  postsIndex: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  fragmentsIndex: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  cinema: {
    eyebrow: string;
    title: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    placeholder: string;
    button: string;
    formNote: string;
    issueTitle: string;
    issueItems: string[];
  };
};

const contentDirectory = path.join(process.cwd(), 'content');

function readJsonFile<T>(relativePath: string): T {
  const filePath = path.join(contentDirectory, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function readMarkdownDirectory<TMeta extends Record<string, unknown>>(
  relativePath: string,
  mapEntry: (meta: TMeta, markdown: string) => Post | Note
) {
  const directoryPath = path.join(contentDirectory, relativePath);

  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  return fs
    .readdirSync(directoryPath)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const file = fs.readFileSync(filePath, 'utf8');
      const { meta, markdown } = parseFrontmatter<TMeta>(file, fileName);
      return mapEntry(meta, markdown);
    })
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function parseFrontmatter<TMeta>(file: string, fileName: string) {
  if (!file.startsWith('---')) {
    throw new Error(`Missing JSON frontmatter in ${fileName}`);
  }

  const frontmatterEnd = file.indexOf('\n---', 3);

  if (frontmatterEnd === -1) {
    throw new Error(`Unclosed JSON frontmatter in ${fileName}`);
  }

  const rawMeta = file.slice(3, frontmatterEnd).trim();
  const markdown = file.slice(frontmatterEnd + 4).trim();

  return {
    meta: JSON.parse(rawMeta) as TMeta,
    markdown
  };
}

function parsePostBody(markdown: string): PostBodyBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: PostBodyBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: 'code', language, code: codeLines.join('\n') });
      index += 1;
      continue;
    }

    if (line.startsWith(':::callout')) {
      const typeLabel = line.replace(':::callout', '').trim() || 'Note';
      const calloutLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith(':::')) {
        calloutLines.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: 'callout', typeLabel, text: calloutLines.join(' ').trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'heading', level: 3, text: line.slice(4).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push({ type: 'heading', level: 2, text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('>')) {
      const quoteLines: string[] = [];

      while (index < lines.length && lines[index].startsWith('>')) {
        quoteLines.push(lines[index].replace(/^>\s?/, ''));
        index += 1;
      }

      blocks.push({ type: 'blockquote', text: quoteLines.join(' ').trim() });
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];

      while (index < lines.length && lines[index].startsWith('- ')) {
        items.push(lines[index].slice(2).trim());
        index += 1;
      }

      blocks.push({ type: 'list', items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith('## ') &&
      !lines[index].startsWith('### ') &&
      !lines[index].startsWith('>') &&
      !lines[index].startsWith('- ') &&
      !lines[index].startsWith('```') &&
      !lines[index].startsWith(':::callout')
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks;
}

const tags = readJsonFile<Tag[]>('tags.json');
const siteContent = readJsonFile<SiteContent>('site.json');
const cinemaFrames = readJsonFile<CinemaFrame[]>('cinema-frames.json');

const posts = readMarkdownDirectory<Record<string, unknown>>('posts', (meta, markdown) => ({
  slug: String(meta.slug),
  title: String(meta.title),
  subtitle: String(meta.subtitle),
  excerpt: String(meta.excerpt),
  category: meta.category as Post['category'],
  tags: meta.tags as string[],
  publishedAt: String(meta.publishedAt),
  readingTime: Number(meta.readingTime),
  featured: Boolean(meta.featured),
  coverImage: meta.coverImage ? String(meta.coverImage) : undefined,
  body: parsePostBody(markdown),
  marginNotes: (meta.marginNotes as MarginNote[]) ?? [],
  backlinks: (meta.backlinks as Backlink[]) ?? [],
  order: Number(meta.order ?? 999)
})) as Post[];

const notes = readMarkdownDirectory<Record<string, unknown>>('fragments', (meta, markdown) => ({
  slug: String(meta.slug),
  title: String(meta.title),
  excerpt: String(meta.excerpt),
  content: markdown,
  publishedAt: String(meta.publishedAt),
  tags: meta.tags as string[],
  mood: meta.mood as Note['mood'],
  accent: String(meta.accent),
  rotation: Number(meta.rotation),
  order: Number(meta.order ?? 999)
})) as Note[];

export function getAllPosts() {
  return posts;
}

export function getFeaturedPost() {
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getAllNotes() {
  return notes;
}

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug) ?? null;
}

export function getAllTags() {
  return tags;
}

export function getSiteContent() {
  return siteContent;
}

export function getCinemaFrames() {
  return cinemaFrames;
}

export function getRelatedPostsByTags(tagsToMatch: string[], currentSlug: string) {
  return posts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.tags.some((tag) => tagsToMatch.includes(tag)))
    .slice(0, 3);
}

export function getPostsByTag(slug: string) {
  return posts.filter((post) => post.tags.map((tag) => tag.toLowerCase()).includes(slug.toLowerCase()));
}

export function getNotesByTag(slug: string) {
  return notes.filter((note) => note.tags.map((tag) => tag.toLowerCase()).includes(slug.toLowerCase()));
}

export function getTag(slug: string) {
  return tags.find((tag) => tag.slug === slug.toLowerCase()) ?? null;
}

export function getPostByTitle(title: string) {
  const normalized = title.toLowerCase().trim();
  return posts.find((post) => post.title.toLowerCase() === normalized || post.title.toLowerCase().includes(normalized)) ?? null;
}
