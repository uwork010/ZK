import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/sections/Contact";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: { from: vi.fn() },
}));

vi.mock("@/components/sections/ContactForm", () => ({
  default: () => <div data-testid="contact-form" />,
}));

afterEach(() => vi.restoreAllMocks());

describe("<Contact />", () => {
  it("renders the company contact heading", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { level: 2, name: /let.+s make something matter/i }),
    ).toBeInTheDocument();
  });

  it("renders the form (mocked)", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("links to the company services overview", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /explore services/i })).toHaveAttribute("href", "/services");
  });
});
