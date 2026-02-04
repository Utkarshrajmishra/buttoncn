"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const splashButtonVariants = cva(
  "relative cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-md font-semibold tracking-tight transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white",
        primary: "bg-green-600 text-white",
        secondary: "bg-neutral-500 hover:text-white text-neutral-600",
        outline:
          "border-1 border border-neutral-500 text-neutral-400 hover:text-white",

      },
      size: {
        default: "h-10 px-8",
        sm: "h-8 px-5 text-sm",
        lg: "h-12 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SplashButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof splashButtonVariants> {
  splashColor?: string
}


const SplashButton = React.forwardRef<HTMLButtonElement, SplashButtonProps>(
  ({ className, variant, size, children, splashColor = "#F54927", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(splashButtonVariants({ variant, size }), className)}
        {...props}
      >

        <span
          className="absolute left-1/2 top-1/2 w-0 h-0 rounded-full transition-all duration-500 ease-out group-hover:w-56 group-hover:h-56 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: splashColor }}
        />


        <span className="absolute bottom-0 left-0 h-full -ml-2 pointer-events-none">
          <svg viewBox="0 0 487 487" className="h-full w-auto opacity-20 fill-white">
            <path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
          </svg>
        </span>


        <span className="absolute top-0 right-0 w-12 h-full -mr-3 pointer-events-none">
          <svg viewBox="0 0 487 487" className="w-full h-full opacity-20 fill-white">
            <path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
          </svg>
        </span>


        <span className="absolute inset-0 rounded-md opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 pointer-events-none" />


        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

SplashButton.displayName = "SplashButton"

export { SplashButton }
