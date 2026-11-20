import Section, { Reveal, SectionHeader } from "@/src/components/Section";
import { education } from "@/src/data/profile";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Academic background" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.05}>
            <div className="h-full border-l-2 border-navy-900 pl-6">
              <p className="text-sm font-medium text-slate-500">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">{e.degree}</h3>
              <p className="mt-1 text-slate-700">{e.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
