import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeFAQ from "@/components/sections/HomeFAQ";

describe("<HomeFAQ />", () => {
  it("renders seven keyboard-operable questions and keeps one answer open at a time", () => {
    render(<HomeFAQ />);

    const questions = screen.getAllByRole("button");
    expect(questions).toHaveLength(7);
    expect(questions[0]).toHaveAttribute("aria-expanded", "true");
    expect(questions[1]).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(questions[1]);

    expect(questions[0]).toHaveAttribute("aria-expanded", "false");
    expect(questions[1]).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "How long does development take?" })).toBeVisible();
  });

  it("closes the current answer when its question is activated again", () => {
    render(<HomeFAQ />);
    const firstQuestion = screen.getByRole("button", { name: /how much does a project cost/i });

    fireEvent.click(firstQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("home-faq-answer-1")).not.toBeVisible();
  });
});