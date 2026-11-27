import AboutView from "../../components/AboutView";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/about", "de");

export default function Page() {
  return <AboutView />;
}
