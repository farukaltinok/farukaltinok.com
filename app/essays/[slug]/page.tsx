"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import essays, { getEssayBySlug } from "../essays";
import { useLang } from "../../components/LanguageContext";

/**
 * Splits essay content into sections.
 * A "section" starts with a roman-numeral line like "i.", "ii.", "viii." etc.
 */
function parseEssay(content: string) {
  const lines = content.split("\n");

  const sections: { label: string | null; paragraphs: string[] }[] = [];
  let currentLabel: string | null = null;
  let currentLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^[ivxlcdm]+\.$/i.test(trimmed)) {
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

  if (currentLines.length > 0 || currentLabel !== null) {
    sections.push({
      label: currentLabel,
      paragraphs: buildParagraphs(currentLines),
    });
  }

  return sections;
}

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

export default function EssayDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useLang();

  const essay = getEssayBySlug(slug);

  if (!essay || essay.comingSoon) notFound();

  const content = essay.content?.[lang] ?? "";
  const sections = parseEssay(content);

  return (
    <main className="wrap wide">
      <article className="essayArticle">
        <Link href="/essays" className="essayBack">
          {t("essays.back")}
        </Link>

        <header className="essayHeader">
          <h1 className="essayArticleTitle">{essay.title[lang]}</h1>
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

        {essay.writtenOn?.[lang] && (
          <p className="essayWrittenDate">{essay.writtenOn[lang]}</p>
        )}
      </article>
    </main>
  );
}