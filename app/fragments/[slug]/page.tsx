import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllNotes, getNoteBySlug } from '@/lib/content';

interface FragmentPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export default async function FragmentPage({ params }: FragmentPageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <Link href="/fragments" className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber transition hover:text-neon-cyan">
        Back to fragments
      </Link>

      <header className="border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span style={{ color: note.accent }}>{note.mood}</span>
          <span className="text-text-faint">{note.publishedAt}</span>
        </div>
        <h1 className="mt-5 font-display text-6xl leading-none text-text-primary">{note.title || 'Untitled fragment'}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">{note.excerpt}</p>
      </header>

      <div className="cyan-panel rounded-lg border-2 bg-paper p-8 text-text-paper" style={{ borderColor: note.accent }}>
        <p className="font-display text-3xl leading-snug">{note.content}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {note.tags.map((tag) => (
          <Link key={tag} href={`/topics/${tag.toLowerCase()}`} className="rounded-full border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary transition hover:border-neon-cyan hover:text-neon-cyan">
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
