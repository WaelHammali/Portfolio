"use client";

import { MARQUEE_TECH } from "@/lib/portfolio-data";

const ROW_A = MARQUEE_TECH.slice(0, Math.ceil(MARQUEE_TECH.length / 2));
const ROW_B = MARQUEE_TECH.slice(Math.ceil(MARQUEE_TECH.length / 2));

function Row({
  items,
  direction,
}: {
  items: readonly string[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-paper/10 bg-white/[0.02] px-6 py-4 text-lg font-medium text-paper/70 transition-colors hover:border-accent/40 hover:text-paper"
          >
            {tech}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-paper/10 py-14"
    >
      <div className="mx-auto mb-8 flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/40">
          Toolchain
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/40">
          AI · Security · Cloud
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Row items={ROW_A} direction="left" />
        <Row items={ROW_B} direction="right" />
      </div>
    </section>
  );
}
