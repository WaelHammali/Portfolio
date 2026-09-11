"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { Magnet } from "@/components/motion/Magnet";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroGlobe } from "@/components/sections/HeroGlobe";
import { IDENTITY, PORTRAIT, HERO_STATS } from "@/lib/portfolio-data";

const ORBIT_WORDS = ["LEARN", "BUILD", "BREAK", "IMPROVE", "REPEAT"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  function handlePointer(e: React.PointerEvent) {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: +(py * -3).toFixed(2), y: +(px * 4).toFixed(2) });
  }

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={handlePointer}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-5 pb-8 pt-28 sm:px-8 lg:px-12"
    >
      {/* LAYER 1 — atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute left-1/2 top-[42%] h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,183,255,0.14),transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 h-[30vh] w-[80vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(105,183,255,0.10),transparent_70%)]" />
      </div>

      {/* top-right decorative — dotted globe with a Tunis marker */}
      <FadeIn
        onView={false}
        x={20}
        delay={0.2}
        className="pointer-events-none absolute right-0 top-16 hidden lg:block"
      >
        <HeroGlobe />
      </FadeIn>

      {/* right-side: cursive tag + orbit words */}
      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
        <FadeIn onView={false} delay={0.35} x={20} className="font-caveat text-3xl text-paper/85">
          {IDENTITY.cursiveTag}
        </FadeIn>
        <div className="h-14 w-px bg-gradient-to-b from-transparent to-paper/20" />
        {ORBIT_WORDS.map((w, i) => (
          <FadeIn
            key={w}
            onView={false}
            x={20}
            delay={0.5 + i * 0.08}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/30"
          >
            {w}
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </FadeIn>
        ))}
        <div className="h-14 w-px bg-gradient-to-b from-paper/20 to-transparent" />

        {/* quote card */}
        <FadeIn onView={false} delay={0.9} x={20} className="mt-6 max-w-[220px]">
          <div className="flex items-start gap-2 rounded-xl border border-paper/15 bg-paper/[0.03] px-4 py-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <p className="font-serif text-[13px] italic leading-snug text-paper/60">
              &ldquo;Technology is a tool.
              <br />
              Impact is the goal.&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CENTRE STAGE — "Hi, I'm [portrait] Wael" on one line at lg+, stacked below */}
      <h1 className="sr-only">Hi, I&apos;m Wael — Software Engineering Student at ENIT</h1>
      <div
        aria-hidden
        className="relative mx-auto flex w-full max-w-[1300px] flex-1 flex-col items-center justify-center lg:flex-row lg:gap-1 xl:gap-3"
      >
        {/* LAYER 2a — "Hi, I'm" */}
        <FadeIn onView={false} delay={0.15} y={40} className="z-0 order-1 shrink-0">
          <motion.div
            style={{ y: headingY }}
            className="pointer-events-none relative select-none text-center font-black leading-[0.82] tracking-tight lg:text-right"
          >
            <span
              aria-hidden
              className="heading-glint left-[18%] top-[6%] animate-sparkle hidden sm:block"
            />
            <span
              data-text="Hi, I'm"
              className="hero-heading block text-[clamp(2.8rem,10vw,7rem)]"
            >
              Hi, I&apos;m
            </span>
          </motion.div>
        </FadeIn>

        {/* LAYER 3 — portrait, between the two halves of the heading */}
        <motion.div
          style={{ y: portraitY, opacity: fade }}
          className="relative z-20 order-2 mx-auto -my-2 w-fit shrink-0 lg:my-0"
        >
          {/* thin orbit arcs flanking the portrait */}
          <svg
            aria-hidden
            viewBox="0 0 620 280"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[280px] w-[620px] -translate-x-1/2 -translate-y-1/2 overflow-visible sm:block"
          >
            <ellipse cx="310" cy="140" rx="305" ry="105" fill="none" stroke="rgba(215,226,234,0.14)" strokeWidth="0.75" />
            <circle cx="18" cy="100" r="3" fill="#69b7ff" opacity="0.8" />
            <circle cx="600" cy="180" r="2.5" fill="#d7e2ea" opacity="0.6" />
          </svg>

          <Magnet padding={130} strength={3.4}>
            <motion.div
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformPerspective: 900 }}
              className="relative w-[clamp(250px,32vw,440px)]"
            >
              {/* backlight glow, shows through the cutout's soft edges */}
              <div
                aria-hidden
                className="absolute inset-x-[-15%] inset-y-[-10%] -z-10 rounded-[45%] bg-[radial-gradient(ellipse,rgba(105,183,255,0.24),transparent_68%)] blur-2xl"
              />
              {/* true alpha cutout — no crop box, shape-aware shadow + rim glow via drop-shadow */}
              <Image
                src={PORTRAIT.current}
                alt={PORTRAIT.alt}
                width={872}
                height={749}
                priority
                sizes="(max-width:640px) 65vw, 440px"
                className="relative h-auto w-full select-none drop-shadow-[0_35px_50px_rgba(0,0,0,0.65)] [filter:drop-shadow(0_35px_50px_rgba(0,0,0,0.65))_drop-shadow(-10px_0_28px_rgba(105,183,255,0.28))_drop-shadow(10px_0_28px_rgba(140,207,255,0.16))]"
              />

              {/* metallic ring platform, with "Ideas -> Systems -> Real Impact" curved along the front edge —
                  absolutely positioned so its wider-than-portrait size never affects the layout above */}
              <div className="absolute left-1/2 top-full h-20 w-[155%] -translate-x-1/2 -translate-y-3 sm:h-24 sm:-translate-y-4">
                <svg viewBox="0 0 600 110" className="h-full w-full overflow-visible" aria-hidden>
                  <defs>
                    <path id="ringTextPath" d="M 42 26 A 258 34 0 0 0 558 26" fill="none" />
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(215,226,234,0.04)" />
                      <stop offset="50%" stopColor="rgba(105,183,255,0.75)" />
                      <stop offset="100%" stopColor="rgba(215,226,234,0.04)" />
                    </linearGradient>
                    <radialGradient id="ringGlow" cx="50%" cy="20%" r="70%">
                      <stop offset="0%" stopColor="rgba(105,183,255,0.18)" />
                      <stop offset="100%" stopColor="rgba(105,183,255,0)" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="300" cy="22" rx="258" ry="34" fill="url(#ringGlow)" />
                  <ellipse cx="300" cy="20" rx="258" ry="34" fill="none" stroke="url(#ringGrad)" strokeWidth="2" />
                  <ellipse cx="300" cy="16" rx="258" ry="34" fill="none" stroke="rgba(215,226,234,0.15)" strokeWidth="0.75" />
                  <text fill="rgba(224,232,238,0.85)" fontSize="16" letterSpacing="2.5" className="font-mono font-semibold uppercase">
                    <textPath href="#ringTextPath" startOffset="50%" textAnchor="middle">
                      {IDENTITY.phrases.footer}
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </Magnet>
          {/* spacer so the absolutely-positioned ring still reserves flow height below the portrait */}
          <div className="h-14 sm:h-16" aria-hidden />
        </motion.div>

        {/* LAYER 2b — "Wael" */}
        <FadeIn onView={false} delay={0.25} y={40} className="z-0 order-3 shrink-0">
          <motion.div
            style={{ y: headingY }}
            className="pointer-events-none relative select-none text-center font-black leading-[0.82] tracking-tight lg:text-left"
          >
            <span
              aria-hidden
              className="heading-glint right-[20%] top-[30%] hidden animate-sparkle sm:block"
              style={{ animationDelay: "1.1s" }}
            />
            <span
              data-text="Wael"
              className="hero-heading block text-[clamp(3.2rem,12.5vw,8rem)]"
            >
              Wael
            </span>
          </motion.div>
        </FadeIn>
      </div>

      {/* LAYER 4 — info + CTAs */}
      <div className="relative z-20 mx-auto grid w-full max-w-6xl gap-8 pt-4 sm:grid-cols-2 sm:items-end">
        <FadeIn onView={false} delay={0.5} className="space-y-3">
          <p className="text-lg font-medium text-paper sm:text-xl">
            Software Engineering Student
            <br className="hidden sm:block" /> at ENIT
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-soft">
            {IDENTITY.focusLine}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-paper/55">
            {IDENTITY.heroDescription}
          </p>
        </FadeIn>

        <FadeIn onView={false} delay={0.6} className="flex flex-wrap gap-3 sm:justify-end">
          <Link href="/#projects" className="btn-primary">
            View My Work
            <ArrowUpRight size={15} className="btn-arrow" />
          </Link>
          <Link href="/#about" className="btn-ghost">
            About Me
          </Link>
          <a href="/Resume.pdf" download className="btn-ghost">
            <FileDown size={15} />
            Resume
          </a>
        </FadeIn>
      </div>

      {/* LAYER 5 — compact stats row */}
      <FadeIn
        onView={false}
        delay={0.75}
        className="relative z-20 mx-auto mt-8 flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 divide-x divide-paper/10"
      >
        {HERO_STATS.map((s, i) => (
          <div key={s.label} className={i === 0 ? "" : "pl-6"}>
            <div className="text-xl font-bold text-paper">{s.value}</div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-paper/40">
              {s.label}
            </div>
          </div>
        ))}
      </FadeIn>

      {/* corner labels */}
      <div className="pointer-events-none relative z-20 mx-auto mt-8 hidden w-full max-w-6xl items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-paper/30 lg:flex">
        <span>{IDENTITY.phrases.tunisiaToWorld}</span>
        <span>{IDENTITY.phrases.alwaysBuilding}</span>
      </div>
    </section>
  );
}
