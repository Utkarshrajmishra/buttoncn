"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PeelButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    colors?: [string, string, string]
}

const PeelButton = React.forwardRef<HTMLButtonElement, PeelButtonProps>(
    ({ 
        className, 
        children, 
        colors = ["#bbf7d0", "#4ade80", "#15803d"],
        ...props 
    }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "overflow-hidden relative h-12 px-8 bg-black border-none rounded-md cursor-pointer z-10 group flex items-center justify-center",
                    className
                )}
                {...props}
            >
                <span className="group-hover:opacity-0 duration-500 opacity-100 relative z-10 text-xl font-bold text-white whitespace-nowrap">
                    {children}
                </span>
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                    style={{ backgroundColor: colors[0] }}
                />
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                    style={{ backgroundColor: colors[1] }}
                />
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-group-hover:duration-1000 duration-500 origin-bottom"
                    style={{ backgroundColor: colors[2] }}
                />
                <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute inset-0 flex items-center justify-center z-10 text-xl font-bold text-black whitespace-nowrap">
                    {children}
                </span>
            </button>
        )
    }
)

PeelButton.displayName = "PeelButton"

export default PeelButton