import { redirect } from 'next/navigation';
import { getAllTags } from '@/lib/content';

type TagPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export function generateStaticParams(): Array<{ tag: string }> {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

export default async function LegacyTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  redirect(`/topics/${tag}`);
}
