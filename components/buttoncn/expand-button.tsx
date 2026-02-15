"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ArrowRight, VolleyballIcon } from "lucide-react";

export interface ExpandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: string;
  icon?: React.ReactNode;
  showSpinner?: boolean;
}

const ExpandButton = React.forwardRef<HTMLButtonElement, ExpandButtonProps>(
  (
    {
      className,
      children,
      buttonColor = "#6336f7",
      icon,
      showSpinner = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex h-full w-full items-center justify-center text-black dark:text-white">
        <div className="group flex h-[60px] cursor-pointer items-center gap-2 rounded-full border border-zinc-400 bg-zinc-200 p-[10px] dark:border-zinc-500/30 dark:bg-zinc-800">
          <button
            ref={ref}
            className={cn(
              "flex h-[40px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-[inset_0_3px_2px_rgba(255,255,255,0.1),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.30),inset_0_-8px_12px_rgba(0,0,0,0.12),0_6px_14px_-8px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all outline-none hover:shadow-[inset_0_3px_2px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.40),inset_0_-10px_14px_rgba(0,0,0,0.16),0_8px_18px_-10px_rgba(0,0,0,0.22)] focus-visible:ring-[3px] active:translate-y-[1px] active:shadow-[inset_0_3px_2px_rgba(255,255,255,0.1),inset_0_1px_3px_rgba(0,0,0,0.22),inset_0_-6px_10px_rgba(0,0,0,0.18)]",
              className
            )}
            style={{
              backgroundColor: buttonColor,
            }}
            {...props}
          >
            {showSpinner && !icon && (
              <VolleyballIcon className="h-4 w-4 animate-spin" />
            )}
            {icon && icon}
            <p className="flex items-center justify-center gap-2">
              {children || "Get Started"}
            </p>
          </button>
          <div className="flex size-[24px] items-center justify-center rounded-full border border-zinc-400 transition-all ease-in-out group-hover:ml-4 dark:border-zinc-600">
            <ArrowRight className="h-[14px] w-[14px] transition-all ease-in-out group-hover:rotate-180" />
          </div>
        </div>
      </div>
    );
  }
);

ExpandButton.displayName = "ExpandButton";

export default ExpandButton;
