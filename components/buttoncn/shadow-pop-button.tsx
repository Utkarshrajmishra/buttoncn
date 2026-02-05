"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShadowPopButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shadowColors?: [string, string]
}

const ShadowPopButton = React.forwardRef<HTMLButtonElement, ShadowPopButtonProps>(
    ({ 
        className, 
        children, 
        shadowColors = ["#F44336", "#00BCD4"],
        ...props 
    }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "cursor-pointer text-white uppercase bg-neutral-800  px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 transition",
                    className
                )}
                style={{
                    boxShadow: undefined,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0.5rem 0.5rem ${shadowColors[0]}, -0.5rem -0.5rem ${shadowColors[1]}`
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none"
                }}
                {...props}
            >
                {children || "Hover me"}
            </button>
        )
    }
)

ShadowPopButton.displayName = "ShadowPopButton"

export default ShadowPopButton