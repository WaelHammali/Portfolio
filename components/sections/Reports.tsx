"use client";

const REPORTS = [
  {
    name: "PFA 1 — Les Techniques de Data Lake",
    org: "ENIT",
    date: "2024",
    href: "/rapports/Projet_PFA1.pdf",
    summary:
      "Etude approfondie et mise en œuvre des architectures Data Lake pour le stockage et le traitement analytique de données massives et hétérogènes.",
    skills: ["Big Data", "Data Lake", "Data Architecture", "Analytics"],
  },
  {
    name: "PFA 2 — Advanced RAG For Net To Cloud Translation",
    org: "ENIT / TAV Airports",
    date: "2025",
    href: "/rapports/pfa2.pdf",
    summary:
      "An AI pipeline using YOLOv8 to analyze network diagrams and RAG to generate secure cloud infrastructure (Terraform/Ansible).",
    skills: ["Cloud Security", "YOLOv8", "RAG", "Automation"],
  },
];

export function Reports() {
  return (
    <section id="reports" className="px-6 py-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
            Academic Reports (PFA)
          </h2>
          <div className="h-1 w-20 bg-cyan-500" />
          <p className="text-slate-400 mt-2 font-mono text-sm">
            Detailed project documentation and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REPORTS.map((report) => (
            <div key={report.name} className="rounded-2xl glass-card p-6 group flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{report.name}</h3>
                    <p className="text-sm text-cyan-400">{report.org} · {report.date}</p>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {report.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {report.skills.map((skill) => (
                    <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  Download Rapport →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
