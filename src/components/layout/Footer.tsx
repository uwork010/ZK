"use client";

import { usePathname } from "next/navigation";
import { personalInfo } from "@/lib/constants";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();
  const isHome = usePathname() === "/";

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 2 });
  };

  return (
    <footer className="relative border-t border-glass-border px-6 py-3">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row sm:gap-4">
        <p className="text-text-secondary/60">
          &copy; {new Date().getFullYear()} {isHome ? personalInfo.name : "Technology Company"}
        </p>

        {isHome ? (
          <p className="text-text-secondary/40">Built with Next.js, Three.js &amp; GSAP</p>
        ) : (
          <nav aria-label="Legal" className="flex items-center gap-4 text-text-secondary/60">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </nav>
        )}

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 text-text-secondary/60 transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
