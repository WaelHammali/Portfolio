"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroGlobe } from "@/components/sections/HeroGlobe";

type Position = { x: number; y: number; size: number };
const MARGIN = 16;

function bounds() {
  const size = window.innerWidth < 640 ? 88 : 112;
  const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 80;
  const maxY = Math.max(MARGIN, window.innerHeight - size - MARGIN);
  return {
    size,
    minX: MARGIN,
    maxX: Math.max(MARGIN, window.innerWidth - size - MARGIN),
    minY: Math.min(headerBottom + 24, maxY),
    maxY,
  };
}

function nextPosition(current: Position, pointer?: { x: number; y: number }): Position {
  const b = bounds();
  const obstacles = Array.from(document.querySelectorAll(
    "a, button:not([data-engineer-globe]), input, textarea, select, #home img",
  )).map((el) => el.getBoundingClientRect()).filter((r) => r.width && r.height);
  // Sample the page edges and interior, with corners as reliable fallbacks.
  const candidates = [
    { x: b.minX, y: b.minY }, { x: b.maxX, y: b.minY },
    { x: b.minX, y: b.maxY }, { x: b.maxX, y: b.maxY },
    ...Array.from({ length: 32 }, () => ({
      x: b.minX + Math.random() * (b.maxX - b.minX),
      y: b.minY + Math.random() * (b.maxY - b.minY),
    })),
  ];
  const distance = (p: { x: number; y: number }) => Math.hypot(p.x - current.x, p.y - current.y);
  const awayFromPointer = (p: { x: number; y: number }) => !pointer ||
    Math.hypot(p.x + b.size / 2 - pointer.x, p.y + b.size / 2 - pointer.y) > b.size + 32;
  const available = candidates.filter((p) =>
    distance(p) > b.size * 1.5 && awayFromPointer(p) &&
    !obstacles.some((r) => p.x < r.right + 12 && p.x + b.size > r.left - 12 &&
      p.y < r.bottom + 12 && p.y + b.size > r.top - 12),
  );
  // A crowded viewport still gets a destination away from the cursor.
  const fallback = candidates.filter(awayFromPointer).sort((a, c) => distance(c) - distance(a));
  const destination = available.length
    ? available[Math.floor(Math.random() * available.length)]
    : fallback[0] ?? candidates.sort((a, c) => distance(c) - distance(a))[0];
  return { ...destination, size: b.size };
}

export function EngineerGlobe() {
  const [position, setPosition] = useState<Position | null>(null);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const busy = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    function fitViewport() {
      const b = bounds();
      setPosition((previous) => ({
        x: Math.min(b.maxX, Math.max(b.minX, previous?.x ?? 28)),
        y: Math.min(b.maxY, Math.max(b.minY, previous?.y ?? 124)),
        size: b.size,
      }));
    }
    fitViewport();
    window.addEventListener("resize", fitViewport);
    return () => {
      window.removeEventListener("resize", fitViewport);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function teleport(pointer?: { x: number; y: number }) {
    if (!position || busy.current) return;
    busy.current = true;
    setVisible(false);
    timers.current = [setTimeout(() => {
      setPosition(nextPosition(position, pointer));
      setVisible(true);
    }, reduceMotion ? 0 : 180), setTimeout(() => {
      busy.current = false;
    }, reduceMotion ? 100 : 500)];
  }

  if (!position) return null;

  return (
    <motion.button
      type="button"
      data-engineer-globe
      aria-label="Move the Engineer globe to another position"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          teleport({ x: event.clientX, y: event.clientY });
        }
      }}
      onClick={() => teleport()}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.65 }}
      transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
      style={{ left: position.x, top: position.y, width: position.size, height: position.size,
        pointerEvents: visible ? "auto" : "none" }}
      className="fixed z-40 cursor-pointer touch-manipulation rounded-full border border-accent/15 bg-[#0d0f14]/70 p-1 shadow-[0_0_28px_rgba(105,183,255,0.12)] backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
    >
      <HeroGlobe variant="engineer" className="h-full w-full" />
    </motion.button>
  );
}
