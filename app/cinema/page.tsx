import Image from 'next/image';
import Link from 'next/link';

const frames = [
  {
    title: 'Mirror',
    director: 'Andrei Tarkovsky',
    aspectRatio: '1.37:1',
    image: 'https://images.unsplash.com/photo-1542204172-e7052809a862?q=80&w=1200&auto=format&fit=crop',
    note: 'Natural elements replace plot architecture: wind, fire, water, and memory become the structure.'
  },
  {
    title: 'The Conversation',
    director: 'Francis Ford Coppola',
    aspectRatio: '1.85:1',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    note: 'Telephoto compression turns public space into paranoia and makes distance feel like intrusion.'
  },
  {
    title: 'Stalker',
    director: 'Andrei Tarkovsky',
    aspectRatio: '1.37:1',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    note: 'The Zone is less a place than a rule system, rendered as a visual break from industrial sepia.'
  },
  {
    title: 'Persona',
    director: 'Ingmar Bergman',
    aspectRatio: '1.37:1',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop',
    note: 'Faces overlap until identity stops being a boundary and becomes an exposure problem.'
  }
];

export default function CinemaPage() {
  return (
    <section className="space-y-10">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Cinema frames</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-none text-text-primary">A visual sub-publication for frames and attention.</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
          Early scaffolding for the V2 cinema layer: annotated stills, aspect ratios, and frame-level thinking.
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

      <Link href="/posts/surveillance-cinema" className="inline-flex rounded-md border border-amber px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-amber transition hover:bg-amber/10">
        Read surveillance cinema essay
      </Link>
    </section>
  );
}
