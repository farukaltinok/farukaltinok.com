"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "./LanguageContext";
import ThemeToggle from "./ThemeToggle";

function formatTime(d: Date, city: string, lang: string) {
  if (lang === "de") {
    const parts = new Intl.DateTimeFormat("de-DE", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(d);

    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
    return `${city}, ${get("hour")}:${get("minute")}:${get("second")} Uhr`;
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(d);

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${city}, ${get("hour")}:${get("minute")}:${get("second")} ${get("dayPeriod")}`;
}

export default function Footer() {
  const [now, setNow] = useState<Date>(() => new Date());
  const { lang, t } = useLang();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const city = lang === "de" ? "Köln" : "Cologne";
  const stamp = useMemo(() => formatTime(now, city, lang), [now, city, lang]);

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