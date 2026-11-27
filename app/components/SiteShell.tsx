import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "./LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import { personJsonLd, type Lang } from "../lib/site";

const siteSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-site-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * The whole document, shared by the two root layouts: app/(en)/layout.tsx
 * and app/de/layout.tsx. Each language needs its own root layout because
 * that is the only place <html lang> can be set on the server.
 */
export default function SiteShell({
  lang,
  children,
}: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  return (
    <html lang={lang}>
      <body className={`${siteSerif.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider lang={lang}>
          <div className="wrap wide site-container">
            <NavBar />
            {children}
          </div>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
