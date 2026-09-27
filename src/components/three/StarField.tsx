"use client";

import { useEffect, useRef } from "react";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useQuality } from "@/hooks/useQuality";

export default function StarField() {
  const groupRef = useRef<THREE.Group>(null);
  const farStarsRef = useRef<THREE.Points>(null);
  const nearStarsRef = useRef<THREE.Points>(null);
  const mouse = useMousePosition();
  const smooth = useRef({ x: 0, y: 0 });
  const q = useQuality();

  useEffect(() => {
    const tintVertices = (points: THREE.Points | null, tintHex: string, strength: number) => {
      const colors = points?.geometry?.getAttribute("color");
      if (!colors) return;

      const tint = new THREE.Color(tintHex);
      const original = new THREE.Color();
      for (let index = 0; index < colors.count; index++) {
        const brightness = 0.82 + (index % 7) * 0.025;
        original.fromBufferAttribute(colors, index).lerp(tint, strength).multiplyScalar(brightness);
        colors.setXYZ(index, original.r, original.g, original.b);
      }
      colors.needsUpdate = true;
    };

    tintVertices(farStarsRef.current, "#d8efff", 0.08);
    tintVertices(nearStarsRef.current, "#a8dfff", 0.12);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    smooth.current.x += (mouse.current.normalizedX - smooth.current.x) * 0.015;
    smooth.current.y += (mouse.current.normalizedY - smooth.current.y) * 0.015;

    groupRef.current.rotation.y = smooth.current.x * 0.05;
    groupRef.current.rotation.x = smooth.current.y * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Dense far background */}
      <Stars
        ref={farStarsRef}
        radius={300}
        depth={100}
        count={q.starCount1}
        factor={4}
        saturation={0.2}
        fade
        speed={0.5}
      />
      {/* Closer brighter layer */}
      {q.starCount2 > 0 && (
        <Stars
          ref={nearStarsRef}
          radius={150}
          depth={60}
          count={q.starCount2}
          factor={6}
          saturation={0.4}
          fade
          speed={0.8}
        />
      )}
    </group>
  );
}
