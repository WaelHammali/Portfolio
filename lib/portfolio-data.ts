/**
 * Single source of truth for every piece of real portfolio content.
 * All values here are carried over from the pre-redesign portfolio
 * (components/sections/*) and Wael Hammali's CV — no placeholders.
 */

export const IDENTITY = {
  name: "Wael Hammali",
  firstName: "Wael",
  role: "Software Engineering Student at ENIT",
  focusLine: "AI • Cybersecurity • Cloud",
  heroDescription:
    "Building intelligent systems for automation, infrastructure, and offensive security.",
  location: "Tunis, Tunisia",
  coordinates: { lat: "36.8065° N", lon: "10.1815° E" },
  quote: "Technology is a tool. Impact is the goal.",
  cursiveTag: "More Than Code",
  phrases: {
    heroLine1: "CODE  BUILD  SECURE",
    heroLine2: "A SMARTER TOMORROW",
    footer: "IDEAS → SYSTEMS → REAL IMPACT",
    tunisiaToWorld: "TUNISIA → THE WORLD",
    alwaysBuilding: "ALWAYS A STUDENT // ALWAYS BUILDING",
  },
} as const;

export const SOCIALS = {
  github: "https://github.com/WaelHammali",
  linkedin: "https://www.linkedin.com/in/wael-hammali-993100360/",
  email: "wael.hammali@etudiant-enit.utm.tn",
  phone: "+216 94 916 106",
  phoneHref: "tel:+21694916106",
  resume: "/Resume.pdf",
} as const;

/** Path the hero portrait should live at long-term. Falls back to the
 *  existing profile image until a transparent cutout is supplied. */
export const PORTRAIT = {
  preferred: "/assets/wael-portrait.png",
  current: "/l.jpeg",
  alt: "Wael Hammali",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT_SUMMARY =
  "I'm a Software Engineering student at ENIT in Tunis, building at the intersection of artificial intelligence, cybersecurity, cloud infrastructure, and automation. My work turns real engineering problems into working systems — multi-agent AI pipelines for penetration testing, computer-vision models that read network diagrams, and infrastructure-as-code that deploys them. I care about systems that are clear, secure, and actually shipped.";

export type Expertise = {
  number: string;
  title: string;
  description: string;
  stack: string[];
};

export const EXPERTISE: Expertise[] = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "RAG systems, computer vision, and LangGraph multi-agent pipelines designed to automate complex security and engineering workflows.",
    stack: ["RAG", "LLMs", "LangGraph", "LangChain", "Computer Vision", "YOLOv8", "AI Agents"],
  },
  {
    number: "02",
    title: "Cybersecurity",
    description:
      "Offensive security work — reconnaissance, vulnerability analysis, and web exploitation — increasingly driven by AI-assisted tooling.",
    stack: ["Penetration Testing", "OSINT", "Network Security", "Web Exploitation", "Burp Suite", "Metasploit", "Wireshark"],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "Translating physical network architectures into secure, reproducible cloud environments described entirely as code.",
    stack: ["AWS", "Terraform", "Ansible", "Linux", "Infrastructure as Code"],
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Orchestrating AI agents, security scans, and network-to-cloud translation into pipelines that run end to end from a single command.",
    stack: ["AI Orchestration", "Security Automation", "Network-to-Cloud", "Workflow Automation"],
  },
  {
    number: "05",
    title: "Software Engineering",
    description:
      "A multidisciplinary base — full-stack apps, embedded systems, algorithms, and databases — that keeps the AI and security work grounded.",
    stack: ["Python", "Node.js", "Java", "C / C++", "SQL / NoSQL", "Git"],
  },
];

export const STACK_GROUPS = [
  { title: "Cloud & Infrastructure", items: ["AWS", "Terraform", "Ansible", "Linux"] },
  {
    title: "Security",
    items: ["Penetration Testing", "Network Security", "OSINT", "Bash Scripting", "Burp Suite", "Wireshark", "Metasploit", "Web Exploitation"],
  },
  {
    title: "AI & Automation",
    items: ["RAG", "Computer Vision", "YOLO", "LangGraph", "LangChain", "ChromaDB", "PyTorch", "Prompt Engineering", "LLM Fine-Tuning", "Federated Learning", "Infrastructure Automation"],
  },
  { title: "Development", items: ["Python", "Node.js", "SQL / NoSQL", "MongoDB", "Git", "Bash Scripting"] },
] as const;

export const MARQUEE_TECH = [
  "Python", "LangGraph", "LangChain", "RAG", "ChromaDB", "YOLOv8", "PyTorch", "OpenCV",
  "AWS", "Terraform", "Ansible", "Linux", "Burp Suite", "Wireshark", "Metasploit",
  "Nmap", "Node.js", "MySQL", "Git", "Groq", "Ollama",
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  github: string;
  live?: string;
  /** abstract visual identity for the generated card artwork */
  visual: "pipeline" | "agents" | "recon" | "vision" | "cloud" | "app" | "search" | "game";
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "darkintel",
    name: "DarkIntel",
    category: "AI × Cybersecurity",
    year: "2026",
    shortDesc:
      "Unified end-to-end AI pentest pipeline that chains IntelForge's recon straight into VoidHawk's multi-agent validation, producing CVSS-scored reports from a single command.",
    fullDesc:
      "The integration layer between IntelForge and VoidHawk, built during an engineering internship at Keystone Groupe (Jun–Jul 2026). It takes IntelForge's structured intelligence report and injects it into VoidHawk's ChromaDB-backed memory before a run starts, so VoidHawk's Planner agent skips re-discovery and goes straight to validation, exploit reasoning, and severity ranking. Breadth-first recon feeds depth-first multi-agent analysis, each framework evolving independently. Currently in active development.",
    tags: ["Python", "LangGraph", "LangChain", "Ollama", "ChromaDB", "Sentence-Transformers"],
    github: "https://github.com/WaelHammali/DarkIntel",
    visual: "pipeline",
  },
  {
    slug: "voidhawk",
    name: "VoidHawk",
    category: "Multi-Agent Security",
    year: "2026",
    shortDesc:
      "AI-powered penetration-testing framework: six specialised LangGraph agents automate the full lifecycle from recon to CVSS-scored, validated vulnerability reports.",
    fullDesc:
      "An extended fork of the open-source Watchtower framework, developed at Keystone Groupe (2026). It models a penetration test as a LangGraph state machine driven by six agents — Planner, Worker, Cleaner, Analyst, Logic, and a skeptical Validator that confirms, rejects, or retests each finding with a CVSS 3.1 score and remediation. RAG memory (ChromaDB HNSW + Sentence-Transformers) provides cross-session knowledge retention that feeds the Planner's next move, with finding de-duplication, severity ranking, and multi-format reporting in PDF, HTML, and Markdown.",
    tags: ["Python", "LangGraph", "RAG", "ChromaDB", "Groq", "OpenAI"],
    github: "https://github.com/WaelHammali/VoidHawk",
    visual: "agents",
  },
  {
    slug: "intelforge",
    name: "IntelForge",
    category: "AI Reconnaissance",
    year: "2026",
    shortDesc:
      "LangGraph-orchestrated reconnaissance pipeline that runs the scanners, condenses each tool's output with an LLM, then chains four AI analysts into a prioritised exploit-intelligence report.",
    fullDesc:
      "A reconnaissance and exploit-intelligence framework built as a compiled LangGraph state machine at Keystone Groupe (2026). It runs Nmap, FinalRecon, and web fuzzing in parallel, uses an LLM to de-noise raw CLI output, then walks a fixed Cleaner → Analyst → Researcher → Synthesis chain to produce an open-services table, an access map, ranked exploit vectors, and a final verdict on the likeliest foothold. Provider-agnostic LLMs (Groq, OpenAI, Google) and strict target validation before anything reaches a subprocess.",
    tags: ["Python", "LangGraph", "OSINT", "Nmap", "FinalRecon"],
    github: "https://github.com/WaelHammali/IntelForge",
    visual: "recon",
  },
  {
    slug: "net-to-cloud",
    name: "Advanced RAG for Net-to-Cloud Translation",
    category: "Computer Vision × Cloud",
    year: "2025",
    shortDesc:
      "AI system that translates network designs into secure cloud equivalents and generates Terraform + Ansible deployments.",
    fullDesc:
      "An end-to-end AI pipeline that uses YOLOv8 computer vision to detect and analyse network topology diagrams, then leverages RAG to automatically generate equivalent secure cloud infrastructure. Outputs production-ready Terraform and Ansible configurations for deployment on AWS. This was my Year-2 final project (PFA 2) at ENIT.",
    tags: ["Python", "YOLOv8", "RAG", "OpenCV", "Terraform", "Ansible"],
    github: "https://github.com/WaelHammali/Advanced-RAG-For-Net_To_Cloud-Translation",
    visual: "cloud",
  },
  {
    slug: "aerial-detection",
    name: "Aerial Object Detection with YOLOv8",
    category: "Computer Vision",
    year: "2025",
    shortDesc:
      "Dual-model YOLOv8 pipeline for detecting trees, cars, and buildings from aerial imagery, solving severe class imbalance.",
    fullDesc:
      "A computer-vision system that addresses severe class imbalance in aerial datasets by using two custom-trained YOLOv8 models. Model A handles tree detection (mAP50: 0.593), while Model B targets cars and buildings (mAP50: 0.735). Integrated with a Gradio web interface for interactive inference.",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "Gradio", "Python"],
    github: "https://github.com/WaelHammali/Aerial-object-detection",
    visual: "vision",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "net2terraform-web",
    name: "Net2Terraform WebInterface",
    category: "Cloud Automation",
    year: "2025",
    shortDesc:
      "Architecture translation system that maps real network components to cloud resources using RAG.",
    fullDesc:
      "A RAG-powered system that takes physical network architecture descriptions and automatically maps each component to its cloud equivalent. Supports multi-cloud environments and generates monitoring configurations alongside the infrastructure code.",
    tags: ["RAG", "Automation", "Cloud"],
    github: "https://github.com/WaelHammali/Net2Terraform-WebInterface",
    visual: "cloud",
  },
  {
    slug: "recruitment-platform",
    name: "Recruitment Management Platform",
    category: "Full Stack",
    year: "2025",
    shortDesc:
      "Full-stack platform with candidate profiles, CV upload, and HR workflows with matching scores.",
    fullDesc:
      "A complete recruitment platform built for HR teams, featuring candidate profile management, CV parsing and upload, automated scoring based on job requirements, and a dashboard for tracking application pipelines from application to hire.",
    tags: ["Node.js", "MySQL", "Tailwind"],
    github: "https://github.com/WaelHammali/Recruitment-Management-Platform",
    visual: "app",
  },
  {
    slug: "enit-event-platform",
    name: "ENIT Event Platform",
    category: "Full Stack",
    year: "2025",
    shortDesc:
      "Full-stack event management platform for ENIT students and staff to create and register for campus events.",
    fullDesc:
      "A campus-wide event management system for ENIT that lets student organisations and faculty create, publish, and manage events. Students can browse, register, and receive reminders. Features an admin dashboard, QR-code check-in, and real-time attendance tracking.",
    tags: ["Full Stack", "Node.js", "MySQL"],
    github: "https://github.com/WaelHammali/ENIT_EventPlatform",
    visual: "app",
  },
  {
    slug: "moteur-de-recherche",
    name: "Moteur De Recherche",
    category: "Information Retrieval",
    year: "2024",
    shortDesc:
      "Custom search engine with indexing, ranking algorithms, and a clean query interface for document retrieval.",
    fullDesc:
      "A search engine built from scratch implementing an inverted index, TF-IDF ranking, and Boolean query processing. Features a lightweight web interface for querying a document corpus, with results ranked by relevance score and highlighted keyword matches.",
    tags: ["Java"],
    github: "https://github.com/WaelHammali/MoteurDeRecherche",
    visual: "search",
  },
  {
    slug: "clinique-dentaire",
    name: "Gestion De Clinique Dentaire",
    category: "Desktop Application",
    year: "2024",
    shortDesc:
      "Dental clinic management system for handling patients, appointments, and medical records.",
    fullDesc:
      "A dental clinic management application that centralises patient records, appointment scheduling, treatment history, and billing. Built with a clean UI for receptionists and dentists, it includes automated appointment reminders, invoice generation, and patient search.",
    tags: ["Java", "MySQL", "Desktop"],
    github: "https://github.com/WaelHammali/Gestion_De_CliniqueDentaire",
    visual: "app",
  },
  {
    slug: "smurf-game",
    name: "Smurf Game",
    category: "Game Development",
    year: "2024",
    shortDesc:
      "2D C# .NET game where the player controls a Smurf character, jumps over obstacles, and collects tokens.",
    fullDesc:
      "A 2D side-scrolling game built with C# and .NET where the player guides a Smurf character through procedurally generated obstacle courses. Features a token-collection system, score tracking, increasing difficulty, and smooth animations using GDI+ rendering.",
    tags: ["C#", ".NET"],
    github: "https://github.com/WaelHammali/Smurf_Game",
    visual: "game",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];

export type ExperienceEntry = {
  org: string;
  title: string;
  kind: "Internship" | "Research";
  location: string;
  period: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    org: "Keystone Groupe",
    title: "AI-Powered Penetration Testing Command Framework (DarkIntel)",
    kind: "Internship",
    location: "Tunis, Tunisia",
    period: "Jun 2026 — Jul 2026",
    description:
      "Built two AI-powered security frameworks from scratch and connected them into one end-to-end penetration-testing pipeline. IntelForge handles passive OSINT and active network reconnaissance through a multi-stage LLM reasoning pipeline; its structured report is injected directly into VoidHawk's RAG memory (ChromaDB + Sentence-Transformers), letting the Planner agent skip discovery and act on pre-loaded context. VoidHawk then drives six specialised agents through a LangGraph state machine to deliver CVSS-scored vulnerability reports.",
    tech: ["Python", "LangGraph", "LangChain", "Ollama", "ChromaDB", "Sentence-Transformers", "SQLite"],
    links: [],
  },
  {
    org: "TAV Airports",
    title: "Network & Security Infrastructure Internship",
    kind: "Internship",
    location: "Enfidha, Tunisia",
    period: "Jul 2025 — Aug 2025",
    description:
      "Integrated the parking IT team at Enfidha-Hammamet International Airport and audited the network infrastructure behind the parking system — cabling, switches, firewalls, servers, and cameras. Tested the end-to-end parking workflow and, during a fibre-optic outage, contributed to the temporary coaxial workaround that kept the system running. Produced an infrastructure report recommending hardware upgrades, IoT sensors, AI-driven computer-vision solutions (license-plate recognition, anomaly detection), and strict data-access policies.",
    tech: ["Network Security", "Troubleshooting", "Infrastructure Audit", "Operational Continuity"],
    links: [{ label: "Internship Report", href: "/rapports/TAV.pdf" }],
  },
  {
    org: "TAIS NextGen",
    title: "Automated Camera Calibration for AR in Soccer Analytics",
    kind: "Research",
    location: "SympactAI — Second Edition",
    period: "Jun 2026 — Aug 2026",
    description:
      "Contributed to an AI research project on augmented-reality integration in soccer analytics. Led the jersey-number recognition module — computer vision and image processing to identify players from live and recorded footage — enhanced with Real-ESRGAN super-resolution for low-resolution and motion-blurred broadcast frames, using ViTPose for pose estimation and PARSeq for text recognition. Built real-world AI pipelines within a multidisciplinary team.",
    tech: ["PyTorch", "OpenCV", "Real-ESRGAN", "ViTPose", "PARSeq", "Computer Vision"],
    links: [{ label: "Certificate", href: "/certificates/sympactai-certificate.pdf" }],
  },
];

export type Report = {
  name: string;
  org: string;
  date: string;
  href: string;
  summary: string;
  skills: string[];
};

export const REPORTS: Report[] = [
  {
    name: "PFA 2 — From Network Diagrams to Deployable Cloud Infrastructure",
    org: "ENIT",
    date: "2025",
    href: "/rapports/pfa2.pdf",
    summary:
      "A multimodal AI-based approach: YOLOv8 analyses network diagrams and RAG generates equivalent secure cloud infrastructure as production-ready Terraform and Ansible.",
    skills: ["Cloud Security", "YOLOv8", "RAG", "Automation"],
  },
  {
    name: "PFA 1 — Les Techniques de Data Lake",
    org: "ENIT",
    date: "2024",
    href: "/rapports/Projet_PFA1.pdf",
    summary:
      "In-depth study and implementation of Data Lake architectures for storing and analytically processing massive, heterogeneous data — Hadoop, Spark, Databricks, Kafka, Tableau.",
    skills: ["Big Data", "Data Lake", "Data Architecture", "Analytics"],
  },
];

export type Certification = {
  name: string;
  org: string;
  date: string;
  href: string;
  verifyHref?: string;
  summary: string;
  skills: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified Associate Penetration Tester (CAPT)",
    org: "Hackviser",
    date: "December 2025",
    href: "/certificates/cert-capt.pdf",
    verifyHref: "https://lnkd.in/ddUVy22U",
    summary:
      "Hands-on entry program covering penetration-testing fundamentals through real-world labs and assessments.",
    skills: ["Ethical Hacking", "Web & Network Security", "Privilege Escalation", "OSINT", "Cryptography"],
  },
  {
    name: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "January 2026",
    href: "/certificates/cert-ccna-intro-to-networks.pdf",
    summary:
      "Foundational networking certification focused on IP addressing, switching, routing, and troubleshooting best practices.",
    skills: ["Network Fundamentals", "IPv4/IPv6 & Subnetting", "Ethernet Switching", "Routing Concepts"],
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco Networking Academy",
    date: "2026",
    href: "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wael-hammali-etudiant-enit-utm-tn_721fe3be-16df-401f-ac9a-feffe476c040.pdf",
    summary:
      "Intermediate certification covering the architecture, components, and operations of routers and switches, including WLANs and security concepts.",
    skills: ["VLANs & Inter-VLAN Routing", "STP & EtherChannel", "WLAN Security", "Switch Security"],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  note: string | null;
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master of Research — Communication Systems (SYSCOM)",
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: "2026 → Present",
    note: "Research Master",
  },
  {
    degree: "Software Engineering",
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: "2024 → 2027",
    note: null,
  },
  {
    degree: "Preparatory Cycle — Physics & Technology",
    school: "IPEIM — Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    period: "2021 → 2023",
    note: "High Honors (Rank 78)",
  },
];

export const CLUBS = [
  {
    role: "Active Member",
    org: "Securinets ENIT — Cybersecurity Club",
    period: "2024 → Present",
    detail: "Cybersecurity activities, technical workshops, CTF competitions, and security events.",
  },
  {
    role: "Golden Member & Event Organizer",
    org: "G2FOSS ENIT — Software Club",
    period: "2024 → Present",
    detail:
      "Organised the League of Coders, a major problem-solving and competitive-programming event in Tunisia — planning, coordination, and participant engagement.",
  },
  {
    role: "Organizing Member",
    org: "FabLab ENIT",
    period: "2024 → Present",
    detail: "Helped organise Aero-Fab, a robotics competition for junior line-follower and all-terrain robots.",
  },
  {
    role: "Participant",
    org: "Injaz El Arab Competition — ENIT",
    period: "2025",
    detail: "Sustainable project developing thermal-insulation panels from natural materials.",
  },
] as const;

export const AWARDS = [
  "Cybercriminalité & Gouvernance (ESPRIT)",
  "Cyber Camp 6.0 (INSAT)",
  "Cyber Horizon (FST)",
  "GOAT-1.0 (Supcom)",
  "Out Of Brief (Junior Entreprise / ENIT)",
] as const;

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "B2" },
] as const;

export const HERO_STATS = [
  { value: String(ALL_PROJECTS.length), label: "Projects Shipped" },
  { value: "ENIT", label: "Software Engineering" },
  { value: "∞", label: "Curiosity" },
];
