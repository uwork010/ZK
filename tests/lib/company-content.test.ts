import { describe, expect, it } from "vitest";
import {
  industryEntries,
  insightEntries,
  navigationGroups,
  serviceEntries,
  solutionEntries,
  workEntries,
} from "@/lib/company-content";

const detailRoutes: Record<string, { slug: string }[]> = {
  "/services": serviceEntries,
  "/solutions": solutionEntries,
  "/industries": industryEntries,
  "/work": workEntries,
  "/insights": insightEntries,
};

describe("company navigation destinations", () => {
  it("keeps every primary link on a defined page route", () => {
    const routes = new Set([
      "/",
      "/services",
      "/solutions",
      "/industries",
      "/work",
      "/about",
      "/insights",
      "/contact",
    ]);

    for (const item of navigationGroups) {
      expect(routes.has(item.href), `${item.label} should point to a page`).toBe(true);
    }
  });

  it("keeps nested menu links aligned with generated detail slugs", () => {
    for (const item of navigationGroups) {
      if (!("children" in item) || !item.children) continue;
      const [basePath, ...slugParts] = item.href.split("/").filter(Boolean);
      const expectedBase = `/${basePath}`;
      const entries = detailRoutes[expectedBase];

      expect(entries, `${item.label} should have detail data`).toBeDefined();
      for (const child of item.children) {
        const slug = child.href.replace(`${expectedBase}/`, "");
        expect(entries?.some((entry) => entry.slug === slug), `${child.href} should have a generated detail route`).toBe(true);
      }
      expect(slugParts).toHaveLength(0);
    }
  });
});