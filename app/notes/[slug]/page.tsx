import { redirect } from 'next/navigation';
import { getAllNotes } from '@/lib/content';

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export default async function LegacyNotePage({ params }: NotePageProps) {
  const { slug } = await params;
  redirect(`/fragments/${slug}`);
}
