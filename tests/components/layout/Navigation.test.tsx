import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "@/components/layout/Navigation";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

beforeEach(() => vi.clearAllMocks());

afterEach(() => vi.restoreAllMocks());

describe("<Navigation />", () => {
  it("renders the company routes and project CTA", () => {
    render(<Navigation />);
    for (const [label, href] of [
      ["Home", "/"],
      ["Services", "/services"],
      ["Solutions", "/solutions"],
      ["Industries", "/industries"],
      ["Work", "/work"],
      ["About", "/about"],
      ["Insights", "/insights"],
      ["Contact", "/contact"],
      ["Start a Project", "/contact"],
    ]) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    }
  });

  it("expands nested routes from the mobile menu", () => {
    render(<Navigation />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    fireEvent.click(screen.getByRole("button", { name: /expand services submenu/i }));
    expect(screen.getByRole("link", { name: "Product Engineering" })).toHaveAttribute(
      "href",
      "/services/product-engineering",
    );
  });

  it("toggles the mobile menu and reflects aria-expanded", () => {
    render(<Navigation />);
    const toggle = screen.getByLabelText(/open menu/i);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("uses aria-current='page' on the active route", () => {
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
  });
});
