// app/(en)/go/[dest]/page.tsx
import { redirect } from "next/navigation";

const LINKS: Record<string, string> = {
  instagram: "https://www.instagram.com/farukaltiinok",
  youtube: "https://www.youtube.com/@farukaltinok",
  linkedin: "https://www.linkedin.com/in/farukaltinok",
  tiktok: "https://www.tiktok.com/@farukaltiinok",
};

export default async function GoPage({
  params,
}: {
  // Since Next 15 params is a Promise. Read without await, dest was always
  // undefined and every link fell through to /links.
  params: Promise<{ dest: string }>;
}) {
  const { dest } = await params;
  // hasOwn keeps inherited keys like "constructor" from counting as a link.
  const url = Object.hasOwn(LINKS, dest) ? LINKS[dest] : undefined;

  // unknown -> back to links
  if (!url) redirect("/links");

  // Always open web (Universal Links may open the native app automatically)
  redirect(url);
}
