import type { Metadata } from "next";
import { socialMetadata } from "@/lib/social-metadata";
import { ResearchClient } from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research Interests",
  description: "Computer-Aided Drug Discovery research alongside my degree — co-first author, manuscript under review.",
  alternates: { canonical: "/research" },
  ...socialMetadata("Research Interests", "Computer-Aided Drug Discovery research alongside my degree — co-first author, manuscript under review.", "/research"),
};

export default function ResearchPage() {
  return <ResearchClient />;
}
