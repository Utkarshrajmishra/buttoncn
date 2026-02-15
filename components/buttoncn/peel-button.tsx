"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface PeelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: [string, string, string];
}

const PeelButton = React.forwardRef<HTMLButtonElement, PeelButtonProps>(
  (
    {
      className,
      children,
      colors = ["#bbf7d0", "#4ade80", "#15803d"],
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative z-10 flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-md border-none bg-black px-8",
          className
        )}
        {...props}
      >
        <span className="relative z-10 text-xl font-bold whitespace-nowrap text-white opacity-100 duration-500 group-hover:opacity-0">
          {children}
        </span>
        <span
          className="absolute -top-8 -left-2 h-32 w-36 origin-bottom scale-x-0 transform rounded-full transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"
          style={{ backgroundColor: colors[0] }}
        />
        <span
          className="absolute -top-8 -left-2 h-32 w-36 origin-bottom scale-x-0 transform rounded-full transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"
          style={{ backgroundColor: colors[1] }}
        />
        <span
          className="absolute -top-8 -left-2 h-32 w-36 origin-bottom scale-x-0 transform rounded-full transition-transform duration-500 group-group-hover:duration-1000 group-hover:scale-x-100"
          style={{ backgroundColor: colors[2] }}
        />
        <span className="absolute inset-0 z-10 flex items-center justify-center text-xl font-bold whitespace-nowrap text-black opacity-0 duration-1000 group-hover:opacity-100">
          {children}
        </span>
      </button>
    );
  }
);

PeelButton.displayName = "PeelButton";

export default PeelButton;
