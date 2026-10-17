import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

/**
 * Builds page-specific Open Graph and Twitter metadata.
 * Each page passes its own title/description/path so social previews
 * match the page instead of showing the homepage values everywhere.
 */
export function socialMetadata(
  title: string,
  description: string,
  path: string
): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  return {
    openGraph: {
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
