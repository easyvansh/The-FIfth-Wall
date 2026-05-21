export type Tag = {
  slug: string;
  label: string;
  description: string;
};

export type PostBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'callout'; typeLabel: string; text: string }
  | { type: 'code'; code: string; language: string };

export type MarginNote = {
  anchorText: string;
  note: string;
  type: 'annotation' | 'aside' | 'source';
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
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  status: 'active' | 'archived' | 'wip';
  year: number;
  body: string;
  github?: string;
  live?: string;
};

export const tags: Tag[] = [
  { slug: 'ai', label: 'AI', description: 'Voice, automation, authorship, and the places where generated systems still feel strangely airless.' },
  { slug: 'cinema', label: 'Cinema', description: 'Film frames, duration, surveillance, and the moving image as a way of thinking.' },
  { slug: 'software', label: 'Software', description: 'Engineering craft, product systems, local-first tools, and the invisible politics inside code.' },
  { slug: 'philosophy', label: 'Philosophy', description: 'Attention, reinvention, meaning, and the frameworks that shape how a life is interpreted.' },
  { slug: 'life', label: 'Life', description: 'Personal notes on attention, memory, habits, and modern living without the productivity theatre.' }
];

export const posts: Post[] = [
  {
    slug: 'ai-writing-soulless',
    title: 'Why AI Writing Feels Soulless',
    subtitle: 'On voice, syntactic friction, and what makes prose feel alive in an age of frictionless generation.',
    excerpt: 'The computer writes without breathing. It selects the statistically inevitable word, removing the human struggle of selection, which is precisely where the soul resides.',
    category: 'ai',
    tags: ['philosophy', 'writing', 'ai'],
    publishedAt: 'May 18, 2026',
    readingTime: 6,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop',
    body: [
      { type: 'paragraph', text: 'If you read enough machine-generated text, a peculiar weariness sets in. It is not that the writing is grammatically incorrect or structurally chaotic; indeed, it is often distressingly perfect. The issue is that it feels frictionless. Every sentence glides into the next with the inevitable grease of a predictive model. It lacks the dynamic tension of human thought.' },
      { type: 'heading', level: 2, text: 'The struggle of selection' },
      { type: 'paragraph', text: 'When a human writes, they are constantly discarding words. No, not that one. Too heavy. Not that one either, too academic. This struggle leaves structural micro-scars. Like the rough edges of hand-thrown pottery, these scars are where character lives.' },
      { type: 'blockquote', text: 'The platform is done when writing can be published. Everything else is decoration.' },
      { type: 'paragraph', text: 'In this digital atelier, tools exist to create space for writing, not to bypass it. The connections between ideas, as modeled in [[Tarkovsky vs TikTok Attention]], require slow deliberate digestion, not automated summaries.' },
      { type: 'callout', typeLabel: 'Director note', text: 'Treat prose as a cinema of the mind. Every cut, punctuation mark, and line break carries weight.' }
    ],
    marginNotes: [
      { anchorText: 'frictionless', note: 'Speed without traction. This is where so much generated prose loses texture.', type: 'aside' },
      { anchorText: 'connections between ideas', note: 'The Obsidian layer matters because it lets essays keep talking after publication.', type: 'annotation' }
    ],
    backlinks: [
      { title: 'Tarkovsky vs TikTok Attention', slug: 'tarkovsky-vs-tiktok' }
    ]
  },
  {
    slug: 'surveillance-cinema',
    title: 'Surveillance Cinema and the Digital Panopticon',
    subtitle: 'From The Conversation to Kimi. How cameras shifted from passive observers to active system architects.',
    excerpt: 'A cinematic study of how the camera lens transitioned from subjective observer to omnipresent participant in social control.',
    category: 'cinema',
    tags: ['cinema', 'surveillance', 'systems'],
    publishedAt: 'May 10, 2026',
    readingTime: 9,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
    body: [
      { type: 'paragraph', text: 'In Francis Ford Coppola\'s The Conversation, surveillance is a heavy, physical craft. It involves magnetic tape, bulky reels, and microphones disguised as pens. The protagonist, Harry Caul, lives inside the physical friction of sound waves.' },
      { type: 'heading', level: 2, text: 'The ambient gaze' },
      { type: 'paragraph', text: 'Fast forward to Steven Soderbergh\'s Kimi. Surveillance is no longer an active task; it is the background environment. It is ambient, seamless, and powered by voice assistants. The architecture is invisible.' },
      { type: 'blockquote', text: 'We no longer search the internet; we live inside a machine that parses our intentions before we even articulate them.' }
    ],
    marginNotes: [
      { anchorText: 'Harry Caul', note: 'Gene Hackman plays Harry as a man swallowed by his own silence.', type: 'source' }
    ],
    backlinks: []
  },
  {
    slug: 'tarkovsky-vs-tiktok',
    title: 'Tarkovsky vs TikTok Attention',
    subtitle: 'Duration, patience, and the political act of the long take in a hyper-optimized culture.',
    excerpt: 'To watch a long take of a man carrying a candle across a drained pool is to stage a silent rebellion against the algorithm.',
    category: 'cinema',
    tags: ['cinema', 'attention', 'philosophy'],
    publishedAt: 'April 28, 2026',
    readingTime: 12,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop',
    body: [
      { type: 'paragraph', text: 'Andrei Tarkovsky believed that cinema is sculpting in time. The camera does not merely record events; it captures the weight of seconds as they flow. When you sit through a long take in Nostalghia, you are forced to confront your own nervous system.' },
      { type: 'heading', level: 2, text: 'The economy of the microsecond' },
      { type: 'paragraph', text: 'Contrast this with the modern feed, an aesthetic optimized to capture cognitive micro-impressions. It is a loop engineered to bypass contemplation. To spend nine minutes watching a candle burn is to refuse the optimization of your attention.' },
      { type: 'callout', typeLabel: 'Aesthetic note', text: 'If attention is the last untamed resource of the human spirit, the long take is a shield.' }
    ],
    marginNotes: [
      { anchorText: 'sculpting in time', note: 'The title of Tarkovsky\'s central book on cinematic philosophy.', type: 'source' }
    ],
    backlinks: [
      { title: 'Why AI Writing Feels Soulless', slug: 'ai-writing-soulless' }
    ]
  },
  {
    slug: 'count-of-monte-cristo',
    title: 'The Count of Monte Cristo and Masculine Reinvention',
    subtitle: 'Revenge, patience, and what Dumas understood about self-transformation.',
    excerpt: 'Self-reinvention is not a series of habit trackers. It is a slow subterranean confinement that asks you to bury your old self.',
    category: 'philosophy',
    tags: ['philosophy', 'literature', 'reinvention'],
    publishedAt: 'March 14, 2026',
    readingTime: 8,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    body: [
      { type: 'paragraph', text: 'Modern self-help suggests that changing your life is a pleasant optimization problem. Wake up at five, journal, optimize your nutrients. But Alexandre Dumas understood that true transformation requires a death. Edmond Dantes must disappear before the Count can emerge.' },
      { type: 'blockquote', text: 'Only a man who has felt ultimate despair is capable of feeling ultimate bliss.' }
    ],
    marginNotes: [
      { anchorText: 'Edmond Dantes', note: 'The old self does not get improved; it gets replaced by a constructed myth.', type: 'annotation' }
    ],
    backlinks: []
  }
];

export const notes: Note[] = [
  {
    slug: 'bresson-design-philosophy',
    title: 'Bresson as interface designer',
    excerpt: 'Make visible what might never have been seen is also a design philosophy.',
    content: 'Robert Bresson: "Make visible what, without you, might perhaps never have been seen." This applies as much to UI components as it does to camera lenses.',
    publishedAt: 'May 20, 2026',
    tags: ['cinema', 'design'],
    mood: 'thinking',
    accent: '#ff4d00',
    rotation: -1.2
  },
  {
    slug: 'software-mirror',
    title: 'The mirror of software',
    excerpt: 'All software eventually reflects the organization that built it.',
    content: 'All software is eventually a mirror of the organization that built it. If the team is fractured and political, the interface will carry that fragmentation.',
    publishedAt: 'May 19, 2026',
    tags: ['software', 'systems'],
    mood: 'reflecting',
    accent: '#a855f7',
    rotation: 1.4
  },
  {
    slug: 'deleted-instagram-memory',
    title: 'Outsourced visual memory',
    excerpt: 'A note on deleting Instagram and remembering films without the grid.',
    content: 'I deleted my personal Instagram this week because I realized my visual memory was being outsourced. I want to remember films through my own grain, not through an algorithmic grid.',
    publishedAt: 'May 17, 2026',
    tags: ['life', 'attention'],
    mood: 'questioning',
    accent: '#00c2ff',
    rotation: -0.7
  },
  {
    slug: 'mirror-and-silence',
    title: 'Mirror and silence',
    excerpt: 'Wind through grass can be more coherent than dialogue.',
    content: 'Rewatched Mirror again. The wind moving through the grass is more emotionally coherent than most scripted dialogue. We should trust silence in our writing.',
    publishedAt: 'May 16, 2026',
    tags: ['cinema', 'silence'],
    mood: 'watching',
    accent: '#34d399',
    rotation: 1
  },
  {
    slug: 'flat-knowledge',
    title: 'Flat knowledge',
    excerpt: 'The database should be flat and the links should do the thinking.',
    content: 'Knowledge is not hierarchical; it is a web. Bidirectional links are the closest software metaphor we have for the way an idea keeps reappearing in the mind.',
    publishedAt: 'May 12, 2026',
    tags: ['design', 'philosophy'],
    mood: 'building',
    accent: '#f43f5e',
    rotation: -1.5
  },
  {
    slug: 'voice-as-surface',
    title: 'Voice as surface',
    excerpt: 'A good voice gives ideas somewhere to adhere.',
    content: 'An elegant writer with an average idea will outlive a dull writer with a brilliant one. Voice is the sticky surface where ideas adhere.',
    publishedAt: 'May 11, 2026',
    tags: ['writing', 'ai'],
    mood: 'thinking',
    accent: '#eab308',
    rotation: 0.5
  }
];

export const projects: Project[] = [
  {
    slug: 'cinematic-atelier-v2',
    name: 'The Cinematic Atelier V2',
    description: 'An Obsidian-backed publication architecture for essays, micro-notes, and cinematic layouts.',
    stack: ['Next.js 15', 'Tailwind CSS', 'Sanity Studio v3', 'Framer Motion'],
    status: 'active',
    year: 2026,
    body: 'A custom CMS-ready platform with portable text margin notes, synced fragments, and indexable wikilinks with automatic backlink extraction.',
    github: 'https://github.com/easyvansh/the-fifth-wall',
    live: 'https://vanshsingh.in'
  },
  {
    slug: 'lenscraft-frame-parser',
    name: 'Lenscraft: Film Frame Parser',
    description: 'An AI-powered indexing tool for compositional grids, lighting keys, and color histograms.',
    stack: ['Python', 'OpenCV', 'PyTorch', 'React', 'D3.js'],
    status: 'wip',
    year: 2026,
    body: 'Designed for directors and cinematographers to upload a film file and generate a structural visual script organized by color, light, and negative space.',
    github: 'https://github.com/easyvansh'
  },
  {
    slug: 'scribe-synapse-engine',
    name: 'Scribe: Markdown Synapse Engine',
    description: 'A local-first browser editor with bidirectional linking and node clustering visualizations.',
    stack: ['TypeScript', 'Web Workers', 'IndexedDB', 'Tailwind'],
    status: 'active',
    year: 2025,
    body: 'A tool for writing fast fragments without leaving the browser, storing drafts locally while rendering standard markdown and wikilink previews.',
    github: 'https://github.com/easyvansh'
  }
];

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

export function getProjects() {
  return projects;
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
