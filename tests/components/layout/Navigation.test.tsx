import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import type { ComponentProps } from "react";
import Navigation from "@/components/layout/Navigation";
import { serviceEntries } from "@/lib/company-content";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ href, onNavigate, ...props }: ComponentProps<"a"> & { onNavigate?: () => void }) => (
    <a href={href} {...props} onClick={(event) => { event.preventDefault(); onNavigate?.(); }} />
  ),
}));

beforeEach(() => vi.clearAllMocks());

afterEach(() => vi.restoreAllMocks());

describe("<Navigation />", () => {
  it("renders the company routes and project CTA", () => {
    render(<Navigation />);
    for (const [label, href] of [
      ["CORE & CRAFT home", "/"],
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
    for (const service of serviceEntries) {
      expect(within(menu).getByRole("link", { name: service.title })).toHaveAttribute("href", `/services/${service.slug}`);
    }
    expect(await within(menu).findByRole("link", { name: "Web Development" })).toHaveAttribute(
      "href",
      "/services/web-development",
    );
    fireEvent.click(within(menu).getByRole("button", { name: /back to menu/i }));
    expect(await within(menu).findByRole("link", { name: /Home/ })).toHaveAttribute("href", "/");

    fireEvent.click(within(menu).getByRole("button", { name: "Open Services submenu" }));
    const serviceDetail = await within(menu).findByRole("link", { name: "Web Development" });
    expect(serviceDetail).toHaveAttribute("href", "/services/web-development");
    fireEvent.click(serviceDetail);
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Mobile navigation" })).not.toBeInTheDocument();
      expect(document.body.style.overflow).toBe("");
    });
  });

  it("closes the desktop submenu when a destination is selected", async () => {
    render(<Navigation />);
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    fireEvent.click(within(navigation).getByRole("button", { name: "Open Services submenu" }));
    const exploreLink = within(navigation).getByRole("link", { name: "Explore Services" });
    expect(exploreLink).toHaveAttribute("href", "/services");
    fireEvent.click(exploreLink);
    await waitFor(() => {
      expect(within(navigation).queryByRole("link", { name: "Explore Services" })).not.toBeInTheDocument();
    });
  });

  it("exposes all 12 canonical service links in the desktop submenu", () => {
    render(<Navigation />);
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    fireEvent.click(within(navigation).getByRole("button", { name: "Open Services submenu" }));

    for (const service of serviceEntries) {
      expect(within(navigation).getByRole("link", { name: service.title })).toHaveAttribute("href", `/services/${service.slug}`);
    }
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

  it("closes the mobile menu and unlocks page scrolling on route navigation", async () => {
    render(<Navigation />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = screen.getByRole("dialog", { name: "Mobile navigation" });
    const servicesLink = within(menu).getByRole("link", { name: /Services/ });
    expect(servicesLink).toHaveAttribute("href", "/services");
    fireEvent.click(servicesLink);

    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Mobile navigation" })).not.toBeInTheDocument();
      expect(document.documentElement.style.overflow).toBe("");
      expect(document.body.style.overflow).toBe("");
      expect(document.documentElement).not.toHaveAttribute("data-mobile-menu-open");
    });
  });

  it("uses aria-current='page' on the active route", () => {
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "CORE & CRAFT home" })).toHaveAttribute("aria-current", "page");
  });
});
