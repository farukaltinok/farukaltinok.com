import SiteShell from "../components/SiteShell";
import { siteMetadata } from "../lib/site";

export const metadata = siteMetadata("de");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
