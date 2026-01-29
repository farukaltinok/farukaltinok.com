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
          className={pathname === "/about" ? "active" : undefined}
        >
          Story
        </Link>

        <Link
          href="/links"
          className={pathname === "/links" ? "active" : undefined}
        >
          Linktree
        </Link>

        {/* ✅ NUR NOCH ThemeToggle – kein eigenes Icon/Button mehr hier */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
