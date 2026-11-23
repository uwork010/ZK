import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InsightsOverview from "@/components/insights/InsightsOverview";
import { insightArticles, insightCategories } from "@/lib/insights";

describe("<InsightsOverview />", () => {
  it("shows a featured story and all eight article destinations", () => {
    const { container } = render(<InsightsOverview />);

    expect(screen.getByRole("heading", { name: /Ideas That Move Technology Forward/i })).toBeInTheDocument();
    expect(screen.getByText("Featured insight")).toBeInTheDocument();
    const destinations = new Set(
      Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="/insights/"]')).map((link) => link.getAttribute("href")),
    );
    expect(destinations.size).toBe(8);
    for (const article of insightArticles) {
      expect(destinations).toContain(`/insights/${article.slug}`);
    }
  });

  it("combines category and search filters and can reset them", async () => {
    const user = userEvent.setup();
    render(<InsightsOverview />);

    await user.click(screen.getByRole("button", { name: insightCategories[0] }));
    expect(screen.getByRole("link", { name: /How AI Automation Is Changing Everyday Business Operations/ })).toHaveAttribute(
      "href",
      "/insights/ai-automation-business-operations",
    );
    expect(screen.queryByRole("link", { name: /Building an MVP/ })).not.toBeInTheDocument();

    await user.type(screen.getByRole("searchbox", { name: "Search insights" }), "MVP");
    expect(screen.getByText("No insights found")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show all insights" }));
    expect(screen.getByRole("button", { name: "All Insights" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("searchbox", { name: "Search insights" })).toHaveValue("");
    expect(screen.getByText("Featured insight")).toBeInTheDocument();
  });

  it("supports live search across article keywords and clears the query", async () => {
    const user = userEvent.setup();
    render(<InsightsOverview />);
    const search = screen.getByRole("searchbox", { name: "Search insights" });

    await user.type(search, "prototyping");
    expect(screen.getByRole("link", { name: /Building an MVP/ })).toHaveAttribute("href", "/insights/building-an-mvp");
    expect(screen.getByRole("button", { name: "Clear search" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(search).toHaveValue("");
    expect(screen.getByText("Featured insight")).toBeInTheDocument();
  });
});
