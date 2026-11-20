"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/src/components/Icons";
import { profile } from "@/src/data/profile";

const navItems = [
  { label: "About", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = ["home", "expertise", "experience", "research", "projects", "education", "contact"];
      const current = ids.findLast((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top <= 120 : false;
      });
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) setActive("contact");
      else if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const id = href.slice(1);
    if (id === "home") return active === "home" || active === "expertise";
    if (id === "projects") return active === "projects" || active === "education";
    return active === id;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-sm font-semibold tracking-wide text-white">
            AB
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold text-navy-900">{profile.name}</span>
            <span className="hidden text-xs text-slate-500 sm:block">Software Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-navy-900" : "text-slate-500 hover:text-navy-900"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-brand-600" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-slate-500 hover:text-navy-900">
            <Icons.LinkedIn size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-slate-500 hover:text-navy-900">
            <Icons.GitHub size={18} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-navy-900 md:hidden"
        >
          {open ? <Icons.Close size={22} /> : <Icons.Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block rounded-md bg-navy-900 py-3 text-center text-sm font-semibold text-white"
          >
            View Résumé
          </a>
        </div>
      )}
    </header>
  );
}
