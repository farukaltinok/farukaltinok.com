"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

export default function NavBar() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const navEl = document.querySelector<HTMLElement>(".rz-nav");
    const containerEl = navEl?.closest<HTMLElement>(".wrap, .rz-container");
    const rect = navEl?.getBoundingClientRect();
    const containerStyle = containerEl ? window.getComputedStyle(containerEl) : null;

    const headerRect = rect
      ? { left: rect.left, right: rect.right, width: rect.width }
      : null;

    const containerPaddingLeft = containerStyle?.paddingLeft ?? null;
    const containerPaddingRight = containerStyle?.paddingRight ?? null;
    const containerMaxWidth = containerStyle?.maxWidth ?? null;
    const containerClass = containerEl?.className ?? null;

    // #region agent log
    fetch("http://127.0.0.1:7242/ingest/7ccefcbf-75ba-41ac-9fd9-84faa10c7ce4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "initial",
        hypothesisId: "H1",
        location: "NavBar.tsx:useEffect-header-metrics",
        message: "Header container spacing debug",
        data: {
          innerWidth: window.innerWidth,
          headerRect,
          containerPaddingLeft,
          containerPaddingRight,
          containerMaxWidth,
          containerClass,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <header className="rz-nav">
<Link href="/" className="rz-logo">
  Faruk Altinok
</Link>

      <nav className="navLinks">
        <Link href="/about">Story</Link>
        <Link href="/links">Linktree</Link>

        <button
          type="button"
          className="themeToggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span className="sunIcon" aria-hidden="true">☀</span>
        </button>
      </nav>
    </header>
  );
}
