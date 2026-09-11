"use client";

import { Fragment, useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

/**
 * Reveals a short paragraph word-by-word as it scrolls through the viewport.
 * Server-renders (and pre-hydration renders) as plain text so the content is
 * always present; upgrades to the scrubbed reveal only after mount. The full
 * string stays available to assistive tech via aria-label.
 */
export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  if (!mounted || reduce) {
    return (
      <p ref={ref} className={className} style={{ position: "relative" }}>
        {text}
      </p>
    );
  }

  const words = text.split(" ");
  return (
    <p ref={ref} className={className} style={{ position: "relative" }} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {word}
          </Word>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block" aria-hidden>
      {children}
    </motion.span>
  );
}
