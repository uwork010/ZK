"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import GalaxyParticles from "./GalaxyParticles";
import StarField from "./StarField";
import SolarSystem from "./SolarSystem";
import ScrollCamera from "./ScrollCamera";
import { useQuality } from "@/hooks/useQuality";

function SceneReadySignal() {
  const fired = useRef(false);
  useFrame(() => {
    if (!fired.current) {
      fired.current = true;
      window.dispatchEvent(new Event("scene-ready"));
    }
  });
  return null;
}

function AmbientCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 3, 16);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

export default function GalaxyCanvas({ isHome }: { isHome: boolean }) {
  const q = useQuality();
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  // Pause rendering while tab is hidden — Three keeps requesting frames
  // otherwise, draining battery and CPU on background tabs.
  useEffect(() => {
    const onVis = () => {
      setFrameloop(document.hidden ? "never" : "always");
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      role="presentation"
      style={
        !q.postProcessing
          ? { boxShadow: "inset 0 0 200px var(--scene-fallback-vignette)" }
          : undefined
      }
    >
      <Canvas
        camera={{ position: [0, 3, 16], fov: 75, near: 0.1, far: 1000 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={q.dpr}
        frameloop={frameloop}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <SceneReadySignal />
          {isHome ? <ScrollCamera /> : <AmbientCamera />}
          <StarField />
          <GalaxyParticles ambient={!isHome} />
          {isHome && <SolarSystem />}
          {q.postProcessing && (
            <EffectComposer>
              <Bloom
                intensity={q.bloomIntensity}
                luminanceThreshold={0.8}
                luminanceSmoothing={0.7}
                mipmapBlur={q.mipmapBlur}
              />
              <Vignette offset={0.25} darkness={0.5} />
            </EffectComposer>
          )}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
