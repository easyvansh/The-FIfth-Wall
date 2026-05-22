import { getAllPosts } from '@/lib/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vanshsingh.in';

function generateRss(posts: ReturnType<typeof getAllPosts>) {
  const items = posts
    .map(
      (post) => `
  <item>
    <title>${post.title}</title>
    <link>${SITE_URL}/posts/${post.slug}</link>
    <guid>${SITE_URL}/posts/${post.slug}</guid>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <description>${post.excerpt}</description>
  </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Vansh Singh</title>
    <link>${SITE_URL}</link>
    <description>Notes on cinema, software, AI, philosophy, and modern life.</description>
    ${items}
  </channel>
</rss>`;
}

export async function GET() {
  const xml = generateRss(getAllPosts());
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
