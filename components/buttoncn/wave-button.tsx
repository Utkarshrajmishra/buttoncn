"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface WaveButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    waveColors?: [string, string, string, string, string]
}

const WaveButton = React.forwardRef<HTMLButtonElement, WaveButtonProps>(
    ({ 
        className, 
        children, 
        waveColors = ["#0c4a6e", "#075985", "#0369a1", "#0284c7", "#0ea5e9"],
      
        ...props 
    }, ref) => {
        const waveSizes = [48, 40, 32, 24, 16] 
        const delays = [75, 100, 150, 200, 300]
        
        const backgroundColor = waveColors[1]
        const borderColor = waveColors[3]
        
        return (
            <button
                ref={ref}
                className={cn(
                    "relative border text-white duration-500 group cursor-pointer overflow-hidden h-14 w-56 rounded-md p-2 flex justify-center items-center font-semibold",
                    className
                )}
                style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    
                }}
                {...props}
            >
                {waveColors.map((color, index) => (
                    <div
                        key={index}
                        className="absolute z-10 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out delay-150"
                        style={{
                            width: `${waveSizes[index] / 4}rem`,
                            height: `${waveSizes[index] / 4}rem`,
                            backgroundColor: color,
                            transitionDelay: `${delays[index]}ms`,
                        }}
                    ></div>
                ))}
                <p className="z-10">{children}</p>
            </button>
        )
    }
)

WaveButton.displayName = "WaveButton"

export default WaveButton