import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/sections/About";
import { agencyServiceGroups } from "@/lib/constants";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: { from: vi.fn() },
  ScrollTrigger: {},
}));

beforeEach(() => {});
afterEach(() => vi.restoreAllMocks());

describe("<About />", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 2, name: /technology and creative, working as one/i }),
    ).toBeInTheDocument();
  });

  it("renders company-first positioning", () => {
    render(<About />);
    expect(screen.getByText(/we build digital products, software, AI solutions/i)).toBeInTheDocument();
  });

  it("renders the service disciplines without personal stats", () => {
    render(<About />);
    for (const group of agencyServiceGroups) {
      expect(screen.getByText(group.name)).toBeInTheDocument();
    }
    expect(screen.queryByText(/projects built|ML models/i)).not.toBeInTheDocument();
  });
});
