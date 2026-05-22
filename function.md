# Project Function Map

This file tracks what each major file and folder does, how the blog is wired, and how content updates reach the site.

For day-to-day editing instructions, use `use.md`.

## Current Health

- TypeScript check: passing with `npx.cmd tsc --noEmit`.
- Content tag wiring: passing. Every post and fragment tag now has a matching entry in `content/tags.json`, so tag links resolve through `/topics/[tag]`.
- Production build: passing with `npm.cmd run build`.
- Lint: `npm run lint` launches Next's deprecated ESLint setup prompt because no ESLint config exists yet.

## How The Blog Works

The site is a Next.js App Router project. Content is stored as local files in `content/`, loaded by `lib/content.ts`, and rendered by route files under `app/`.

At startup or build time, `lib/content.ts` reads JSON files and Markdown files from disk using Node `fs`. Markdown files use JSON frontmatter between `---` markers. The frontmatter becomes metadata, and the Markdown body becomes either article blocks or fragment text.

Because content is file-backed, updates happen by editing files in `content/`. In development, restart or refresh the Next dev server if content appears cached. In production, rebuild and redeploy the app so the generated pages include the new content.

## Visual Direction

The current site direction is a professional dark-mode cinematic notebook, not a standard blog shell.

- The global canvas uses a deep charcoal background, subtle grid texture, and low-opacity grain.
- Display typography uses a serif font for the analog/editorial feel.
- Interface labels, metadata, status text, and filters use JetBrains Mono for the software-lab feel.
- Orange is the primary accent for active states, calls to action, and hover focus.
- Cyan and green are secondary system/status accents, used sparingly.
- The homepage uses a compact sidebar, a status bar, a floating filter dropdown, a pinned essay, separate essay and fragment sections, and topic chips.
- A sidebar theme button switches between dark and light mode using CSS variables and stores the choice in `localStorage`.
- Newsletter language is intentionally subtle: "Join the archive" lives in the sidebar/footer instead of dominating the hero.

## Content Update Flow

1. Edit or add content in `content/`.
2. `lib/content.ts` reads the changed file.
3. Pages call helpers such as `getAllPosts()`, `getPostBySlug()`, `getAllNotes()`, and `getPostsByTag()`.
4. Next renders the matching route in `app/`.
5. API routes return the same loaded content as JSON where needed.

For a new essay:

1. Add `content/posts/my-new-essay.md`.
2. Include JSON frontmatter with `slug`, `title`, `subtitle`, `excerpt`, `category`, `tags`, `publishedAt`, `readingTime`, `featured`, `order`, `marginNotes`, and `backlinks`.
3. Make sure every `category` and `tags` value exists as a slug in `content/tags.json`.
4. The essay appears on `/posts`, `/posts/[slug]`, matching `/topics/[tag]` pages, and the RSS feed.

For a new fragment:

1. Add `content/fragments/my-fragment.md`.
2. Include JSON frontmatter with `slug`, `title`, `excerpt`, `publishedAt`, `tags`, `mood`, `accent`, `rotation`, and `order`.
3. Make sure every tag exists in `content/tags.json`.
4. The fragment appears on `/fragments`, `/fragments/[slug]`, and matching `/topics/[tag]` pages.

## Folder Map

### `app/`

Next.js App Router routes. Each folder maps to a URL path.

- `app/layout.tsx`: Root HTML shell, metadata, fonts, global header/footer layout.
- `app/globals.css`: Global styles, Tailwind layers, color tokens, reusable visual classes.
- `app/page.tsx`: Homepage. Pulls featured post, recent posts, fragments, topics, and home copy. Renders the cinematic notebook landing page with status bar, filter dropdown, pinned essay, separate essays, and separate fragments.
- `app/about/page.tsx`: About page. Uses `content/site.json` under the `about` key.
- `app/posts/page.tsx`: Essay index. Lists all posts and topic filters.
- `app/posts/[slug]/page.tsx`: Individual essay page. Renders parsed Markdown blocks, wikilinks, margin notes, backlinks, related posts, and archive CTA.
- `app/fragments/page.tsx`: Fragment index. Lists all short notes.
- `app/fragments/[slug]/page.tsx`: Individual fragment page.
- `app/notes/page.tsx`: Legacy or alternate notes route.
- `app/notes/[slug]/page.tsx`: Redirects old `/notes/[slug]` URLs to `/fragments/[slug]`.
- `app/topics/[tag]/page.tsx`: Topic archive. Shows essays and fragments matching a tag.
- `app/[tag]/page.tsx`: Legacy tag redirect. Sends old `/{tag}` URLs to `/topics/{tag}`.
- `app/cinema/page.tsx`: Cinema frames page. Uses `content/cinema-frames.json`.
- `app/newsletter/page.tsx`: Newsletter signup page. Posts to `/api/newsletter`.
- `app/rss.xml/route.ts`: RSS feed route. Uses posts and `NEXT_PUBLIC_SITE_URL`, falling back to `https://vanshsingh.in`.
- `app/api/posts/route.ts`: Returns all posts as JSON.
- `app/api/notes/route.ts`: Returns all fragments/notes as JSON.
- `app/api/tags/route.ts`: Returns all tags as JSON.
- `app/api/newsletter/route.ts`: Placeholder newsletter handler. Validates an email and returns JSON success, but does not store or send it anywhere yet.

### `components/`

Reusable UI pieces used by the route files.

- `components/site-header.tsx`: Compact sidebar navigation, system status, personal archive identity, and "Join the archive" link.
- `components/site-footer.tsx`: Footer with RSS, GitHub, and newsletter links.
- `components/post-card.tsx`: Essay card used on homepage, post index, and topic pages. Uses the shared archive-card treatment.
- `components/note-card.tsx`: Fragment cards. `LinkedNoteCard` is used for normal separated fragment sections; `NoteCard` remains available for inline quick-look fragments later.
- `components/theme-toggle.tsx`: Client-side light/dark mode toggle. Applies `data-theme` on the HTML element and persists the preference.

### `content/`

The editable content database for the site.

- `content/posts/*.md`: Long-form essays with JSON frontmatter and Markdown body.
- `content/fragments/*.md`: Short notes/fragments with JSON frontmatter and Markdown body.
- `content/tags.json`: Topic registry. Any tag or category used by content should exist here.
- `content/site.json`: Page copy for homepage, about, indexes, cinema, and newsletter.
- `content/cinema-frames.json`: Cinema page frame entries.

### `lib/`

Data loading and content contracts.

- `lib/content.ts`: Central content loader. Defines TypeScript types, reads JSON and Markdown from `content/`, parses Markdown blocks, sorts entries by `order`, and exports query helpers used by pages and API routes.

### Root Config Files

- `package.json`: Project scripts and dependencies.
- `package-lock.json`: Locked npm dependency versions.
- `next.config.mjs`: Next configuration, currently remote image permissions for Unsplash.
- `tailwind.config.ts`: Tailwind theme and content scanning paths.
- `postcss.config.js`: PostCSS/Tailwind pipeline.
- `tsconfig.json`: TypeScript config and `@/*` path alias.
- `next-env.d.ts`: Next-generated TypeScript environment file.
- `.gitignore`: Files ignored by Git.
- `README.md`: Human-facing setup and overview.
- `PLAN.md`: Original project/product plan.
- `function.md`: This tracker file.
- `use.md`: Practical editing guide for adding/removing essays, fragments, tags, cinema cards, images, and sections.

## Important Behaviors

- Posts and fragments are sorted by `order`, with missing `order` values pushed later.
- The featured homepage essay is the first post with `featured: true`; if none exists, the first sorted post is used.
- Light and dark mode share the same Tailwind token names; `app/globals.css` changes their values through CSS variables.
- Topic pages depend on `content/tags.json`. A tag chip links to `/topics/{tag}`, so missing tag records create broken user-facing links.
- Article wikilinks use `[[Title]]` syntax. `app/posts/[slug]/page.tsx` tries to match the linked title against existing posts and turns it into a link when found.
- Backlinks are manual right now. They come from each post's frontmatter, not from automatic graph extraction.
- The newsletter form is only a placeholder API. It validates the email shape and returns JSON, but it is not connected to Buttondown, ConvertKit, a database, or email delivery.
- RSS is generated from all posts at `/rss.xml`.

## Maintenance Checks

Run these after changing content or routes:

```bash
npx.cmd tsc --noEmit
npm.cmd run build
```

On Windows PowerShell, use `npm.cmd` if `npm` is blocked by script execution policy.

Optional content check for tag mismatches:

```bash
node scripts/validate-content.js
```

That script does not exist yet, but the next useful repo improvement would be adding it so tag and frontmatter validation becomes a repeatable command.
