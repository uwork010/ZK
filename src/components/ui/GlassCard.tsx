"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={hover && !reducedMotion ? { y: -3 } : undefined}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        "glass overflow-hidden rounded-xl p-6 transition-colors duration-300",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
