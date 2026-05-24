import Link from 'next/link';
import { PostCard } from '../../components/post-card';
import { getAllPosts, getAllTags, getSiteContent } from '../../lib/content';

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const copy = getSiteContent().postsIndex;

  return (
    <section className="space-y-10">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-none text-text-primary">{copy.title}</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
          {copy.intro}
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/topics/${tag.slug}`} className="shrink-0 rounded-full border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary transition hover:border-neon-cyan hover:text-neon-cyan">
            {tag.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} featured />
        ))}
      </div>
    </section>
  );
}
