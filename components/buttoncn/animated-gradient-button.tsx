"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientGlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  labelClassName?: string
}

const GradientGlowButton = React.forwardRef<
  HTMLButtonElement,
  GradientGlowButtonProps
>(({ className, labelClassName, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group  relative flex h-[60px] w-[180px] cursor-pointer items-center justify-center rounded-[10px] bg-[#3a3a3a] text-white font-semibold text-[18px] transition-all duration-300",
        className
      )}
      {...props}
    >
      <span className="absolute left-1/2 top-1/2 -z-20 h-[115%] w-[106%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[inherit] blur-[10px] transition-all duration-300 group-hover:blur-[5px]">
        <span
          className="absolute -left-[10%] top-1/2 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[10px] animate-[spin_2s_linear_infinite] group-hover:blur-[5px]"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              hsl(226,81%,64%),
              hsl(271,81%,64%),
              hsl(316,81%,64%),
              hsl(1,81%,64%),
              hsl(46,81%,64%),
              hsl(91,81%,64%),
              hsl(136,81%,64%),
              hsl(181,81%,64%)
            )`,
          }}
        />
      </span>

      {/* ✨ Glass highlight layer */}
      <span
        className="absolute left-1/2 top-1/2 -z-10 rounded-[inherit] bg-white/20 backdrop-blur-md transition-all duration-300"
        style={{
          boxShadow: "0 8px 32px rgba(31,38,135,0.37)",
          width: "106%",
          height: "120%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 🏷 Label */}
      <span
        className={cn(
          "relative z-10 flex h-[45px] w-[156px] items-center justify-center rounded-[22px] bg-gradient-to-b from-[#2b2b2b] to-[#444]",
          labelClassName
        )}
      >
        {children}
      </span>
    </button>
  )
})

GradientGlowButton.displayName = "GradientGlowButton"

export { GradientGlowButton }
