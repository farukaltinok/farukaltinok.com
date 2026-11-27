import SiteShell from "../components/SiteShell";
import { siteMetadata } from "../lib/site";

export const metadata = siteMetadata("en");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
