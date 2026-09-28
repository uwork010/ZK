"use client";

import { Children, useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HorizontalShowcaseProps {
  label: string;
  itemLabel?: string;
  cardClassName: string;
  children: ReactNode;
}

export default function HorizontalShowcase({
  label,
  itemLabel = "item",
  cardClassName,
  children,
}: HorizontalShowcaseProps) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const updateActiveSlide = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackStyle = window.getComputedStyle(track);
        const leadingPadding = Number.parseFloat(trackStyle.paddingLeft) || 0;
        const children = Array.from(track.children) as HTMLElement[];
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        children.forEach((child, index) => {
          const start = child.offsetLeft - track.offsetLeft - leadingPadding;
          const distance = Math.abs(start - track.scrollLeft);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        setActiveIndex(nearestIndex);
      });
    };

    track.addEventListener("scroll", updateActiveSlide, { passive: true });
    updateActiveSlide();
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", updateActiveSlide);
    };
  }, [slides.length]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    const leadingPadding = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft - leadingPadding,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [reducedMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight" && activeIndex < slides.length - 1) {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }
    if (event.key === "ArrowLeft" && activeIndex > 0) {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
  };

  const current = String(activeIndex + 1).padStart(2, "0");
  const total = String(slides.length).padStart(2, "0");
  const progress = slides.length ? ((activeIndex + 1) / slides.length) * 100 : 0;

  return (
    <div
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      className="mx-auto w-full max-w-[1440px]"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={trackRef}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-12"
        style={{ scrollBehavior: reducedMotion ? "auto" : "smooth" }}
        role="group"
        tabIndex={0}
        aria-label={`${label} slides`}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${String(index + 1).padStart(2, "0")} of ${total}`}
            className={`shrink-0 snap-start ${cardClassName}`}
            tabIndex={0}
          >
            {slide}
          </div>
        ))}
      </div>

      {slides.length > 0 && (
        <div className="mx-auto mt-5 flex max-w-7xl items-center gap-4 px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            aria-label={`Previous ${itemLabel}`}
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-primary transition-colors hover:border-primary/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-4">
            <span aria-label={`${current} / ${total}`} aria-live="polite" aria-atomic="true" className="shrink-0 font-mono text-xs tabular-nums text-text-primary">
              {current} <span className="text-text-secondary/60">/ {total}</span>
            </span>
            <div
              role="progressbar"
              aria-label={`${label} progress`}
              aria-valuemin={1}
              aria-valuemax={slides.length}
              aria-valuenow={activeIndex + 1}
              className="h-px flex-1 overflow-hidden bg-white/10"
            >
              <div
                className="h-full bg-gradient-to-r from-primary-light via-secondary to-nebula-warm transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            aria-label={`Next ${itemLabel}`}
            disabled={activeIndex === slides.length - 1}
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-primary transition-colors hover:border-primary/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}