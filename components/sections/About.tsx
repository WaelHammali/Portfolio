"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Eye, Workflow } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ABOUT_SUMMARY } from "@/lib/portfolio-data";

const PILLARS = [
  {
    icon: ShieldCheck,
    label: "AI-assisted security assessment, from automated reconnaissance to vulnerability validation and reporting.",
  },
  {
    icon: Eye,
    label: "Computer vision for aerial object detection, network diagram analysis, and player identification.",
  },
  {
    icon: Workflow,
    label: "Cloud infrastructure automation using retrieval-augmented generation, Terraform, and Ansible.",
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const orbit = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rise = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* decorative objects */}
      <motion.div
        aria-hidden
        style={{ rotate: orbit }}
        className="pointer-events-none absolute -right-16 top-10 h-52 w-52 rounded-full border border-paper/10"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/70" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: rise }}
        className="pointer-events-none absolute left-6 top-1/3 h-28 w-28 rounded-2xl border border-paper/10 [background:repeating-linear-gradient(45deg,rgba(215,226,234,0.04)_0_6px,transparent_6px_12px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-1/4 font-mono text-5xl text-paper/[0.04]"
      >
        {"{ }"}
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <FadeIn className="mb-2 font-mono text-[11px] uppercase tracking-[0.35em] text-accent-soft">
          // about me
        </FadeIn>
        <h2
          data-text="About"
          className="hero-heading text-[clamp(2rem,5.5vw,3.75rem)] font-black uppercase leading-[0.95] tracking-tight"
        >
          About
        </h2>

        <div className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-paper/75 sm:text-lg">
            {ABOUT_SUMMARY}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, label }, i) => (
            <FadeIn
              key={label}
              delay={i * 0.1}
              className="surface-card flex flex-col gap-3 p-5"
            >
              <Icon size={20} className="text-accent-soft" />
              <p className="text-sm leading-relaxed text-paper/60">{label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
