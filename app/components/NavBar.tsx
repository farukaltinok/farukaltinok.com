"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="rz-nav">
      <Link href="/" className="rz-logo">
        Faruk Altinok
      </Link>

      <nav className="navLinks" aria-label="Primary">
        <Link
          href="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          Story
        </Link>

        <Link
          href="/links"
          aria-current={pathname === "/links" ? "page" : undefined}
        >
          Links
        </Link>

        {/* Theme Toggle (ein Icon, Farbe über currentColor) */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
