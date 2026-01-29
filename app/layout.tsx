import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Cormorant_Garamond } from "next/font/google";

const rzSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-rz-serif",
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
  description: "Minimal personal site.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${rzSerif.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {/* Container bleibt für Header+Content */}
        <div className="wrap wide rz-container">
          <NavBar />
          {children}
        </div>

        {/* Footer MUSS außerhalb vom Container sein */}
        <Footer />
      </body>
    </html>
  );
}