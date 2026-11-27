import { notFound } from "next/navigation";

// With one root layout per language there is no global layout for Next to
// render a 404 in. This catch-all sends unknown URLs to the 404 of this
// layout, so the page keeps its header and footer.
export default function CatchAllNotFound() {
  notFound();
}
