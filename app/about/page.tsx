"use client";

import TypewriterGoals from "../components/TypewriterGoals";
import { useLang } from "../components/LanguageContext";

export default function About() {
  const { t } = useLang();

  const timeline = [
    { date: "10.02.26", key: "about.t0" },
    { date: "16.10.25", key: "about.t1" },
    { date: "16.07.23", key: "about.t3" },
    { date: "14.07.22", key: "about.t4" },
    { date: "13.12.19", key: "about.t5" },
    { date: "12.07.19", key: "about.t6" },
    { date: "12.08.15", key: "about.t7" },
    { date: "18.07.15", key: "about.t8" },
    { date: "11.08.14", key: "about.t9" },
    { date: "28.12.13", key: "about.t10" },
    { date: "04.04.07", key: "about.t11" },
    { date: "14.11.02", key: "about.t12" },
  ];

  return (
    <main className="wrap wide">
      <section className="timelineList">
        <div className="timelineRow">
          <TypewriterGoals
            goals={[
              t("about.goal1"),
              t("about.goal2"),
              t("about.goal3"),
            ]}
          />
        </div>

        {timeline.map((item) => (
          <div key={item.date} className="timelineRow">
            <span className="timelineDate">{item.date}</span>
            <span className="timelineText">{t(item.key)}</span>
          </div>
        ))}
      </section>
    </main>
  );
}