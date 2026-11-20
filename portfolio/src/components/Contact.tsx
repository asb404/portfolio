"use client";

import { useState } from "react";
import { Reveal } from "@/src/components/Section";
import { Icons } from "@/src/components/Icons";
import { profile } from "@/src/data/profile";

const links = [
  { label: "LinkedIn", value: "Antara Bhavsar", href: profile.linkedin, icon: <Icons.LinkedIn size={20} /> },
  { label: "GitHub", value: "github.com/asb404", href: profile.github, icon: <Icons.GitHub size={20} /> },
];

const rowClass = "group flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/5";
const iconClass = "flex h-10 w-10 flex-none items-center justify-center rounded-md bg-white/10 text-white";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API unavailable (e.g. insecure context): fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-navy-950 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s talk about your next engineering challenge.
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
            Open to conversations about backend platforms, applied AI and founding-team roles. I typically
            reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.composeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-200"
            >
              <Icons.Email size={16} /> Email me
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Download résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
            <li>
              <button type="button" onClick={copyEmail} className={rowClass} aria-label="Copy email address">
                <span className={iconClass}>
                  <Icons.Email size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="block truncate font-medium text-white">{profile.email}</span>
                </span>
                <span
                  className={`flex-none rounded px-2.5 py-1 text-xs font-semibold transition-colors ${
                    copied ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-slate-300 group-hover:text-white"
                  }`}
                  aria-live="polite"
                >
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </li>
            {links.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noreferrer" className={rowClass}>
                  <span className={iconClass}>{c.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">{c.label}</span>
                    <span className="block truncate font-medium text-white">{c.value}</span>
                  </span>
                  <Icons.ChevronRight size={18} className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
