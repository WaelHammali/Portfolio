const EDUCATION = [
  { degree: "Software Engineering", school: "ENIT — Ecole Nationale d'Ingenieurs de Tunis", period: "2024 → 2027", note: null },
  { degree: "Preparatory Cycle — Physics & Technology", school: "IPEIM — Institut Preparatoire aux Etudes d'Ingenieurs de Monastir", period: "2021 → 2023", note: "High Honors (Rank 78)" },
];

const AWARDS = [
  "Cybercriminalite & Gouvernance (ESPRIT)",
  "Cyber Camp 6.0 (INSAT)",
  "Cyber Horizon (FST)",
  "GOAT-1.0 (Supcom)",
  "Out Of Brief (Junior Entreprise / ENIT)",
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-6">
        <div>
          <div className="text-[#94b8d4] font-mono text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#94b8d4]"></span>
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100">Education</h2>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Awards & Programs</h3>
          <div className="flex flex-wrap gap-3">
            {AWARDS.map((award) => <span key={award} className="px-3 py-1.5 rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/5 text-xs text-slate-300">{award}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-100 tracking-tight mb-6">Education Career</h3>
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

        <div className="rounded-2xl glass-card p-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            I'm an engineering student with a multidisciplinary background in software development, embedded systems, networking, and intelligent systems. My studies cover STM32 embedded development, .NET/C#, mobile development, databases, ERP systems, software engineering, algorithms, compilation, parallel computing, mathematics, AI, and machine learning. This broad technical foundation allows me to understand both low-level hardware concepts and high-level software solutions, while developing strong problem-solving and engineering skills.
          </p>
        </div>
      </div>
    </section>
  );
};
