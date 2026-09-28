import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import HomeSections from "@/components/sections/HomeSections";

describe("<HomeSections />", () => {
  it("renders the required showcases and exact content counts", () => {
    render(<HomeSections />);

    for (const label of ["Featured services", "Selected work concepts", "Project process", "Technology stack"]) {
      expect(screen.getByRole("region", { name: label })).toHaveAttribute("aria-roledescription", "carousel");
    }
    expect(screen.getAllByRole("link", { name: "Explore Service" })).toHaveLength(6);
    expect(screen.getAllByText("SAMPLE / DEMO CONCEPT")).toHaveLength(4);
    expect(within(screen.getByRole("region", { name: "Questions Before We Start" })).getAllByRole("button")).toHaveLength(7);
  const whatsappLink = screen.getByRole("link", { name: "Chat with CORE & CRAFT on WhatsApp" });
  expect(whatsappLink).toHaveAttribute("href", expect.stringContaining("https://wa.me/923705752100?text="));
  expect(whatsappLink).toHaveAttribute("target", "_blank");

    for (const title of [
      "SaaS Operations Platform",
      "AI Customer Assistant",
      "Mobile Marketplace App",
      "3D Product Campaign",
      "Discover",
      "Plan",
      "Design",
      "Build",
      "Test",
      "Launch",
      "Improve",
      "Frontend",
      "Backend",
      "Mobile",
      "AI & Automation",
      "Games & Immersive",
      "Cloud & DevOps",
      "Testing & QA",
      "Design & Creative",
    ]) {
      expect(screen.getAllByRole("heading", { name: title }).length).toBeGreaterThan(0);
    }
  });

  it("links each service to a current detail route and each demo concept to Work", () => {
    render(<HomeSections />);

    const expectedServices = [
      "/services/web-development",
      "/services/mobile-app-development",
      "/services/ai-automation",
      "/services/custom-software-development",
      "/services/ui-ux-product-design",
      "/services/game-development",
    ];
    expect(screen.getAllByRole("link", { name: "Explore Service" }).map((link) => link.getAttribute("href"))).toEqual(expectedServices);

    const workLinks = screen.getAllByRole("link", { name: /View .* in selected work/ });
    expect(workLinks).toHaveLength(4);
    expect(workLinks.every((link) => link.getAttribute("href") === "/work")).toBe(true);

    const selectedWork = screen.getByRole("region", { name: "Selected work concepts" });
    expect(within(selectedWork).getAllByText("SAMPLE / DEMO CONCEPT")).toHaveLength(4);
  });
});