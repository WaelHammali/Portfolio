"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ZoomableImage } from "@/components/ui/ZoomableImage";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Stack" },
  { href: "/#projects", label: "Projects" },
  { href: "/#reports", label: "Reports" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-700/20 px-6 py-4 lg:px-20 bg-[#0d0f14]/90 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-slate-600/40 hover:ring-slate-500 transition-all duration-300">
            <ZoomableImage
              src="/l.jpeg"
              alt="Wael Hammali"
              className="w-full h-full"
            />
          </div>
          <Link href="/" className="group">
            <span className="text-white text-xl font-semibold leading-tight tracking-tight group-hover:text-[#94b8d4] transition-colors">
              Wael <span className="text-[#94b8d4]">Hammali</span>
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-400 hover:text-[#94b8d4] transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#94b8d4]/10 border border-[#94b8d4]/25 text-[#94b8d4] text-sm font-semibold transition-all hover:bg-[#94b8d4]/20 hover:border-[#94b8d4]/50"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
