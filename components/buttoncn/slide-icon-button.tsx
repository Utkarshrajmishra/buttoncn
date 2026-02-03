"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

export interface SlideIconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    slideColor?: string
    icon?: React.ReactNode
    direction?: "left" | "right"
}

const SlideIconButton = React.forwardRef<HTMLButtonElement, SlideIconButtonProps>(
    ({ 
        className, 
        children, 
        slideColor = "#4ade80",
        icon,
        direction = "left",
        ...props 
    }, ref) => {
        const isLeft = direction === "left"
        
        return (
            <button
                ref={ref}
                className={cn(
                    "bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group",
                    className
                )}
                type="button"
                {...props}
            >
                <div
                    className={cn(
                        "rounded-xl h-12 w-1/4 flex items-center justify-center absolute top-[4px] z-10 duration-500",
                        isLeft ? "left-1 group-hover:w-[184px]" : "right-1 group-hover:w-[184px]"
                    )}
                    style={{
                        backgroundColor: slideColor,
                    }}
                >
                    {icon ? icon : (
                        isLeft ? (
                            <ArrowLeft className="w-6 h-6 text-black" />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                height="25px"
                                width="25px"
                            >
                                <path
                                    d="M768 480H128a32 32 0 1 0 0 64h640a32 32 0 0 0 0-64z"
                                    fill="#000000"
                                />
                                <path
                                    d="m754.752 512-265.408 265.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 512z"
                                    fill="#000000"
                                />
                            </svg>
                        )
                    )}
                </div>
                <p className={cn(
                    isLeft ? "translate-x-2" : "-translate-x-2"
                )}>
                    {children || (isLeft ? "Go Back" : "Go Forward")}
                </p>
            </button>
        )
    }
)

SlideIconButton.displayName = "SlideIconButton"

export default SlideIconButton