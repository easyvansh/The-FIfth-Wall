# How To Use This Blog Repo

This guide explains where to edit content without breaking the code.

## Quick Rule

Most writing and page copy lives in `content/`.

Only edit `app/`, `components/`, `lib/`, or config files when you are changing layout, behavior, or code wiring.

## Safe Files To Edit

- `content/posts/*.md`: essays
- `content/fragments/*.md`: short notes/fragments
- `content/tags.json`: topics and tag pages
- `content/site.json`: homepage/about/newsletter/page copy
- `content/cinema-frames.json`: cinema page cards

## Do Not Edit Casually

- `lib/content.ts`: content loader and types
- `app/**/*.tsx`: route/page layout code
- `components/**/*.tsx`: reusable UI components
- `tailwind.config.ts`: theme tokens and Tailwind setup
- `next.config.mjs`: Next.js config, including allowed image hosts

## Add A New Essay

Create a new Markdown file inside:

```text
content/posts/
```

Example:

```text
content/posts/my-new-essay.md
```

Use this template:

```md
---
{
  "slug": "my-new-essay",
  "title": "My New Essay",
  "subtitle": "A short one-line subtitle for the essay page.",
  "excerpt": "A short summary shown on cards, topic pages, and RSS.",
  "category": "cinema",
  "tags": ["cinema", "attention"],
  "publishedAt": "May 22, 2026",
  "readingTime": 8,
  "featured": false,
  "coverImage": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
  "order": 5,
  "marginNotes": [],
  "backlinks": []
}
---
Your essay starts here.

## Section heading

Paragraph text goes here.

> Blockquotes work like this.

:::callout Director note
Callouts work like this.
:::
```

## Essay Field Rules

- `slug`: URL-safe id. Use lowercase words with hyphens. This creates `/posts/my-new-essay`.
- `title`: main essay title.
- `subtitle`: shown on the essay page under the title.
- `excerpt`: shown on cards, lists, topic pages, and RSS.
- `category`: must be one of the major topic slugs already in `content/tags.json`, usually `ai`, `cinema`, `software`, `philosophy`, or `life`.
- `tags`: every tag must exist in `content/tags.json`.
- `publishedAt`: display date. Keep it human-readable, like `May 22, 2026`.
- `readingTime`: number of minutes.
- `featured`: set one essay to `true` if you want it pinned on the homepage.
- `coverImage`: title/header image URL for cards and the essay page.
- `order`: lower numbers appear earlier.
- `marginNotes`: optional sidebar notes on essay pages.
- `backlinks`: optional manual related links.

## Supported Essay Markdown

The essay renderer supports these block formats:

````md
## H2 heading
### H3 heading

Paragraph text.

> Blockquote text.

- Bullet item
- Bullet item

```js
const code = true;
```

:::callout Director note
Callout text.
:::
````

It also supports these inline formats:

```md
*italic*
**bold**
***bold italic***
[[Essay Title Wikilink]]
```

This site uses a custom Markdown renderer in `app/posts/[slug]/page.tsx`, not a full Markdown package. If you need tables, footnotes, nested lists, or full GitHub-flavored Markdown later, install and wire `react-markdown` plus `remark-gfm`.

## Add An Essay Title Image

Set the `coverImage` field in the essay frontmatter:

```json
"coverImage": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
```

Current allowed remote image host:

```text
images.unsplash.com
```

That is configured in:

```text
next.config.mjs
```

If you use another image host, add it to `next.config.mjs` under `images.remotePatterns`.

Example:

```js
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'images.unsplash.com'
  },
  {
    protocol: 'https',
    hostname: 'your-image-host.com'
  }
]
```

After changing `next.config.mjs`, restart the dev server.

## Remove An Essay

Delete the essay file from:

```text
content/posts/
```

Then check for links pointing to it:

- Other essays may have `[[Essay Title]]` wikilinks.
- Other essays may list it in `backlinks`.
- The homepage featured essay may change if the deleted essay had `"featured": true`.

If you delete the featured essay, set another essay to:

```json
"featured": true
```

## Add Margin Notes To An Essay

Inside an essay frontmatter:

```json
"marginNotes": [
  {
    "anchorText": "frictionless",
    "note": "Speed without traction. This is where generated prose loses texture.",
    "type": "aside"
  }
]
```

Allowed `type` values:

```text
annotation
aside
source
```

## Add Backlinks To An Essay

Inside an essay frontmatter:

```json
"backlinks": [
  {
    "title": "Tarkovsky vs TikTok Attention",
    "slug": "tarkovsky-vs-tiktok"
  }
]
```

The `slug` must match another file in `content/posts/`.

## Add Wikilinks Inside Essay Body

Use double brackets:

```md
This connects to [[Tarkovsky vs TikTok Attention]].
```

The app searches existing essay titles. If it finds a matching essay, it turns the text into a link.

## Add A New Fragment

Create a new Markdown file inside:

```text
content/fragments/
```

Example:

```text
content/fragments/my-small-note.md
```

Use this template:

```md
---
{
  "slug": "my-small-note",
  "title": "My small note",
  "excerpt": "A one-sentence preview of the fragment.",
  "publishedAt": "May 22, 2026",
  "tags": ["writing", "attention"],
  "mood": "thinking",
  "accent": "#eab308",
  "rotation": 0.5,
  "order": 7
}
---
Write the fragment here. Keep it short, sharp, and notebook-like.
```

## Fragment Field Rules

- `slug`: URL-safe id. This creates `/fragments/my-small-note`.
- `title`: shown on the card and fragment page.
- `excerpt`: short card preview.
- `publishedAt`: display date.
- `tags`: every tag must exist in `content/tags.json`.
- `mood`: must be one of `thinking`, `watching`, `reading`, `building`, `questioning`, or `reflecting`.
- `accent`: hex color for the card border and mood label.
- `rotation`: small number for the notebook-card tilt. Use `0`, `0.5`, `-0.5`, `1`, or `-1`.
- `order`: lower numbers appear earlier.

## Remove A Fragment

Delete the fragment file from:

```text
content/fragments/
```

Then check topic pages if that fragment was the only item using a tag.

## Add Or Remove Tags

Edit:

```text
content/tags.json
```

Each tag looks like this:

```json
{
  "slug": "attention",
  "label": "Attention",
  "description": "How focus, duration, distraction, and perception are shaped by media, interfaces, and daily rituals."
}
```

Rules:

- `slug` is used in URLs like `/topics/attention`.
- `label` is what readers see.
- `description` appears at the top of the topic page.
- Any essay or fragment tag must exist here.

To remove a tag safely:

1. Search for that tag in `content/posts/` and `content/fragments/`.
2. Remove or replace it everywhere.
3. Delete the tag entry from `content/tags.json`.

## Edit Homepage And Page Copy

Edit:

```text
content/site.json
```

Important sections:

- `home`: homepage labels, intro, section headings, CTA labels.
- `about`: about page copy and links.
- `postsIndex`: `/posts` page header.
- `fragmentsIndex`: `/fragments` page header.
- `cinema`: `/cinema` page header and CTA.
- `newsletter`: `/newsletter` page copy.

Be careful with JSON commas. Every item except the last item in an object or array needs a comma.

## Add Or Remove Cinema Frame Cards

Edit:

```text
content/cinema-frames.json
```

Each entry looks like:

```json
{
  "title": "Mirror",
  "director": "Andrei Tarkovsky",
  "aspectRatio": "1.37:1",
  "image": "https://images.unsplash.com/photo-1542204172-e7052809a862?q=80&w=1200&auto=format&fit=crop",
  "note": "Natural elements replace plot architecture: wind, fire, water, and memory become the structure."
}
```

The `image` field follows the same image-host rule as essay `coverImage`.

## Reorder Content

Use the `order` field.

Lower number means earlier display.

Example:

```json
"order": 1
```

If two items share the same order, their filesystem/read order may decide the final order, so keep order numbers unique.

## Change The Featured Essay

Only one essay should usually have:

```json
"featured": true
```

Set the current featured essay to:

```json
"featured": false
```

Then set the new one to:

```json
"featured": true
```

## Add A New Section To The Landing Page

This is a code change, not just content.

Edit:

```text
app/page.tsx
```

Use existing sections as the pattern:

- Topics section
- Essays section
- Fragments section

If the new section needs reusable UI, add a component in:

```text
components/
```

If the new section needs editable data, add a content file in:

```text
content/
```

Then update `lib/content.ts` so the app knows how to load that file.

## Remove A Section From The Landing Page

Edit:

```text
app/page.tsx
```

Remove the full `<section>...</section>` block.

Then remove unused imports at the top of the file.

If the section used data from `content/site.json`, remove that unused copy too.

## Theme And Light/Dark Mode

Theme values live in:

```text
app/globals.css
```

The toggle button lives in:

```text
components/theme-toggle.tsx
```

The button is placed in:

```text
components/site-header.tsx
```

Do not hardcode colors in every component unless necessary. Prefer existing Tailwind tokens:

```text
bg-base
bg-surface
text-text-primary
text-text-secondary
text-neon-orange
border-border
```

These automatically adapt between dark and light mode.

## Common Mistakes

- Missing comma in JSON frontmatter.
- Tag used in an essay but not added to `content/tags.json`.
- Two essays with `"featured": true`.
- Broken image because the host is not listed in `next.config.mjs`.
- Editing `lib/content.ts` when only content needed to change.
- Using spaces or uppercase letters in `slug`.
- Forgetting to close JSX maps in `app/page.tsx`, such as `notes.map(...)`.

## Check Your Changes

Run these yourself after editing:

```bash
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run dev
```

If PowerShell blocks `npm`, use `npm.cmd` exactly as shown.
