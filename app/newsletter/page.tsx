export default function NewsletterPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-8 py-8">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">The dispatch</p>
        <h1 className="mt-4 font-display text-6xl leading-none text-text-primary">Subscribe to the notebook.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-text-secondary">
          Essays, fragments, recent reading, and cinema notes. No schedule theatre, only a note when there is something worth sending.
        </p>
      </div>

      <form action="/api/newsletter" method="post" className="atelier-panel rounded-lg p-7">
        <label className="grid gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber">Email address</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@domain.com"
            className="rounded-md border border-border bg-ink px-4 py-4 text-text-primary outline-none transition placeholder:text-text-faint focus:border-neon-cyan"
          />
        </label>
        <button type="submit" className="mt-5 w-full rounded-md bg-neon-orange px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink shadow-cyan transition hover:-translate-y-1">
          Subscribe to dispatch
        </button>
        <p className="mt-5 text-center text-sm leading-6 text-text-secondary">
          The form is wired to the local API route now. Buttondown or ConvertKit can replace the placeholder handler when credentials are ready.
        </p>
      </form>

      <div className="rounded-lg border border-border bg-surface p-6">
        <h2 className="font-display text-3xl text-text-primary">Inside each issue</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
          <li>A complete essay when one is ready.</li>
          <li>Recent fragments from the notebook.</li>
          <li>What I am reading, watching, and building.</li>
        </ul>
      </div>
    </section>
  );
}
