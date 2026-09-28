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
  it("includes the full requested services direction", () => {
    expect(serviceEntries.map(({ title }) => title)).toEqual([
      "Web Development",
      "Mobile App Development",
      "MVP & Product Development",
      "Game Development",
      "AI & Automation",
      "Custom Software Development",
      "UI/UX & Product Design",
      "Quality Assurance & Testing",
      "Graphic Design & Branding",
      "3D, Video & Creative Production",
      "Cloud, DevOps & IT Solutions",
      "Maintenance & Support",
    ]);
    expect(serviceEntries.map(({ slug }) => slug)).toEqual([
      "web-development",
      "mobile-app-development",
      "mvp-product-development",
      "game-development",
      "ai-automation",
      "custom-software-development",
      "ui-ux-product-design",
      "quality-assurance-testing",
      "graphic-design-branding",
      "3d-video-creative-production",
      "cloud-devops-it-solutions",
      "maintenance-support",
    ]);
  });

  it("provides complete, service-specific content for every detail route", () => {
    for (const entry of serviceEntries) {
      expect(entry.description.length, `${entry.slug} description`).toBeGreaterThan(40);
      expect(entry.heroTitle.length, `${entry.slug} hero title`).toBeGreaterThan(10);
      expect(entry.tags, `${entry.slug} tags`).toHaveLength(3);
      expect(entry.visual, `${entry.slug} visual`).toBeTruthy();
      expect(entry.processSteps, `${entry.slug} process`).toHaveLength(3);
      expect(entry.offers.length, `${entry.slug} offers`).toBeGreaterThan(0);
      expect(entry.technologies.length, `${entry.slug} technologies`).toBeGreaterThan(0);
      expect(entry.projectTypes.length, `${entry.slug} project types`).toBeGreaterThan(0);
      expect(entry.benefits.length, `${entry.slug} benefits`).toBeGreaterThan(0);
      expect(entry.useCases.length, `${entry.slug} use cases`).toBeGreaterThan(0);
      expect(entry.faqs, `${entry.slug} FAQs`).toHaveLength(2);
    }
  });

  it("exposes every canonical service route through the Services submenu", () => {
    const servicesMenu = navigationGroups.find((item) => item.label === "Services");
    expect(servicesMenu && "children" in servicesMenu ? servicesMenu.children : []).toEqual(
      serviceEntries.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })),
    );
  });

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