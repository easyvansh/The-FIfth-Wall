import Link from 'next/link';
import type { Note } from '../lib/content';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <details
      className="archive-card group min-h-[260px] rounded-sm border bg-surface/85 p-6 text-base transition hover:-translate-y-1 open:md:col-span-2"
      style={{
        borderColor: note.accent,
        transform: `rotate(${note.rotation}deg)`
      }}
    >
      <summary className="flex h-full cursor-pointer list-none flex-col justify-between gap-8">
        <div>
          <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
            <span style={{ color: note.accent }}>{note.mood}</span>
            <span className="text-text-faint">{note.publishedAt}</span>
          </div>
          <h3 className="mt-5 font-display text-3xl leading-tight text-text-primary transition group-hover:text-amber">
            {note.title || 'Untitled fragment'}
          </h3>
          <p className="mt-4 line-clamp-3 leading-7 text-text-secondary">{note.excerpt}</p>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neon-cyan transition group-open:text-neon-orange">
          Quick look
        </span>
      </summary>

      <div className="mt-7 border-t border-border pt-5">
        <p className="font-display text-2xl leading-snug text-text-primary">{note.content}</p>
      </div>

      <div className="mt-6">
        <Link href={`/fragments/${note.slug}`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber transition hover:text-neon-cyan">
          Open fragment page
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
        {note.tags.map((tag) => (
          <Link key={tag} href={`/topics/${tag.toLowerCase()}`} className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint transition hover:text-neon-cyan">
            #{tag}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function LinkedNoteCard({ note }: NoteCardProps) {
  return (
    <article
      className="archive-card flex min-h-[260px] flex-col justify-between rounded-sm border bg-surface/85 p-6 text-base transition hover:-translate-y-1"
      style={{
        borderColor: note.accent,
        transform: `rotate(${note.rotation}deg)`
      }}
    >
      <div>
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span style={{ color: note.accent }}>{note.mood}</span>
          <span className="text-text-faint">{note.publishedAt}</span>
        </div>
        <Link href={`/fragments/${note.slug}`} className="mt-5 block font-display text-3xl leading-tight text-text-primary transition hover:text-amber">
          {note.title || 'Untitled fragment'}
        </Link>
        <p className="mt-4 line-clamp-3 leading-7 text-text-secondary">{note.excerpt}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-4">
        {note.tags.map((tag) => (
          <Link key={tag} href={`/topics/${tag.toLowerCase()}`} className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint transition hover:text-neon-cyan">
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
