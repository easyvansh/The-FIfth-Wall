import Link from 'next/link';
import { getAllNotes, getAllPosts, getAllTags, getFeaturedPost, getProjects } from '../lib/content';
import { NoteCard } from '../components/note-card';
import { PostCard } from '../components/post-card';

export default function HomePage() {
  const featured = getFeaturedPost();
  const posts = getAllPosts().filter((post) => post.slug !== featured.slug);
  const notes = getAllNotes().slice(0, 6);
  const tags = getAllTags();
  const projects = getProjects().slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="border-b border-border pb-12 pt-4">
        <div className="max-w-5xl">
          <p className="-rotate-1 font-handwritten text-3xl text-neon-cyan">Step inside the creative machine.</p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.98] text-text-primary sm:text-7xl lg:text-8xl">
            A cinematic space for analog thoughts and software architecture.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-secondary">
            Film stills, software systems, AI anxieties, and short fragments arranged as a public knowledge notebook.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/posts/${featured.slug}`} className="rounded-md bg-neon-orange px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink shadow-cyan transition hover:-translate-y-1">
              Read latest essay
            </Link>
            <Link href="/newsletter" className="rounded-md border border-amber px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber transition hover:bg-amber/10">
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Featured essay</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">Pinned in the notebook</h2>
          </div>
          <span className="hidden font-handwritten text-2xl text-neon-orange sm:block">Highly curated</span>
        </div>
        <PostCard post={featured} featured />
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Topics bar</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">Walk the archive by idea</h2>
          </div>
          <Link href="/posts" className="font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
            All essays
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {tags.map((tag) => (
            <Link key={tag.slug} href={`/topics/${tag.slug}`} className="shrink-0 rounded-full border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary transition hover:border-neon-cyan hover:text-neon-cyan">
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-border pb-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Indie curation canvas</p>
          <h2 className="mt-2 font-display text-3xl text-text-primary">Current notebook</h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Atomic fragments</p>
            <h2 className="mt-2 font-display text-3xl text-text-primary">Pages torn from the desk</h2>
          </div>
          <Link href="/fragments" className="font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
            View feed
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>

      <section className="atelier-panel rounded-lg p-7">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-orange">Active dev lab</p>
            <h2 className="mt-3 font-display text-4xl text-text-primary">What I am building right now</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Parser utilities, frame analysis experiments, and local-first writing systems designed around retention rather than reach.
            </p>
          </div>
          <div className="grid gap-4">
            {projects.map((project) => (
              <Link key={project.slug} href="/projects" className="rounded-md border border-border bg-ink/30 p-5 transition hover:border-neon-cyan">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-text-primary">{project.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan">{project.status}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
