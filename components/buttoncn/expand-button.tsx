"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, VolleyballIcon } from "lucide-react"

export interface ExpandButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonColor?: string
    icon?: React.ReactNode
    showSpinner?: boolean
}

const ExpandButton = React.forwardRef<HTMLButtonElement, ExpandButtonProps>(
    ({ 
        className, 
        children, 
        buttonColor = "#6336f7",
        icon,
        showSpinner = true,
        ...props 
    }, ref) => {
        return (
            <div className="h-full w-full flex items-center justify-center text-black dark:text-white">
                <div 
                    className="group cursor-pointer border bg-zinc-200 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-500/30 gap-2 h-[60px] flex items-center p-[10px] rounded-full"
                >
                    <button
                        ref={ref}
                        className={cn(
                            "cursor-pointer gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none focus-visible:ring-[3px] backdrop-blur-sm shadow-[inset_0_3px_2px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.30),inset_0_-8px_12px_rgba(0,0,0,0.12),0_6px_14px_-8px_rgba(0,0,0,0.18)] hover:shadow-[inset_0_3px_2px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.40),inset_0_-10px_14px_rgba(0,0,0,0.16),0_8px_18px_-10px_rgba(0,0,0,0.22)] active:shadow-[inset_0_3px_2px_rgba(255,255,255,0.1),inset_0_1px_3px_rgba(0,0,0,0.22),inset_0_-6px_10px_rgba(0,0,0,0.18)] active:translate-y-[1px] px-4 py-2 h-[40px] rounded-full flex items-center justify-center text-white",
                            className
                        )}
                        style={{
                            backgroundColor: buttonColor,
                        }}
                        {...props}
                    >
                        {showSpinner && !icon && (
                            <VolleyballIcon className="h-4 w-4 animate-spin" />
                        )}
                        {icon && icon}
                        <p className="flex items-center gap-2 justify-center">
                            {children || "Get Started"}
                        </p>
                    </button>
                    <div 
                        className="group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border border-zinc-400 dark:border-zinc-600"
                    >
                        <ArrowRight className="w-[14px] h-[14px] group-hover:rotate-180 ease-in-out transition-all" />
                    </div>
                </div>
            </div>
        )
    }
)

ExpandButton.displayName = "ExpandButton"

export default ExpandButton