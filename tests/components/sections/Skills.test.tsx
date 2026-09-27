import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/sections/Skills";
import { agencyServiceGroups } from "@/lib/constants";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: { from: vi.fn() },
}));

afterEach(() => vi.restoreAllMocks());

describe("<Skills />", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { level: 2, name: /what we do/i }),
    ).toBeInTheDocument();
  });

  it("renders all service discipline headings", () => {
    render(<Skills />);
    for (const cat of agencyServiceGroups) {
      expect(
        screen.getByRole("heading", { level: 3, name: cat.name }),
      ).toBeInTheDocument();
    }
  });

  it("renders each agency service", () => {
    render(<Skills />);
    for (const group of agencyServiceGroups) {
      for (const service of group.services) {
        expect(screen.getAllByText(service.title).length).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
