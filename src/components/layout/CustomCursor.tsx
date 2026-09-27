"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";
import { useQuality } from "@/hooks/useQuality";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const q = useQuality();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (isTouch || q.customCursor === "off" || !cursorDotRef.current) return;
    if (q.customCursor === "full" && !cursorRef.current) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    // Full mode: ring + dot. Dot mode: dot only.
    const xTo = cursor ? gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3.out" }) : null;
    const yTo = cursor ? gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3.out" }) : null;
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo?.(e.clientX);
      yTo?.(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const handleInteractiveMouse = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const target = e.target.closest("a, button, [data-cursor-hover]");
      if (!target) return;
      const related = e.relatedTarget instanceof Element
        ? e.relatedTarget.closest("a, button, [data-cursor-hover]")
        : null;
      if (related) return;
      const entering = e.type === "mouseover";
      if (cursor) gsap.to(cursor, { scale: entering ? 1.8 : 1, opacity: entering ? 0.6 : 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleInteractiveMouse);
    document.addEventListener("mouseout", handleInteractiveMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleInteractiveMouse);
      document.removeEventListener("mouseout", handleInteractiveMouse);
    };
  }, [isTouch, q.customCursor, mounted]);

  if (!mounted || isTouch || q.customCursor === "off") return null;

  return (
    <>
      {q.customCursor === "full" && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 mix-blend-difference"
          style={{ width: 36, height: 36 }}
        />
      )}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ width: 6, height: 6 }}
      />
    </>
  );
}
