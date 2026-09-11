"use client";

import { useId } from "react";

/**
 * Abstract dot-matrix globe used as hero decoration, with a marker for
 * Tunis. Pure inline SVG — no external map/image asset needed.
 * Dot positions are computed deterministically (lat/lon grid, orthographic
 * projection) so server and client render identically.
 */
const TUNIS = { lat: 36.8065, lon: 10.1815 };

function project(lat: number, lon: number, r: number) {
  const latR = (lat * Math.PI) / 180;
  const lonR = (lon * Math.PI) / 180;
  const x = Math.cos(latR) * Math.sin(lonR);
  const y = -Math.sin(latR);
  const z = Math.cos(latR) * Math.cos(lonR);
  return { x: x * r, y: y * r, z };
}

const R = 78;
const DOTS: { x: number; y: number; z: number }[] = [];
for (let lat = -80; lat <= 80; lat += 16) {
  for (let lon = -180; lon < 180; lon += 16) {
    const p = project(lat, lon, R);
    if (p.z > 0.06) DOTS.push(p);
  }
}
const TUNIS_PT = project(TUNIS.lat, TUNIS.lon, R);

export function HeroGlobe({ className = "", variant = "location", label = "Engineer" }: {
  className?: string;
  variant?: "location" | "engineer";
  label?: string;
}) {
  const engineer = variant === "engineer";
  const shadeId = useId();

  const sphere = (
    <svg
      viewBox={engineer ? "-100 -90 180 180" : "-140 -100 260 200"}
      width={engineer ? "100%" : "220"}
      height={engineer ? "100%" : "170"}
      aria-hidden
      className={`overflow-visible ${engineer ? "" : "animate-spin-slow"}`}
      style={{ transformOrigin: engineer ? "50% 50%" : "-10px 0px" }}
    >
      <defs>
        <radialGradient id={shadeId} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="rgba(105,183,255,0.32)" />
          <stop offset="55%" stopColor="rgba(105,183,255,0.05)" />
          <stop offset="100%" stopColor="rgba(4,6,10,0.4)" />
        </radialGradient>
      </defs>

      {/* shaded sphere body, for a subtle 3D volume */}
      <circle cx={-10} cy={0} r={R} fill={`url(#${shadeId})`} />

      {/* outer ring + wireframe */}
      <circle cx={-10} cy={0} r={R} fill="none" stroke="rgba(215,226,234,0.12)" strokeWidth={0.75} />
      <ellipse cx={-10} cy={0} rx={R} ry={R * 0.32} fill="none" stroke="rgba(215,226,234,0.1)" strokeWidth={0.6} />
      <ellipse cx={-10} cy={0} rx={R * 0.4} ry={R} fill="none" stroke="rgba(215,226,234,0.08)" strokeWidth={0.6} />

      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.x - 10}
          cy={d.y}
          r={0.55 + d.z * 1.1}
          fill="rgba(215,226,234,0.55)"
          opacity={0.25 + d.z * 0.55}
        />
      ))}

      {/* Tunis marker */}
      {!engineer && <>
        <circle cx={TUNIS_PT.x - 10} cy={TUNIS_PT.y} r={2.6} fill="#69b7ff" />
        <circle cx={TUNIS_PT.x - 10} cy={TUNIS_PT.y} r={5.5} fill="none" stroke="#69b7ff" strokeWidth={0.8} opacity={0.5} />
      </>}
    </svg>
  );

  if (engineer) {
    return (
      <div className={`relative pointer-events-none select-none ${className}`}>
        <div className="relative h-full w-full animate-spin-slow" style={{ transformOrigin: "50% 50%" }}>
          {sphere}
          <span
            className={`absolute inset-0 grid place-items-center px-2 text-center font-mono font-semibold uppercase leading-none tracking-[0.08em] text-accent-soft [text-shadow:0_0_8px_#0d0f14,0_0_14px_#0d0f14] ${
              label.length > 8 ? "text-[6px]" : "text-[8px]"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {sphere}
      <div className="-mt-[92px] ml-[86px] flex items-center gap-2">
        <span className="h-px w-8 bg-accent/50" />
        <div className="font-mono text-[10px] uppercase leading-tight tracking-[0.25em] text-paper/70">
          Tunis
          <div className="text-paper/40">TN</div>
        </div>
      </div>
    </div>
  );
}
