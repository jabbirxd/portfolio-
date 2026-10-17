import type { Metadata } from "next";
import { socialMetadata } from "@/lib/social-metadata";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "Education, projects, skills, and experience — printable as a PDF.",
  alternates: { canonical: "/resume" },
  ...socialMetadata("Resume", "Education, projects, skills, and experience — printable as a PDF.", "/resume"),
};

export default function ResumePage() {
  return <ResumeClient />;
}
