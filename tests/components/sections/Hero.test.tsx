import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: {
    timeline: () => {
      const tl = {
        from: () => tl,
        isActive: () => false,
        progress: () => 1,
      };
      return tl;
    },
    quickTo: vi.fn(() => vi.fn()),
  },
}));

afterEach(() => {
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});

describe("<Hero />", () => {
  it("renders the company positioning as the main heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("From Idea to");
    expect(heading.textContent).toContain("Digital");
    expect(heading.textContent).toContain("Experience.");
  });

  it("shows agency positioning and the requested support copy", () => {
    render(<Hero />);
    expect(screen.getByText(/full-service technology & creative agency/i)).toBeInTheDocument();
    expect(screen.getByText(/websites, apps, games, and creative experiences/i)).toBeInTheDocument();
  });

  it("links to the project contact route", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute("href", "/contact");
  });

  it("links to the work overview", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /explore our work/i })).toHaveAttribute("href", "/work");
  });

  it("does not render personal availability messaging", () => {
    render(<Hero />);
    expect(screen.queryByText(/available for work/i)).not.toBeInTheDocument();
  });
});
