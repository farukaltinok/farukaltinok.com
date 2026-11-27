import HomeView from "../components/HomeView";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata("/", "en");

export default function Page() {
  return <HomeView />;
}
