"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxBannerProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    textColorClass?: string;
    height?: number | string;
};

const ParallaxBannerMotion: React.FC<ParallaxBannerProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textColorClass = "text-white", // default
    height = "70vh",
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const resolvedHeight =
        typeof height === "number" ? `${height}px` : height;

    return (
        <section
            ref={ref}
            style={{ height: resolvedHeight }}
            className="relative w-full overflow-hidden"
        >
            {/* Imagen parallax */}
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                style={{ y }}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Texto */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
                <p className={`text-xl md:text-3xl font-semibold ${textColorClass}`}>
                    {text}
                </p>
            </div>
        </section>
    );
};
export default ParallaxBannerMotion
