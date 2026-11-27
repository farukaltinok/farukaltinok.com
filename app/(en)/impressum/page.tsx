import ImpressumView from "../../components/ImpressumView";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/impressum", "en");

export default function Page() {
  return <ImpressumView />;
}
