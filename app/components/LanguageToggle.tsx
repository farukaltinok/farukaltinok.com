"use client";

import { useLang } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      className="langToggle"
      aria-label={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      title={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
    >
      {lang === "de" ? "🇺🇸" : "🇩🇪"}
    </button>
  );
}