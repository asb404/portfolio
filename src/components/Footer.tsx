import { profile } from "@/src/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="#contact" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
