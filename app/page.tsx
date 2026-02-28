"use client";

import { useMemo } from "react";
import { useLang } from "./components/LanguageContext";
import TypewriterOnce from "./components/TypewriterOnce";

function getAge(birthday: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

export default function Home() {
  const { lang, t } = useLang();
  const age = useMemo(() => getAge(new Date(2002, 10, 14)), []); // 14. November 2002

  const headline = t("home.1");

  const lines =
    lang === "de"
      ? [
          `${age} y/o Deutsch-Türke, geboren in Köln.`,
          "Kumuliert über 2 mio Follower aufgebaut.",
          "Content mit Disney und LEGO erstellt.",
          "Aktuell schaue ich, woran ich 2026 bauen will.",
          "Mein Ziel ist, Mama in 3 Jahren zu retiren.",
          "kontakt@farukaltinok.com",
          "LG Faruk",
        ]
      : [
          `${age} y/o Turkish-German, born in Cologne.`,
          "Combined, I've grown 2 mio followers.",
          "Created content with Disney and LEGO.",
          "Currently figuring out what to build in 2026.",
          "My goal is to retire my mom in 3 years.",
          "kontakt@farukaltinok.com",
          "Best, Faruk",
        ];

  return (
    <main className="wrap home">
      <section className="card">
        <p className="homeText">
          <TypewriterOnce text={headline} speed={75} />
        </p>

        {lines.map((line, i) => (
          <p key={i} className={`homeText${i === lines.length - 2 ? " homeTextSpaced" : ""}`}>
            {line.includes("@") ? (
              <a href={`mailto:${line}`} className="homeLink">{line}</a>
            ) : (
              line
            )}
          </p>
        ))}
      </section>
    </main>
  );
}