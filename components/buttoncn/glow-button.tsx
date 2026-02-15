"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="group relative inline-block">
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-green-500 to-yellow-500 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

        <div className="relative rounded-xl bg-gradient-to-r from-green-500 to-yellow-500 p-[1px]">
          <button
            ref={ref}
            className={cn(
              "relative flex h-12 items-center justify-center overflow-hidden rounded-xl bg-black px-6 text-lg font-semibold whitespace-nowrap text-white",
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

export default GlowButton;
