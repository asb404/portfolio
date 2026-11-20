import Section, { Reveal, SectionHeader } from "@/src/components/Section";
import { Icons } from "@/src/components/Icons";
import { publications } from "@/src/data/profile";

export default function Research() {
  return (
    <Section id="research">
      <SectionHeader
        eyebrow="Research & Publications"
        title="Published research"
        intro="Work from the Cyberinfrastructure for Network Science Center at Indiana University."
      />

      {publications.map((pub) => (
        <Reveal key={pub.doi}>
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 bg-navy-900 px-6 py-3 text-xs font-medium text-slate-200 md:px-8">
              <span className="rounded bg-white/10 px-2 py-0.5 font-semibold text-white">{pub.venue}</span>
              <span>{pub.type}</span>
              <span className="hidden sm:inline">·</span>
              <span>{pub.date}</span>
            </div>

            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_260px]">
              <div>
                <h3 className="font-serif text-2xl font-semibold leading-snug text-navy-900">{pub.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      {a === "Antara Bhavsar" ? (
                        <span className="font-semibold text-navy-900 underline decoration-brand-600 decoration-2 underline-offset-2">
                          {a}
                        </span>
                      ) : (
                        a
                      )}
                      {i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="mt-5 leading-relaxed text-slate-700">{pub.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {pub.highlights.map((h) => (
                    <li key={h} className="rounded border border-slate-200 bg-surface px-2.5 py-1 text-xs font-medium text-slate-700">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="flex flex-col justify-between gap-6 rounded-lg bg-surface p-5">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Institution</dt>
                    <dd className="mt-1 text-slate-800">{pub.org}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">DOI</dt>
                    <dd className="mt-1 break-all font-mono text-xs text-slate-800">{pub.doi}</dd>
                  </div>
                </dl>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
                >
                  Read on bioRxiv <Icons.ChevronRight size={16} />
                </a>
              </aside>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}
