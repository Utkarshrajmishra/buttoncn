"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative group">
        <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
          <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

          <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
            <button
              ref={ref}
              className={cn(
                "font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black",
                className,
              )}
              {...props}
            >
              {children || "Get Started"}
            </button>
          </div>
          <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
        </div>
      </div>
    );
  },
);

GlowButton.displayName = "GlowButton";

export default GlowButton;
