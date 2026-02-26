"use client";

import { useEffect, useState, useRef } from "react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
  storageKey?: string;
};

export default function TypewriterOnce({
  text,
  speed = 45,
  className,
  storageKey = "typewriter-done",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevText = useRef(text);

  // Beim Mount checken, ob Effekt schon mal komplett gelaufen ist
  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved === "true") {
      setDisplayed(text);
      setDone(true);
    }
  }, [storageKey, text]);

  // Bei Sprachwechsel
  useEffect(() => {
    if (text !== prevText.current) {
      prevText.current = text;

      if (done) {
        // Effekt war schon fertig: sofort neuen Text zeigen, kein Replay
        setDisplayed(text);
      } else {
        // Effekt lief noch: an gleicher Position im neuen Text weitermachen
        setDisplayed(text.slice(0, displayed.length));
      }
    }
  }, [text, done]);

  // Typewriter
  useEffect(() => {
    if (done) return;
    if (displayed.length >= text.length) {
      setDone(true);
      sessionStorage.setItem(storageKey, "true");
      return;
    }

    const timer = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed,
    );
    return () => clearTimeout(timer);
  }, [displayed, text, speed, done, storageKey]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="caret" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}