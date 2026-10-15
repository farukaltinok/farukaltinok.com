import { type ReactNode } from "react";

const SPARK_PATH = "M5 0 L5.8 4.2 L10 5 L5.8 5.8 L5 10 L4.2 5.8 L0 5 L4.2 4.2 Z";

function Spark({ variant }: { variant: "a" | "b" | "c" }) {
  return (
    <svg className={`spark ${variant}`} viewBox="0 0 10 10" aria-hidden="true">
      <path d={SPARK_PATH} />
    </svg>
  );
}

/**
 * Wraps words in a still gradient with three tiny twinkling sparks.
 * Used for highlighted timeline entries (see `highlight` flag in app/about/page.tsx).
 */
export default function HighlightWords({ children }: { children: ReactNode }) {
  return (
    <span className="words">
      <Spark variant="a" />
      <Spark variant="b" />
      <Spark variant="c" />
      <span className="words__t">{children}</span>
    </span>
  );
}
