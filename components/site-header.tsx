import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Notebook', code: '00' },
  { href: '/posts', label: 'Essays', code: '01' },
  { href: '/fragments', label: 'Fragments', code: '02' },
  { href: '/cinema', label: 'Cinema', code: '03' },
  { href: '/projects', label: 'Projects', code: '04' },
  { href: '/about', label: 'About', code: '05' },
  { href: '/newsletter', label: 'Newsletter', code: '06' }
];

export function SiteHeader() {
  return (
    <header className="z-40 border-b border-border bg-base/95 px-5 py-5 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:w-[300px] lg:shrink-0 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
      <div className="flex h-full flex-col justify-between gap-8">
        <div>
          <Link href="/" className="group block">
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-neon-cyan">Cinematic Software Lab</p>
            <h1 className="mt-3 font-display text-5xl leading-none text-text-primary">
              Vansh <span className="text-amber">Singh</span>
            </h1>
            <p className="mt-1 -rotate-2 font-handwritten text-3xl text-neon-orange">Atelier</p>
          </Link>

          <div className="atelier-panel mt-8 rounded-lg p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neon-cyan">Current obsession</p>
            <p className="mt-3 font-display text-xl italic leading-snug text-text-primary">
              Deciphering Tarkovsky composition keys
            </p>
          </div>

          <nav className="mt-8 grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-md border border-transparent bg-transparent px-3 py-3 text-sm font-semibold text-text-secondary transition hover:border-amber/50 hover:bg-surface hover:text-text-primary"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-amber">{link.code}</span>
                  {link.label}
                </span>
                <span className="font-mono text-[10px] text-text-faint transition group-hover:text-neon-cyan">open</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 border-t border-border pt-5">
          <div className="rounded-md border border-border bg-ink/40 p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-green">System active</p>
              <span className="h-2 w-2 rounded-full bg-neon-green" />
            </div>
            <p className="mt-3 font-display text-lg italic text-text-primary">Sculpting in Time by Andrei Tarkovsky</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-faint">v2.6 Neo Atelier</p>
        </div>
      </div>
    </header>
  );
}
