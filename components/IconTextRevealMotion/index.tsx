"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";

type IconTextRevealProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    textClassName?: string;
    bg_color?: string;
};

const IconTextRevealMotion: React.FC<IconTextRevealProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textClassName = "paragraph",
    bg_color = "bg-white",
}) => {
    const [isReveal, setIsReveal] = useState<boolean>(false);

    return (
        <div>
            <motion.div
                initial={false}
                animate={isReveal ? "reveal" : "not_reveal"}
                className="h-40 relative w-full flex items-center justify-center overflow-hidden p-5 select-none rounded-2xl"
            >
                <motion.img
                    src={imageSrc}
                    alt={imageAlt}
                    className="z-10 cursor-pointer mr-6"
                    onClick={() => setIsReveal(!isReveal)}
                    variants={iconVariants}
                    width={90}
                />
                <motion.p
                    className={`z-20 items-center pointer-events-none ${textClassName}`}
                    variants={textVariants}
                >
                    {text}
                </motion.p>
                <motion.div
                    className={` z-0 ${bg_color} absolute top-0 left-0 bottom-0 w-[2500px]`}
                    variants={bannerVariants}
                />
            </motion.div>
        </div>
    );
};

const iconVariants: Variants = {
    reveal: {
        x: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
        },
    },
    not_reveal: {
        x: 100,
        transition: {
            delay: 0.2,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
        },
    },
};

const textVariants: Variants = {
    reveal: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
        },
    },
    not_reveal: {
        x: -35,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
        },
    },
};

const bannerVariants: Variants = {
    reveal: (height = 900) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
        },
    }),
    not_reveal: {
        clipPath: "circle(75px at 167px 80px)",
        transition: {
            delay: 0.2,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
        },
    },
};

export default IconTextRevealMotion;

