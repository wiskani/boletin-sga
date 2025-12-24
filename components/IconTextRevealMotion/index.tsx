"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";

type IconTextRevealProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    textClassName?: string;
    bg_color?: string;

}
const IconTextRevealMotion: React.FC<IconTextRevealProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textClassName = "paragraph",
    bg_color = "bg-white"
}) => {
    const [isReveal, setIsReveal] = useState<boolean>(false)
    return (
        <div
            className={`${bg_color} items-start p-3`}
        >
            <AnimatePresence
                initial={false}
            >
                {isReveal ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={() => setIsReveal(false)}
                        className="h-40 cursor-pointer"
                    >
                        <p
                            className={textClassName}
                        >
                            {text}
                        </p>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={20}
                            height={20}
                        />
                    </motion.div>
                ) : (
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        src={imageSrc}
                        alt={imageAlt}
                        whileHover={{ scale: 1.1 }}
                        className="h-40 cursor-pointer"
                        onClick={() => setIsReveal(true)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default IconTextRevealMotion;
