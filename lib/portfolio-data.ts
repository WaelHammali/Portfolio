/** Portfolio content based on the supplied CV and existing project records. */

export const IDENTITY = {
  name: "Wael Hammali",
  firstName: "Wael",
  role: "Software Engineering Student at ENIT",
  focusLine: "AI • Cybersecurity • Computer Vision",
  heroDescription:
    "Building computer vision and multimodal AI systems for cloud automation and LLM-powered penetration testing tools.",
  location: "Tunis, Tunisia",
  coordinates: { lat: "36.8065° N", lon: "10.1815° E" },
  quote: "Technology is a tool. Impact is the goal.",
  cursiveTag: "More Than Code",
  phrases: {
    heroLine1: "CODE  BUILD  SECURE",
    heroLine2: "A SMARTER TOMORROW",
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

/** Hero portrait: cropped from the reference composite the user supplied,
 *  with the source image's baked-in heading text painted out (see the
 *  crop/cleanup step in git history). Swap this file for a true clean
 *  cutout whenever one is available — the rest of the Hero treats it as
 *  a plain photo (oval mask, backlight, rim light are all applied in CSS). */
export const PORTRAIT = {
  current: "/assets/wael-portrait.png",
  alt: "Wael Hammali",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#reports", label: "Reports" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT_SUMMARY =
  "I am a third-year software engineering student at the National Engineering School of Tunis (ENIT), specializing in artificial intelligence, computer vision, and cybersecurity. Alongside my engineering degree, I am pursuing a research master's in Communication Systems (SYSCOM). My work combines applied research and software development, from AI-assisted security assessment to computer vision and cloud infrastructure automation. I am seeking research opportunities to deepen this expertise and contribute to intelligent, reliable systems.";

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
      "An AI-assisted security assessment pipeline connecting reconnaissance, vulnerability validation, and CVSS-scored reporting.",
    fullDesc:
      "Developed at Keystone Groupe, DarkIntel connects IntelForge's reconnaissance reports to VoidHawk's persistent RAG memory. This lets six specialized agents analyze existing scan context and produce CVSS-scored vulnerability reports through a unified workflow.",
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
      "Six AI agents coordinate vulnerability analysis, validation, and security reporting with persistent RAG memory.",
    fullDesc:
      "Extended the open-source Watchtower framework with LLM-based vulnerability validation, ChromaDB and Sentence-Transformers memory, and severity ranking. Six specialized agents run through a LangGraph state machine and produce CVSS-scored reports in PDF, HTML, and Markdown.",
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
      "Automates passive OSINT and active network reconnaissance to produce structured security intelligence reports.",
    fullDesc:
      "Built a reconnaissance framework combining FinalRecon, Nmap, and directory and virtual-host fuzzing. A four-stage AI pipeline uses Groq LLMs and DeepSeek R1 reasoning to analyze scan results and produce structured exploit intelligence reports.",
    tags: ["Python", "LangGraph", "OSINT", "Nmap", "FinalRecon"],
    github: "https://github.com/WaelHammali/IntelForge",
    visual: "recon",
  },
  {
    slug: "net-to-cloud",
    name: "Network-to-Cloud Translation",
    category: "Computer Vision × Cloud",
    year: "2025",
    shortDesc:
      "Converts network diagrams and text descriptions into cloud infrastructure configurations using computer vision and RAG.",
    fullDesc:
      "Built a full-stack migration tool for my second-year project at ENIT. Fine-tuned YOLOv8 detects network components, while retrieval-augmented generation maps them to cloud resources and generates Terraform and Ansible configurations through a graphical interface.",
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
      "Detects trees, cars, and buildings in aerial imagery using two specialized YOLOv8 models.",
    fullDesc:
      "Designed a dual-model pipeline to address severe class imbalance in aerial imagery. One fine-tuned YOLOv8 model detects trees; the other detects cars and buildings. A Gradio interface supports interactive inference, with OpenCV and Roboflow used in the workflow.",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "Gradio", "Python"],
    github: "https://github.com/WaelHammali/Aerial-object-detection",
    visual: "vision",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "net2terraform-web",
    name: "Net2Terraform Web Interface",
    category: "Cloud Automation",
    year: "2025",
    shortDesc:
      "A web interface for translating network architecture descriptions into cloud resource configurations.",
    fullDesc:
      "Developed a web interface for a RAG-based architecture translation system. The application maps physical network components to cloud equivalents and supports infrastructure configuration workflows.",
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
      "A full-stack application for candidate profiles, CV uploads, and recruitment workflows.",
    fullDesc:
      "Developed a recruitment management platform with Node.js, MySQL, and Tailwind CSS. The application brings candidate profiles, CV uploads, and matching scores into a single workflow for recruitment teams.",
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
      "A campus platform for publishing events and managing student and staff registrations.",
    fullDesc:
      "Built a full-stack event management platform for ENIT. The application supports event creation, browsing, and registration, connecting campus organizers with students and staff.",
    tags: ["Full Stack", "Node.js", "MySQL"],
    github: "https://github.com/WaelHammali/ENIT_EventPlatform",
    visual: "app",
  },
  {
    slug: "moteur-de-recherche",
    name: "Document Search Engine",
    category: "Information Retrieval",
    year: "2024",
    shortDesc:
      "A document search engine with indexing, relevance ranking, and a query interface.",
    fullDesc:
      "Developed a Java search engine to index documents and return results ranked by relevance. The project explores information retrieval, ranking algorithms, and query processing.",
    tags: ["Java"],
    github: "https://github.com/WaelHammali/MoteurDeRecherche",
    visual: "search",
  },
  {
    slug: "clinique-dentaire",
    name: "Dental Clinic Management",
    category: "Desktop Application",
    year: "2024",
    shortDesc:
      "A desktop application for managing dental patients, appointments, and medical records.",
    fullDesc:
      "Built a Java and MySQL application to centralize dental clinic records. The system supports patient management, appointment scheduling, and treatment history through a desktop interface.",
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
      "A 2D platform game with obstacle navigation and token collection, developed in C# and .NET.",
    fullDesc:
      "Developed a 2D game in which players guide a Smurf character through obstacles and collect tokens. The project applies C# and .NET to game logic, player controls, and animation.",
    tags: ["C#", ".NET"],
    github: "https://github.com/WaelHammali/Smurf_Game",
    visual: "game",
  },
  {
    slug: "school-management",
    name: "School Administration System",
    category: "Desktop Application",
    year: "",
    shortDesc: "A C application for managing student records and school administration.",
    fullDesc: "Developed a school administration application in C to organize student records, enrollment, and academic operations. The project applies structured programming to a practical data management workflow.",
    tags: ["C", "Desktop"],
    github: "https://github.com/WaelHammali/Gestion_De_Scolarit-",
    visual: "app",
  },
  {
    slug: "restaurant-app",
    name: "Restaurant Ordering Interface",
    category: "Mobile Development",
    year: "",
    shortDesc: "A Flutter interface for browsing a restaurant menu and placing orders.",
    fullDesc: "Implemented a restaurant ordering interface in Flutter and Dart, covering menu browsing and order placement. The project focuses on reusable widgets and consistent mobile interaction design.",
    tags: ["Flutter", "Dart", "Mobile"],
    github: "https://github.com/WaelHammali/Restauration",
    visual: "app",
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
    title: "AI & Cybersecurity Engineering Intern",
    kind: "Internship",
    location: "Tunis, Tunisia",
    period: "Jun 2026 — Jul 2026",
    description:
      "Developed DarkIntel, a unified AI-assisted penetration testing pipeline, by connecting IntelForge's reconnaissance output to VoidHawk's RAG memory. Built the reconnaissance workflow and extended Watchtower through VoidHawk, coordinating six LangGraph agents for vulnerability analysis, validation, and CVSS-scored reporting.",
    tech: ["Python", "LangGraph", "LangChain", "Ollama", "ChromaDB", "Sentence-Transformers", "SQLite"],
    links: [],
  },
  {
    org: "TAV Airports",
    title: "Network & Security Infrastructure Intern",
    kind: "Internship",
    location: "Enfidha, Tunisia",
    period: "Jul 2025 — Aug 2025",
    description:
      "Audited parking cameras and network infrastructure at Enfidha-Hammamet International Airport, including cabling, switches, firewalls, and servers. Contributed to a workaround that maintained operations during a fiber-optic outage. Delivered a report recommending infrastructure upgrades, IoT sensors, computer vision applications, and stricter data access policies.",
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
      "Led development of a jersey number recognition module within a multidisciplinary research project on augmented reality in soccer analytics. Applied computer vision and Real-ESRGAN super-resolution to low-resolution and motion-blurred broadcast footage, using a workflow that included ViTPose and PARSeq.",
    tech: ["PyTorch", "OpenCV", "Real-ESRGAN", "ViTPose", "PARSeq", "Computer Vision"],
    links: [{ label: "Certificate", href: "/certificates/sympactai-certificate.pdf" }],
  },
];

export const RESEARCH_MASTER = {
  title: "Master of Research in Communication Systems (SYSCOM)",
  school: "National Engineering School of Tunis (ENIT)",
  period: "2026 — Present",
  description:
    "Pursuing a research-oriented master's program in advanced communication and intelligent systems alongside my software engineering degree. The program covers telecommunications, wireless communications, computer networks, signal processing, RF and antenna systems, and IoT, with applications of artificial intelligence and machine learning to communication technologies.",
  methodology:
    "Training emphasizes scientific research, system modeling, simulation, and the development of intelligent communication solutions.",
  focus: ["Artificial Intelligence", "Machine Learning", "Telecommunications", "Computer Networks", "Signal Processing", "IoT", "Wireless Communications", "RF & Antenna Systems"],
} as const;

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
      "Second-year project documenting a multimodal pipeline that detects network components with YOLOv8 and uses retrieval-augmented generation to produce Terraform and Ansible cloud configurations.",
    skills: ["Cloud Security", "YOLOv8", "RAG", "Automation"],
  },
  {
    name: "PFA 1 — Data Analysis Techniques in Data Lakes",
    org: "ENIT",
    date: "2024",
    href: "/rapports/Projet_PFA1.pdf",
    summary:
      "First-year study of data lake architectures, preprocessing, modeling, visualization, and governance for structured and unstructured data. Examines Hadoop, Spark, Databricks, Kafka, and Tableau for scalable analysis.",
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
    degree: RESEARCH_MASTER.title,
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: RESEARCH_MASTER.period,
    note: "In progress",
  },
  {
    degree: "Engineering Degree in Software Engineering",
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: "September 2024 — Present",
    note: null,
  },
  {
    degree: "Preparatory Cycle — Physics & Technology",
    school: "IPEIM — Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    period: "September 2021 — July 2023",
    note: "High Honors (Rank 78)",
  },
];

type ClubEntry = {
  role: string;
  org: string;
  period: string;
  detail: string;
  certificate?: { href: string; title: string };
};

export const CLUBS: readonly ClubEntry[] = [
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
      "Contributed to planning, coordination, and participant engagement for League of Coders, a competitive programming event. Subsequently recognized as a Golden Member of the club.",
    certificate: {
      href: "/certificates/g2foss-golden-member.pdf",
      title: "G2FOSS Golden Member Certificate",
    },
  },
  {
    role: "Organizing Member",
    org: "FabLab ENIT",
    period: "2024 → Present",
    detail: "Helped organise Aero-Fab, a robotics competition for junior line-follower and all-terrain robots.",
    certificate: {
      href: "/certificates/aerofab-appreciation.pdf",
      title: "Aero-Fab Certificate of Appreciation",
    },
  },
  {
    role: "Participant",
    org: "Injaz El Arab Competition — ENIT",
    period: "2025",
    detail: "Contributed to a sustainable project developing thermal insulation panels from natural materials in the Injaz El Arab competition.",
    certificate: {
      href: "/certificates/injaz-participation.pdf",
      title: "INJAZ Tunisia Company Program Participation Certificate",
    },
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
  { value: String(ALL_PROJECTS.length), label: "Portfolio Projects" },
  { value: "ENIT", label: "Software Engineering" },
  { value: "SYSCOM", label: "Research Master’s" },
];
