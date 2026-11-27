"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageContext";
import { alternatePath } from "../lib/site";

export default function LanguageToggle() {
  const { lang } = useLang();
  const pathname = usePathname();
  const target = lang === "de" ? "en" : "de";
  const label = lang === "de" ? "Switch to English" : "Auf Deutsch wechseln";

  return (
    <Link
      href={alternatePath(pathname, target)}
      hrefLang={target}
      className="langToggle"
      aria-label={label}
      title={label}
    >
      {lang === "de" ? "🇺🇸" : "🇩🇪"}
    </Link>
  );
}
