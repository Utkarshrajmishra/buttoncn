"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  foldColor?: string
}

const FoldButton = React.forwardRef<HTMLButtonElement, FoldButtonProps>(
  ({ className, children, foldColor = "#137ad5ff", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-sky-500 rounded-md group",
          className
        )}
      >
        
        <span
          style={{ backgroundColor: foldColor }}
          className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded group-hover:-mr-4 group-hover:-mt-4"
        >
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>

     
        <span
          style={{ backgroundColor: foldColor }}
          className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded group-hover:-ml-4 group-hover:-mb-4"
        >
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>

        <span
          style={{ backgroundColor: foldColor }}
          className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md group-hover:translate-x-0"
        />

        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)

FoldButton.displayName = "FoldButton"
export default FoldButton
