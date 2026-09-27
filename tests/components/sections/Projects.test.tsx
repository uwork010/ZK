import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectsHeader, ProjectDetail } from "@/components/sections/Projects";
import { projects } from "@/lib/constants";

vi.mock("@gsap/react", () => ({
  useGSAP: (cb: () => void) => cb(),
}));

vi.mock("@/lib/gsap-config", () => ({
  gsap: { from: vi.fn() },
}));

afterEach(() => vi.restoreAllMocks());

describe("<ProjectsHeader />", () => {
  it("renders the sample concepts heading", () => {
    render(<ProjectsHeader />);
    expect(
      screen.getByRole("heading", { level: 2, name: /selected work concepts/i }),
    ).toBeInTheDocument();
  });
});

describe("<ProjectDetail />", () => {
  it("renders nothing for an out-of-range index", () => {
    const { container } = render(<ProjectDetail index={999} />);
    expect(container.firstChild).toBeNull();
  });

  it.each(projects.map((p, i) => [i, p]))(
    "renders title, description and tech tags for project %i (%s)",
    (i, project) => {
      render(<ProjectDetail index={i as number} />);
      expect(
        screen.getByRole("heading", { level: 3, name: project.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      for (const tech of project.technologies) {
        expect(screen.getAllByText(tech).length).toBeGreaterThanOrEqual(1);
      }
    },
  );

  it("labels every planet-linked item as a sample and avoids invented client links", () => {
    render(<ProjectDetail index={0} />);
    expect(screen.getAllByText(/sample \/ demo concept/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByRole("link", { name: /github|live demo/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore all work concepts/i })).toHaveAttribute("href", "/work");
  });
});
