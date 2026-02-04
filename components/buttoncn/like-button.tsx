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
        likedColor = "#ff4458",
        onLike,
        ...props 
    }, ref) => {
        const [isLiked, setIsLiked] = React.useState(false)
        const [particles, setParticles] = React.useState<Array<{id: number, x: number, y: number}>>([])
        const [showGlow, setShowGlow] = React.useState(false)

        const handleLike = () => {
            const newLiked = !isLiked
            setIsLiked(newLiked)
            onLike?.(newLiked)
            
            // Create particle burst effect when liking
            if (newLiked) {
                const newParticles = Array.from({length: 8}, (_, i) => ({
                    id: Date.now() + i,
                    x: Math.cos((i / 8) * Math.PI * 2) * 40,
                    y: Math.sin((i / 8) * Math.PI * 2) * 40
                }))
                setParticles(newParticles)
                setTimeout(() => setParticles([]), 600)
                
                // Show glow temporarily
                setShowGlow(true)
                setTimeout(() => setShowGlow(false), 800)
            }
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex cursor-pointer h-14 w-36 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95",
                    className
                )}
                style={{
                    background: "linear-gradient(135deg, #2a2a2e 0%, #1a1a1d 100%)",
                    boxShadow: showGlow 
                        ? `0 8px 32px ${likedColor}40, 0 2px 8px ${likedColor}20`
                        : "0 4px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)",
                    border:  "1px solid #404044",
                    transition: "box-shadow 0.3s ease, border 0.3s ease"
                }}
                {...props}
            >
                {/* Gradient overlay */}
                <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${likedColor}15 0%, transparent 100%)`,
                        opacity: isLiked ? 1 : 0
                    }}
                />

                {/* Particles */}
                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="absolute top-1/2 left-[35%] w-1 h-1 rounded-full pointer-events-none"
                        style={{
                            backgroundColor: likedColor,
                            animation: `particle-burst 0.6s ease-out forwards`,
                            '--particle-x': `${particle.x}px`,
                            '--particle-y': `${particle.y}px`,
                        } as React.CSSProperties}
                    />
                ))}
              
                <label
                    htmlFor="heart"
                    className="w-[70%] h-full flex cursor-pointer items-center justify-center gap-2 relative z-10"
                    onClick={handleLike}
                >
                    {/* Heart icon with pulse effect */}
                    <div className="relative">
                        <svg
                            className="h-7 w-7 transition-all duration-300"
                            style={{
                                fill: isLiked ? likedColor : "#606064",
                                filter: isLiked ? `drop-shadow(0 0 8px ${likedColor}80)` : "none",
                                animation: isLiked ? "heart-beat 0.4s ease-out 1" : "none",
                            }}
                            fillRule="nonzero"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>
                    
                    <span 
                        className="text-base font-medium tracking-wide transition-colors duration-300" 
                        style={{ 
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            color: isLiked ? "#ffffff" : "#b0b0b4"
                        }}
                    >
                        Like
                    </span>
                </label>

                {/* Counter section */}
                <div className="absolute right-0 w-[30%] h-full overflow-hidden">
                    <div
                        className="absolute inset-0 flex justify-center items-center text-base font-semibold border-l transition-all duration-500 ease-out"
                        style={{
                            color: isLiked ? "#707074" : "#f0f0f4",
                            borderColor: isLiked ? `${likedColor}30` : "#404044",
                            transform: isLiked ? "translateY(-48px)" : "translateY(0)",
                            opacity: isLiked ? 0 : 1
                        }}
                    >
                        {initialCount}
                    </div>
                    
                    <div
                        className="absolute inset-0 flex justify-center items-center text-base font-semibold border-l transition-all duration-500 ease-out"
                        style={{
                            color: isLiked ? "#f0f0f4" : "#707074",
                            borderColor: isLiked ? `${likedColor}30` : "#404044",
                            transform: isLiked ? "translateY(0)" : "translateY(48px)",
                            opacity: isLiked ? 1 : 0,
                            textShadow: isLiked ? `0 0 12px ${likedColor}60` : "none"
                        }}
                    >
                        {initialCount + 1}
                    </div>
                </div>

                {/* Shine effect on hover */}
                <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        animation: "shine 2s infinite"
                    }}
                />

                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes heart-beat {
                            0% { transform: scale(1); }
                            25% { transform: scale(0.8); }
                            50% { transform: scale(1.3); }
                            75% { transform: scale(1.1); }
                            100% { transform: scale(1); }
                        }
                        
                        @keyframes particle-burst {
                            0% {
                                transform: translate(0, 0) scale(1);
                                opacity: 1;
                            }
                            100% {
                                transform: translate(var(--particle-x), var(--particle-y)) scale(0);
                                opacity: 0;
                            }
                        }
                        
                        @keyframes shine {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                    `
                }} />
            </div>
        )
    }
)

LikeButton.displayName = "LikeButton"

export default LikeButton