import { notFound } from 'next/navigation';
import { LinkedNoteCard } from '@/components/note-card';
import { PostCard } from '@/components/post-card';
import { getAllTags, getNotesByTag, getPostsByTag, getTag } from '@/lib/content';

type TopicPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export function generateStaticParams(): Array<{ tag: string }> {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { tag: tagSlug } = await params;
  const tag = getTag(tagSlug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTag(tag.slug);
  const notes = getNotesByTag(tag.slug);

  return (
    <section className="space-y-12">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Topic database</p>
        <h1 className="mt-4 font-display text-7xl leading-none text-text-primary">{tag.label}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">{tag.description}</p>
      </div>

      <div className="space-y-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber">Essays</p>
          <div className="mt-5 grid gap-7">
            {posts.length ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <p className="text-text-secondary">No essays in this topic yet.</p>}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber">Fragments</p>
          <div className="mt-5 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {notes.length ? notes.map((note) => <LinkedNoteCard key={note.slug} note={note} />) : <p className="text-text-secondary">No fragments in this topic yet.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
