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
            ${MARCH_COLORS[5]} 100%,
            ${MARCH_COLORS[0]} 100%
        )`

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes march {
                            to {
                                background-position: 150px;
                            }
                        }
                        .march-btn-active {
                            animation: march 2s linear infinite !important;
                        }
                    `
                }} />
                <button
                    ref={ref}
                    className={cn(
                        "w-36 py-4 text-white font-bold text-base rounded cursor-pointer border-0 transition-all duration-200",
                        isHovered && "march-btn-active",
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