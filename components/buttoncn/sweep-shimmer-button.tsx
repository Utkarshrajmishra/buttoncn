"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SweepShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const SweepShimmerButton = React.forwardRef<HTMLButtonElement, SweepShimmerButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "flex overflow-hidden items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:border-neutral-700 border border-neutral-800",
                    className
                )}
                {...props}
            >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                {children}
            </button>
        )
    }
)

SweepShimmerButton.displayName = "SweepShimmerButton"

export default SweepShimmerButton