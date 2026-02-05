"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PixelButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
    ({
        className,
        children,
        ...props
    }, ref) => {
        const [isActive, setIsActive] = React.useState(false)

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
                        "rounded-full bg-stone-800 text-stone-800 text-center transition-all duration-150",
                        "outline-2 outline-transparent outline-offset-[5px]",
                        "hover:translate-x-0 hover:translate-y-0",
                        "active:outline-yellow-400 focus-visible:outline-yellow-400 focus-visible:outline-dashed",
                        className
                    )}
                    style={{
                        transform: 'translate(-4px, -4px)',
                        boxShadow: `
                            0.5px 0.5px 0 0 #292524,
                            1px 1px 0 0 #292524,
                            1.5px 1.5px 0 0 #292524,
                            2px 2px 0 0 #292524,
                            2.5px 2.5px 0 0 #292524,
                            3px 3px 0 0 #292524,
                            0 0 0 2px #fafaf9,
                            0.5px 0.5px 0 2px #fafaf9,
                            1px 1px 0 2px #fafaf9,
                            1.5px 1.5px 0 2px #fafaf9,
                            2px 2px 0 2px #fafaf9,
                            2.5px 2.5px 0 2px #fafaf9,
                            3px 3px 0 2px #fafaf9,
                            3.5px 3.5px 0 2px #fafaf9,
                            4px 4px 0 2px #fafaf9
                        `
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(0, 0)'
                        e.currentTarget.style.boxShadow = '0 0 0 2px #fafaf9'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-4px, -4px)'
                        e.currentTarget.style.boxShadow = `
                            0.5px 0.5px 0 0 #292524,
                            1px 1px 0 0 #292524,
                            1.5px 1.5px 0 0 #292524,
                            2px 2px 0 0 #292524,
                            2.5px 2.5px 0 0 #292524,
                            3px 3px 0 0 #292524,
                            0 0 0 2px #fafaf9,
                            0.5px 0.5px 0 2px #fafaf9,
                            1px 1px 0 2px #fafaf9,
                            1.5px 1.5px 0 2px #fafaf9,
                            2px 2px 0 2px #fafaf9,
                            2.5px 2.5px 0 2px #fafaf9,
                            3px 3px 0 2px #fafaf9,
                            3.5px 3.5px 0 2px #fafaf9,
                            4px 4px 0 2px #fafaf9
                        `
                    }}
                    onMouseDown={() => setIsActive(true)}
                    onMouseUp={() => setIsActive(false)}
                    {...props}
                >
                    <div className="relative pointer-events-none bg-yellow-400 border-2 border-white/30 rounded-full dots-animate">
                        {/* Dot pattern overlay */}
                        <div
                            className="absolute inset-0 rounded-full opacity-50"
                            style={{
                                backgroundImage: `
                                    radial-gradient(rgb(255 255 255 / 80%) 20%, transparent 20%),
                                    radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%)
                                `,
                                backgroundPosition: '0 0, 4px 4px',
                                backgroundSize: '8px 8px',
                                mixBlendMode: 'hard-light'
                            }}
                        />

                        <span
                            className={cn(
                                "relative flex items-center justify-center px-5 py-3 gap-1 transition-transform",
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