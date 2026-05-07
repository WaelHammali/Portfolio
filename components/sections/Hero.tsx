import Link from "next/link";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

export function Hero() {
  return (
    <section id="home" className="px-6 py-16 lg:px-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono w-fit">
              ✨ Available for internships
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Wael Hammali</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Software Engineering Student at ENIT focused on cloud security, AI systems, and
              cybersecurity automation. Building secure, scalable infrastructure with modern tools.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">Cloud Security</span>
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">RAG + CV</span>
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">Network Automation</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="btn-cyan"
              >
                View Projects
              </Link>
              <div className="flex gap-2">
                <a
                  href="/Final1.pdf"
                  download
                  className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 font-medium text-xs transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Tunis, Tunisia
              </span>
              <a
                href="https://github.com/WaelHammali"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/wael-hammali-993100360/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right side - Overlapping floating cards */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Main profile card - top right */}
            <div className="absolute top-0 right-0 w-80 float-card">
              <div className="glass-card rounded-2xl p-4 overflow-hidden border border-cyan-500/30">
                <div className="rounded-xl overflow-hidden h-64 bg-cyan-500/10 border border-cyan-500/20">
                  <ZoomableImage
                    src="/l.jpeg"
                    alt="Wael Hammali"
                    className="w-full h-full object-cover scale-110"
                    objectFit="cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-cyan-400 font-semibold text-sm">Full Stack Developer</h3>
                  <p className="text-slate-400 text-xs">Cloud & Security Focused</p>
                </div>
              </div>
            </div>

            {/* Featured project card - middle left */}
            <div className="absolute top-32 left-0 w-72 float-card-sm">
              <div className="glass-card rounded-2xl p-4 border border-cyan-500/30 bg-cyan-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">🚀</span>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold text-sm">Cloud & AI</p>
                    <p className="text-slate-500 text-xs">Infrastructure</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Building scalable cloud infrastructure with Terraform & automated security frameworks
                </p>
              </div>
            </div>

            {/* Skills/Tech card - bottom middle */}
            <div className="absolute bottom-0 right-6 w-80 float-card-lg">
              <div className="glass-card rounded-2xl p-5 border border-cyan-500/30">
                <p className="text-cyan-400 font-semibold text-sm mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["AI", "Cybersecurity", "Cloud"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTF / HTB card - bottom left */}
            <div className="absolute bottom-10 left-0 w-64 float-card-sm">
              <div className="glass-card rounded-2xl p-4 border border-cyan-500/30 bg-cyan-500/5">
                <p className="text-cyan-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <span>🎯</span> Competitive Hacking
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-500/30 bg-slate-900/50">
                    <span className="text-base">🚩</span>
                    <span className="text-cyan-300 text-xs font-mono font-semibold">CTF Player</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-500/30 bg-slate-900/50">
                    <span className="text-base">🟢</span>
                    <span className="text-cyan-300 text-xs font-mono font-semibold">HTB Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
