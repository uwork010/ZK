import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

const scrollToMock = vi.fn();
const routeState = vi.hoisted(() => ({ pathname: "/about" }));
vi.mock("next/navigation", () => ({ usePathname: () => routeState.pathname }));
vi.mock("lenis/react", () => ({
  useLenis: () => ({ scrollTo: scrollToMock }),
}));

beforeEach(() => {
  scrollToMock.mockReset();
  routeState.pathname = "/about";
});
afterEach(() => vi.restoreAllMocks());

describe("<Footer />", () => {
  it("renders copyright with the current year and company name", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText((text) => text.includes(year) && text.includes("CORE & CRAFT"))).toBeInTheDocument();
  });

  it("links to the legal pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
  });

  it("uses readable muted text for footer information", () => {
    render(<Footer />);
    expect(screen.getByText("Full-Service Technology & Creative Agency.")).toHaveClass("text-text-muted");
    expect(screen.getByRole("navigation", { name: "Legal" })).toHaveClass("text-text-muted");
  });

  it("renders detailed company links and contact details on the home page", () => {
    routeState.pathname = "/";
    render(<Footer />);

    for (const [label, href] of [
      ["Web Development", "/services/web-development"],
      ["Mobile App Development", "/services/mobile-app-development"],
      ["AI & Automation", "/services/ai-automation"],
      ["Custom Software", "/services/custom-software-development"],
      ["UI/UX Design", "/services/ui-ux-product-design"],
      ["Game Development", "/services/game-development"],
      ["About", "/about"],
      ["Work", "/work"],
      ["Insights", "/insights"],
      ["Contact", "/contact"],
      ["Startups", "/solutions/startups"],
      ["Business Automation", "/solutions/business-automation"],
      ["Digital Transformation", "/solutions/digital-transformation"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ]) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    }

    expect(screen.getByRole("link", { name: "uwork428@gmail.com" })).toHaveAttribute("href", "mailto:uwork428@gmail.com");
    expect(screen.getByRole("link", { name: "+92 370 5752100" })).toHaveAttribute("href", expect.stringContaining("wa.me/923705752100"));
    expect(screen.getByText(/© 2026 CORE & CRAFT\. All rights reserved\./)).toBeInTheDocument();
  });

  it("calls lenis.scrollTo(0) when 'Back to top' is clicked", () => {
    render(<Footer />);
    fireEvent.click(screen.getByRole("button", { name: /back to top/i }));
    expect(scrollToMock).toHaveBeenCalledOnce();
    expect(scrollToMock).toHaveBeenCalledWith(0, expect.any(Object));
  });
});
