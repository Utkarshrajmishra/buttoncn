"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    buttonColor?: string
    shadowColor?: string
    outlineColor?: string
    borderColor?: string
    dotColor?: string
    shadowLayers?: number
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
    ({
        className,
        children,
        buttonColor = "#facc15", // yellow-400
        shadowColor = "#292524", // stone-800
        outlineColor = "#fafaf9", // stone-50
        borderColor = "rgba(255, 255, 255, 0.3)",
        dotColor = "rgb(255 255 255 / 80%)",
        shadowLayers = 6,
        ...props
    }, ref) => {
        const [isActive, setIsActive] = React.useState(false)

        // Generate box shadow layers
        const generateBoxShadow = (layers: number) => {
            const shadows: string[] = []
            
            // Shadow layers
            for (let i = 1; i <= layers; i++) {
                const offset = i * 0.5
                shadows.push(`${offset}px ${offset}px 0 0 ${shadowColor}`)
            }
            
            // Outline layer (0)
            shadows.push(`0 0 0 2px ${outlineColor}`)
            
            // Outline layers with shadow
            for (let i = 1; i <= layers + 2; i++) {
                const offset = i * 0.5
                shadows.push(`${offset}px ${offset}px 0 2px ${outlineColor}`)
            }
            
            return shadows.join(', ')
        }

        const defaultShadow = generateBoxShadow(shadowLayers)
        const hoverShadow = `0 0 0 2px ${outlineColor}`

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes dots {
                            0% {
                                background-position: 0 0, 4px 4px;
                            }
                            100% {
                                background-position: 8px 0, 12px 4px;
                            }
                        }
                        .dots-animate::before {
                            animation: dots 0.5s infinite linear;
                        }
                    `
                }} />
                <button
                    ref={ref}
                    className={cn(
                        "text-base cursor-pointer relative font-bold leading-none p-[1px]",
                        "rounded-full text-stone-800 text-center transition-all duration-150",
                        "outline-2 outline-transparent outline-offset-[5px]",
                        "hover:translate-x-0 hover:translate-y-0",
                        "focus-visible:outline-dashed",
                        className
                    )}
                    style={{
                        transform: 'translate(-4px, -4px)',
                        boxShadow: defaultShadow,
                        backgroundColor: shadowColor,
                        outlineColor: buttonColor,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(0, 0)'
                        e.currentTarget.style.boxShadow = hoverShadow
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-4px, -4px)'
                        e.currentTarget.style.boxShadow = defaultShadow
                    }}
                    onMouseDown={() => setIsActive(true)}
                    onMouseUp={() => setIsActive(false)}
                    {...props}
                >
                    <div 
                        className="relative pointer-events-none border-2 rounded-full dots-animate"
                        style={{ 
                            backgroundColor: buttonColor,
                            borderColor: borderColor
                        }}
                    >
                        {/* Dot pattern overlay */}
                        <div
                            className="absolute inset-0 rounded-full opacity-50"
                            style={{
                                backgroundImage: `
                                    radial-gradient(${dotColor} 20%, transparent 20%),
                                    radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%)
                                `,
                                backgroundPosition: '0 0, 4px 4px',
                                backgroundSize: '8px 8px',
                                mixBlendMode: 'hard-light'
                            }}
                        />

                        <span
                            className={cn(
                                "relative flex items-center justify-center px-5 py-3 gap-1 transition-transform whitespace-nowrap",
                                isActive && "translate-y-[2px]"
                            )}
                            style={{
                                filter: 'drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.25))'
                            }}
                        >
                            {children || "Button Hover Me"}
                        </span>
                    </div>
                </button>
            </>
        )
    }
)

PixelButton.displayName = "PixelButton"

export default PixelButton