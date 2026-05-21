import { redirect } from 'next/navigation';

type TagPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export function generateStaticParams(): Array<{ tag: string }> {
  return [
    { tag: 'ai' },
    { tag: 'cinema' },
    { tag: 'software' },
    { tag: 'philosophy' }
  ];
}

export default async function LegacyTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  redirect(`/topics/${tag}`);
}
