import { LinkedNoteCard } from '@/components/note-card';
import { getAllNotes, getSiteContent } from '@/lib/content';

export default function FragmentsPage() {
  const notes = getAllNotes();
  const copy = getSiteContent().fragmentsIndex;

  return (
    <section className="space-y-10">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-none text-text-primary">{copy.title}</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
          {copy.intro}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <LinkedNoteCard key={note.slug} note={note} />
        ))}
      </div>
    </section>
  );
}
