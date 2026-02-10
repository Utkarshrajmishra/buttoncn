"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SparkleButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  sparkleCount?: number
  children: React.ReactNode
}

interface Sparkle {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
}

const SparkleButton = React.forwardRef<
  HTMLButtonElement,
  SparkleButtonProps
>(({ className, children, sparkleCount = 8, disabled, ...props }, ref) => {
  const generateSparkles = React.useCallback((): Sparkle[] => {
    return Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 6 + 8,
      duration: Math.random() * 1.5 + 1.5,
      delay: Math.random() * 1,
    }))
  }, [sparkleCount])

  const [sparkles, setSparkles] = React.useState<Sparkle[]>(
    () => generateSparkles()
  )

  const handleHover = () => {
    if (!disabled) {
      setSparkles(generateSparkles())
    }
  }

  return (
    <motion.button
      ref={ref}
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.96 } : undefined}
      onHoverStart={handleHover}
      className={cn(
        "relative overflow-hidden h-12 px-8 rounded-md bg-neutral-900",
        "text-white font-bold flex items-center justify-center",
        "transition-colors hover:bg-primary/90",
        "disabled:opacity-50 disabled:pointer-events-none",
        "shadow-[0_0_15px_rgba(96,165,250,0.3)]",
        className
      )}
      {...props}
    >
      {/* Content */}
      <span className="relative z-20 whitespace-nowrap">
        {children}
      </span>

      <div className="pointer-events-none absolute inset-0 z-10">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              top: `${sparkle.top}%`,
              left: `${sparkle.left}%`,
            }}
          >
            <Sparkles
              className="text-white"
              style={{
                width: sparkle.size,
                height: sparkle.size,
                filter: "drop-shadow(0 0 6px rgba(96,165,250,0.8))",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.button>
  )
})

SparkleButton.displayName = "SparkleButton"

export default SparkleButton
