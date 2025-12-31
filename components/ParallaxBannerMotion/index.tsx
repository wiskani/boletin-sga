"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxBannerProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;

    /** Clases Tailwind para el texto (opcional) */
    textClassName?: string;

    /** Altura del banner */
    height?: number | string;

    /** Intensidad del parallax */
    strengthPx?: number;
};

const ParallaxBannerMotion: React.FC<ParallaxBannerProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textClassName = "text-white text-xl md:text-4xl font-adca uppercase",
    height = "70vh",
    strengthPx = 80,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-strengthPx, strengthPx]);

    const resolvedHeight =
        typeof height === "number" ? `${height}px` : height;

    return (
        <section
            ref={ref}
            style={{ height: resolvedHeight }}
            className="relative w-full overflow-hidden"
        >
            {/* Imagen con parallax */}
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
            />

            {/* Texto encima */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
                <p className={textClassName}>{text}</p>
            </div>
        </section>
    );
};

export default ParallaxBannerMotion;

