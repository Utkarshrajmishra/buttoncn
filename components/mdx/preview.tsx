"use client"

import { AnimatePresence, motion } from "motion/react";
import { useActionState, useTransition } from "react";


interface PreviewClientProps {
    link?: string;
    prePath?: string,
    isBlock?: boolean
}

const PreviewClient = ({ link, prePath, isBlock = false }: PreviewClientProps) => {
    const [isPending, startTransition] = useTransition();
    // const [state, formAction]=useActionState();

    return (
        <AnimatePresence>
            {
                [...Array(6)?.map((_, index) => (
                    <motion.div
                        key={index}
                        className="fixed w-1 h-1 bg-black dark:bg-white rounded-full "
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            x: [
                                0,
                                (index % 2 ? 1 : -1) * (Math.random() * 50 + 20),
                            ]
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.1
                        }}
                    >

                    </motion.div>
                ))]
            }
        </AnimatePresence>
    )
}

export default PreviewClient