# Vansh Singh Atelier

A cinematic personal blog for essays, fragments, and notes on cinema, software, AI, philosophy, and modern life.

The site is built from the plan in `PLAN.md`: readable long-form writing, short atomic fragments, topic pages, a newsletter entry point, and a warm dark visual system inspired by notebooks, cinema, and linked thinking.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- File-based content in `content/`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run dev
npm run build
npm run start
```

The npm scripts include Node flags for this setup:

- `--no-experimental-webstorage` avoids the Node 25 `localStorage` runtime issue.
- `--use-system-ca` helps font/package fetches work with Windows certificate trust.

## Content

The writing and page copy live outside the app code:

```text
content/posts/*.md
content/fragments/*.md
content/site.json
content/tags.json
content/cinema-frames.json
```

`lib/content.ts` is now only the loader and type contract. To update the site, edit the files in `content/` and restart/rebuild the Next app.

Essay and fragment Markdown files use JSON frontmatter:

```md
---
{
  "slug": "my-essay",
  "title": "My Essay",
  "subtitle": "Optional essay subtitle",
  "excerpt": "Short archive summary.",
  "category": "cinema",
  "tags": ["cinema", "attention"],
  "publishedAt": "May 21, 2026",
  "readingTime": 6,
  "featured": false,
  "order": 5,
  "marginNotes": [],
  "backlinks": []
}
---
Write the essay here.

## Section headings work

> Blockquotes work.

:::callout Director note
Callouts work too.
:::
```

Main routes:

- `/` - homepage
- `/posts` - essays
- `/posts/[slug]` - article page
- `/fragments` - short notes
- `/topics/[tag]` - topic archive
- `/cinema` - cinema frames
- `/newsletter` - subscribe page

## Next Steps

- Connect Sanity CMS
- Wire the newsletter form to Buttondown or ConvertKit
- Add real published essays and fragments
- Add search and knowledge graph later
