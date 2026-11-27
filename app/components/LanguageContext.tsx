"use client";

import { createContext, useContext, useCallback, useMemo, type ReactNode } from "react";
import type { Lang } from "../lib/site";

export type { Lang };

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // NavBar
  "nav.about": { de: "Über mich", en: "About me" },

  // Home
  "home.1": { de: "Ich erzähle Stories und baue Dinge.", en: "I tell stories and build things." },
  "home.2": { de: "y/o Deutsch-Türke. Geboren in Köln.", en: "y/o Turkish-German. Born and raised in Cologne." },
  "home.3": { de: "Kumuliert über 2 Mio Follower aufgebaut.", en: "Combined, I've grown over 2 million followers." },
  "home.4": { de: "Aktuell reise ich um die Welt.", en: "Currently traveling the world." },
  "home.5": { de: "Mein Ziel ist es, Mama zu retiren.", en: "My goal is to retire my mom." },
  "home.6": { de: "Meine Mission ist es, die Welt zu verstehen und zu verbessern.", en: "My mission is to understand and improve the world." },
  "home.7": { de: "faruk@sesim.de", en: "faruk@sesim.de" },
  "home.8": { de: "LG Faruk", en: "Best, Faruk" },

  // Footer
  "footer.impressum": { de: "Impressum", en: "Imprint" },

  // About / TypewriterGoals
  "about.goal1": { de: "Mama retiren", en: "Retire mom" },
  "about.goal2": { de: "Road to 100K€ im Monat", en: "Road to 100K€ per month" },
  "about.goal3": { de: "Ein erfülltes Leben führen", en: "Live a fulfilling life" },

  // About / Timeline
  "about.t0": { de: "Mein Vater ist verstorben", en: "My father passed away" },
  "about.t1": { de: "Unter Shaolin Mönchen in China gelebt", en: "Lived among Shaolin monks in China" },
  "about.t2": { de: "Palutens Nummer geklärt (mein größter Flex)", en: "Got Paluten's number (my biggest flex)" },
  "about.t3": { de: "Krebsdiagnose meines Vaters mitbekommen", en: "Found out my father has cancer" },
  "about.t4": { de: "1 Mio Follower geknackt", en: "Hit 1 million followers" },
  "about.t5": { de: "Angefangen, Videos zu posten", en: "Started posting videos" },
  "about.t6": { de: "1,0er Notenschnitt erreicht", en: "Got a 1.0 GPA (best being 1.0)" },
  "about.t8": { de: "Wollte Biotech Company starten", en: "Wanted to start a biotech company" },
  "about.t9": { de: "Eigenes Jump & Run Game programmiert", en: "Programmed my own jump & run game" },
  "about.t10": { de: "Versucht ein Magnetmotor zu bauen", en: "Tried to build a magnetic motor" },
  "about.t11": { de: "Mutismus Diagnose bekommen", en: "Diagnosed with mutism" },
  "about.t12": { de: "Geboren in Köln, um 18:32 Uhr", en: "Born in Cologne, at 6:32 PM" },
  "about.t13": { de: "In The Residency eingezogen", en: "Joined The Residency" },
  "about.t14": { de: "Boys Trip nach Thailand", en: "Boys Trip to Thailand" },
  "about.t15": { de: "21 Tage auf Bali mit 20 Gründern", en: "21 days in Bali with 20 founders" },
  "about.t16": { de: "Prägende Impulse von Parua bekommen", en: "Got formative input from Parua" },
  "about.t17": { de: "Pilgerfahrt nach Mekka", en: "Pilgrimage to Mecca" },
  "about.t18": { de: "Pilgerfahrt nach Mekka", en: "Pilgrimage to Mecca" },

  // Impressum
  "impressum.title1": { de: "Angaben gemäß §5 DDG", en: "Information according to §5 DDG" },
  "impressum.title2": { de: "Verantwortlich nach § 18 Abs. 2 MStV", en: "Responsible according to § 18 Abs. 2 MStV" },
};

type LanguageContextType = {
  lang: Lang;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * The language is fixed by the route (/ is English, /de is German) and
 * passed in by the root layout, so the server renders the right text.
 */
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
