import type { MetadataRoute } from "next";
import { industryEntries, insightEntries, serviceEntries, solutionEntries, workEntries } from "@/lib/company-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : undefined;
  if (!baseUrl) return [];

  const routes = [
    "/",
    "/services",
    "/solutions",
    "/industries",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    ...serviceEntries.map(({ slug }) => `/services/${slug}`),
    ...solutionEntries.map(({ slug }) => `/solutions/${slug}`),
    ...industryEntries.map(({ slug }) => `/industries/${slug}`),
    ...workEntries.map(({ slug }) => `/work/${slug}`),
    ...insightEntries.map(({ slug }) => `/insights/${slug}`),
  ];

  return routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "/" ? 1 : 0.7,
    }));
}
