"use client";

import { useRef, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isTouch || reducedMotion || !ref.current) return;
    const el = ref.current;

    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      xTo(x * magneticStrength);
      yTo(y * magneticStrength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove as EventListener);
    el.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [isTouch, reducedMotion, magneticStrength]);

  const sharedClasses = cn(
    "badge group relative gap-2 rounded-full font-display text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
    "bg-primary text-galaxy-darker hover:bg-primary-light",
    className
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={sharedClasses}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={sharedClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={sharedClasses}
    >
      {children}
    </button>
  );
}
