# VANSH SINGH — BLOG PLATFORM PLAN
### A Cinematic Intellectual Atelier · V2 Masterplan

> *"The platform is done when writing can be published. Everything else is decoration."*

---

## 0. NORTH STAR

Build a single place where Vansh writes, thinks publicly, and builds a reader relationship. The site should feel like four things at once:

- **Medium** — clean, distraction-free reading; category-driven discovery
- **Substack** — direct author-reader relationship; email as the asset
- **Notion** — connected ideas; everything is a block; pages link to pages
- **Obsidian** — bidirectional links; a knowledge graph you can walk through; backlinks as context

The visual identity stays from V1: dark, cinematic, warm amber, notebook grain. What changes is the *depth of the system* underneath.

---

## 1. BRAND

| Element | Value |
|---|---|
| Site Name | Vansh Singh |
| Tagline | *Notes on cinema, software, AI, philosophy, and modern life.* |
| Domain (target) | `vanshsingh.in` or `vanshsingh.com` |
| Vercel deploy | `vanshsingh.vercel.app` |
| Fallbacks | `vansh-atelier.vercel.app` · `vansh-notes.vercel.app` |
| Voice | Personal, precise, essayistic. No listicles. No content-marketing tone. |

---

## 2. DESIGN SYSTEM

### 2.1 Philosophy

The design borrows from four references and blends them deliberately:

| Reference | What to steal |
|---|---|
| **Paul Graham** | Readability above all. Long paragraphs are fine. No sidebars cluttering prose. |
| **A24** | Cinematic negative space. Slow, deliberate pacing. Warmth over cool minimalism. |
| **The Marginalian** | Richness without noise. Quotes, margin notes, pull-quotes as first-class citizens. |
| **Gwern.net** | Footnotes, backlinks, long-form depth. The internet as a book. |
| **Notion** | Everything is a block. Structure is flexible but always consistent. |
| **Obsidian** | Knowledge graph. Pages know about each other. |

### 2.2 Colour Palette

```
Background     #11100e   ← near-black, warm
Surface        #1a1815   ← card and sidebar bg
Paper          #f8f1e3   ← used for blockquotes, callout backgrounds
Primary Text   #f5ead8   ← warm off-white
Muted Text     #b8aa94   ← metadata, timestamps, labels
Accent Amber   #d69b45   ← links, highlights, active states
Accent Red     #8f3f2b   ← danger, destructive, accent callouts
Border         rgba(245, 234, 216, 0.12)
Grain overlay  5% opacity noise texture on every surface
```

### 2.3 Typography

| Role | Font | Notes |
|---|---|---|
| Display / Hero | EB Garamond | Used for article titles, homepage hero, pull quotes |
| Body | Inter | All prose, UI, metadata |
| Handwritten | Caveat | Section labels, margin annotations, hand-style details |
| Monospace | JetBrains Mono | Code blocks, inline code |

### 2.4 Motion Rules

Use Framer Motion. Keep it literary, not tech-startup:

- Page fade on route change (`opacity 0 → 1`, `y +12 → 0`, 300ms ease-out)
- Staggered card entrance on homepage (`delay: index * 0.06s`)
- Margin notes slide in from right on scroll (`x +20 → 0`, opacity fade)
- Reading progress: thin amber ink line at top, not a thick bar
- Hover on cards: `y -3`, subtle warm shadow lift
- No bounce, no spring, no 3D transforms

---

## 3. INFORMATION ARCHITECTURE

### 3.1 Site Map

```
/                   Homepage
/posts              All posts (filterable by category + tag)
/posts/[slug]       Single article
/fragments          Short-form notes (Obsidian-style atomic notes)
/fragments/[slug]   Single fragment
/about              Essay-style about page
/projects           Project archive
/projects/[slug]    Single project with full writeup
/topics/[tag]       All posts tagged with a topic (auto-generated)
/newsletter         Subscribe page (email capture)
/graph              Knowledge graph (V2)
```

### 3.2 Content Types

**Posts** — full essays, 800–5000 words. The primary content unit. Think Medium.

**Fragments** — atomic notes, 50–300 words. A single observation, quote with reaction, or micro-essay. Think Substack Notes or Twitter but yours.

**Projects** — portfolio entries with tech stack, writeup, links.

**Topics** — auto-generated tag pages that aggregate Posts + Fragments. Think Substack tags or Notion databases.

**Cinema Frames** (V2) — film stills with analysis. A visual sub-publication.

---

## 4. PAGE SPECIFICATIONS

### 4.1 Homepage

Seven sections in order:

**① Hero**
- Name in EB Garamond, large. Tagline in Inter, muted.
- Optional: one rotating "current obsession" line that changes (pulled from Sanity config).
- CTA: "Read the latest essay" + "Subscribe"

**② Pinned Essay**
- One featured essay takes the full width. Film-strip header detail, cinematic cover image optional.
- Like a Medium featured story but warmer, darker.

**③ Current Notebook**
- 3-column grid of the latest Posts and Fragments mixed.
- Cards show: title, category label (Caveat font), excerpt, reading time.
- Slight random rotation on Fragment cards (±1.5°), like notes on a cork board.

**④ Topics Bar**
- Horizontal scrollable row of topic pills: Cinema · Software · AI · Philosophy · Life
- Click goes to `/topics/[tag]`

**⑤ Fragments Feed**
- 4–6 short-form fragment cards in a tighter, denser layout.
- Think Substack Notes feed. Each fragment is a standalone thought.

**⑥ Projects**
- 2–3 selected projects. Tech stack badges. Live and GitHub links.

**⑦ Footer**
- GitHub · LinkedIn · Email
- Subscribe form (email input + button)
- "Made with obsession" in Caveat

### 4.2 Posts Index `/posts`

- Filter bar: All · Cinema · Software · AI · Philosophy
- Sort: Latest · Most Read (V2) · Featured
- Two layout modes: Grid (cards) and List (dense, like a reading list). Toggle button.
- Search bar (client-side, V1. Algolia/AI search in V2.)
- Each card shows: cover image (optional), title, subtitle, category, tags, date, reading time

### 4.3 Article Page `/posts/[slug]`

This is the most important page. Gets the most design attention.

**Header zone**
- Category label in amber (Caveat)
- Title in EB Garamond, large
- Subtitle in Inter, muted
- Author + date + reading time
- Optional film-strip ornament at top (decorative, SVG)
- Optional cover image (full-bleed or contained)

**Reading Progress**
- Thin amber line at very top of viewport
- Percentage shown on scroll (subtle, fades in after 10%)

**Layout (Desktop)**
```
[ 24px margin ] [ 65ch max essay column ] [ 24px ] [ 220px margin notes ] [ 24px ]
```
- Essay column is the center of gravity. Nothing competes with it.
- Margin notes (from Sanity `marginNotes` field) appear anchored to their paragraph.
- Pull quotes float to the margin on desktop, inline on mobile.

**Layout (Mobile)**
- Full-width essay, margin notes collapse to inline callout cards below their paragraph.

**Body Content — Block Types**
These all render via `PortableTextRenderer.tsx`:

| Block | Render |
|---|---|
| Paragraph | Clean prose, 1.8 line height |
| Heading H2 | EB Garamond, amber accent left border |
| Heading H3 | Inter, medium weight |
| Blockquote | Paper background (#f8f1e3), left amber border, EB Garamond italic |
| Pull Quote | Large, centred, EB Garamond — floats to margin on desktop |
| Code Block | JetBrains Mono, dark surface, syntax highlighted |
| Inline Code | Monospace, slightly warm surface |
| Image | Full-width with optional caption in Caveat |
| Callout | Surface card with Caveat label (e.g. "Note", "Warning") |
| Divider | Thin amber rule with a centre ornament |
| Footnote reference | Superscript number; footnote renders at bottom of article |

**After Essay**
- Tags row (clickable, go to `/topics/[tag]`)
- "If this resonated" — newsletter subscribe block
- Backlinks section: "Other notes that reference this" (Notion/Obsidian-style)
- Related posts (by tag, curated in Sanity or auto-matched)

### 4.4 Fragments `/fragments`

Inspired by Obsidian atomic notes + Substack Notes.

- Masonry or stacked card layout
- Each fragment is a card: title (optional), body, tags, mood tag, date
- Fragments can have `[[wikilinks]]` to other posts or fragments — rendered as hover-preview links
- Mood field options: `thinking · watching · reading · building · questioning · reflecting`

### 4.5 About Page `/about`

An essay, not a CV.

Opening line (as written):
> *"I build software and watch cinema obsessively, and I keep noticing they are asking the same questions: how we see, how we remember, how systems shape us, and what remains human when everything becomes optimized."*

Sections (all written in first person, essayistic):
1. Who I am (2–3 paragraphs)
2. What I'm interested in (topics, with brief explanation of each)
3. What I've built (light project mentions, links to Projects page)
4. What I'm reading / watching (live Sanity field, updated easily)
5. How to reach me (email, GitHub, LinkedIn)

No timeline. No resume bullet points.

### 4.6 Projects `/projects`

- Clean grid of project cards
- Each card: title, one-line description, tech stack pills, GitHub + Live links
- Clicking opens a full project page at `/projects/[slug]` with essay-style writeup

### 4.7 Newsletter `/newsletter`

A single-purpose landing page:
- What the newsletter is (one paragraph)
- Frequency, what to expect
- Email capture form → connected to ConvertKit or Buttondown (free tiers)
- Archive of past issues (V2)

---

## 5. THE NOTION + OBSIDIAN LAYER

This is what elevates the site from "a blog" to "a public knowledge system."

### 5.1 Bidirectional Links (Wikilinks)

Implement `[[Post Title]]` syntax in Sanity Portable Text via a custom block type.

When rendered:
- Appears as a styled link with a small `↗` indicator
- On hover: shows a floating preview card (title, excerpt, category)
- On article pages: a "Backlinks" section at the bottom lists every piece that links to this post
- Fragment cards can also use wikilinks

This is the Obsidian behaviour. Content becomes a web, not a list.

### 5.2 Topics as Databases (Notion-style)

Each tag/topic is not just a filter — it's its own page:

`/topics/cinema` shows:
- Header: "Cinema" with Vansh's description of why this topic matters to him
- All posts tagged Cinema
- All fragments tagged Cinema
- Linked topics (e.g. Cinema links to Philosophy, Software)

### 5.3 Knowledge Graph (V2, Post-Launch)

A visual D3.js or vis.js graph showing:
- Every post as a node
- Every bidirectional link as an edge
- Topics as cluster containers
- Clickable nodes navigate to that post

Implement only after 10+ posts exist. An empty graph is pointless.

---

## 6. THE SUBSTACK LAYER (Email)

### 6.1 Email Provider

Use **Buttondown** (free up to 1,000 subscribers) or **ConvertKit** (free up to 10,000).

Both have API access for custom forms. Do not use Mailchimp (ugly, expensive, overpowered).

### 6.2 Subscribe Touchpoints

Place subscribe CTAs at:
- Homepage hero (secondary CTA button)
- End of every article ("If this resonated, subscribe")
- Dedicated `/newsletter` page
- Footer
- After Fragment cards (subtle)

### 6.3 What to Send

Start with a simple format:
- Subject: the essay title
- Body: the full essay, exactly as published
- End with: links to recent fragments and what Vansh is currently reading/watching

Publish when an essay is done. Not on a schedule.

---

## 7. CMS — SANITY SCHEMAS

### Post

```typescript
{
  title: string
  slug: slug
  subtitle: string
  publishedAt: datetime
  category: 'cinema' | 'software' | 'ai' | 'philosophy' | 'life'
  tags: array<string>
  excerpt: text (max 200 chars)
  coverImage: image (with alt text)
  body: array<block>              // Portable Text
  marginNotes: array<{
    anchorText: string,           // text it anchors to in the essay
    note: string,
    noteType: 'annotation' | 'aside' | 'source'
  }>
  footnotes: array<{
    number: number,
    content: text
  }>
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  readingTimeOverride: number     // auto-calculated but can override
}
```

### Fragment

```typescript
{
  title: string                   // optional
  slug: slug
  content: array<block>           // Portable Text (short)
  publishedAt: datetime
  tags: array<string>
  mood: 'thinking' | 'watching' | 'reading' | 'building' | 'questioning' | 'reflecting'
  sourceUrl: url                  // if reacting to something external
  sourceTitle: string
}
```

### Project

```typescript
{
  title: string
  slug: slug
  description: string             // one sentence
  techStack: array<string>
  githubUrl: url
  liveUrl: url
  coverImage: image
  body: array<block>              // full essay-style writeup
  featured: boolean
  status: 'active' | 'archived' | 'wip'
  year: number
}
```

### SiteConfig (singleton)

```typescript
{
  currentObsession: string        // shows in hero — update whenever
  nowReading: string
  nowWatching: string
  nowBuilding: string
}
```

### CinemaFrame (V2)

```typescript
{
  filmTitle: string
  director: string
  year: number
  image: image
  caption: string
  analysis: array<block>
  tags: array<string>
  aspectRatio: '2.39:1' | '1.85:1' | '4:3' | '1.33:1'
}
```

---

## 8. COMPONENT ARCHITECTURE

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── article/
│   │   ├── ArticleLayout.tsx     // essay column + margin notes
│   │   ├── MarginNote.tsx        // anchored side annotation
│   │   ├── PullQuote.tsx         // large floated quote
│   │   ├── ReadingProgress.tsx   // amber ink line
│   │   ├── Footnote.tsx
│   │   ├── Backlinks.tsx         // "posts that link here"
│   │   └── WikiLink.tsx          // [[wikilink]] with hover preview
│   │
│   ├── cards/
│   │   ├── PostCard.tsx
│   │   ├── FragmentCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── NotebookCard.tsx
│   │
│   ├── portable-text/
│   │   └── PortableTextRenderer.tsx
│   │
│   ├── homepage/
│   │   ├── Hero.tsx
│   │   ├── PinnedEssay.tsx
│   │   ├── NotebookGrid.tsx
│   │   ├── TopicsBar.tsx
│   │   └── FragmentsFeed.tsx
│   │
│   └── shared/
│       ├── AnimatedTitle.tsx
│       ├── SubscribeForm.tsx
│       ├── CategoryBadge.tsx
│       ├── TagPill.tsx
│       ├── ReadingTime.tsx
│       └── HoverPreview.tsx      // wikilink hover card
│
├── lib/
│   ├── sanity.ts
│   ├── queries.ts                // all GROQ queries
│   ├── reading-time.ts
│   └── wikilinks.ts              // parse and resolve [[links]]
│
├── styles/
│   └── globals.css
│
└── app/
    ├── page.tsx                  // homepage
    ├── posts/page.tsx
    ├── posts/[slug]/page.tsx
    ├── fragments/page.tsx
    ├── fragments/[slug]/page.tsx
    ├── topics/[tag]/page.tsx
    ├── about/page.tsx
    ├── projects/page.tsx
    ├── projects/[slug]/page.tsx
    └── newsletter/page.tsx
```

---

## 9. TECH STACK

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | Fast, SEO-ready, great DX |
| Language | TypeScript | Fewer bugs, better autocomplete |
| Styling | Tailwind CSS | Rapid UI, consistent spacing |
| Animation | Framer Motion | Literary-quality transitions |
| CMS | Sanity v3 | Portable Text, real-time, great API |
| Email | Buttondown or ConvertKit | Simple, cheap, API-friendly |
| Hosting | Vercel (free tier) | Deploy on push |
| Search | Fuse.js (V1 client-side) | Free, fast for <500 posts |
| Comments | None in V1 | Don't add noise before writing exists |
| Analytics | Vercel Analytics (free) | GDPR-safe, zero JS overhead |
| Graph | D3.js (V2) | Knowledge graph visualisation |

---

## 10. SEO & METADATA

Every page generates:
- `<title>` → `{Post Title} — Vansh Singh`
- `<meta description>` → excerpt or first 160 chars
- Open Graph image (Vercel OG with dynamic title + category + date)
- Twitter/X card
- `<link rel="canonical">`
- JSON-LD structured data (`Article` schema for posts)
- `robots.txt` and `sitemap.xml` (auto-generated by Next.js)

---

## 11. PERFORMANCE RULES

- No images without `next/image` and explicit dimensions
- Fonts loaded with `next/font` (zero layout shift)
- All Sanity images through Sanity CDN with `@sanity/image-url`
- Article pages: server component wrapper + client island for reading progress
- Target: Lighthouse Mobile score ≥ 90

---

## 12. STARTER CONTENT

### Five Posts to Write and Publish at Launch

1. **Why AI Writing Feels Soulless** — the category is AI, the real subject is voice and what makes writing human
2. **Surveillance Cinema and the Digital Panopticon** — from *The Conversation* to *Kimi*; Foucault meets film
3. **Tarkovsky vs TikTok Attention** — a polemic about duration, patience, and the death of the long take
4. **The Count of Monte Cristo and Masculine Reinvention** — revenge, transformation, and what the novel understands about time that most self-help doesn't
5. **What Film School Actually Taught Me** — the lessons that had nothing to do with filmmaking

### Ten Fragments to Seed the Feed

These should feel like pages torn from a notebook. Short, sharp, personal. For example:
- A quote from Bresson's *Notes on the Cinematographer* with two sentences of reaction
- "All software is eventually a mirror of the team that built it"
- A question you can't stop thinking about
- A film you watched twice in one week and don't know why
- A paragraph on why you deleted Instagram

---

## 13. BUILD ORDER

```
Phase 1 — Foundation
  1.  Scaffold Next.js 15 app (TypeScript, Tailwind, App Router, ESLint)
  2.  Configure Tailwind theme (colours, fonts, spacing scale)
  3.  Load fonts (EB Garamond, Inter, Caveat, JetBrains Mono via next/font)
  4.  Add global styles (grain overlay, CSS variables, base typography)
  5.  Build Layout, Header, Footer (static, no CMS yet)

Phase 2 — Core Pages (Static)
  6.  Build Homepage with static placeholder data
  7.  Build About page (write the essay directly in MDX or static component)
  8.  Build Projects page (static data)

Phase 3 — CMS
  9.  Create Sanity project
  10. Define all schemas (Post, Fragment, Project, SiteConfig)
  11. Add Sanity Studio route at /studio
  12. Connect GROQ queries for Posts, Fragments, Projects
  13. Replace static data on all pages with live Sanity data

Phase 4 — Article Page (the hardest)
  14. Build ArticleLayout (two-column desktop, single-column mobile)
  15. Build PortableTextRenderer (all block types)
  16. Build MarginNote (anchored annotations)
  17. Build ReadingProgress (amber ink line)
  18. Build Backlinks component
  19. Build WikiLink with hover preview

Phase 5 — Posts Index + Fragments
  20. Build PostCard, FragmentCard
  21. Build /posts index with filter bar
  22. Build /fragments page
  23. Build /topics/[tag] dynamic page

Phase 6 — Polish + Newsletter
  24. Add Framer Motion (page transitions, staggered cards, margin note slide-in)
  25. Add OpenGraph image generation (Vercel OG)
  26. Add sitemap.xml + robots.txt
  27. Integrate email subscribe form (Buttondown or ConvertKit API)
  28. Add /newsletter page

Phase 7 — Content + Deploy
  29. Write and publish 5 posts in Sanity
  30. Write 10 fragments
  31. Test on mobile (iPhone Safari + Android Chrome)
  32. Deploy to Vercel
  33. Configure environment variables in Vercel dashboard

Phase 8 — Post-Launch (after 5 posts are live)
  35. Add client-side search (Fuse.js)
  36. Add Cinema Frames section
  37. Implement knowledge graph with D3.js
  38. Move to custom domain
  39. Add comment system (Giscus — GitHub discussions, free)
```

---

## 14. ENVIRONMENT VARIABLES

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_TOKEN=                         # write token, server-side only

BUTTONDOWN_API_KEY=                       # or CONVERTKIT_API_KEY

NEXT_PUBLIC_SITE_URL=https://vanshsingh.vercel.app
```

---

## 15. DEFINITION OF DONE

**V1 is live when:**

- [ ] Homepage loads with real Sanity data
- [ ] At least 5 posts are published and readable
- [ ] At least 10 fragments exist
- [ ] Article pages render correctly with margin notes and reading progress
- [ ] About page is written and live
- [ ] Projects page has at least 2 entries
- [ ] Subscribe form captures emails
- [ ] Responsive layout works on iPhone SE and iPad
- [ ] Lighthouse Mobile score ≥ 90
- [ ] You can publish a new essay without touching any code

---

## 16. THE ONE RULE

> Design is how the writing arrives. The writing is why anyone stays.
>
> Ship ugly. Write beautifully. Polish iteratively.

---

*Plan version 2.0 · Built for Vansh Singh · May 2026*