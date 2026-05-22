import { getSiteContent } from '@/lib/content';

export default function NewsletterPage() {
  const copy = getSiteContent().newsletter;

  return (
    <section className="mx-auto max-w-2xl space-y-8 py-8">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">{copy.eyebrow}</p>
        <h1 className="mt-4 font-display text-6xl leading-none text-text-primary">{copy.title}</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-text-secondary">
          {copy.intro}
        </p>
      </div>

      <form action="/api/newsletter" method="post" className="atelier-panel rounded-lg p-7">
        <label className="grid gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber">{copy.emailLabel}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={copy.placeholder}
            className="rounded-md border border-border bg-ink px-4 py-4 text-text-primary outline-none transition placeholder:text-text-faint focus:border-neon-cyan"
          />
        </label>
        <button type="submit" className="mt-5 w-full rounded-md bg-neon-orange px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink shadow-cyan transition hover:-translate-y-1">
          {copy.button}
        </button>
        <p className="mt-5 text-center text-sm leading-6 text-text-secondary">
          {copy.formNote}
        </p>
      </form>

      <div className="rounded-lg border border-border bg-surface p-6">
        <h2 className="font-display text-3xl text-text-primary">{copy.issueTitle}</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
          {copy.issueItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
