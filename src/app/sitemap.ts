import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { getAllProjectSlugs } from "@/data/projects";
import { getAllResearchSlugs } from "@/data/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Core Static Routes
  const staticRoutes = [
    "",
    "/work",
    "/research",
    "/about",
    "/skills",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Project Case Studies
  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Research Studies
  const researchRoutes = getAllResearchSlugs().map((slug) => ({
    url: `${baseUrl}/research/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...researchRoutes];
}
