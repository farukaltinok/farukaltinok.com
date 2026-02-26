"use client";

import { useEffect, useState } from "react";

type Props = {
  goals: string[];
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  pauseMs?: number; // pause after fully typed
};

function formatDate(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`; // TT.MM.JJ
}

function msUntilNextMidnight() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0); // nächste Mitternacht
  return next.getTime() - now.getTime();
}

export default function TypewriterGoals({
  goals,
  typingSpeed = 55,
  deletingSpeed = 34,
  pauseMs = 1000,
}: Props) {
  const [today, setToday] = useState(() => formatDate(new Date()));
  const [goalIndex, setGoalIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ Datum automatisch updaten, wenn neuer Tag beginnt
  useEffect(() => {
    const update = () => setToday(formatDate(new Date()));

    const t = setTimeout(() => {
      update();
      const daily = setInterval(update, 24 * 60 * 60 * 1000);
      // cleanup fürs interval
      return () => clearInterval(daily);
    }, msUntilNextMidnight());

    return () => clearTimeout(t);
  }, []);

  // Typewriter
  useEffect(() => {
    if (!goals?.length) return;

    const full = goals[goalIndex];

    if (!isDeleting && text === full) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setGoalIndex((i) => (i + 1) % goals.length);
      return;
    }

    const nextText = isDeleting
      ? full.slice(0, text.length - 1)
      : full.slice(0, text.length + 1);

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => setText(nextText), speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, goalIndex, goals, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <>
      <span className="timelineDate">{today}</span>
      <span className="timelineText">
        {text}
        <span className="caret" aria-hidden="true">
          |
        </span>
      </span>
    </>
  );
}
