import type { Metadata } from "next";
import { socialMetadata } from "@/lib/social-metadata";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Real projects I designed, built, and shipped with Next.js, TypeScript, and Laravel. Each one taught me something.",
  alternates: { canonical: "/work" },
  ...socialMetadata("Selected Work", "Real projects I designed, built, and shipped with Next.js, TypeScript, and Laravel. Each one taught me something.", "/work"),
};

export default function WorkPage() {
  return <WorkClient />;
}
