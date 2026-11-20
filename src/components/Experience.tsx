import Section, { Reveal, SectionHeader } from "@/src/components/Section";
import { experiences } from "@/src/data/profile";

export default function Experience() {
  return (
    <Section id="experience" tone="surface">
      <SectionHeader
        eyebrow="Professional Experience"
        title="Career history"
        intro="From shipping Android features to 100K+ users to founding the engineering function at an AI startup."
      />

      <ol className="space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05}>
            <li className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
              <div className="md:border-r md:border-slate-200 md:pr-6">
                <p className="text-sm font-semibold text-navy-900">{exp.company}</p>
                <p className="mt-1 text-sm text-slate-500">{exp.location}</p>
                <p className="mt-3 text-sm font-medium text-slate-700">{exp.period}</p>
                {exp.current && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current role
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900">{exp.role}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{exp.summary}</p>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {exp.tech.map((t) => (
                    <li key={t} className="rounded bg-brand-50 px-2.5 py-1 text-xs font-medium text-navy-800">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
