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
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Magnet } from "@/components/motion/Magnet";
import { FadeIn } from "@/components/motion/FadeIn";
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
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12"
    >
      {/* LAYER 1 — atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute left-1/2 top-[42%] h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,183,255,0.14),transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 h-[30vh] w-[80vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(105,183,255,0.10),transparent_70%)]" />
      </div>

      {/* top-left decorative */}
      <FadeIn
        onView={false}
        y={-20}
        delay={0.1}
        className="pointer-events-none absolute left-5 top-24 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-paper/35 sm:block lg:left-12"
      >
        &lt; North Africa &gt;
        <div className="mt-3 space-y-1 text-paper/25">
          <div>Ideas</div>
          <div>Code</div>
          <div>Impact</div>
          <div>//</div>
        </div>
      </FadeIn>

      {/* right-side orbit words */}
      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-paper/20" />
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
        <div className="h-16 w-px bg-gradient-to-b from-paper/20 to-transparent" />
      </div>

      {/* CENTRE STAGE */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
        {/* LAYER 2 — massive heading */}
        <FadeIn onView={false} delay={0.15} y={40} className="z-0 w-full">
          <motion.h1
            style={{ y: headingY }}
            className="pointer-events-none select-none text-center font-black uppercase leading-[0.82] tracking-tight"
          >
            <span
              data-text="Hi, I'm"
              className="hero-heading block text-[clamp(2.8rem,12vw,9rem)]"
            >
              Hi, I&apos;m
            </span>
            <span
              data-text="Wael"
              className="hero-heading block text-[clamp(3.6rem,16vw,13rem)]"
            >
              Wael
            </span>
          </motion.h1>
        </FadeIn>

        {/* LAYER 3 — portrait, overlapping the letters */}
        <motion.div
          style={{ y: portraitY, opacity: fade }}
          className="relative z-20 -mt-[2vw] mb-6 sm:-mt-[4vw]"
        >
          <Magnet padding={130} strength={3.4}>
            <motion.div
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformPerspective: 900 }}
              className="relative"
            >
              {/* backlight */}
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-[40%] bg-[radial-gradient(circle,rgba(105,183,255,0.22),transparent_65%)] blur-2xl"
              />
              <div className="relative h-[clamp(240px,42vw,440px)] w-[clamp(210px,36vw,380px)] overflow-hidden rounded-[46%_46%_42%_42%/52%_52%_40%_40%] border border-paper/15 bg-paper/[0.03] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.75)] rim-light">
                <Image
                  src={PORTRAIT.current}
                  alt={PORTRAIT.alt}
                  fill
                  priority
                  sizes="(max-width:640px) 60vw, 380px"
                  className="scale-110 object-cover object-top"
                />
                {/* rim + bottom fade */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(12,12,12,0.55)_100%)]" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_18px_0_36px_-24px_rgba(140,207,255,0.6),inset_-18px_0_36px_-24px_rgba(0,0,0,0.7)]" />
              </div>

              {/* elliptical base */}
              <div
                aria-hidden
                className="absolute -bottom-4 left-1/2 h-8 w-[115%] -translate-x-1/2 rounded-[50%] border border-paper/15 bg-[radial-gradient(ellipse_at_center,rgba(105,183,255,0.12),transparent_70%)]"
              />
            </motion.div>
          </Magnet>
        </motion.div>

        {/* hero phrase */}
        <FadeIn
          onView={false}
          delay={0.45}
          className="z-20 mt-2 font-mono text-[11px] uppercase tracking-[0.4em] text-paper/45"
        >
          {IDENTITY.phrases.hero}
        </FadeIn>
      </div>

      {/* LAYER 4 — info + CTAs */}
      <div className="relative z-20 mx-auto grid w-full max-w-6xl gap-8 pt-8 sm:grid-cols-2 sm:items-end">
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
        </FadeIn>
      </div>

      {/* LAYER 5 — stats bar */}
      <FadeIn
        onView={false}
        delay={0.75}
        className="relative z-20 mx-auto mt-10 grid w-full max-w-6xl grid-cols-3 divide-x divide-paper/10 border-y border-paper/10"
      >
        {HERO_STATS.map((s) => (
          <div key={s.label} className="px-3 py-4 text-center sm:px-6 sm:text-left">
            <div className="text-xl font-bold text-paper sm:text-2xl">{s.value}</div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-paper/40 sm:text-[10px]">
              {s.label}
            </div>
          </div>
        ))}
      </FadeIn>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-paper/30 lg:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} className="animate-float" />
      </div>
    </section>
  );
}
