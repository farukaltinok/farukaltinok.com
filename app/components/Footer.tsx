"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "./LanguageContext";
import ThemeToggle from "./ThemeToggle";

function formatStamp(d: Date, city: string) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(d);

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${city}, ${get("day")}.${get("month")}.${get("year")}, ${get("hour")}:${get(
    "minute"
  )}:${get("second")}`;
}

export default function Footer() {
  const [now, setNow] = useState<Date | null>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const city = lang === "de" ? "Köln" : "Cologne";
  const stamp = now ? formatStamp(now, city) : "";

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footerInner">
        <Link href="/impressum" className="site-footerLeftLink">
          {t("footer.impressum")}
        </Link>

        <div className="site-footerRight">
          <div className="site-footerLinks">
            <a
              href="https://www.linkedin.com/in/farukaltinok"
              target="_blank"
              rel="noreferrer"
              className="site-footerLink"
            >
              IN
            </a>
            <a
              href="https://www.instagram.com/farukaltiinok"
              target="_blank"
              rel="noreferrer"
              className="site-footerLink"
            >
              IG
            </a>
          </div>

          <div className="site-footerMeta">{stamp}</div>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}