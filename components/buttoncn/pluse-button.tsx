"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pulseButtonVariants = cva(
  "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-medium tracking-wider transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-violet-600 text-white hover:bg-violet-700",
        secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
        outline:
          "border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white",
        ghost: "text-violet-600 hover:bg-violet-100",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-10 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PulseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pulseButtonVariants> {
  pulseColor?: string
}

const getAutoColor = (variant?: string | null) => {
  switch (variant) {
    case "secondary":
      return "rgba(0,0,0,0.2)"
    case "outline":
    case "ghost":
      return "rgba(139,92,246,0.35)"
    case "destructive":
      return "rgba(255,255,255,0.35)"
    default:
      return "rgba(255,255,255,0.35)"
  }
}

const PulseButton = React.forwardRef<HTMLButtonElement, PulseButtonProps>(
  ({ className, variant, size, pulseColor, children, ...props }, ref) => {
    const svgColor = pulseColor ?? getAutoColor(variant)

    return (
      <button
        ref={ref}
        className={cn(pulseButtonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>

       
        <svg
          style={{ color: svgColor }}
          className="pointer-events-none absolute inset-0 w-full h-full 
                     opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-500 ease-out
                     z-[1]"
          viewBox="0 0 204 113"
          preserveAspectRatio="none"
        >
          <g
            stroke="none"
            fill="currentColor"
            transform="translate(0,113) scale(0.1,-0.1)"
          >
            <path d="M850 1069 c-23 -48 -27 -66 -19 -85 5 -14 9 -40 9 -57 0 -18 4 -38 9 -46 9 -14 19 36 19 99 1 44 7 71 17 78 9 6 35 56 35 67 0 3 -9 5 -20 5 -15 0 -28 -16 -50 -61z"/>
            <path d="M1662 1099 c-24 -17 -40 -34 -38 -37 3 -3 14 2 24 11 10 10 22 17 25 17 4 0 16 9 27 20 30 30 9 24 -38 -11z"/>
            <path d="M101 1104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
            <path d="M1090 1070 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15 1 -15 -4z"/>
            <path d="M1 1023 c1 -53 6 -49 11 10 2 20 0 37 -4 37 -4 0 -8 -21 -7 -47z"/>
            <path d="M1121 1024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
            <path d="M1140 958 c0 -9 5 -20 10 -23 13 -8 13 5 0 25 -8 13 -10 13 -10 -2z"/>
            <path d="M8 875 c6 -11 22 -33 36 -49 27 -30 33 -60 16 -71 -6 -4 -19 -24 -30 -45 l-20 -39 43 -32 45 -34 7 -131 c4 -121 6 -130 30 -153 19 -20 25 -22 25 -9 0 8 -7 21 -15 28 -14 12 -15 23 -14 177 1 8 -13 116 -66 129 -29 7 -35 44 -10 64 8 7 15 19 15 27 0 7 6 16 14 19 27 10 -11 78 -68 124 -18 14 -18 14 -8 -5z"/>
            <path d="M862 830 c-12 -27 -26 -52 -31 -54 -5 -3 -2 -26 7 -51 14 -44 14 -46 -13 -85 -22 -32 -27 -47 -22 -77 11 -63 29 -65 21 -2 -6 52 -5 58 21 82 26 24 27 27 17 69 -9 34 -8 47 3 65 16 25 36 103 26 103 -3 0 -16 -22 -29 -50z"/>
            <path d="M1344 672 c-19 -12 -29 -109 -24 -236 5 -142 18 -135 17 9 -2 156 2 188 26 216 17 19 4 27 -19 11z"/>
            <path d="M848 433 c2 -36 5 -63 7 -61 1 2 6 28 9 59 5 42 4 58 -6 61 -10 4 -12 -9 -10 -59z"/>
          </g>
        </svg>
      </button>
    )
  }
)

PulseButton.displayName = "PulseButton"

export { PulseButton, pulseButtonVariants }
