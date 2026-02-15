"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "text-md ring-offset-background focus-visible:ring-ring group animate-rainbow before:animate-rainbow relative inline-flex h-10 cursor-pointer items-center justify-center rounded-md border-0 bg-black bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-8 py-2 font-medium whitespace-nowrap text-neutral-300 transition-colors transition-transform duration-200 [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] hover:scale-105 hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-300",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";

export default RainbowButton;
