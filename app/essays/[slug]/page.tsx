import { notFound } from "next/navigation";
import Link from "next/link";
import essays, { getEssayBySlug } from "../essays";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return essays
    .filter((e) => !e.comingSoon)
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: `${essay.title} – Faruk Altinok`,
    description: essay.description,
  };
}

/**
 * Splits essay content into sections.
 * A "section" starts with a roman-numeral line like "i.", "ii.", "viii." etc.
 * Everything before the first numeral is the intro (rendered without label).
 */
function parseEssay(content: string) {
  // Split into individual lines, preserving blank lines as empty strings
  const lines = content.split("\n");

  const sections: { label: string | null; paragraphs: string[] }[] = [];
  let currentLabel: string | null = null;
  let currentLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Check if this line is a roman numeral heading (e.g. "i.", "ii.", "ix.")
    if (/^[ivxlcdm]+\.$/i.test(trimmed)) {
      // Save previous section
      if (currentLines.length > 0 || currentLabel !== null) {
        sections.push({
          label: currentLabel,
          paragraphs: buildParagraphs(currentLines),
        });
      }
      currentLabel = trimmed;
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  // Push the last section
  if (currentLines.length > 0 || currentLabel !== null) {
    sections.push({
      label: currentLabel,
      paragraphs: buildParagraphs(currentLines),
    });
  }

  return sections;
}

/** Joins consecutive non-empty lines into paragraphs, blank lines = paragraph break */
function buildParagraphs(lines: string[]): string[] {
  const paragraphs: string[] = [];
  let buffer = "";

  for (const line of lines) {
    if (line.trim() === "") {
      if (buffer.trim()) {
        paragraphs.push(buffer.trim());
      }
      buffer = "";
    } else {
      buffer += (buffer ? " " : "") + line.trim();
    }
  }

  if (buffer.trim()) {
    paragraphs.push(buffer.trim());
  }

  return paragraphs;
}

export default async function EssayDetailPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay || essay.comingSoon) notFound();

  const sections = parseEssay(essay.content ?? "");

  return (
    <main className="wrap wide">
      <article className="essayArticle">
        <Link href="/essays" className="essayBack">
          ← Essays
        </Link>

        <header className="essayHeader">
          <h1 className="essayArticleTitle">{essay.title}</h1>
        </header>

        <div className="essayContent">
          {sections.map((section, i) => (
            <section key={i} className="essaySection">
              {section.label && (
                <p className="essaySectionLabel">{section.label}</p>
              )}
              {section.paragraphs.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}