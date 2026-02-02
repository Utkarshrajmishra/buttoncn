"use client"

import * as React from "react"
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ShimmerButton =React.forwardRef<HTMLButtonElement,ShimmerButtonProps> (({children,className,...props}, ref) => {
  return (
    <button ref={ref}
    {...props} className={cn("group/button text-lg relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20",className)}>
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20" />
      </div>
    </button>
  );
}
)

ShimmerButton.displayName = "ShimmerButton"

export default ShimmerButton;