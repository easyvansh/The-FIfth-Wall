

````md
# AGENTS.md — Vansh Singh Personal Blog / Intellectual Atelier

## Mission

Build a free, polished personal publishing website for Vansh Singh.

The site should function as:

- a personal blog
- a digital notebook
- an intellectual atelier
- a public portfolio of writing, software, cinema, AI, and philosophy

The final site must allow Vansh to write and publish from anywhere through a CMS.

## Core Stack

Use:

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Vercel free hosting

Do not use AWS for V1.

Deployment target:

```txt
vanshsingh.vercel.app
````

Fallbacks:

```txt
vansh-notes.vercel.app
vansh-thinking-studio.vercel.app
vansh-atelier.vercel.app
```

## Brand Direction

Use Vansh’s real name as the main brand.

Site title:

```txt
Vansh Singh
```

Tagline:

```txt
Notes on cinema, software, AI, philosophy, and modern life.
```

Avoid overbuilding a fake brand before the writing exists. The name should feel personal, clean, and serious.

## Design Vibe

Build a site that feels like:

```txt
handwritten notebook
+ cinematic editorial magazine
+ late-night reading desk
+ personal intellectual archive
```

Reference mood:

* Paul Graham readability
* A24 cinematic atmosphere
* The Marginalian warmth
* Gwern-style depth
* personal notebook annotations

## Visual System

Default mode: dark.

Use this palette:

```txt
Background: #11100e
Surface: #1a1815
Paper: #f8f1e3
Primary text: #f5ead8
Muted text: #b8aa94
Accent amber: #d69b45
Accent red: #8f3f2b
Border: rgba(245, 234, 216, 0.12)
```

Fonts:

* Display serif: EB Garamond
* Body: Inter
* Handwritten accent: Caveat

## Required V1 Pages

Build only these first:

```txt
/
Homepage

/posts
All posts

/posts/[slug]
Single article page

/about
Essay-style about page

/projects
Project archive
```

Do not build newsletter, AI search, knowledge graph, or advanced archive features before V1 is live.

## Homepage Requirements

Homepage sections:

1. Hero

   * title: Vansh Singh
   * subtitle: Notes on cinema, software, AI, philosophy, and modern life.

2. Current Notebook

   * latest posts and fragments in a card/grid layout

3. Featured Essays

   * 3 highlighted essays

4. Fragments

   * short loose-note style cards

5. Projects

   * selected software/projects

6. Footer

   * GitHub
   * LinkedIn
   * email placeholder

## Article Page

Article pages should include:

* title
* subtitle
* date
* category
* tags
* reading time
* body content
* margin notes
* optional pull quotes
* reading progress bar styled like an ink line

Desktop layout:

```txt
Main essay column + right-side margin notes
```

Mobile layout:

```txt
Essay first, notes collapse naturally below or inline
```

## Sanity Schemas

Create schemas for:

### Post

```ts
title
slug
subtitle
publishedAt
category
tags
excerpt
coverImage
body
marginNotes
featured
```

### Fragment

```ts
title
slug
content
publishedAt
tags
mood
```

### Project

```ts
title
slug
description
techStack
githubUrl
liveUrl
body
featured
```

Optional later:

### CinemaFrame

```ts
filmTitle
image
caption
analysis
tags
```

## Components

Create:

```txt
Header.tsx
Footer.tsx
Layout.tsx
PostCard.tsx
FragmentCard.tsx
ProjectCard.tsx
ArticleLayout.tsx
MarginNote.tsx
ReadingProgress.tsx
NotebookCard.tsx
AnimatedTitle.tsx
PortableTextRenderer.tsx
```

## Animation Rules

Use Framer Motion lightly.

Implement:

* page fade transition
* homepage staggered cards
* card hover lift
* margin notes slide-in
* reading progress ink line
* optional typewriter subtitle

Avoid heavy 3D, excessive particles, or anything that slows reading.

## Styling Details

Add:

* subtle paper/film grain overlay
* notebook-style dividers
* slight card rotations for fragments
* warm borders and shadows
* handwritten labels using Caveat
* restrained film-strip visual detail in article headers

Writing must remain the center.

## Starter Content

Create placeholders for these posts:

1. Why AI Writing Feels Soulless
2. Surveillance Cinema and the Digital Panopticon
3. Tarkovsky vs TikTok Attention
4. The Count of Monte Cristo and Masculine Reinvention
5. What Film School Actually Taught Me

Create the About page as an essay, not a resume bio.

About page opening direction:

```txt
I build software and watch cinema obsessively, and I keep noticing they are asking the same questions: how we see, how we remember, how systems shape us, and what remains human when everything becomes optimized.
```

## Build Order

Follow this order exactly:

1. Scaffold Next.js app
2. Set up Tailwind theme
3. Add fonts and global styles
4. Build layout/header/footer
5. Build homepage
6. Build posts index
7. Build article page
8. Add Sanity CMS
9. Create schemas
10. Connect Sanity queries
11. Add placeholder content
12. Add Framer Motion polish
13. Test responsive layout
14. Deploy to Vercel

## Commands

Create project:

```bash
npx create-next-app@latest vansh-blog
```

Use:

```txt
TypeScript: yes
Tailwind: yes
App Router: yes
ESLint: yes
src directory: yes
```

Install dependencies:

```bash
npm install framer-motion next-sanity @sanity/client @portabletext/react lucide-react
```

Create Sanity studio:

```bash
npm create sanity@latest
```

Environment file:

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

## Definition of Done

V1 is complete when:

* site deploys on Vercel
* homepage works
* posts load from Sanity
* article pages work by slug
* about page exists
* projects page exists
* responsive layout works
* CMS writing flow works
* site feels warm, cinematic, notebook-like, and readable

## Important Rule

Do not let design become procrastination.

The platform is done when writing can be published.

After V1 is live and 5 posts are published, then add:

* Cinema Frames
* Reading Archive
* newsletter
* AI search
* knowledge graph
* custom domain
