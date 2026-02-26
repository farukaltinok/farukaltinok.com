"use client";

import Link from "next/link";
import essays from "./essays";
import { useLang } from "../components/LanguageContext";

export default function EssaysPage() {
  const { lang, t } = useLang();

  return (
    <main className="wrap wide">
      <section className="essaysList">
        {essays.map((essay) => {
          if (essay.comingSoon) {
            return (
              <div key={essay.slug} className="essayCard essayCard--soon">
                <h2 className="essayTitle">{essay.title[lang]}</h2>
                <p className="essayDesc">{t("essays.comingSoon")}</p>
              </div>
            );
          }

          return (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="essayCard"
            >
              <h2 className="essayTitle">{essay.title[lang]}</h2>
              <p className="essayDesc">{essay.description[lang]}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}