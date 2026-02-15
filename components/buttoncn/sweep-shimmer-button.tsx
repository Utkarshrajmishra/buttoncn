"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SweepShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SweepShimmerButton = React.forwardRef<
  HTMLButtonElement,
  SweepShimmerButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md border border-neutral-800 bg-black px-4 py-2 text-sm font-medium font-semibold whitespace-pre text-white shadow transition-all duration-300 ease-out hover:border-neutral-700 hover:bg-black/90 disabled:pointer-events-none disabled:opacity-50 md:flex",
        className
      )}
      {...props}
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
      {children}
    </button>
  );
});

SweepShimmerButton.displayName = "SweepShimmerButton";

export default SweepShimmerButton;
