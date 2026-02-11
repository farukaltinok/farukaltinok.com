"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "./LanguageContext";

export default function NavBar() {
  const pathname = usePathname();
  const { t } = useLang();

  return (
    <header className="rz-nav">
      <Link href="/" className="rz-logo">
        Faruk Altinok
      </Link>

      <nav className="navLinks" aria-label="Primary">
        <LanguageToggle />

        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
          {t("nav.about")}
        </Link>

        <Link href="/essays" aria-current={pathname.startsWith("/essays") ? "page" : undefined}>
          {t("nav.essays")}
        </Link>

        <ThemeToggle />
      </nav>
    </header>
  );
}