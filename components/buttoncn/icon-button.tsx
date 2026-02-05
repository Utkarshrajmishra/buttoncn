"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Instagram } from "lucide-react"

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    gradient?: string | string[]
    gradientDirection?:  number | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
    icon?: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ 
        className, 
        gradient = ["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"],
        gradientDirection = 45,
        icon,
        ...props 
    }, ref) => {
        const [isHovered, setIsHovered] = React.useState(false)

        // Convert gradient to CSS string
        const gradientStyle = React.useMemo(() => {
            if (typeof gradient === 'string') {
                return gradient
            }
            
            const direction = typeof gradientDirection === 'number' 
                ? `${gradientDirection}deg` 
                : gradientDirection
            
            return `linear-gradient(${direction}, ${gradient.join(', ')})`
        }, [gradient, gradientDirection])

        return (
            <button
                ref={ref}
                className={cn(
                    "w-11 h-11 flex items-center justify-center border-none bg-transparent relative rounded-lg cursor-pointer transition-all duration-300",
                    className
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                <span
                    className="w-full h-full flex items-center justify-center rounded-xl border transition-all duration-300 relative z-10"
                    style={{
                        backdropFilter: "blur(4px)",
                        borderColor: "rgba(156, 156, 156, 0.466)",
                        backgroundColor: isHovered
                            ? "rgba(156, 156, 156, 0.466)"
                            : "transparent",
                    }}
                >
                    {icon || <Instagram className="w-6 h-6 text-white" />}
                </span>

                <span
                    className="absolute inset-0 rounded-[9px] pointer-events-none transition-all duration-300"
                    style={{
                        background: gradientStyle,
                        zIndex: 0,
                        transform: isHovered ? "rotate(35deg)" : "rotate(0deg)",
                        transformOrigin: "bottom",
                    }}
                />
            </button>
        )
    }
)

IconButton.displayName = "IconButton"

export default IconButton