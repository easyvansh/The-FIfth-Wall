import Link from 'next/link';
import { FifthWallLogo } from './fifth-wall-logo';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/', label: 'Notebook', code: '00' },
  { href: '/posts', label: 'Essays', code: '01' },
  { href: '/fragments', label: 'Fragments', code: '02' },
  { href: '/cinema', label: 'Cinema', code: '03' },
  { href: '/about', label: 'About', code: '04' },
  { href: '/newsletter', label: 'Newsletter', code: '05' }
];

export function SiteHeader() {
  return (
    <header className="z-40 border-b border-border bg-base/90 px-5 py-4 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-[240px] lg:shrink-0 lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
      <div className="flex h-full flex-col justify-between gap-7">
        <div>
          <Link href="/" className="group block">
            <div className="flex items-start gap-3 text-text-primary transition group-hover:text-amber">
              <FifthWallLogo className="mt-0.5 h-12 w-12 shrink-0 text-neon-orange" />
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-orange">Digital Journal</p>
                <h1 className="mt-2 font-display text-4xl leading-none text-text-primary transition group-hover:text-amber">
                  The Fifth <span className="text-amber">Wall</span>
                </h1>
              </div>
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-text-faint">Vansh Singh Archive</p>
          </Link>

          <div className="mt-7 rounded-sm border border-border bg-ink/45 p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon-green">System active</p>
              <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            </div>
            <p className="mt-3 font-display text-lg italic leading-snug text-text-primary">Sculpting in Time by Andrei Tarkovsky</p>
          </div>

          <nav className="mt-7 grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-sm border border-transparent bg-transparent px-2 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-neon-orange/50 hover:bg-surface/80 hover:text-text-primary"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-neon-orange">{link.code}</span>
                  {link.label}
                </span>
                <span className="font-mono text-[10px] text-text-faint transition group-hover:text-neon-cyan">open</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 border-t border-border pt-5">
          <ThemeToggle />
          <Link href="/newsletter" className="block rounded-sm border border-border px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary transition hover:border-neon-orange hover:text-neon-orange">
            Join the archive
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-faint">v2.7 Notebook</p>
        </div>
      </div>
    </header>
  );
}
