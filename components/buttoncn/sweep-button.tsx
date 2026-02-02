"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SweepButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sweepColor?: string
    backgroundColor?: string
    textColor?: string
}

const SweepButton = React.forwardRef<HTMLButtonElement, SweepButtonProps>(
    ({ className, children, sweepColor = "#22d3ee", backgroundColor = "#083344", textColor, ...props }, ref) => {
        const finalTextColor = textColor || sweepColor
        
        return (
            <button
                ref={ref}
                className={cn(
                    "border border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group",
                    className
                )}
                style={{
                    backgroundColor: backgroundColor,
                    color: finalTextColor,
                    borderColor: sweepColor,
                }}
                {...props}
            >
                <span 
                    className="absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500"
                    style={{
                        backgroundColor: sweepColor,
                        boxShadow: `0 0 10px 10px ${sweepColor}33`,
                    }}
                ></span>
                {children || "Hover Me"}
            </button>
        )
    }
)

SweepButton.displayName = "SweepButton"

export default SweepButton