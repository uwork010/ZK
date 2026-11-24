import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import AboutOverview from "@/components/company/AboutOverview";
import { serviceEntries } from "@/lib/company-content";

describe("<AboutOverview />", () => {
  it("renders the CEO leadership profile without education claims", () => {
    render(<AboutOverview />);

    expect(screen.getByRole("heading", { name: "ZAFFAR KHAN" })).toBeInTheDocument();
    expect(screen.getByText("Chief Executive Officer — CORE & CRAFT")).toBeInTheDocument();
    expect(screen.queryByText("Education")).not.toBeInTheDocument();
    expect(screen.getByText("Zaffar Khan · CEO")).toBeInTheDocument();
    expect(screen.getByText(/Zaffar Khan leads CORE & CRAFT/)).toBeInTheDocument();
  });

  it("links every capability to its canonical service route", () => {
    render(<AboutOverview />);
    const capabilities = screen.getByRole("region", { name: "What We Bring Together." });

    const links = within(capabilities).getAllByRole("link");
    const destinations = new Set(links.map((link) => link.getAttribute("href")));

    for (const service of serviceEntries) {
      expect(destinations, service.slug).toContain(`/services/${service.slug}`);
    }
    expect(links).toHaveLength(serviceEntries.length + 1);
  });

  it("connects the prominent calls to action to existing pages", () => {
    render(<AboutOverview />);

    expect(screen.getByRole("link", { name: /Explore Our Services/i })).toHaveAttribute("href", "/services");
    expect(screen.getAllByRole("link", { name: /Start a Project/i }).every((link) => link.getAttribute("href") === "/contact")).toBe(true);
    expect(screen.getByRole("link", { name: /Explore Our Work/i })).toHaveAttribute("href", "/work");
  });
});
