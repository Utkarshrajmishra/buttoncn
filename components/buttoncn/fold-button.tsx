"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface FoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  foldColor?: string;
}

const FoldButton = React.forwardRef<HTMLButtonElement, FoldButtonProps>(
  ({ className, children, foldColor = "#137ad5ff", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "group relative flex cursor-pointer items-center overflow-hidden rounded-md bg-sky-500 px-6 py-3 font-medium transition-all",
          className
        )}
      >
        <span
          style={{ backgroundColor: foldColor }}
          className="absolute top-0 right-0 inline-block h-4 w-4 rounded transition-all duration-500 ease-in-out group-hover:-mt-4 group-hover:-mr-4"
        >
          <span className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
        </span>

        <span
          style={{ backgroundColor: foldColor }}
          className="absolute bottom-0 left-0 inline-block h-4 w-4 rotate-180 rounded transition-all duration-500 ease-in-out group-hover:-mb-4 group-hover:-ml-4"
        >
          <span className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
        </span>

        <span
          style={{ backgroundColor: foldColor }}
          className="absolute bottom-0 left-0 h-full w-full -translate-x-full rounded-md transition-all delay-200 duration-500 ease-in-out group-hover:translate-x-0"
        />

        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

FoldButton.displayName = "FoldButton";
export default FoldButton;
