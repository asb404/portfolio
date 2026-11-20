import Section, { Reveal, SectionHeader } from "@/src/components/Section";
import { Icons } from "@/src/components/Icons";
import { profile, projects } from "@/src/data/profile";

export default function Projects() {
  return (
    <Section id="projects" tone="surface">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects"
        intro="Independent systems spanning multi-agent AI, cloud platforms and machine learning."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.05}
            className={`${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === projects.length - 1 && projects.length % 2 === 1 ? "md:col-span-2" : ""}`}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-md md:p-8"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider">
                <span className="text-brand-600">
                  {p.category} <span className="text-slate-400">· {p.year}</span>
                </span>
                {p.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] text-amber-700">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z" />
                    </svg>
                    Featured
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded bg-surface px-2.5 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-navy-900">
                <Icons.GitHub size={16} /> View source
                <Icons.ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-navy-900"
        >
          All repositories on GitHub <Icons.ChevronRight size={16} />
        </a>
      </div>
    </Section>
  );
}
