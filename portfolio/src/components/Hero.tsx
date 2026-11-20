"use client";

import Image from "next/image";
import { Icons } from "@/src/components/Icons";
import { profile, stats } from "@/src/data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(#eef2f7 1px, transparent 1px), linear-gradient(90deg, #eef2f7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {profile.title} at {profile.company}
          </div>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Engineering reliable systems for applied AI.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            I&apos;m <span className="font-semibold text-navy-900">{profile.name}</span>, a software engineer
            building low-latency backend platforms and production AI systems. Currently leading founding
            engineering at <span className="font-medium text-navy-900">ForbocAI</span>, with prior work at{" "}
            <span className="font-medium text-navy-900">Amazon</span>,{" "}
            <span className="font-medium text-navy-900">Motorola</span> and published research at{" "}
            <span className="font-medium text-navy-900">CNS, Indiana University</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
            >
              View Experience <Icons.ChevronRight size={16} />
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900"
            >
              Read the Publication
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-brand-600 hover:text-navy-900"
            >
              <Icons.Email size={16} /> Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -right-4 -top-4 h-full w-full rounded-xl border border-navy-900/15" />
          <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-xl shadow-slate-900/10">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Antara Bhavsar"
              width={480}
              height={600}
              priority
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-lg border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:left-6 sm:right-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Currently</p>
            <p className="mt-1 text-sm font-semibold text-navy-900">Founding Software Engineer · ForbocAI</p>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative border-t border-slate-200 bg-navy-900">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 md:px-6 ${i % 2 === 1 ? "pl-4 border-l border-white/10" : ""} ${
                i >= 2 ? "border-t border-white/10 md:border-t-0" : ""
              } ${i === 2 ? "md:border-l md:border-white/10 md:pl-6" : ""} ${i === 0 ? "md:pl-0" : ""}`}
            >
              <dt className="text-sm text-slate-300">{s.label}</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
