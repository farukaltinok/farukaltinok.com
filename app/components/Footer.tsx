"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function formatStampCologne(d: Date) {
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
  return `Köln, ${get("day")}.${get("month")}.${get("year")}, ${get("hour")}:${get(
    "minute"
  )}:${get("second")}`;
}

export default function Footer() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const stamp = useMemo(() => formatStampCologne(now), [now]);

  return (
    <footer className="rz-footer" aria-label="Footer">
      <div className="rz-footerInner">
        {/* LEFT (like header logo slot) */}
        <Link href="/impressum" className="rz-footerLeftLink">
          Impressum
        </Link>

        {/* RIGHT (like header nav slot) */}
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

            <a
              href="mailto:kontakt@farukaltinok.com"
              className="rz-footerIcon"
              aria-label="Mail"
              title="Mail"
            >
              <MailIcon />
            </a>
          </div>

          <div className="rz-footerMeta">{stamp}</div>
        </div>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2l8-5.2V8H4Zm16 2.3l-7.45 4.85a1 1 0 0 1-1.1 0L4 10.3V18h16v-7.7Z"
      />
    </svg>
  );
}
