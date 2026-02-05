"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

export interface SlideIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  slideColor?: string
  icon?: React.ReactNode
  direction?: "left" | "right"
}

const SlideIconButton = React.forwardRef<HTMLButtonElement, SlideIconButtonProps>(
(
    {
      className,
      children,
      slideColor = "#4ade80",
      icon,
      direction = "left",
      ...props
    },
    ref
  ) => {
    const isLeft = direction === "left"

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "group relative h-12 overflow-hidden rounded-md",
          "bg-white backdrop-blur-md border border-black/10",
          "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          "text-black font-semibold text-base",
          "transition-all duration-300 active:scale-[0.98]",
          "px-4",
          className
        )}
        {...props}
      >
       
        <div
          className={cn(
            "absolute top-1 bottom-1 z-10 flex items-center justify-center",
            "rounded-md transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
            "group-hover:w-[calc(100%-8px)]",
            isLeft ? "left-1 w-12" : "right-1 w-12"
          )}
          style={{ backgroundColor: slideColor }}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            {icon ? (
              icon
            ) : isLeft ? (
              <ArrowLeft className="w-5 h-5 text-black" />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-black">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>

        <span
          className={cn(
            "relative z-20 flex h-full items-center justify-center gap-6 whitespace-nowrap",
            "transition-opacity duration-300 group-hover:opacity-0"
          )}
        >
          {isLeft && (
            <span className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{children || (isLeft ? "Go Back" : "Go Forward")}</span>
          {!isLeft && (
            <span className="w-5 h-5 flex-shrink-0" />
          )}
        </span>
      </button>
    )
  }
)

SlideIconButton.displayName = "SlideIconButton"
export default SlideIconButton