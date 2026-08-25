

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
      {/* Grand Experience Section */}
      <section id="experience" className="px-6 py-20 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Section Header */}
          <div className="mb-20">
            <div className="text-[#94b8d4] font-mono text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#94b8d4]"></span>
              Career Journey
            </div>
            <h2 className="text-slate-100 text-4xl md:text-5xl font-black">Experience</h2>
          </div>

          <div className="space-y-24">
            
            {/* Internships Subsection */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#7b8fa8]/20">
                <div className="w-12 h-12 rounded-xl bg-[#7b8fa8]/10 border border-[#7b8fa8]/20 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#94b8d4]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Internships</h3>
              </div>

              {/* TAV Airports Internship */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                  <div>
                    <h4 className="text-slate-200 text-2xl font-black mb-2">TAV Airports</h4>
                    <p className="text-slate-400 text-sm">During my internship at TAV IT at Enfidha-Hammamet International Airport, I integrated the parking IT team and worked on the network infrastructure behind the parking system. I audited cabling and connectivity, tested the end-to-end parking workflow, reviewed cameras, switches, firewalls, and servers, and helped document the system for operational follow-up. When a fiber-optic cut disrupted service, I also contributed to the temporary coaxial workaround that kept the parking system running until the repair was completed. The internship strengthened my skills in networking, troubleshooting, security analysis, and operational continuity.</p>
                  </div>
                </div>


                {/* Documents / Attachments */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/rapports/TAV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#7b8fa8]/10 border border-[#7b8fa8]/20 text-[#94b8d4] hover:bg-[#7b8fa8]/20 hover:border-[#7b8fa8]/40 transition-all text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Rapport de Stage
                  </a>
                  <a href="#reports" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:text-slate-100 transition-all text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                    Voir les Rapports
                  </a>
                </div>
              </div>

              {/* Keystone Groupe Internship */}
              <div>
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                  <div>
                    <h4 className="text-slate-200 text-2xl font-black mb-2">Keystone Groupe</h4>
                    <p className="text-slate-400 text-sm">AI powered penetration command.</p>
                  </div>
                </div>

                {/* Documents / Attachments */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#7b8fa8]/10 border border-[#7b8fa8]/20 text-[#94b8d4] hover:bg-[#7b8fa8]/20 hover:border-[#7b8fa8]/40 transition-all text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Attestation de Stage
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:text-slate-100 transition-all text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                    Rapport de Stage
                  </a>
                </div>
              </div>
            </div>

            {/* Research Subsection */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#7b8fa8]/20">
                <div className="w-12 h-12 rounded-xl bg-[#7b8fa8]/10 border border-[#7b8fa8]/25 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#94b8d4]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <circle cx="10" cy="13" r="2"/>
                    <line x1="11.41" y1="14.41" x2="15" y2="18"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Research</h3>
              </div>

              {/* Research Placeholder */}
              <div className="glass-card rounded-xl p-12 flex flex-col items-center justify-center text-center border-dashed border-[#7b8fa8]/20 hover:border-[#7b8fa8]/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#7b8fa8]/5 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#94b8d4]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <h4 className="text-slate-200 text-xl font-bold mb-3">Ready for Research Details</h4>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  This section is set up and ready to showcase your academic and independent research projects. Let me know what you'd like to add!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xs font-mono text-[#94b8d4] uppercase tracking-widest mb-6">
                Education
              </h3>
              <div className="space-y-0">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 pb-7 border-l border-[#7b8fa8]/20">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#94b8d4] ring-4 ring-[#0d0f14]" />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-100">{edu.degree}</h4>
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                    </div>
                    <p className="text-sm text-slate-400">{edu.school}</p>
                    {edu.note && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded bg-[#7b8fa8]/10 text-[#94b8d4]">
                        {edu.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Awards section integrated here for space */}
              <div className="mt-12">
                <h3 className="text-xs font-mono text-[#94b8d4] uppercase tracking-widest mb-6">
                  Awards & Programs
                </h3>
                <div className="flex flex-wrap gap-3">
                  {AWARDS.map((award) => (
                    <span
                      key={award}
                      className="px-3 py-1.5 rounded-full border border-[#7b8fa8]/20 bg-[#7b8fa8]/5 text-xs text-slate-300"
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
                <h3 className="text-xs font-mono text-[#94b8d4] uppercase tracking-widest mb-6">
                  Certifications
                </h3>
                <div className="space-y-5">
                  {CERTS.map((cert) => (
                    <div key={cert.name} className="rounded-2xl glass-card p-5">
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
          </div>
        </div>
      </section>
    </>
  );
}
