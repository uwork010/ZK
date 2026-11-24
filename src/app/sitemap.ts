import type { MetadataRoute } from "next";
import { industryEntries, serviceEntries, solutionEntries, workEntries } from "@/lib/company-content";
import { insightArticles } from "@/lib/insights";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set([
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
    ...insightArticles.map(({ slug }) => `/insights/${slug}`),
  ]);
  const siteUrl = getSiteUrl();

  return [...routes].map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
