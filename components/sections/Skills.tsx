const STACK = [
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Ansible", "Linux"],
  },
  {
    title: "Security",
    items: ["Penetration Testing", "Network Security", "OSINT", "Bash Scripting", "Burp Suite", "Wireshark", "Metasploit", "Web exploitation"],
  },
  {
    title: "AI & Automation",
    items: ["RAG", "Computer Vision", "YOLO", "Infrastructure Automation", "FineTunning"],
  },
  {
    title: "Development",
    items: ["Python", "Node.js", "SQL / NoSQL", "Git"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
            Technical Stack
          </h2>
          <p className="text-slate-400 mt-2 font-mono text-sm">
            Structured by domain for clarity
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK.map((group) => (
            <div key={group.title} className="rounded-2xl glass-card p-6">
              <div className="text-sm font-semibold text-[#94b8d4] mb-4">{group.title}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-[#7b8fa8]/25 bg-[#7b8fa8]/8 text-sm text-[#94b8d4]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
