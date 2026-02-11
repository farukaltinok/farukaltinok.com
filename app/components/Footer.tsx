"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "./LanguageContext";

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
  const [now, setNow] = useState<Date>(() => new Date());
  const { lang, t } = useLang();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const city = lang === "de" ? "Köln" : "Cologne";
  const stamp = useMemo(() => formatStamp(now, city), [now, city]);

  return (
    <footer className="rz-footer" aria-label="Footer">
      <div className="rz-footerInner">
        <Link href="/impressum" className="rz-footerLeftLink">
          {t("footer.impressum")}
        </Link>

        <div className="rz-footerRight">
          <div className="rz-footerLinks">
            <a
              href="https://www.linkedin.com/in/farukaltinok"
              target="_blank"
              rel="noreferrer"
              className="rz-footerLink"
            >
              IN
            </a>
            <a
              href="https://www.instagram.com/farukaltiinok"
              target="_blank"
              rel="noreferrer"
              className="rz-footerLink"
            >
              IG
            </a>
          </div>

          <div className="rz-footerMeta">{stamp}</div>
        </div>
      </div>
    </footer>
  );
}