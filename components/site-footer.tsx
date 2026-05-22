import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-base/80 px-5 py-10 text-sm text-text-secondary sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-3xl text-text-primary">The Fifth Wall</h2>
          <p className="mt-2 max-w-xl leading-7">
            Essays, fragments, and cinematic observations arranged as a public notebook with personal edges left visible.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.22em]">
          <Link href="/rss.xml" className="transition hover:text-amber">RSS</Link>
          <a href="https://github.com/easyvansh" target="_blank" rel="noreferrer" className="transition hover:text-amber">GitHub</a>
          <Link href="/newsletter" className="transition hover:text-amber">Join archive</Link>
        </div>
      </div>
    </footer>
  );
}
