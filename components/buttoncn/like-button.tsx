"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface LikeButtonProps {
    initialCount?: number
    likedColor?: string
    className?: string
    onLike?: (isLiked: boolean) => void
}

const LikeButton = React.forwardRef<HTMLDivElement, LikeButtonProps>(
    ({ 
        className, 
        initialCount = 68, 
        likedColor = "#fc4e4e",
        onLike,
        ...props 
    }, ref) => {
        const [isLiked, setIsLiked] = React.useState(false)

        const handleLike = () => {
            setIsLiked((prev) => !prev)
            onLike?.(!isLiked)
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex cursor-pointer h-12 w-32 rounded-2xl overflow-hidden",
                    className
                )}
                style={{
                    backgroundColor: "#1d1d1d",
                    boxShadow: `
                        inset -2px -2px 5px rgba(255, 255, 255, 0.2),
                        inset 2px 2px 5px rgba(0, 0, 0, 0.1),
                        4px 4px 10px rgba(0, 0, 0, 0.4),
                        -2px -2px 8px rgba(255, 255, 255, 0.1)
                    `,
                }}
                {...props}
            >
                {/* Like label section */}
                <label
                    htmlFor="heart"
                    className="w-[70%] h-full flex cursor-pointer items-center justify-evenly"
                    onClick={handleLike}
                >
                    <svg
                        className="h-7 w-7 transition-all duration-200"
                        style={{
                            fill: isLiked ? likedColor : "#505050",
                            animation: isLiked ? "enlarge 0.2s ease-out 1" : "none",
                        }}
                        fillRule="nonzero"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <span className="text-white text-base" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                        Likes
                    </span>
                </label>

                {/* Count section */}
                <div className="absolute right-0 w-[30%] h-full overflow-hidden">
                    {/* Current count */}
                    <div
                        className="absolute inset-0 flex justify-center items-center text-base border-l-2 border-[#4e4e4e] transition-all duration-500 ease-out"
                        style={{
                            color: isLiked ? "#717070" : "#fcfcfc",
                            transform: isLiked ? "translateY(-40px)" : "translateY(0)",
                        }}
                    >
                        {initialCount}
                    </div>
                    {/* Updated count */}
                    <div
                        className="absolute inset-0 flex justify-center items-center text-base border-l-2 border-[#4e4e4e] transition-all duration-500 ease-out"
                        style={{
                            color: isLiked ? "#fcfcfc" : "#717070",
                            transform: isLiked ? "translateY(0)" : "translateY(40px)",
                        }}
                    >
                        {initialCount + 1}
                    </div>
                </div>

                {/* Keyframes */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes enlarge {
                            0% { transform: scale(0.5); }
                            100% { transform: scale(1.2); }
                        }
                    `
                }} />
            </div>
        )
    }
)

LikeButton.displayName = "LikeButton"

export default LikeButton