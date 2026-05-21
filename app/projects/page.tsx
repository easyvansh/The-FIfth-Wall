import { getProjects } from '../../lib/content';

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="space-y-10">
      <div className="border-b border-border pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neon-cyan">Project lab</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-none text-text-primary">Prototypes, tools, and research machines.</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">
          Software experiments that support writing, film analysis, and local-first knowledge work.
        </p>
      </div>

      <div className="grid gap-7">
        {projects.map((project) => (
          <article key={project.slug} className="atelier-panel rounded-lg p-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-text-faint">{project.year}</span>
                  <span className="text-neon-cyan">{project.status}</span>
                </div>
                <h2 className="mt-3 font-display text-4xl text-text-primary">{project.name}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-text-secondary">{project.description}</p>
              </div>
              <div className="flex gap-3">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-md border border-neon-orange px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neon-orange transition hover:bg-neon-orange hover:text-ink">
                    Codebase
                  </a>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="rounded-md bg-neon-orange px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-amber">
                    Live
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-6 rounded-md border border-border bg-ink/30 p-5 font-mono text-sm leading-7 text-text-secondary">{project.body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
