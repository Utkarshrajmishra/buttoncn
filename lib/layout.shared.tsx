import Logo from "@/components/svg/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-1">
          <Logo className="h-4 w-auto shrink-0 sm:h-5" />

          <span className="font-sora hidden items-center text-lg font-bold tracking-tight text-black md:inline-flex dark:text-white">
            Fluxbuttons
          </span>
        </div>
      ),
    },
  };
}
