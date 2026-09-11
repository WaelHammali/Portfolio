"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SOCIALS, IDENTITY } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV_LINKS[0].href);

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

  // lightweight scroll-spy so the nav pill shows which section is in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el,
    );
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto grid max-w-[1800px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled || open ? "border-b border-paper/10 bg-ink/80 py-3 backdrop-blur-xl" : "border-b border-transparent py-5"
        }`}
      >
        {/* Logo + tagline */}
        <Link
          href="/#home"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper font-display text-sm font-black text-ink transition-transform group-hover:scale-105">
            W
          </span>
          <span className="hidden shrink-0 text-sm font-semibold tracking-tight text-paper sm:inline">
            Wael <span className="text-paper/50">Hammali</span>
          </span>
          <span className="ml-1 hidden h-8 w-px shrink-0 bg-paper/15 2xl:block" />
          <span className="hidden shrink-0 whitespace-nowrap font-mono text-[9px] uppercase leading-tight tracking-[0.2em] text-paper/40 2xl:block">
            {IDENTITY.phrases.heroLine1}
            <br />
            {IDENTITY.phrases.heroLine2}
          </span>
        </Link>

        {/* Desktop centre pill */}
        <nav className="glass-nav mx-auto hidden max-w-full items-center gap-0.5 overflow-x-auto rounded-full px-1.5 py-1.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="relative shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-medium text-paper/70 transition-colors hover:bg-paper/5 hover:text-paper 2xl:px-3.5 2xl:text-sm"
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center justify-self-end gap-2">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent/60 hover:text-paper sm:grid"
          >
            <Github size={16} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent/60 hover:text-paper sm:grid"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-accent/60 hover:text-paper sm:grid"
          >
            <Mail size={16} />
          </a>
          <Link
            href="/#contact"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5 md:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-paper/15 text-paper xl:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-ink/95 px-6 pb-10 pt-24 backdrop-blur-md xl:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 py-5 text-3xl font-semibold tracking-tight text-paper/80 transition-colors hover:text-paper"
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
