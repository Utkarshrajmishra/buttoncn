"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const GlassyButton = React.forwardRef<HTMLButtonElement, GlassyButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .glassy-button {
              --color1: #e3a4fb;
              --color2: #fca7a6;
              --color3: #fe986d;
              --white: rgba(255, 255, 255, 0.9);
              --white2: rgba(255, 255, 255, 0.6);
              --white3: rgba(255, 255, 255, 0.4);
              --white4: rgba(255, 255, 255, 0.2);
              --white5: rgba(255, 255, 255, 0.1);

              /* ⬇️ WAS HOVER — now always active */
              transform: translate3d(0, 2px, 0);
            }

            .glassy-button::before,
            .glassy-button::after {
              position: absolute;
              content: "";
              width: 120%;
              height: 150%;
              border-radius: 16px;
              transition: all 235ms ease-in-out;
            }

            .glassy-button::before {
              filter: blur(2px);
              z-index: 0;
              border: 2px solid rgba(255, 255, 255, 0.2);
              background: radial-gradient(circle at 20% 50%, var(--white2) 8%, transparent 0%),
                radial-gradient(circle at 25% 50%, var(--white2) 8%, transparent 0%),
                radial-gradient(ellipse at 5% 90%, var(--white4) 8%, transparent 0%),
                radial-gradient(ellipse at 5% 50%, var(--white4) 8%, transparent 0%),
                radial-gradient(circle at 15% 80%, var(--white3) 3%, transparent 0%),
                radial-gradient(ellipse at 15% 10%, var(--white2) 14%, transparent 0%),
                radial-gradient(ellipse at 15% 25%, var(--white3) 10%, transparent 0%),
                radial-gradient(circle at 50% 50%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 45% 25%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 50% 75%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 70% 50%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 75% 25%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 70% 50%, var(--white2) 8%, transparent 0%),
                radial-gradient(circle at 70% 75%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 80% 50%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 85% 25%, var(--white4) 12%, transparent 0%),
                radial-gradient(circle at 98% 5%, var(--white2) 4%, transparent 0%),
                radial-gradient(circle at 88% 25%, var(--white2) 8%, transparent 0%),
                radial-gradient(ellipse at 90% 75%, var(--white2) 6%, transparent 0%),
                radial-gradient(circle at 98% 55%, var(--white2) 8%, transparent 0%),
                radial-gradient(circle at 98% 95%, var(--white2) 8%, transparent 0%);
              background-repeat: no-repeat;
            }

            .glassy-button::after {
              z-index: -1;
              background: linear-gradient(55deg, var(--color1) 10%, var(--color2) 40%, var(--color3) 60%, var(--color1) 80%);
              
              box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -24px;
            }

            .glassy-border {
              z-index: 1;
            }

            .glassy-border::before,
            .glassy-border::after {
              position: absolute;
              content: "";
              border-radius: 16px;
              width: 120%;
              height: 150%;
            }

            .glassy-border::before {
              box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
              border-radius: 20px;
              border: 2px solid transparent;
              background: linear-gradient(50deg, rgba(0, 0, 0, 0.1) 1%, var(--color1) 10%, var(--color2) 40%, var(--color3) 60%, var(--color1) 80%, rgba(0, 0, 0, 0.1) 100%) border-box;
              -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: destination-out;
              mask-composite: exclude;
            }
          `,
          }}
        />
        <button
          ref={ref}
          className={cn(
            "glassy-button scale-90 hover:scale-100 cursor-pointer px-5 py-2.5 h-10 min-w-[150px] rounded-[10px] outline-none relative",
            "flex items-center justify-center gap-1 border-none bg-transparent transition-all duration-[235ms] ease-in-out",
            className
          )}
          {...props}
        >
         

          <span className="block font-semibold text-[#222222] whitespace-nowrap relative z-10">
            {children || "Join now"}
          </span>

          <span className="glassy-border flex items-center justify-center absolute h-full w-full bg-transparent rounded-[10px] transition-all duration-[235ms] ease-in-out shadow-[0_0_0_2px_rgba(255,255,255,0.3)] pointer-events-none"></span>
        </button>
      </>
    )
  }
)

GlassyButton.displayName = "GlassyButton"
export default GlassyButton
