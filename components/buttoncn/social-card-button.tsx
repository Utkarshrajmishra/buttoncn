"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Instagram } from "lucide-react"

export interface InstaBtnProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const InstaBtn = React.forwardRef<HTMLButtonElement, InstaBtnProps>(
    ({ className, ...props }, ref) => {
        const [isHovered, setIsHovered] = React.useState(false)

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
                {/* SVG Container */}
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
                    <Instagram className="w-6 h-6 text-white" />
                </span>

                {/* Gradient BG */}
                <span
                    className="absolute inset-0 rounded-[9px] pointer-events-none transition-all duration-300"
                    style={{
                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        zIndex: 0,
                        transform: isHovered ? "rotate(35deg)" : "rotate(0deg)",
                        transformOrigin: "bottom",
                    }}
                />
            </button>
        )
    }
)

InstaBtn.displayName = "InstaBtn"

export default InstaBtn