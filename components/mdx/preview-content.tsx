"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PreviewContent({
  link,
  prePath,
  isBlock = false,
}: {
  link: string;
  prePath: string;
  isBlock?: boolean;
}) {
  const Path = () => {
    console.log(link);
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <Button
          onClick={Path}
          variant="ghost"
          className="hidden   items-center gap-1 cursor-pointer text-sm text-decoration-none hover:bg-none hover:text-white hover:scale-110  "
        >
          <ArrowUpRight className="size-5" /> Open in V0
        </Button>
      
      <Link target="_blank" className="no-underline"  href={`https://v0.dev/chat/api/open?url=https://fluxbuttons.vercel.app/r/${link}.json`}>  <Button className="dark:bg-neutral-800  bg-neutral-800 hover:bg-neutral-900 cursor-pointer text-neutral-300 hover:text-neutral-200 text-sm h-8 flex gap-1">
          <ArrowUpRight className="size-4.5" /> Open in{" "}
          <svg
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-current"
          >
            <path
              d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
              fill="currentColor"
            ></path>
            <path
              d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
              fill="currentColor"
            ></path>
          </svg>
        </Button>
        </Link>
      </div>
    </>
  );
}
