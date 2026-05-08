"use client";
import { useState } from "react";

const FEATURED = [
  {
    name: "Vision-to-Infrastructure Pipeline",
    shortDesc: "AI system that translates network designs into secure cloud equivalents and generates Terraform + Ansible deployments.",
    fullDesc: "An end-to-end AI pipeline that uses YOLOv8 computer vision to detect and analyze network topology diagrams, then leverages RAG to automatically generate equivalent secure cloud infrastructure. Outputs production-ready Terraform and Ansible configurations for deployment on AWS.",
    tags: ["Python", "YOLOv8", "RAG"],
    visual: "pipeline",
    github: "https://github.com/WaelHammali/Advanced-RAG-For-Net_To_Cloud-Translation",
  },
  {
    name: "Network Automation & Monitoring",
    shortDesc: "Architecture translation system that maps real network components to cloud resources using RAG.",
    fullDesc: "A RAG-powered system that takes physical network architecture descriptions and automatically maps each component to its cloud equivalent. Supports multi-cloud environments and generates monitoring configurations alongside the infrastructure code.",
    tags: ["RAG", "Automation", "Cloud"],
    visual: "router",
    github: "https://github.com/WaelHammali/Net2Terraform-WebInterface",
  },
  {
    name: "Recruitment Management Platform",
    shortDesc: "Full-stack platform with candidate profiles, CV upload, and HR workflows with matching scores.",
    fullDesc: "A complete recruitment platform built for HR teams, featuring candidate profile management, CV parsing and upload, automated scoring based on job requirements, and a dashboard for tracking application pipelines from application to hire.",
    tags: ["Node.js", "MySQL", "Tailwind"],
    visual: "hub",
    github: "https://github.com/WaelHammali/Recruitment-Management-Platform",
  },
  {
    name: "Smurf Game",
    shortDesc: "2D C# .NET game where the player controls a Smurf character, jumps over obstacles, and collects tokens.",
    fullDesc: "A 2D side-scrolling game built with C# and .NET where the player guides a Smurf character through procedurally generated obstacle courses. Features a token collection system, score tracking, increasing difficulty, and smooth animations using GDI+ rendering.",
    tags: ["C#", ".NET"],
    visual: "pipeline",
    github: "https://github.com/WaelHammali/Smurf_Game",
  },
  {
    name: "ENIT Event Platform",
    shortDesc: "Full-stack event management platform for ENIT students and staff to create and register for campus events.",
    fullDesc: "A campus-wide event management system for ENIT that allows student organizations and faculty to create, publish, and manage events. Students can browse, register, and receive reminders. Features an admin dashboard, QR-code check-in, and real-time attendance tracking.",
    tags: ["Full Stack", "Node.js", "MySQL"],
    visual: "hub",
    github: "https://github.com/WaelHammali/ENIT_EventPlatform",
  },
  {
    name: "Moteur De Recherche",
    shortDesc: "Custom search engine with indexing, ranking algorithms, and a clean query interface for document retrieval.",
    fullDesc: "A search engine built from scratch in Python, implementing an inverted index, TF-IDF ranking, and Boolean query processing. Features a lightweight web interface for querying a document corpus, with results ranked by relevance score and highlighted keyword matches.",
    tags: ["Java"],
    visual: "router",
    github: "https://github.com/WaelHammali/MoteurDeRecherche",
  },
  {
    name: "Gestion De Clinique Dentaire",
    shortDesc: "Dental clinic management system for handling patients, appointments, and medical records.",
    fullDesc: "A complete dental clinic management application that centralises patient records, appointment scheduling, treatment history, and billing. Built with a clean UI for receptionists and dentists, it includes automated appointment reminders, invoice generation, and patient search.",
    tags: ["Java", "MySQL", "Desktop"],
    visual: "hub",
    github: "https://github.com/WaelHammali/Gestion_De_CliniqueDentaire",
  },
];

type Visual = "pipeline" | "router" | "hub";

function CardVisual({ visual }: { visual: Visual }) {
  if (visual === "pipeline") {
    return (
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-cyan-500/10 flex items-center justify-center border-r border-cyan-500/20">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <div className="bg-slate-900/50 p-2 font-mono text-[8px] text-cyan-300/60 overflow-hidden">
          <p>optimized_yolov8()</p>
          <p>generate_topology()</p>
          <p>terraform_deploy()</p>
        </div>
      </div>
    );
  }
  if (visual === "router") {
    return (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <rect x="2" y="9" width="20" height="6" rx="2"/><path d="M8 9V5M16 9V5M12 9V5M8 15v4M16 15v4M12 15v4"/>
      </svg>
    );
  }
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
      <circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 6.5l4 4M18 6.5l-4 4M6 17.5l4-4M18 17.5l-4-4"/>
    </svg>
  );
}

export function Projects() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const toggle = (name: string) =>
    setFlipped((prev) => (prev === name ? null : name));

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
            Key Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-500" />
          <p className="text-slate-500 text-sm font-mono mt-1">Click any card to read more</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED.map((project) => {
            const isFlipped = flipped === project.name;
            return (
              <div
                key={project.name}
                onClick={() => toggle(project.name)}
                className={`cursor-pointer transition-all duration-300 ${isFlipped ? "relative z-20" : "relative z-0"}`}
                style={{ perspective: "1200px" }}
              >
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped
                      ? "rotateY(180deg) scale(1.08)"
                      : "rotateY(0deg) scale(1)",
                    transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    minHeight: "280px",
                  }}
                >
                  {/* ── FRONT ── */}
                  <div
                    className="absolute inset-0 flex flex-col gap-4 glass-card rounded-xl p-5"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Visual thumbnail */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
                      <CardVisual visual={project.visual as Visual} />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-slate-100 text-lg font-bold">{project.name}</h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Hint */}
                    <p className="text-[10px] font-mono text-slate-600 text-right">click to flip →</p>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className="absolute inset-0 flex flex-col justify-between glass-card rounded-xl p-6 border border-cyan-500/40 bg-slate-900/90"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      <h3 className="text-cyan-400 text-lg font-bold mb-3">{project.name}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.fullDesc}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-cyan-500/20 flex flex-col gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-bold hover:bg-slate-100 transition-all shadow-md"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                      <p className="text-center text-[10px] font-mono text-slate-600">click card to close</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
