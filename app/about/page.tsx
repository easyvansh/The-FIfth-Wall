import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-12">
      <div className="relative overflow-hidden rounded-lg border border-border bg-ink">
        <div className="relative aspect-[16/7]">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">About</p>
          <h1 className="mt-2 font-display text-6xl leading-none text-text-primary">Vansh Singh</h1>
          <p className="mt-1 font-handwritten text-3xl text-neon-orange">Essayist, builder, cinephile</p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-7 text-lg leading-9 text-text-secondary">
          <p className="border-l-4 border-neon-orange pl-5 font-display text-3xl italic leading-snug text-text-primary">
            I build software and watch cinema obsessively, and I keep noticing they are asking the same questions: how we see, how we remember, how systems shape us, and what remains human when everything becomes optimized.
          </p>
          <p>
            This site is a move away from over-optimized content hubs. It is designed as a notebook with public doors: essays when the argument needs space, fragments when the observation is still raw, and project notes when the work itself becomes part of the thinking.
          </p>
          <p>
            I am interested in the overlap between cinematic attention and software architecture. A shot, a sentence, and an interface can all ask the same question: what should be made visible, and what should remain unresolved?
          </p>
          <p>
            The goal is not to post constantly. The goal is to build a place where writing can accumulate, connect, and stay readable after the feed has moved on.
          </p>
        </div>

        <aside className="atelier-panel h-fit rounded-lg p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-cyan">Reach</p>
          <div className="mt-5 grid gap-3 font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
            <a href="mailto:vansh@vanshsingh.in" className="transition hover:text-amber">Email</a>
            <a href="https://github.com/easyvansh" target="_blank" rel="noreferrer" className="transition hover:text-amber">GitHub</a>
            <Link href="/projects" className="transition hover:text-amber">Projects</Link>
            <Link href="/newsletter" className="transition hover:text-amber">Newsletter</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
