"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";

type ImageRevealScrollProps = {
    src: string;
    alt?: string;
};

const ImageRevealScrollMotion: React.FC<ImageRevealScrollProps> = ({
    src,
    alt = "",
}) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const hasRevealedRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const check = () => {
            rafRef.current = null;
            if (hasRevealedRef.current) return;

            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const triggerLine = window.innerHeight * (2 / 3); // "arriba de 1/3" (o sea, más arriba que el tercio inferior)

            // Cuando el TOP del elemento sube por encima de esa línea, revelamos (una sola vez)
            if (rect.top <= triggerLine) {
                hasRevealedRef.current = true;
                setIsRevealed(true);
                window.removeEventListener("scroll", onScroll, { passive: true } as any);
            }
        };

        const onScroll = () => {
            if (hasRevealedRef.current) return;
            if (rafRef.current != null) return;
            rafRef.current = window.requestAnimationFrame(check);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // chequeo inicial por si ya está en posición al cargar
        check();

        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true } as any);
            if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
        };

    }, []);

    return (
        <div ref={containerRef} className="w-full h-full">
            <motion.img
                src={src}
                alt={alt}
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                variants={imgVariants}
                className="w-full h-full block"
            />
        </div>
    );
};

const imgVariants: Variants = {
    hidden: {
        x: -40,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.9,
        },
    },
};

export default ImageRevealScrollMotion;

