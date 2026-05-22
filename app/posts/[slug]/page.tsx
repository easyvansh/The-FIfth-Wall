import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getPostByTitle, getRelatedPostsByTags, type Post } from '../../../lib/content';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function renderWikiText(text: string) {
  return text.split(/(\[\[.*?\]\])/g).map((part, index) => {
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const title = part.slice(2, -2);
      const linkedPost = getPostByTitle(title);

      if (!linkedPost) {
        return (
          <span key={`${part}-${index}`} className="font-mono text-neon-cyan underline decoration-neon-orange/70 decoration-wavy">
            {title}
          </span>
        );
      }

      return (
        <Link key={linkedPost.slug} href={`/posts/${linkedPost.slug}`} className="font-mono text-neon-cyan underline decoration-neon-orange/70 decoration-wavy transition hover:text-neon-orange">
          {title}
          <span className="ml-1 text-[10px]">ref</span>
        </Link>
      );
    }

    return part;
  });
}

function renderBlock(block: Post['body'][number], index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-lg leading-9 text-text-secondary">
          {renderWikiText(block.text)}
        </p>
      );
    case 'heading':
      return (
        <h2 key={index} className="border-l-4 border-neon-orange pl-5 pt-5 font-display text-4xl leading-tight text-text-primary">
          {block.text}
        </h2>
      );
    case 'blockquote':
      return (
        <blockquote key={index} className="rounded-r-lg border-l-4 border-amber bg-paper p-7 font-display text-3xl italic leading-tight text-text-paper shadow-poster">
          {renderWikiText(block.text)}
        </blockquote>
      );
    case 'callout':
      return (
        <aside key={index} className="cyan-panel rounded-lg border-2 border-neon-cyan bg-surface p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-cyan">{block.typeLabel}</p>
          <p className="mt-3 font-display text-2xl italic leading-snug text-text-primary">{block.text}</p>
        </aside>
      );
    case 'code':
      return (
        <pre key={index} className="overflow-x-auto rounded-lg border border-border bg-ink p-6 font-mono text-sm leading-7 text-text-secondary">
          <code>{block.code}</code>
        </pre>
      );
    default:
      return null;
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPostsByTags(post.tags, post.slug);

  return (
    <article className="space-y-12">
      <Link href="/posts" className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
        Back to writing index
      </Link>

      <header className="max-w-5xl space-y-6 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
          <Link href={`/topics/${post.category}`} className="rounded border border-amber/40 bg-amber/10 px-2 py-1 text-amber">
            {post.category}
          </Link>
          <span className="text-text-faint">{post.readingTime} min read</span>
          <span className="text-text-faint">{post.publishedAt}</span>
        </div>
        <h1 className="max-w-5xl font-display text-6xl leading-[0.98] text-text-primary lg:text-8xl">{post.title}</h1>
        <p className="max-w-3xl text-xl leading-9 text-text-secondary">{post.subtitle}</p>
      </header>

      {post.coverImage ? (
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-border bg-ink">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-85 saturate-[0.85]"
          />
          <div className="absolute bottom-4 left-4 rounded border border-neon-cyan bg-ink/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-neon-cyan">
            article frame
          </div>
        </div>
      ) : null}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,65ch)_260px] lg:items-start">
        <div className="space-y-8">
          {post.body.map((block, index) => renderBlock(block, index))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-8">
          <div className="atelier-panel rounded-lg p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-cyan">Atelier annotations</p>
            <div className="mt-5 space-y-4">
              {post.marginNotes.length ? (
                post.marginNotes.map((note) => (
                  <div key={note.anchorText} className="rounded-md border border-border bg-ink/30 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber">{note.type}</p>
                    <p className="mt-2 font-mono text-[11px] italic text-text-faint">Re: {note.anchorText}</p>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{note.note}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm leading-6 text-text-secondary">No margin annotations for this essay yet.</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t border-border pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Synaptic connections</p>
            <h2 className="mt-2 font-display text-4xl text-text-primary">Backlinks</h2>
            <div className="mt-5 grid gap-4">
              {post.backlinks.length ? (
                post.backlinks.map((link) => (
                  <Link key={link.slug} href={`/posts/${link.slug}`} className="rounded-lg border border-border bg-surface p-5 transition hover:border-neon-cyan">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neon-cyan">Incoming reference</p>
                    <h3 className="mt-2 font-display text-2xl text-text-primary">{link.title}</h3>
                  </Link>
                ))
              ) : (
                <p className="rounded-lg border border-border bg-surface p-5 text-text-secondary">This node currently sits alone in the archive.</p>
              )}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Related reading</p>
            <h2 className="mt-2 font-display text-4xl text-text-primary">Nearby essays</h2>
            <div className="mt-5 grid gap-4">
              {related.map((item) => (
                <Link key={item.slug} href={`/posts/${item.slug}`} className="rounded-lg border border-border bg-surface p-5 transition hover:border-amber">
                  <h3 className="font-display text-2xl text-text-primary">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-panel rounded-lg p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-orange">If this resonated</p>
        <h2 className="mt-3 font-display text-4xl text-text-primary">Join the archive.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-text-secondary">New essays, recent fragments, and what I am reading or watching, sent only when there is something worth sending.</p>
        <Link href="/newsletter" className="mt-6 inline-flex rounded-md bg-neon-orange px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink shadow-cyan transition hover:-translate-y-1">
          Join archive
        </Link>
      </section>
    </article>
  );
}
