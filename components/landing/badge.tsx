"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerBadgeProps {
  className?: string
  duration?: number
  delay?: number
}

export default function ShimmerBadge({
  className,
  duration = 2,
  delay = 1,
}: ShimmerBadgeProps) {
  return (
    <div
      className={cn(
        "relative w-fit overflow-hidden rounded-full border border-neutral-700 bg-neutral-800 px-8 py-1 text-sm text-neutral-200",
        className
      )}
    >
      <p >✨ The art of better buttons</p>

      
      <motion.span
        className="absolute inset-0 pointer-events-none"
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
  )
}
