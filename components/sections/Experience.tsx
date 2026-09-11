import { BriefcaseBusiness, FileText, GraduationCap, Microscope } from "lucide-react";
import { SectionAccent } from "@/components/ui/SectionAccent";
import { CERTIFICATIONS as CERTS, EXPERIENCE, RESEARCH_MASTER, type ExperienceEntry } from "@/lib/portfolio-data";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const research = entry.kind === "Research";
  return (
    <article className="glass-card rounded-xl border border-[#7b8fa8]/20 p-6 sm:p-8">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[#94b8d4]">
            {entry.org}
          </p>
          <h4 className="text-2xl font-bold text-slate-200">{entry.title}</h4>
          <p className="mt-2 text-sm text-slate-400">{entry.location} · {entry.period}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-slate-400">
          {research ? "Research Project" : "Engineering Internship"}
        </span>
      </div>
      <p className="max-w-4xl text-sm leading-relaxed text-slate-300">{entry.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tech.map((skill) => (
          <span key={skill} className="rounded-full bg-[#7b8fa8]/10 px-2.5 py-1 text-[11px] text-[#94b8d4]">
            {skill}
          </span>
        ))}
      </div>
      {entry.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {entry.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#7b8fa8]/20 bg-[#7b8fa8]/10 px-4 py-2.5 text-sm font-medium text-[#94b8d4] transition-colors hover:bg-[#7b8fa8]/20">
              <FileText size={16} aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Experience() {
  return (
    <>
      <section id="experience" className="relative overflow-hidden px-6 py-20 lg:px-20">
        <SectionAccent label="// experience" position="top-right" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#94b8d4]">Professional & Academic Work</p>
            <h2 className="text-4xl font-black text-slate-100 md:text-5xl">Experience & Research</h2>
          </div>

          <div className="space-y-20">
            <div>
              <div className="mb-8 flex items-center gap-4 border-b border-[#7b8fa8]/20 pb-4">
                <BriefcaseBusiness size={28} className="text-[#94b8d4]" aria-hidden="true" />
                <h3 className="text-3xl font-bold tracking-tight text-slate-100">Internships</h3>
              </div>
              <div className="space-y-6">
                {EXPERIENCE.filter((entry) => entry.kind === "Internship").map((entry) => (
                  <ExperienceCard key={entry.org} entry={entry} />
                ))}
              </div>
            </div>

            <div id="research" className="scroll-mt-24">
              <div className="mb-8 flex items-center gap-4 border-b border-[#7b8fa8]/20 pb-4">
                <Microscope size={28} className="text-[#94b8d4]" aria-hidden="true" />
                <h3 className="text-3xl font-bold tracking-tight text-slate-100">Research</h3>
              </div>
              <div className="space-y-6">
                <article className="glass-card rounded-xl border border-[#7b8fa8]/20 p-6 sm:p-8">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#94b8d4]">
                        <GraduationCap size={18} aria-hidden="true" /> Research Master’s Program
                      </p>
                      <h4 className="text-2xl font-bold text-slate-200">{RESEARCH_MASTER.title}</h4>
                      <p className="mt-2 text-sm text-slate-400">{RESEARCH_MASTER.school} · Tunis, Tunisia</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-slate-400">{RESEARCH_MASTER.period}</span>
                  </div>
                  <div className="max-w-4xl space-y-3 text-sm leading-relaxed text-slate-300">
                    <p>{RESEARCH_MASTER.description}</p>
                    <p>{RESEARCH_MASTER.methodology}</p>
                  </div>
                  <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-widest text-slate-400">Research & Study Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {RESEARCH_MASTER.focus.map((area) => (
                      <span key={area} className="rounded-full bg-[#7b8fa8]/10 px-2.5 py-1 text-[11px] text-[#94b8d4]">{area}</span>
                    ))}
                  </div>
                </article>
                {EXPERIENCE.filter((entry) => entry.kind === "Research").map((entry) => (
                  <ExperienceCard key={entry.org} entry={entry} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-20">
        <SectionAccent label="// certifications" position="top-right" />
        <div className="max-w-7xl mx-auto">
          <div id="certifications">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#7b8fa8]/20">
              <div className="w-12 h-12 rounded-xl bg-[#7b8fa8]/10 border border-[#7b8fa8]/20 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#94b8d4]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3-1.523-9.11" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Certifications</h3>
            </div>
            <div className="space-y-5">
              {CERTS.map((cert) => (
                <div key={cert.name} className="rounded-2xl glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7b8fa8]/10 border border-[#7b8fa8]/20 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94b8d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-slate-100">{cert.name}</p>
                      <p className="text-xs text-[#94b8d4]">{cert.org} · {cert.date}</p>
                      <p className="text-sm text-slate-400 mt-3 leading-relaxed">{cert.summary}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-[#7b8fa8]/10 text-[#94b8d4]">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-[#94b8d4] transition-colors">
                      View certificate →
                    </a>
                    {cert.verifyHref && (
                      <a href={cert.verifyHref} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-[#94b8d4] transition-colors">
                        Verify →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
