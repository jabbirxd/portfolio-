import type { Metadata } from "next";
import { SkillsClient } from "./SkillsClient";

export const metadata: Metadata = {
  title: "Capabilities & Competencies",
  description: "An honest list: what I'm comfortable with, what I'm learning, and what I'm curious about.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
