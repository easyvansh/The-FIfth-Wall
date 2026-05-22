import Image from 'next/image';
import Link from 'next/link';
import { getAllNotes, getAllPosts, getAllTags, getFeaturedPost, getSiteContent } from '../lib/content';
import { LinkedNoteCard } from '../components/note-card';
import { PostCard } from '../components/post-card';

export default function HomePage() {
  const featured = getFeaturedPost();
  const posts = getAllPosts().filter((post) => post.slug !== featured.slug);
  const notes = getAllNotes().slice(0, 6);
  const tags = getAllTags();
  const copy = getSiteContent().home;

  return (
    <div className="space-y-12">
      <section className="grid gap-8 border-b border-border pb-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-text-faint">
            <span className="text-neon-green">System: active</span>
            <span>//</span>
            <span>Viewing: notebook_index</span>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon-orange">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[0.88] text-text-primary sm:text-8xl lg:text-[9rem]">
              Digital Journal
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{copy.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            <Link href={`/posts/${featured.slug}`} className="rounded-sm bg-neon-orange px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-amber">
              Read pinned essay
            </Link>
            <Link href="/fragments" className="rounded-sm border border-border bg-surface/70 px-5 py-3 text-text-secondary transition hover:border-neon-orange hover:text-text-primary">
              Browse fragments
            </Link>
          </div>
        </div>

        <details className="archive-filter group justify-self-start xl:justify-self-end">
          <summary className="cursor-pointer list-none rounded-sm border border-border bg-surface/85 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary transition hover:border-neon-orange hover:text-text-primary">
            [Filter by: All]
          </summary>
          <div className="mt-2 grid min-w-64 gap-1 rounded-sm border border-border bg-ink/95 p-2 shadow-soft">
            <Link href="/posts" className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary hover:bg-surface hover:text-neon-orange">Essays</Link>
            <Link href="/fragments" className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary hover:bg-surface hover:text-neon-orange">Fragments</Link>
            <Link href="/cinema" className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary hover:bg-surface hover:text-neon-orange">Cinema</Link>
            <div className="my-1 border-t border-border" />
            {tags.slice(0, 8).map((tag) => (
              <Link key={tag.slug} href={`/topics/${tag.slug}`} className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-faint hover:bg-surface hover:text-text-primary">
                {tag.label}
              </Link>
            ))}
          </div>
        </details>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.featuredEyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">{copy.featuredTitle}</h2>
          </div>
          <span className="hidden font-handwritten text-2xl text-neon-orange sm:block">{copy.featuredNote}</span>
        </div>
        <article className="archive-card group grid overflow-hidden rounded-sm border border-border bg-surface/80 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          {featured.coverImage ? (
            <Link href={`/posts/${featured.slug}`} className="relative block min-h-[340px] overflow-hidden bg-ink">
              <Image
                src={featured.coverImage}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover opacity-70 saturate-[0.65] contrast-125 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            </Link>
          ) : null}
          <div className="flex flex-col justify-between gap-8 p-7 lg:p-9">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
                <Link href={`/topics/${featured.category}`} className="text-neon-orange transition hover:text-amber">{featured.category}</Link>
                <span className="text-text-faint">{featured.readingTime} min read</span>
                <span className="text-text-faint">{featured.publishedAt}</span>
              </div>
              <Link href={`/posts/${featured.slug}`} className="mt-5 block">
                <h2 className="font-display text-5xl leading-none text-text-primary transition group-hover:text-amber lg:text-6xl">{featured.title}</h2>
              </Link>
              <p className="mt-5 text-lg leading-8 text-text-secondary">{featured.excerpt}</p>
            </div>
            <Link href={`/posts/${featured.slug}`} className="font-mono text-xs uppercase tracking-[0.22em] text-neon-cyan transition hover:text-neon-orange">
              Open essay
            </Link>
          </div>
        </article>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.topicsEyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">{copy.topicsTitle}</h2>
          </div>
          <Link href="/posts" className="font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
            All essays
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {tags.map((tag) => (
            <Link key={tag.slug} href={`/topics/${tag.slug}`} className="shrink-0 rounded-sm border border-border bg-surface/75 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary transition hover:border-neon-orange hover:text-neon-orange">
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.postsEyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">{copy.postsTitle}</h2>
          </div>
          <Link href="/posts" className="font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
            All essays
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.notesEyebrow}</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">{copy.notesTitle}</h2>
          </div>
          <Link href="/fragments" className="font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
            {copy.notesLink}
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <LinkedNoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
