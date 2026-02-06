"use client"
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";


export default function 
PreviewContent({
    link,
    prePath,
    isBlock = false,
}: {
    link: string;
    prePath: string;
    isBlock?: boolean;
}) {

    const Path=()=>{
        console.log(link)
    }
    
    return (
        <>
        <div className="flex items-center justify-end">
            <Button onClick={Path} variant="ghost" className="hidden   items-center gap-1 cursor-pointer text-sm text-decoration-none hover:bg-none hover:text-white hover:scale-110  "><ArrowUpRight className="size-5"/> Open in V0</Button>
            <Button className="dark:bg-neutral-800  bg-neutral-800 hover:bg-neutral-900 cursor-pointer text-neutral-300 hover:text-neutral-200 text-sm h-8 flex gap-1"><ArrowUpRight className="size-4.5"/>  Open in V0 </Button>
        </div>
        </>
    );
}