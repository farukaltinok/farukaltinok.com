"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "theme";

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  // ✅ Simple, clean moon (stroke = currentColor)
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 14.2A7.5 7.5 0 0 1 9.8 3a6.5 6.5 0 1 0 11.2 11.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  // ✅ Simple, clean sun (stroke = currentColor)
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 2v2.5M12 19.5V22M4.22 4.22 6 6M18 18l1.78 1.78M2 12h2.5M19.5 12H22M4.22 19.78 6 18M18 6l1.78-1.78"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = saved === "light" || saved === "dark" ? saved : "dark";

    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    if (!theme) return;
    const next: Theme = theme === "dark" ? "light" : "dark";

    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  // Optional: verhindert “falsches Icon” beim 1. Paint, bis theme geladen ist
  if (!theme) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="themeToggle"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* ✅ Gewünschte inverse Logik:
          Dark Mode => Sonne sichtbar
          Light Mode => Mond sichtbar */}
      {theme === "dark" ? (
        <SunIcon className="themeIcon" />
      ) : (
        <MoonIcon className="themeIcon" />
      )}
    </button>
  );
}
