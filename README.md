# The Fifth Wall

**A cinematic personal notebook for essays, fragments, cinema, software, AI, philosophy, and modern life.**

Live site: [thefifthwall.vercel.app](https://thefifthwall.vercel.app/)

The Fifth Wall is my public archive: a place for long-form essays, short fragments, film notes, and linked thinking. It is designed less like a generic blog and more like a dark cinematic notebook, with serif headlines, mono metadata, textured grid surfaces, and a small software-lab pulse running through the interface.

## What It Is

- Essays for longer arguments and cultural analysis
- Fragments for shorter notes, questions, and observations
- Topic pages for browsing ideas across posts and notes
- Cinema frames for visual notes and film attention
- A lightweight archive/newsletter entry point
- File-based content that is easy to edit without a CMS

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Local Markdown and JSON content in `content/`
- Custom Markdown renderer for essays
- Light/dark mode through CSS variables

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```bash
npm.cmd run dev
```

## Useful Commands

```bash
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run dev
npm.cmd run start
```

The npm scripts include:

- `--no-experimental-webstorage` for the current Node setup
- `--use-system-ca` for Windows certificate trust

## Content Map

Most writing lives outside the app code.

```text
content/posts/*.md          essays
content/fragments/*.md      short notes
content/tags.json           topic registry
content/site.json           homepage/about/page copy
content/cinema-frames.json  cinema frame cards
```

The loader lives here:

```text
lib/content.ts
```

The practical editing guide lives here:

```text
use.md
```

The project wiring map lives here:

```text
function.md
```

## Main Routes

- `/` - cinematic notebook homepage
- `/posts` - essay archive
- `/posts/[slug]` - individual essay
- `/fragments` - fragment archive
- `/fragments/[slug]` - individual fragment
- `/topics/[tag]` - topic archive
- `/cinema` - cinema frames
- `/newsletter` - archive/newsletter page
- `/rss.xml` - RSS feed

## Essay Format

Essays live in:

```text
content/posts/
```

Example:

```md
---
{
  "slug": "my-essay",
  "title": "My Essay",
  "subtitle": "A short subtitle.",
  "excerpt": "A short archive summary.",
  "category": "cinema",
  "tags": ["cinema", "attention"],
  "publishedAt": "May 22, 2026",
  "readingTime": 6,
  "featured": false,
  "coverImage": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
  "order": 5,
  "marginNotes": [],
  "backlinks": []
}
---

Write the essay here.

## Section headings work

*Italics*, **bold**, and ***bold italic*** work.

> Blockquotes work.

- Lists work.
- Like this.

:::callout Director note
Callouts work too.
:::
```

## Design Direction

The site is built around a cinematic notebook aesthetic:

- deep charcoal canvas
- optional light mode
- subtle grid and grain texture
- orange as the primary accent
- serif display type for editorial warmth
- mono labels for system-like structure
- compact sidebar navigation
- separate essay and fragment sections on the landing page

## Notes

This is intentionally file-backed for now. To publish new work, edit `content/`, commit, and redeploy.

For detailed content instructions, read [use.md](./use.md).
