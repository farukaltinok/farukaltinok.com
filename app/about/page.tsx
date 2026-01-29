import TypewriterGoals from "../components/TypewriterGoals";

const timeline = [
  { date: "16.10.25", text: "Unter Shaolin Mönchen in China gelebt" },
  { date: "08.10.24", text: "Palutens Nummer geklärt (mein größter Flex)" },
  { date: "12.05.24", text: "Mit YouTube gestartet" },
  { date: "14.07.22", text: "1 Mio Follower geknackt" },
  { date: "13.12.19", text: "Mit TikTok gestartet" },
  { date: "12.08.15", text: "Side Quests pausiert & auf Schule fokussiert" },
  { date: "18.07.15", text: "Wollte Biotech Company starten" },
  { date: "11.08.14", text: "Eigenes Jump & Run Game programmiert" },
  { date: "28.12.13", text: "Versucht ein Magnetmotor zu bauen" },
  { date: "04.04.07", text: "Mutismus Diagnose bekommen" },
  { date: "14.11.02", text: "Geboren in Köln, um 18:32 Uhr" },
];

export default function About() {
  return (
    <main className="wrap wide">
      <section className="timelineList">
        <div className="timelineRow">
          <TypewriterGoals
            goals={[
              "Mama in 3 Jahren retiren",
              "Road to 100K€ im Monat",
              "Reise in die Arktis planen (2026)",
            ]}
          />
        </div>

        {timeline.map((item) => (
          <div key={item.date} className="timelineRow">
            <span className="timelineDate">{item.date}</span>
            <span className="timelineText">{item.text}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
