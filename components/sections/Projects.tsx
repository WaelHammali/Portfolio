"use client";
import { useState } from "react";
import { SectionAccent } from "@/components/ui/SectionAccent";

import { ALL_PROJECTS, type Project } from "@/lib/portfolio-data";

type Visual = "pipeline" | "router" | "hub" | "aerial";

const VISUALS: Record<Project["visual"], Visual> = {
  pipeline: "pipeline", agents: "hub", recon: "router", vision: "aerial",
  cloud: "pipeline", app: "hub", search: "router", game: "hub",
};

function CardVisual({ visual }: { visual: Visual }) {
  if (visual === "aerial") {
    return (
      <div className="absolute inset-0 p-3 flex flex-col justify-between bg-slate-950/40">
        {/* Top bar with simulated coordinates */}
        <div className="flex justify-between items-center text-[8px] font-mono text-[#94b8d4]/80">
          <span>LAT: 36.8065° N</span>
          <span>LON: 10.1815° E</span>
        </div>

        {/* Mock detection layout */}
        <div className="relative flex-1 w-full border border-[#7b8fa8]/20 rounded bg-slate-900/50 overflow-hidden my-1">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10 pointer-events-none">
            <div className="border-r border-b border-[#7b8fa8]"></div>
            <div className="border-r border-b border-[#7b8fa8]"></div>
            <div className="border-b border-[#7b8fa8]"></div>
            <div className="border-r border-b border-[#7b8fa8]"></div>
            <div className="border-r border-b border-[#7b8fa8]"></div>
            <div className="border-b border-[#7b8fa8]"></div>
            <div className="border-r border-[#7b8fa8]"></div>
            <div className="border-r border-[#7b8fa8]"></div>
            <div></div>
          </div>

          {/* Tree detections (Green/Emerald boxes) */}
          <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] border border-emerald-500/60 bg-emerald-500/5 rounded-full flex flex-col justify-start p-0.5 pointer-events-none">
            <span className="text-[6px] font-mono text-emerald-400 leading-none">Tree: 0.59</span>
          </div>
          <div className="absolute top-[50%] left-[5%] w-[20%] h-[20%] border border-emerald-500/60 bg-emerald-500/5 rounded-full flex flex-col justify-start p-0.5 pointer-events-none">
            <span className="text-[6px] font-mono text-emerald-400 leading-none">Tree: 0.61</span>
          </div>

          {/* Building detections */}
          <div className="absolute top-[20%] right-[10%] w-[35%] h-[40%] border border-[#94b8d4]/60 bg-[#94b8d4]/5 flex flex-col justify-start p-0.5 pointer-events-none">
            <span className="text-[6px] font-mono text-[#94b8d4] leading-none">Building: 0.82</span>
          </div>

          {/* Car detections */}
          <div className="absolute bottom-[15%] left-[45%] w-[12%] h-[18%] border border-amber-500/60 bg-amber-500/5 rotate-12 flex flex-col justify-start p-0.5 pointer-events-none">
            <span className="text-[5px] font-mono text-amber-400 leading-none">Car: 0.65</span>
          </div>
        </div>

        {/* Bottom bar with telemetry */}
        <div className="flex justify-between items-center text-[7px] font-mono text-slate-500">
          <span>YOLOv8 Dual-Model</span>
          <span>imgsz: 640</span>
        </div>
      </div>
    );
  }
  if (visual === "pipeline") {
    return (
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#7b8fa8]/8 flex items-center justify-center border-r border-[#7b8fa8]/20">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7b8fa8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
          </svg>
        </div>
        <div className="bg-slate-900/50 p-2 font-mono text-[8px] text-[#94b8d4]/60 overflow-hidden">
          <p>optimized_yolov8()</p>
          <p>generate_topology()</p>
          <p>terraform_deploy()</p>
        </div>
      </div>
    );
  }
  if (visual === "router") {
    return (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#7b8fa8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <rect x="2" y="9" width="20" height="6" rx="2" /><path d="M8 9V5M16 9V5M12 9V5M8 15v4M16 15v4M12 15v4" />
      </svg>
    );
  }
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#7b8fa8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
      <circle cx="12" cy="12" r="3" /><circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" /><circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" /><path d="M6 6.5l4 4M18 6.5l-4 4M6 17.5l4-4M18 17.5l-4-4" />
    </svg>
  );
}

export function Projects() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const toggle = (name: string) =>
    setFlipped((prev) => (prev === name ? null : name));

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20">
      <SectionAccent label="// projects" position="top-right" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
            Engineering Projects
          </h2>
          <div className="h-1 w-20 bg-[#94b8d4]" />
          <p className="text-slate-500 text-sm font-mono mt-1">Explore the approach, technologies, and implementation behind each project.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project) => {
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
                    minHeight: "360px",
                  }}
                >
                  {/* ── FRONT ── */}
                  <div
                    className="absolute inset-0 flex flex-col gap-4 glass-card rounded-xl p-5"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Visual thumbnail */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#7b8fa8]/20 bg-[#7b8fa8]/5 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7b8fa8]/20 via-transparent to-transparent" />
                      <CardVisual visual={VISUALS[project.visual]} />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-slate-100 text-lg font-bold">{project.name}</h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7b8fa8]/10 text-[#94b8d4]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Hint */}
                    <p className="text-[10px] font-mono text-slate-600 text-right">View Project Details →</p>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className="relative flex flex-col justify-between glass-card rounded-xl p-6 border border-[#94b8d4]/30 bg-[#0d0f14]/95"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      <h3 className="text-[#94b8d4] text-lg font-bold mb-3">{project.name}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.fullDesc}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7b8fa8]/10 text-[#94b8d4]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#7b8fa8]/20 flex flex-col gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-bold hover:bg-slate-100 transition-all shadow-md"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View on GitHub
                      </a>
                      <p className="text-center text-[10px] font-mono text-slate-600">Return to Overview</p>
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
