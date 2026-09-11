"use client";

import {
  useRef,
  useState,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from "react";
import { useReducedMotion } from "framer-motion";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  /** px of extra hit-area around the element that still attracts the cursor */
  padding?: number;
  /** higher = weaker pull */
  strength?: number;
  style?: CSSProperties;
};

/**
 * Subtly translates its children toward the cursor while the pointer is within
 * `padding` px of the element. Disabled for touch devices and when the user
 * prefers reduced motion.
 */
export function Magnet({
  children,
  className,
  padding = 150,
  strength = 3,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  const handleMove = useCallback(
    (e: React.PointerEvent) => {
      if (reduce || e.pointerType === "touch" || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const within =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;

      if (within) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else if (active) {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    },
    [reduce, padding, strength, active],
  );

  const reset = useCallback(() => {
    setActive(false);
    setPos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
