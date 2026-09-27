"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import CanvasErrorBoundary from "@/components/three/CanvasErrorBoundary";

const GalaxyCanvas = dynamic(
  () => import("@/components/three/GalaxyCanvas"),
  {
    ssr: false,
    loading: () => <div className="pointer-events-none fixed inset-0 bg-galaxy-darker" />,
  }
);

export default function GalaxyBackground() {
  const pathname = usePathname();

  return (
    <CanvasErrorBoundary>
      <GalaxyCanvas isHome={pathname === "/"} />
    </CanvasErrorBoundary>
  );
}
