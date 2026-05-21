import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/60 px-5 py-10 text-sm text-text-secondary sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-3xl text-text-primary">Vansh Singh Atelier</h2>
          <p className="mt-2 max-w-xl leading-7">
            Essays, fragments, project notes, and cinematic observations arranged as a public notebook.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.22em]">
          <Link href="/rss.xml" className="transition hover:text-amber">RSS</Link>
          <a href="https://github.com/easyvansh" target="_blank" rel="noreferrer" className="transition hover:text-amber">GitHub</a>
          <Link href="/newsletter" className="transition hover:text-amber">Subscribe</Link>
        </div>
      </div>
    </footer>
  );
}
