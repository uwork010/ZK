import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as THREE from "three";
import StarField from "@/components/three/StarField";

const { createdPoints, useFrameMock } = vi.hoisted(() => ({
  createdPoints: [] as unknown[],
  useFrameMock: vi.fn(),
}));

vi.mock("@react-three/fiber", () => ({
  useFrame: useFrameMock,
}));

vi.mock("@react-three/drei", async () => {
  const React = await import("react");
  const Three = await import("three");

  const Stars = React.forwardRef<THREE.Points, { count?: number }>((props, ref) => {
    const points = React.useMemo(() => {
      const geometry = new Three.BufferGeometry();
      geometry.setAttribute("color", new Three.Float32BufferAttribute([0.4, 0.5, 0.6, 0.6, 0.7, 0.8], 3));
      const instance = new Three.Points(geometry, new Three.ShaderMaterial());
      createdPoints.push(instance);
      return instance;
    }, []);

    React.useImperativeHandle(ref, () => points, [points]);
    return React.createElement("div", { "data-testid": "star-layer", "data-count": props.count });
  });
  Stars.displayName = "MockStars";

  return { Stars };
});

vi.mock("@/hooks/useMousePosition", () => ({
  useMousePosition: () => ({ current: { normalizedX: 0, normalizedY: 0 } }),
}));

vi.mock("@/hooks/useQuality", () => ({
  useQuality: () => ({ starCount1: 2, starCount2: 2 }),
}));

afterEach(() => {
  createdPoints.length = 0;
  useFrameMock.mockClear();
});

describe("<StarField />", () => {
  it("keeps both layers and tints vertex colors without assuming the shader material has a color", () => {
    render(<StarField />);

    expect(screen.getAllByTestId("star-layer")).toHaveLength(2);
    expect(useFrameMock).toHaveBeenCalledOnce();
    expect(createdPoints).toHaveLength(2);

    const points = createdPoints as THREE.Points[];
    for (const starLayer of points) {
      expect(starLayer.material).toBeInstanceOf(THREE.ShaderMaterial);
      expect((starLayer.material as THREE.ShaderMaterial & { color?: THREE.Color }).color).toBeUndefined();
      expect(Array.from(starLayer.geometry.getAttribute("color").array)).not.toEqual([0.4, 0.5, 0.6, 0.6, 0.7, 0.8]);
    }
  });
});