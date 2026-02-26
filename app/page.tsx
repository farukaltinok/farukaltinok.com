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
          "Kumuliert über 2 Mio Follower aufgebaut.",
          "Aktuell evaluiere ich, woran ich 2026 bauen möchte.",
          "Mein Ziel ist es, Mama in 3 Jahren zu retiren.",
          "Meine Mission ist es, die Welt zu verstehen und zu verbessern.",
          "kontakt@farukaltinok.com",
          "LG Faruk",
        ]
      : [
          `${age} y/o Turkish-German, born in Cologne.`,
          "Combined, I've grown over 2 million followers.",
          "Currently figuring out what to build in 2026.",
          "My goal is to retire my mom in 3 years.",
          "My mission is to understand and improve the world.",
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
            {line}
          </p>
        ))}
      </section>
    </main>
  );
}