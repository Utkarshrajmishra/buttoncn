"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative inline-block group">

        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-green-500 to-yellow-500" />

        <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-green-500 to-yellow-500">
          
       
          <button
            ref={ref}
            className={cn(
              "relative flex overflow-hidden items-center justify-center whitespace-nowrap px-6 h-12 rounded-xl bg-black text-white font-semibold text-lg",
              className
            )}
            {...props}
          >
            {children || "Get Started"}

          </button>
        </div>
      </div>
    );
  }
);

GlowButton.displayName = "GlowButton";

export default GlowButton
