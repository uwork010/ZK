import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "scrollTo", {
    configurable: true,
    value: vi.fn(),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("<HorizontalShowcase />", () => {
  it("exposes carousel semantics, count, progress, and boundary controls", () => {
    render(
      <HorizontalShowcase label="Services" cardClassName="w-[86%]">
        <article>Web</article>
        <article>Mobile</article>
      </HorizontalShowcase>,
    );

    expect(screen.getByRole("region", { name: "Services" })).toHaveAttribute("aria-roledescription", "carousel");
    expect(screen.getAllByRole("group", { name: /of 02/ })).toHaveLength(2);
    expect(screen.getByLabelText("01 / 02")).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: "Services progress" })).toHaveAttribute("aria-valuenow", "1");
    expect(screen.getByRole("button", { name: "Previous item" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next item" })).toBeEnabled();
  });

  it("moves with keyboard arrows and previous/next controls", async () => {
    render(
      <HorizontalShowcase label="Services" cardClassName="w-[86%]">
        <article>Web</article>
        <article>Mobile</article>
        <article>AI</article>
      </HorizontalShowcase>,
    );

    const track = screen.getByRole("group", { name: "Services slides" });
    fireEvent.keyDown(track, { key: "ArrowRight" });
    expect(HTMLElement.prototype.scrollTo).toHaveBeenCalledWith(expect.objectContaining({ behavior: "smooth" }));

    fireEvent.click(screen.getByRole("button", { name: "Next item" }));
    expect(HTMLElement.prototype.scrollTo).toHaveBeenCalledTimes(2);
  });

  it("updates the current count and progress from scroll position", async () => {
    render(
      <HorizontalShowcase label="Projects" cardClassName="w-[62%]">
        <article>One</article>
        <article>Two</article>
        <article>Three</article>
      </HorizontalShowcase>,
    );

    const track = screen.getByRole("group", { name: "Projects slides" });
    const secondSlide = screen.getByRole("group", { name: "02 of 03" });
    Object.defineProperty(secondSlide, "offsetLeft", { configurable: true, value: 320 });
    Object.defineProperty(track, "scrollLeft", { configurable: true, value: 320 });
    fireEvent.scroll(track);

    await waitFor(() => {
      expect(screen.getByLabelText("02 / 03")).toBeInTheDocument();
      expect(screen.getByRole("progressbar", { name: "Projects progress" })).toHaveAttribute("aria-valuenow", "2");
    });
  });
});