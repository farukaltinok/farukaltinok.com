"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "./LanguageContext";
import { localizedPath } from "../lib/site";

export default function NavBar() {
  const pathname = usePathname();
  const { lang, t } = useLang();
  const aboutHref = localizedPath("/about", lang);

  return (
    <header className="site-nav">
      <Link href={localizedPath("/", lang)} className="site-logo">
        Faruk Altinok
      </Link>

      <nav className="navLinks" aria-label="Primary">
        <Link href={aboutHref} aria-current={pathname === aboutHref ? "page" : undefined}>
          {t("nav.about")}
        </Link>

        <LanguageToggle />
      </nav>
    </header>
  );
}