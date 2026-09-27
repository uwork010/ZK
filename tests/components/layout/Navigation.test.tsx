import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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

  it("opens a nested screen and returns to the main mobile menu", async () => {
    render(<Navigation />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = screen.getByRole("dialog", { name: "Mobile navigation" });
    fireEvent.click(within(menu).getByRole("button", { name: "Open Services submenu" }));
    expect(await within(menu).findByRole("heading", { name: "Services" })).toBeInTheDocument();
    expect(await within(menu).findByRole("link", { name: "Web Development" })).toHaveAttribute(
      "href",
      "/services/web-development",
    );
    fireEvent.click(within(menu).getByRole("button", { name: /back to menu/i }));
    expect(await within(menu).findByRole("link", { name: /Home/ })).toHaveAttribute("href", "/");
  });

  it("locks page scrolling while open and closes on Escape", async () => {
    render(<Navigation />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(document.documentElement.style.overflow).toBe("hidden");
    expect(document.documentElement).toHaveAttribute("data-mobile-menu-open", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Mobile navigation" })).not.toBeInTheDocument();
      expect(document.documentElement.style.overflow).toBe("");
      expect(document.documentElement).not.toHaveAttribute("data-mobile-menu-open");
    });
  });

  it("uses aria-current='page' on the active route", () => {
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
  });
});
