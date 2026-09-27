import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

const scrollToMock = vi.fn();
vi.mock("lenis/react", () => ({
  useLenis: () => ({ scrollTo: scrollToMock }),
}));

beforeEach(() => scrollToMock.mockReset());
afterEach(() => vi.restoreAllMocks());

describe("<Footer />", () => {
  it("renders copyright with the current year and company name", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText(/Technology Company/i)).toBeInTheDocument();
  });

  it("links to the legal pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
  });

  it("calls lenis.scrollTo(0) when 'Back to top' is clicked", () => {
    render(<Footer />);
    fireEvent.click(screen.getByRole("button", { name: /back to top/i }));
    expect(scrollToMock).toHaveBeenCalledOnce();
    expect(scrollToMock).toHaveBeenCalledWith(0, expect.any(Object));
  });
});
