import { type ReactNode } from "react";

const HERO_PATH =
  "M5 0 C5.4 3.4 6.6 4.6 10 5 C6.6 5.4 5.4 6.6 5 10 C4.6 6.6 3.4 5.4 0 5 C3.4 4.6 4.6 3.4 5 0 Z";

function Hero({ variant }: { variant: "a" | "b" | "c" }) {
  return (
    <svg className={`spark hero ${variant}`} viewBox="0 0 10 10" aria-hidden="true">
      <path d={HERO_PATH} />
    </svg>
  );
}

function Dust({ variant }: { variant: "d" | "e" }) {
  return (
    <svg className={`spark dust ${variant}`} viewBox="0 0 10 10" aria-hidden="true">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

/**
 * Wraps words in a still gradient with five sparks: three hero sparks that
 * pop in as a left-to-right wave every 7s, plus two tiny dust points that
 * breathe in between. Used for highlighted timeline entries
 * (see the `highlight` flag in app/about/page.tsx).
 */
export default function HighlightWords({ children }: { children: ReactNode }) {
  return (
    <span className="words">
      <Hero variant="a" />
      <Hero variant="c" />
      <Hero variant="b" />
      <Dust variant="d" />
      <Dust variant="e" />
      <span className="words__t">{children}</span>
    </span>
  );
}
