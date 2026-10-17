import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "Education, projects, skills, and experience — printable as a PDF.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return <ResumeClient />;
}
