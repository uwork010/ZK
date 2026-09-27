import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import GalaxyCanvas from "@/components/three/GalaxyCanvas";

const { cameraSet, cameraLookAt } = vi.hoisted(() => ({
  cameraSet: vi.fn(),
  cameraLookAt: vi.fn(),
}));

vi.mock("@react-three/fiber", async () => {
  const React = await import("react");
  return {
    Canvas: ({ children }: { children: ReactNode }) => React.createElement("div", { "data-testid": "canvas" }, children),
    useFrame: vi.fn(),
    useThree: () => ({ camera: { position: { set: cameraSet }, lookAt: cameraLookAt } }),
  };
});

vi.mock("@react-three/drei", async (importOriginal) => ({
  ...await importOriginal<typeof import("@react-three/drei")>(),
  Preload: () => null,
}));
vi.mock("@react-three/postprocessing", () => ({
  EffectComposer: ({ children }: { children: ReactNode }) => children,
  Bloom: () => null,
  Vignette: () => null,
}));
vi.mock("@/hooks/useQuality", () => ({
  useQuality: () => ({
    dpr: 1,
    postProcessing: true,
    bloomIntensity: 0.34,
    mipmapBlur: false,
  }),
}));
vi.mock("@/components/three/GalaxyParticles", () => ({ default: ({ ambient }: { ambient: boolean }) => <span data-testid="particles" data-ambient={String(ambient)} /> }));
vi.mock("@/components/three/StarField", () => ({ default: () => <span data-testid="stars" /> }));
vi.mock("@/components/three/SolarSystem", () => ({ default: () => <span data-testid="solar-system" /> }));
vi.mock("@/components/three/ScrollCamera", () => ({ default: () => <span data-testid="scroll-camera" /> }));

describe("<GalaxyCanvas /> route modes", () => {
  it("keeps the complete scroll-driven scene on Home", () => {
    const { container } = render(<GalaxyCanvas isHome />);

    expect(screen.getByTestId("scroll-camera")).toBeInTheDocument();
    expect(screen.getByTestId("solar-system")).toBeInTheDocument();
    expect(screen.getByTestId("particles")).toHaveAttribute("data-ambient", "false");
    expect(screen.getByTestId("stars")).toBeInTheDocument();
    expect(container.querySelector(".pointer-events-none")).toBeInTheDocument();
  });

  it("uses only ambient particles and stars off Home, with a fixed camera", () => {
    render(<GalaxyCanvas isHome={false} />);

    expect(screen.queryByTestId("scroll-camera")).not.toBeInTheDocument();
    expect(screen.queryByTestId("solar-system")).not.toBeInTheDocument();
    expect(screen.getByTestId("particles")).toHaveAttribute("data-ambient", "true");
    expect(screen.getByTestId("stars")).toBeInTheDocument();
    expect(cameraSet).toHaveBeenCalledWith(0, 3, 16);
    expect(cameraLookAt).toHaveBeenCalledWith(0, 0, 0);
  });
});