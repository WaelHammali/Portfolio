import { SectionAccent } from "@/components/ui/SectionAccent";

import { EDUCATION, AWARDS, CLUBS, LANGUAGES } from "@/lib/portfolio-data";

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-20 px-6 max-w-6xl mx-auto">
      <SectionAccent label="// education" position="top-right" />
      <div className="space-y-6">
        <div>
          <div className="text-[#94b8d4] font-mono text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#94b8d4]"></span>
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100">Education</h2>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Events & Programs</h3>
          <div className="flex flex-wrap gap-3">
            {AWARDS.map((award) => <span key={award} className="px-3 py-1.5 rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/5 text-xs text-slate-300">{award}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Academic Background</h3>
          <div className="space-y-0">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="relative pl-6 pb-7 border-l border-[#7b8fa8]/20">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#94b8d4] ring-4 ring-[#0d0f14]" />
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1"><h4 className="font-bold text-slate-100">{edu.degree}</h4><span className="text-xs font-mono text-slate-500">{edu.period}</span></div>
                <p className="text-sm text-slate-400">{edu.school}</p>
                {edu.note && <span className="inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded bg-[#7b8fa8]/10 text-[#94b8d4]">{edu.note}</span>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Clubs & Community</h3>
          <div className="space-y-0">
            {CLUBS.map((club) => (
              <div key={club.org} className="relative pl-6 pb-7 border-l border-[#7b8fa8]/20">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#94b8d4] ring-4 ring-[#0d0f14]" />
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1"><h4 className="font-bold text-slate-100">{club.role}</h4><span className="text-xs font-mono text-slate-500">{club.period}</span></div>
                <p className="text-sm text-[#94b8d4]">{club.org}</p>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">{club.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <span key={lang.name} className="px-3 py-1.5 rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/5 text-xs text-slate-300">
                {lang.name} <span className="text-[#94b8d4] font-mono">· {lang.level}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl glass-card p-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            My academic work connects software engineering with applied AI research. Through projects in computer vision, security automation, and cloud infrastructure, I apply this foundation to practical engineering problems. The SYSCOM research master’s complements this work with training in communication systems, modeling, and simulation.
          </p>
        </div>
      </div>
    </section>
  );
};
