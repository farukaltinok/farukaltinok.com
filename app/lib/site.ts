import type { Metadata } from "next";

export type Lang = "en" | "de";

export const SITE_URL = "https://farukaltinok.com";
export const PROFILE_IMAGE = "/faruk-altinok.jpg";

const SITE_TEXT: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Faruk Altinok | Content Creator and Founder of Sesim",
    description:
      "Faruk Altinok is a German content creator from Cologne with over 2 million followers and the founder of Sesim.",
  },
  de: {
    title: "Faruk Altinok | Content Creator und Gründer von Sesim",
    description:
      "Faruk Altinok ist ein deutscher Content Creator aus Köln mit über 2 Millionen Followern und der Gründer von Sesim.",
  },
};

/** Pages that exist in both languages, written as their English path. */
const LOCALIZED_PATHS = ["/", "/about", "/impressum"] as const;
export type LocalizedPath = (typeof LOCALIZED_PATHS)[number];

/** English lives at the root, German under /de. */
export function localizedPath(path: LocalizedPath, lang: Lang): string {
  if (lang === "en") return path;
  return path === "/" ? "/de" : `/de${path}`;
}

/**
 * The same page in the other language. Pages without a counterpart
 * (e.g. /links or a 404) fall back to that language's home page.
 */
export function alternatePath(pathname: string, target: Lang): string {
  const base = pathname.replace(/^\/de(?=\/|$)/, "") || "/";
  const match = LOCALIZED_PATHS.find((p) => p === base);
  return localizedPath(match ?? "/", target);
}

/** Site-wide defaults, set once per root layout. */
export function siteMetadata(lang: Lang): Metadata {
  const { title, description } = SITE_TEXT[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    // "./" resolves against the current route: "/" on the home page,
    // "/de/impressum" on the German Impressum, so subpages are not
    // canonicalized to home.
    alternates: {
      canonical: "./",
    },
    openGraph: {
      type: "profile",
      url: "./",
      siteName: "Faruk Altinok",
      title,
      description,
      ...(lang === "de" ? { locale: "de_DE" } : {}),
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
      title,
      description,
      images: [PROFILE_IMAGE],
    },
  };
}

/** Canonical plus hreflang links for a page that exists in both languages. */
export function pageMetadata(path: LocalizedPath, lang: Lang): Metadata {
  return {
    alternates: {
      canonical: localizedPath(path, lang),
      languages: {
        en: localizedPath(path, "en"),
        de: localizedPath(path, "de"),
        "x-default": localizedPath(path, "en"),
      },
    },
  };
}

/** Identical on every page and in both languages, so the @id stays one entity. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Faruk Altinok",
    alternateName: ["Faruk Altınok", "farukaltiinok"],
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${PROFILE_IMAGE}`,
    description: SITE_TEXT.en.description,
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
