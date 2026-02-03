"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SlantButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    colors?: [string, string, string]
}

const SlantButton = React.forwardRef<HTMLButtonElement, SlantButtonProps>(
    ({ 
        className, 
        children, 
        colors = ["#ffffff", "#a5b4fc", "#4f46e5"],
        ...props 
    }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "overflow-hidden relative w-32 h-12 bg-black border-none rounded-md cursor-pointer z-10 group flex items-center justify-center",
                    className
                )}
                {...props}
            >
                <span className="group-hover:opacity-0 duration-500 opacity-100 absolute inset-0 flex items-center justify-center z-10 text-xl font-bold text-white">
                    {children}
                </span>
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                    style={{ backgroundColor: colors[0] }}
                />
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                    style={{ backgroundColor: colors[1] }}
                />
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
                    style={{ backgroundColor: colors[2] }}
                />
                <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute inset-0 flex items-center justify-center z-10 text-xl font-bold text-black">
                    {children}
                </span>
            </button>
        )
    }
)

SlantButton.displayName = "SlantButton"

export default SlantButton