import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

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

export const metadata: Metadata = {
  title: "Faruk Altinok",
  description: "I tell stories and build things.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${siteSerif.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
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