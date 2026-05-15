Sanity Studio placeholder for Vansh Singh blog.

To create the Studio locally:

1. Install the Sanity CLI globally (if you haven't):

```bash
npm install -g @sanity/cli
```

2. From this folder run:

```bash
cd studio
sanity init --dataset production --project <project-id>
```

3. Copy the `studio/schemas` files into your Sanity studio `schemas` directory and import them in `schema.js`.

4. Run the studio:

```bash
sanity start
```

Environment variables to set in Vercel and locally:

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET=production
- NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
- SANITY_API_TOKEN (for write access from scripts)
