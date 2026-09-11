type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const POSITION_CLASSES: Record<Position, string> = {
  "top-right": "-right-12 top-6 sm:-right-16",
  "top-left": "-left-12 top-6 sm:-left-16",
  "bottom-right": "-right-12 bottom-6 sm:-right-16",
  "bottom-left": "-left-12 bottom-6 sm:-left-16",
};

/**
 * Small recurring decorative mark — a thin ringed circle with an accent dot
 * and an optional mono label — echoing the hero's orbit/globe language across
 * the rest of the site. Purely decorative (aria-hidden), no layout impact.
 */
export function SectionAccent({
  label,
  position = "top-right",
}: {
  label?: string;
  position?: Position;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${POSITION_CLASSES[position]} hidden h-36 w-36 rounded-full border border-paper/10 sm:block`}
    >
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/60" />
      {label && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-paper/20">
          {label}
        </span>
      )}
    </div>
  );
}
