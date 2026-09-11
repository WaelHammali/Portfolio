"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroGlobe } from "@/components/sections/HeroGlobe";

type Position = { x: number; y: number; size: number };
const MARGIN = 12;
const TOP_CLEARANCE = 96; // keeps balloons below the fixed header

const BALLOONS = [
  { id: "engineer", label: "Engineer" },
  { id: "ai", label: "AI" },
  { id: "cyber", label: "Cyber" },
];

function bounds(container: HTMLElement) {
  const rect = container.getBoundingClientRect();
  const size = rect.width < 640 ? 52 : 70;
  const maxY = Math.max(TOP_CLEARANCE, rect.height - size - MARGIN);
  return {
    size,
    minX: MARGIN,
    maxX: Math.max(MARGIN, rect.width - size - MARGIN),
    minY: Math.min(TOP_CLEARANCE, maxY),
    maxY,
  };
}

// Spread starting spots across the container's corners so the balloons
// don't stack on top of each other before their first teleport.
function initialSlot(container: HTMLElement, index: number) {
  const b = bounds(container);
  const slots = [
    { x: b.minX, y: b.minY },
    { x: b.maxX, y: b.minY },
    { x: b.minX, y: b.maxY },
  ];
  return slots[index % slots.length];
}

function nextPosition(
  container: HTMLElement,
  selfId: string,
  current: Position,
  pointer?: { x: number; y: number },
): Position {
  const b = bounds(container);
  const containerRect = container.getBoundingClientRect();
  const obstacles = Array.from(container.querySelectorAll(
    `a, button:not([data-balloon-id="${selfId}"]), input, textarea, select, img`,
  )).map((el) => el.getBoundingClientRect())
    .filter((r) => r.width && r.height)
    .map((r) => ({
      left: r.left - containerRect.left,
      right: r.right - containerRect.left,
      top: r.top - containerRect.top,
      bottom: r.bottom - containerRect.top,
    }));
  // Sample the container's edges and interior, with corners as reliable fallbacks.
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
  // A crowded section still gets a destination away from the cursor.
  const fallback = candidates.filter(awayFromPointer).sort((a, c) => distance(c) - distance(a));
  const destination = available.length
    ? available[Math.floor(Math.random() * available.length)]
    : fallback[0] ?? candidates.sort((a, c) => distance(c) - distance(a))[0];
  return { ...destination, size: b.size };
}

function Balloon({
  id, label, index, containerRef,
}: {
  id: string;
  label: string;
  index: number;
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [position, setPosition] = useState<Position | null>(null);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const busy = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    function fitContainer() {
      const container = containerRef.current;
      if (!container) return;
      const b = bounds(container);
      const slot = initialSlot(container, index);
      setPosition((previous) => ({
        x: Math.min(b.maxX, Math.max(b.minX, previous?.x ?? slot.x)),
        y: Math.min(b.maxY, Math.max(b.minY, previous?.y ?? slot.y)),
        size: b.size,
      }));
    }
    fitContainer();
    window.addEventListener("resize", fitContainer);
    return () => {
      window.removeEventListener("resize", fitContainer);
      timers.current.forEach(clearTimeout);
    };
  }, [containerRef, index]);

  function teleport(pointer?: { x: number; y: number }) {
    const container = containerRef.current;
    if (!position || !container || busy.current) return;
    busy.current = true;
    setVisible(false);
    timers.current = [setTimeout(() => {
      setPosition(nextPosition(container, id, position, pointer));
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
      data-balloon-id={id}
      aria-label={`Move the ${label} globe to another position`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          const containerRect = containerRef.current?.getBoundingClientRect();
          teleport(containerRect
            ? { x: event.clientX - containerRect.left, y: event.clientY - containerRect.top }
            : undefined);
        }
      }}
      onClick={() => teleport()}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.65 }}
      transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
      style={{ left: position.x, top: position.y, width: position.size, height: position.size,
        pointerEvents: visible ? "auto" : "none" }}
      className="absolute z-40 cursor-pointer touch-manipulation rounded-full border border-accent/15 bg-[#0d0f14]/70 p-1 shadow-[0_0_28px_rgba(105,183,255,0.12)] backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
    >
      <HeroGlobe variant="engineer" label={label} className="h-full w-full" />
    </motion.button>
  );
}

export function EngineerGlobe({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  return (
    <>
      {BALLOONS.map((b, index) => (
        <Balloon key={b.id} id={b.id} label={b.label} index={index} containerRef={containerRef} />
      ))}
    </>
  );
}
