"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ShimmerBadgeProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export default function ShimmerBadge({
  className,
  duration = 2,
  delay = 1,
}: ShimmerBadgeProps) {
  return (
    <div
      className={cn(
        "relative w-fit overflow-hidden rounded-full border border-neutral-700 bg-neutral-800 px-4 py-0.5 text-xs text-neutral-200 sm:px-6 sm:py-1 sm:text-sm md:px-8",
        className
      )}
    >
      <p className="whitespace-nowrap">✨ The art of better buttons</p>

      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
          repeatDelay: delay,
        }}
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15), transparent 70%)",
        }}
      />
    </div>
  );
}
