"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SOCIALS, IDENTITY } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-paper/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link
          href="/#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-paper/25 font-mono text-xs text-paper transition-colors group-hover:border-accent/70">
            WH
          </span>
          <span className="hidden sm:inline">
            Wael <span className="text-paper/50">Hammali</span>
          </span>
        </Link>

        {/* Desktop centre pill */}
        <nav className="glass-nav absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-paper/70 transition-colors hover:bg-paper/5 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent/60 hover:text-paper sm:grid"
          >
            <Github size={16} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent/60 hover:text-paper sm:grid"
          >
            <Linkedin size={16} />
          </a>
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5 md:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-ink/95 px-6 pb-10 pt-24 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 py-5 text-3xl font-semibold uppercase tracking-tight text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-3 pt-10">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-sm text-paper/80"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-sm text-paper/80"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <p className="pt-6 font-mono text-xs uppercase tracking-widest text-paper/40">
            {IDENTITY.location}
          </p>
        </div>
      )}
    </header>
  );
}
