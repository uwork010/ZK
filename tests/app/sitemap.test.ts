import { afterEach, describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { industryEntries, serviceEntries, solutionEntries, workEntries } from "@/lib/company-content";
import { insightArticles } from "@/lib/insights";

afterEach(() => vi.unstubAllEnvs());

describe("sitemap", () => {
  it("contains canonical public routes on the configured production origin", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");

    const urls = sitemap().map(({ url }) => url);
    const expectedPaths = [
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
    ];

    expect(urls).toEqual(expectedPaths.map((path) => `https://core-craft-roan.vercel.app${path}`));
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("uses a configured public origin consistently with robots", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://preview.example/path");

    expect(sitemap()[0].url).toBe("https://preview.example/");
    expect(robots()).toMatchObject({
      sitemap: "https://preview.example/sitemap.xml",
    });
  });
});
