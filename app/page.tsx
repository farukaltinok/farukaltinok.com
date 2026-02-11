"use client";

import { useLang } from "./components/LanguageContext";

export default function Home() {
  const { t } = useLang();

  return (
    <main className="wrap home">
      <section className="card">
        <p className="homeText">{t("home.1")}</p>
        <p className="homeText">{t("home.2")}</p>
        <p className="homeText">{t("home.3")}</p>
        <p className="homeText">{t("home.4")}</p>
        <p className="homeText">{t("home.5")}</p>
        <p className="homeText">{t("home.6")}</p>
        <p className="homeText">{t("home.7")}</p>
        <p className="homeText">{t("home.8")}</p>
      </section>
    </main>
  );
}