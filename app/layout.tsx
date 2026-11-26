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

const SITE_URL = "https://farukaltinok.com";
const SITE_TITLE = "Faruk Altinok | Content Creator and Founder of Sesim";
const SITE_DESCRIPTION =
  "Faruk Altinok is a German content creator from Cologne with over 2 million followers and the founder of Sesim.";
const PROFILE_IMAGE = "/faruk-altinok.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // "./" resolves against the current route: "/" on the home page,
  // "/impressum" on the Impressum, so subpages are not canonicalized to home.
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "profile",
    url: "./",
    siteName: "Faruk Altinok",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    firstName: "Faruk",
    lastName: "Altinok",
    username: "farukaltiinok",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Faruk Altinok",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [PROFILE_IMAGE],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Faruk Altinok",
    alternateName: ["Faruk Altınok", "farukaltiinok"],
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${PROFILE_IMAGE}`,
    description: SITE_DESCRIPTION,
    jobTitle: "Content Creator and Founder",
    birthDate: "2002-11-14",
    birthPlace: { "@type": "Place", name: "Cologne, Germany" },
    nationality: { "@type": "Country", name: "Germany" },
    knowsLanguage: ["de", "en", "tr"],
    worksFor: { "@type": "Organization", name: "Sesim", url: "https://sesim.de/" },
    sameAs: [
      "https://www.wikidata.org/wiki/Q142306978",
      "https://www.tiktok.com/@farukaltiinok",
      "https://www.youtube.com/@farukaltinok",
      "https://www.youtube.com/channel/UCV7zVU9mQfpMrsCrlH5Y8dw",
      "https://www.instagram.com/farukaltiinok/",
      "https://www.snapchat.com/add/faruk.altinok",
      "https://www.linkedin.com/in/farukaltinok",
      "https://sesim.de/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${siteSerif.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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