// app/go/[dest]/page.tsx
import { redirect } from "next/navigation";

const LINKS: Record<string, string> = {
  instagram: "https://www.instagram.com/farukaltiinok",
  youtube: "https://www.youtube.com/@farukaltinok",
  linkedin: "https://www.linkedin.com/in/farukaltinok",
  tiktok: "https://www.tiktok.com/@farukaltiinok",
};

export default function GoPage({ params }: { params: { dest: string } }) {
  const url = LINKS[params.dest];

  // unknown -> back to links
  if (!url) redirect("/links");

  // Always open web (Universal Links may open the native app automatically)
  redirect(url);
}
