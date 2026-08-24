const HIGHLIGHTS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Network Security Assessment",
    description:
      "Reviewed camera and network infrastructure to identify security, reliability, and integration gaps.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "YOLO-Based Monitoring",
    description:
      "Proposed a computer vision system to detect vehicles and reduce parking fraud with AI.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "AI + Infrastructure Recommendations",
    description:
      "Delivered technical recommendations combining network architecture, security, and automation.",
  },
];

const EDUCATION = [
  {
    degree: "Software Engineering",
    school: "ENIT — Ecole Nationale d'Ingenieurs de Tunis",
    period: "2024 → 2027",
    note: null,
  },
  {
    degree: "Preparatory Cycle — Physics & Technology",
    school: "IPEIM — Institut Preparatoire aux Etudes d'Ingenieurs de Monastir",
    period: "2021 → 2023",
    note: "High Honors (Rank 78)",
  },
];

const CERTS = [
  {
    name: "Certified Associate Penetration Tester (CAPT)",
    org: "Hackviser",
    date: "December 2025",
    href: "/certificates/cert-capt.pdf",
    verifyHref: "https://lnkd.in/ddUVy22U",
    summary:
      "Hands-on entry program covering penetration testing fundamentals through real-world labs and assessments.",
    skills: [
      "Linux, Windows, Network, and Web fundamentals",
      "Ethical hacking and penetration testing",
      "Network and web security",
      "Privilege escalation and vulnerability analysis",
      "Security tools, OSINT, and system auditing",
      "Cryptography fundamentals and social engineering",
    ],
  },
  {
    name: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "January 2026",
    href: "/certificates/cert-ccna-intro-to-networks.pdf",
    summary:
      "Foundational networking certification focused on IP addressing, switching, routing, and troubleshooting best practices.",
    skills: [
      "Network fundamentals and OSI/TCP-IP models",
      "IPv4/IPv6 addressing and subnetting",
      "Ethernet switching and VLAN basics",
      "Routing concepts and device configuration",
      "Network security fundamentals",
      "Connectivity testing and troubleshooting",
    ],
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco Networking Academy",
    date: "2026",
    href: "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wael-hammali-etudiant-enit-utm-tn_721fe3be-16df-401f-ac9a-feffe476c040.pdf",
    summary:
      "Intermediate certification covering architecture, components, and operations of routers and switches, including WLANs and security concepts.",
    skills: [
      "VLANs, Inter-VLAN Routing, and STP",
      "EtherChannel and FHRP Configuration",
      "IPv4/IPv6 Static Routing and Troubleshooting",
      "WLAN Architecture and Security",
      "Switch Security (Port Security, DHCP Snooping)",
      "DHCPv4 and SLAAC/DHCPv6 Configuration",
    ],
  },
];



const AWARDS = [
  "Cybercriminalite & Gouvernance (ESPRIT)",
  "Cyber Camp 6.0 (INSAT)",
  "Cyber Horizon (FST)",
  "GOAT-1.0 (Supcom)",
  "Out Of Brief (Junior Entreprise / ENIT)",
];

export function Experience() {
  return (
    <>
      {/* Live Lab / Experience Highlight section */}
      <section id="experience" className="px-6 py-20 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">
                Experience Highlight
              </div>
              <h2 className="text-slate-100 text-4xl font-black">Cloud + Security Internship</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
                <span className="size-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-slate-300 uppercase">
                  Intern @ TAV Airports
                </span>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="glass-card-hover rounded-xl p-8 flex flex-col gap-4 group"
              >
                <span className="text-cyan-400">{item.icon}</span>
                <h4 className="text-slate-100 font-bold">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                Education
              </h3>
              <div className="space-y-0">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 pb-7 border-l border-cyan-500/20">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-900" />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-100">{edu.degree}</h4>
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                    </div>
                    <p className="text-sm text-slate-400">{edu.school}</p>
                    {edu.note && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded bg-cyan-500/10 text-cyan-300">
                        {edu.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Awards section integrated here for space */}
              <div className="mt-12">
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                  Awards & Programs
                </h3>
                <div className="flex flex-wrap gap-3">
                  {AWARDS.map((award) => (
                    <span
                      key={award}
                      className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs text-slate-300"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Certs & Reports */}
            <div className="space-y-16">
              {/* Certifications */}
              <div id="certifications">
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                  Certifications
                </h3>
                <div className="space-y-5">
                  {CERTS.map((cert) => (
                    <div key={cert.name} className="rounded-2xl glass-card p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="6" />
                            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-slate-100">{cert.name}</p>
                          <p className="text-xs text-cyan-400">{cert.org} · {cert.date}</p>
                          <p className="text-sm text-slate-400 mt-3 leading-relaxed">{cert.summary}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors">
                          View certificate →
                        </a>
                        {cert.verifyHref && (
                          <a href={cert.verifyHref} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors">
                            Verify →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
