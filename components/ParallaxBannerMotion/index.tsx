"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxBannerProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    textColorClass?: string;
    height?: number | string;
    strengthPx?: number; // NUEVO: intensidad (opcional)
};

const ParallaxBannerMotion: React.FC<ParallaxBannerProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textColorClass = "text-white",
    height = "70vh",
    strengthPx = 80, // prueba 60–140
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax en PIXELES (más notorio)
    const y = useTransform(scrollYProgress, [0, 1], [-strengthPx, strengthPx]);

    const resolvedHeight = typeof height === "number" ? `${height}px` : height;

    return (
        <section
            ref={ref}
            style={{ height: resolvedHeight }}
            className="relative w-full overflow-hidden"
        >
            {/* Imagen con “overscan” para que el movimiento se note */}
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
            />

            {/* Texto fijo encima */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
                <p className={`text-xl md:text-4xl sm:xl font-adca uppercase ${textColorClass}`}>
                    {text}
                </p>
            </div>
        </section>
    );
};

export default ParallaxBannerMotion;

