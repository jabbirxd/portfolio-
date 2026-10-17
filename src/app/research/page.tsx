import type { Metadata } from "next";
import { ResearchClient } from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research Interests",
  description: "Topics I read about and study alongside my coursework — computational biology, drug design, and learning in public.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return <ResearchClient />;
}
