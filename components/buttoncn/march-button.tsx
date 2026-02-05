"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarchButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MARCH_COLORS = [
    "rgb(250, 82, 82)",
    "rgb(190, 75, 219)",
    "rgb(76, 110, 245)",
    "rgb(64, 192, 87)",
    "rgb(250, 176, 5)",
    "rgb(253, 126, 20)",
]

const MarchButton = React.forwardRef<HTMLButtonElement, MarchButtonProps>(
    ({
        className,
        children,
        ...props
    }, ref) => {
        const [isHovered, setIsHovered] = React.useState(false)

        const gradient = `linear-gradient(
            to right,
            ${MARCH_COLORS[0]},
            ${MARCH_COLORS[0]} 16.65%,
            ${MARCH_COLORS[1]} 16.65%,
            ${MARCH_COLORS[1]} 33.3%,
            ${MARCH_COLORS[2]} 33.3%,
            ${MARCH_COLORS[2]} 49.95%,
            ${MARCH_COLORS[3]} 49.95%,
            ${MARCH_COLORS[3]} 66.6%,
            ${MARCH_COLORS[4]} 66.6%,
            ${MARCH_COLORS[4]} 83.25%,
            ${MARCH_COLORS[5]} 83.25%,
            ${MARCH_COLORS[5]} 100%
        )`

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes shuttle {
                            0%, 100% {
                                background-position: 0% center;
                            }
                            50% {
                                background-position: 100% center;
                            }
                        }
                        .shuttle-btn-active {
                            animation: shuttle 2s ease-in-out infinite !important;
                            background-size: 200% 100% !important;
                        }
                    `
                }} />
                <button
                    ref={ref}
                    className={cn(
                        "px-6 py-3  font-semibold text-base rounded cursor-pointer border-1 transition-all duration-200",
                        isHovered ? "text-white border-transparent shuttle-btn-active" : "dark:text-white text-neutral-700 dark:border-neutral-700 border-neutral-400  bg-transparent",
                        className
                    )}
                    style={isHovered ? {
                        backgroundImage: gradient,
                        transform: "scale(1.1) translateY(-1px)",
                    } : {}}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    {...props}
                >
                    {children || "Join Now"}
                </button>
            </>
        )
    }
)

MarchButton.displayName = "MarchButton"

export default MarchButton