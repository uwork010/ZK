"use client";

import { MoveLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "lenis/react";

export default function NotFound() {
  const lenis = useLenis();

  const goHome = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
    }
    window.location.href = "/";
  };

  return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
      <div className="fallback-atmosphere absolute inset-0" />

      <div className="relative z-10 max-w-md">
        <span className="font-display text-8xl font-bold gradient-text sm:text-9xl">
          404
        </span>

        <p className="mt-4 font-display text-xl font-medium text-white sm:text-2xl">
          Page not found
        </p>

        <p className="mt-3 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="mt-8">
          <MagneticButton onClick={goHome}>
            <MoveLeft size={16} />
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
