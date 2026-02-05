"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  marchColor?: string[]
}

const DEFAULT_MARCH_COLORS = [
  "rgb(250, 82, 82)",
  "rgb(190, 75, 219)",
  "rgb(76, 110, 245)",
  "rgb(64, 192, 87)",
  "rgb(250, 176, 5)",
  "rgb(253, 126, 20)",
]

const MarchButton = React.forwardRef<HTMLButtonElement, MarchButtonProps>(
  ({ className, children, marchColor = DEFAULT_MARCH_COLORS, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const gradient = React.useMemo(() => {
      const step = 100 / marchColor.length
      return `linear-gradient(to right, ${marchColor
        .map((color, i) => `${color} ${i * step}%, ${color} ${(i + 1) * step}%`)
        .join(", ")})`
    }, [marchColor])

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes shuttle {
                0%, 100% { background-position: 0% center; }
                50% { background-position: 100% center; }
              }
              .shuttle-btn-active {
                animation: shuttle 2s ease-in-out infinite;
                background-size: 200% 100%;
              }
            `,
          }}
        />
        <button
          ref={ref}
          className={cn(
            "px-6 py-3 font-semibold text-base rounded cursor-pointer border transition-all duration-200",
            isHovered
              ? "text-white border-transparent shuttle-btn-active"
              : "text-neutral-700 dark:text-white border-neutral-400 dark:border-neutral-700 bg-neutral-800",
            className
          )}
          style={
            isHovered
              ? {
                  backgroundImage: gradient,
                  transform: "scale(1.1) translateY(-1px)",
                }
              : {}
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          {children || "Join Now"}
        </button>
      </>
    )
  }
)

MarchButton.displayName = "MarchButton"
export default MarchButton
