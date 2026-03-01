"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

export type Lang = "de" | "en";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // NavBar
  "nav.about": { de: "About me", en: "About me" },
  "nav.essays": { de: "Essays", en: "Essays" },

  // Home
  "home.1": { de: "Ich erzähle Stories und baue Dinge.", en: "I tell stories and build things." },
  "home.2": { de: "y/o Deutsch-Türke. Geboren in Köln.", en: "y/o Turkish-German. Born and raised in Cologne." },
  "home.3": { de: "Kumuliert über 2 Mio Follower aufgebaut.", en: "Combined, I've grown over 2 million followers." },
  "home.4": { de: "Aktuell evaluiere ich, woran ich 2026 bauen möchte.", en: "Currently figuring out what to build in 2026." },
  "home.5": { de: "Mein Ziel ist es, Mama in 3 Jahren zu retiren.", en: "My goal is to retire my mom in 3 years." },
  "home.6": { de: "Meine Mission ist es, die Welt zu verstehen und zu verbessern.", en: "My mission is to understand and improve the world." },
  "home.7": { de: "kontakt@farukaltinok.com", en: "kontakt@farukaltinok.com" },
  "home.8": { de: "LG Faruk", en: "Best, Faruk" },

  // Essays
  "essays.comingSoon": { de: "Kommt bald.", en: "Coming soon." },
  "essays.back": { de: "← Essays", en: "← Essays" },

  // Footer
  "footer.impressum": { de: "Impressum", en: "Imprint" },

  // About / TypewriterGoals
  "about.goal1": { de: "Mama in 3 Jahren retiren", en: "Retire mom in 3 years" },
  "about.goal2": { de: "Road to 100K€ im Monat", en: "Road to 100K€ per month" },
  "about.goal3": { de: "Reise in die Arktis planen (2026)", en: "Plan a trip to the Arctic (2026)" },

  // About / Timeline
  "about.t0": { de: "Mein Vater ist verstorben", en: "My father passed away" },
  "about.t1": { de: "Unter Shaolin Mönchen in China gelebt", en: "Lived among Shaolin monks in China" },
  "about.t2": { de: "Palutens Nummer geklärt (mein größter Flex)", en: "Got Paluten's number (my biggest flex)" },
  "about.t3": { de: "Krebsdiagnose meines Vaters erhalten", en: "Found out my father has cancer" },
  "about.t4": { de: "1 Mio Follower geknackt", en: "Hit 1 million followers" },
  "about.t5": { de: "Angefangen, Videos zu posten", en: "Started posting videos" },
  "about.t6": { de: "1,0er Durchschnitt erreicht", en: "Achieved a perfect GPA of 1.0" },
  "about.t7": { de: "Side Quests pausiert & auf Schule fokussiert", en: "Paused side quests & focused on school" },
  "about.t8": { de: "Wollte Biotech Company starten", en: "Wanted to start a biotech company" },
  "about.t9": { de: "Eigenes Jump & Run Game programmiert", en: "Programmed my own jump & run game" },
  "about.t10": { de: "Versucht ein Magnetmotor zu bauen", en: "Tried to build a magnetic motor" },
  "about.t11": { de: "Mutismus Diagnose bekommen", en: "Diagnosed with mutism" },
  "about.t12": { de: "Geboren in Köln, um 18:32 Uhr", en: "Born in Cologne, at 6:32 PM" },

  // Impressum
  "impressum.title1": { de: "Angaben gemäß §5 DDG", en: "Information according to §5 DDG" },
  "impressum.title2": { de: "Verantwortlich nach § 18 Abs. 2 MStV", en: "Responsible according to § 18 Abs. 2 MStV" },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "de" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}