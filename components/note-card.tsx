import Link from 'next/link';
import type { Note } from '../lib/content';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <article
      className="cyan-panel flex min-h-[260px] flex-col justify-between rounded-lg border-2 bg-surface p-6 text-base transition hover:-translate-y-1 hover:rotate-0"
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
