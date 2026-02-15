"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SweepButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sweepColor?: string;
  backgroundColor?: string;
}

const SweepButton = React.forwardRef<HTMLButtonElement, SweepButtonProps>(
  (
    {
      className,
      children,
      sweepColor = "#22d3ee",
      backgroundColor = "#083344",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          `group relative cursor-pointer overflow-hidden rounded-md border border-b-4 px-4 py-2 font-medium text-white duration-300 outline-none hover:border-t-4 hover:border-b hover:brightness-150 active:opacity-75`,

          className
        )}
        style={{
          backgroundColor: backgroundColor,

          borderColor: sweepColor,
        }}
        {...props}
      >
        <span
          className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md opacity-50 duration-500 group-hover:top-[150%]"
          style={{
            backgroundColor: sweepColor,
            boxShadow: `0 0 10px 10px ${sweepColor}33`,
          }}
        ></span>
        {children || "Hover Me"}
      </button>
    );
  }
);

SweepButton.displayName = "SweepButton";

export default SweepButton;
