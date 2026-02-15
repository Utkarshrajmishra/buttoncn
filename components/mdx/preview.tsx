import { cn } from "@/lib/utils";

import PreviewContent from "./preview-content";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
  showPreview?: boolean;
}

const prePath = process.env.VERCEL_PRODUCTION_URL
  ? process.env.VERCEL_PRODUCTION_URL
  : "http://localhost:3000";

const Preview = ({
  children,
  className,
  isPremium = false,
  link,
  useIframe = false,
  height,
  compact = false,
  comment = [],
  isBlock = false,
  showPreview = true,
}: PreviewProps) => {
  return (
    <>
      <div className={cn("mt-4 w-full overflow-hidden", className)}>
        <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

        {useIframe ? (
          <div className="mt-1 mb-8 w-full rounded-2xl border border-zinc-400 dark:border-zinc-700">
            <div className="relative h-[100dvh] w-full overflow-hidden">
              <iframe
                src={`${prePath}/preview/${link}`}
                title={link}
                className="h-full w-full list-none overflow-y-auto"
                style={{ border: "none", transform: "scale(0.95)" }}
              ></iframe>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "not-prose relative my-4 flex w-[95vw] items-center justify-center rounded-2xl border border-zinc-400 bg-neutral-100 p-2 md:w-full md:p-8 dark:border-zinc-800 dark:bg-neutral-900",
              compact ? "min-h-[100px]" : "min-h-[400px]",
              isBlock ? "md:p-0" : ""
            )}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Preview;
