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
}

const prePath = process.env.VERCEL_PRODUCTION_URL ? process.env.VERCEL_PRODUCTION_URL : "http://localhost:3000"

const Preview = ({ children, className, isPremium = false, link, useIframe = false, height, compact = false, comment = [], isBlock = false }: PreviewProps) => {
    return (
        <>
            <div className={cn("w-full overflow-hidden", className)}>
                <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

                {
                    useIframe ?
                        (
                            <div className="w-full my-4 border rounded-2xl border-zinc-400 dark:border-zinc-700">
                                <div className="relative w-full h-[100dvh] overflow-hidden">
                                    <iframe src={`${prePath}/preview/${link}`} title={link} className="w-full h-full overflow-y-auto list-none" style={{ border: "none", transform: "scale(0.95)" }}></iframe>

                                </div>
                            </div>
                        )
                        : (
                            <div
                                className={cn(
                                    "p-2 md:p-8 flex justify-center items-center relative border rounded-2xl my-4 border-zinc-400 dark:border-zinc-800 not-prose",
                                    compact ? "min-h-[100px]" : "min-h-[400px]",
                                    isBlock ? "md:p-0" : ""
                                )}
                            >
                                {children}
                            </div>
                        )
                }

                {/* comment feature to be added */}
            </div>
        </>
    )
}

export default Preview