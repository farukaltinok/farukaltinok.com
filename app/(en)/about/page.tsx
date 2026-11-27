import AboutView from "../../components/AboutView";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/about", "en");

export default function Page() {
  return <AboutView />;
}
