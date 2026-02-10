import Link from "next/link";
import essays from "./essays";

export default function EssaysPage() {
  return (
    <main className="wrap wide">
      <section className="essaysList">
        {essays.map((essay) => {
          if (essay.comingSoon) {
            return (
              <div key={essay.slug} className="essayCard essayCard--soon">
                <h2 className="essayTitle">{essay.title}</h2>
                <p className="essayDesc">Kommt bald.</p>
              </div>
            );
          }

          return (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="essayCard"
            >
              <h2 className="essayTitle">{essay.title}</h2>
              <p className="essayDesc">{essay.description}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}