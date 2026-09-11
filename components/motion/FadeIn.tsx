"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  x?: number;
  y?: number;
  /** reveal when scrolled into view (default) vs. immediately on mount */
  onView?: boolean;
  as?: "div" | "span" | "li" | "section" | "p" | "article";
};

/**
 * Progressive-enhancement reveal. Renders visible by default; only when the
 * `.js` class is present on <html> (set by an inline script before first paint)
 * does it start hidden and transition in — so a JS failure never hides content.
 * The animation itself is pure CSS (see `.reveal` in globals.css); a 4s CSS
 * failsafe forces visibility even if hydration never runs.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 28,
  onView = true,
  as = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!onView) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onView]);

  const style = {
    "--reveal-x": `${x}px`,
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      style,
      className: `reveal ${inView ? "in-view" : ""} ${className}`.trim(),
    },
    children,
  );
}
