# Vansh Singh Atelier

A cinematic personal blog for essays, fragments, projects, and notes on cinema, software, AI, philosophy, and modern life.

The site is built from the plan in `PLAN.md`: readable long-form writing, short atomic fragments, topic pages, a newsletter entry point, and a warm dark visual system inspired by notebooks, cinema, and linked thinking.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Static seed content in `lib/content.ts`

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

For now, posts, fragments, tags, and projects live in:

```text
lib/content.ts
```

Main routes:

- `/` - homepage
- `/posts` - essays
- `/posts/[slug]` - article page
- `/fragments` - short notes
- `/topics/[tag]` - topic archive
- `/projects` - project archive
- `/cinema` - cinema frames
- `/newsletter` - subscribe page

## Next Steps

- Connect Sanity CMS
- Wire the newsletter form to Buttondown or ConvertKit
- Add real published essays and fragments
- Add search and knowledge graph later
