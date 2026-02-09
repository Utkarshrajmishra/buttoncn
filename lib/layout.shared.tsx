import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Logo from "@/components/svg/logo";
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex gap-1 items-center">
          <Logo className="h-4 sm:h-5 w-auto shrink-0" />

          <span className="hidden font-sora md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
            Fluxbuttons
          </span>
        </div>
      ),
    },
  };
}
