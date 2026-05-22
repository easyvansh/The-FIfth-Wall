import Image from 'next/image';
import Link from 'next/link';
import { getCinemaFrames, getSiteContent } from '@/lib/content';

export default function CinemaPage() {
  const frames = getCinemaFrames();
  const copy = getSiteContent().cinema;

  return (
    <section className="space-y-10">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-none text-text-primary">{copy.title}</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
          {copy.intro}
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {frames.map((frame) => (
          <article key={frame.title} className="atelier-panel overflow-hidden rounded-lg">
            <div className="relative aspect-video bg-ink">
              <Image src={frame.image} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover opacity-75 saturate-[0.85] transition hover:opacity-95" />
              <span className="absolute right-3 top-3 rounded border border-neon-cyan bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neon-cyan">
                {frame.aspectRatio}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-3xl text-text-primary">{frame.title}</h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber">{frame.director}</span>
              </div>
              <p className="mt-4 leading-7 text-text-secondary">{frame.note}</p>
            </div>
          </article>
        ))}
      </div>

      <Link href={copy.ctaHref} className="inline-flex rounded-md border border-amber px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:bg-amber/10">
        {copy.ctaLabel}
      </Link>
    </section>
  );
}
