import Image from 'next/image';
import Link from 'next/link';
import { getSiteContent } from '@/lib/content';

export default function AboutPage() {
  const copy = getSiteContent().about;

  return (
    <section className="mx-auto max-w-5xl space-y-12">
      <div className="relative overflow-hidden rounded-lg border border-border bg-ink">
        <div className="relative aspect-[16/7]">
          <Image
            src={copy.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.eyebrow}</p>
          <h1 className="mt-2 font-display text-6xl leading-none text-text-primary">{copy.name}</h1>
          <p className="mt-1 font-handwritten text-3xl text-neon-orange">{copy.role}</p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-7 text-lg leading-9 text-text-secondary">
          <p className="border-l-4 border-neon-orange pl-5 font-display text-3xl italic leading-snug text-text-primary">
            {copy.lead}
          </p>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="atelier-panel h-fit rounded-lg p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-cyan">{copy.reachEyebrow}</p>
          <div className="mt-5 grid gap-3 font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
            {copy.links.map((item) =>
              item.href.startsWith('/') ? (
                <Link key={item.href} href={item.href} className="transition hover:text-amber">
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="transition hover:text-amber">
                  {item.label}
                </a>
              )
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
