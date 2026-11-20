import Section, { Reveal, SectionHeader } from "@/src/components/Section";
import { capabilities } from "@/src/data/profile";

export default function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader
        eyebrow="Core Capabilities"
        title="Where I add value"
        intro="Four areas I've delivered in across startup, big-tech and research environments."
      />
      <div className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className="flex flex-col bg-white p-6">
            <span className="text-sm font-semibold text-brand-600">0{i + 1}</span>
            <h3 className="mt-3 text-lg font-semibold text-navy-900">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {c.skills.map((s) => (
                <li key={s} className="rounded border border-slate-200 bg-surface px-2 py-1 text-xs font-medium text-slate-700">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
