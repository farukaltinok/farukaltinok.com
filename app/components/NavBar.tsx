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
        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
          About
        </Link>

        <Link href="/essays" aria-current={pathname.startsWith("/essays") ? "page" : undefined}>
          Essays
        </Link>

        <ThemeToggle />
      </nav>
    </header>
  );
}