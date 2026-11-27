import ImpressumView from "../../components/ImpressumView";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/impressum", "de");

export default function Page() {
  return <ImpressumView />;
}
