import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '../lib/content';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={`archive-card group overflow-hidden rounded-sm border border-border bg-surface/85 transition hover:-translate-y-1 ${featured ? 'grid lg:grid-cols-[1.35fr_1fr]' : ''}`}>
      {post.coverImage ? (
        <Link href={`/posts/${post.slug}`} className={`relative block overflow-hidden bg-ink ${featured ? 'min-h-[320px]' : 'aspect-[16/9]'}`}>
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 768px) 40vw, 100vw'}
            className="object-cover opacity-70 saturate-[0.68] contrast-110 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-base to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-neon-orange">
            <span>film preview</span>
            <span>2.39:1</span>
          </div>
        </Link>
      ) : null}

      <div className="flex flex-col justify-between gap-8 p-6 lg:p-8">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
            <Link href={`/topics/${post.category}`} className="rounded-sm border border-neon-orange/35 bg-neon-orange/10 px-2 py-1 text-neon-orange">
              {post.category}
            </Link>
            <span className="text-text-faint">{post.readingTime} min read</span>
          </div>
          <Link href={`/posts/${post.slug}`} className="block">
            <h2 className={`${featured ? 'text-4xl lg:text-5xl' : 'text-3xl'} font-display leading-tight text-text-primary transition group-hover:text-amber`}>
              {post.title}
            </h2>
          </Link>
          <p className="mt-4 line-clamp-3 leading-7 text-text-secondary">{post.excerpt}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-faint">{post.publishedAt}</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Link key={tag} href={`/topics/${tag.toLowerCase()}`} className="rounded-sm border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary transition hover:border-neon-orange hover:text-neon-orange">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
