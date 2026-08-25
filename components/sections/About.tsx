export function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#94b8d4] font-mono text-sm mb-2">// about me</p>
          <h2 className="text-4xl font-display font-semibold mb-4 text-white">
            Clear, secure, and scalable systems
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I am a Software Engineering student at ENIT in Tunis focused on combining cloud
            security, AI, and network automation. I build practical systems that translate real
            infrastructure into secure, deployable cloud architectures.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-400">
            <div className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-[#94b8d4]" />
              RAG + computer vision to analyze and map infrastructure.
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-[#94b8d4]" />
              Infrastructure as code with Terraform and Ansible.
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 size-2 rounded-full bg-[#94b8d4]" />
              Security-focused automation and monitoring.
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/wael-hammali-993100360/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/WaelHammali"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
            >
              GitHub
            </a>
            <a
              href="mailto:wael.hammali@etudiant-enit.utm.tn"
              className="btn-cyan"
            >
              Email
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "2024-2027", label: "B.Eng Software Engineering" },
            { value: "2", label: "Certifications" },
            { value: "5+", label: "Projects shipped" },
            { value: "2025", label: "Cloud + AI internship" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="p-6 rounded-2xl glass-card text-center"
            >
              <div className="text-3xl font-display font-bold text-[#94b8d4] mb-1">{value}</div>
              <div className="text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
