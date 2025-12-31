"use client";

import { motion, Variants } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type IconTextRevealProps = {
    imageSrc: string;
    imageAlt?: string;
    text: string;
    textClassName?: string;
    bg_color?: string;
};

const IconTextRevealScrollMotion: React.FC<IconTextRevealProps> = ({
    imageSrc,
    imageAlt = "",
    text,
    textClassName = "paragraph",
    bg_color = "bg-white",
}) => {
    const [isReveal, setIsReveal] = useState<boolean>(false);
    const hasRevealedRef = useRef<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            rafRef.current = null;

            // ya se ejecutó una vez -> no hacemos nada (no vuelve a ocultar)
            if (hasRevealedRef.current) return;

            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight * 0.75;

            // dispara cuando el top del elemento está por encima de la mitad
            const shouldReveal = rect.top < threshold && rect.bottom > 0;

            if (shouldReveal) {
                hasRevealedRef.current = true;
                setIsReveal(true);

                // opcional: ya no escuchamos scroll/resize porque no se usará más
                window.removeEventListener("scroll", onScrollOrResize as any);
                window.removeEventListener("resize", onScrollOrResize as any);
                if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
            }
        };

        const onScrollOrResize = () => {
            if (rafRef.current != null) return;
            rafRef.current = window.requestAnimationFrame(update);
        };

        // initial check
        update();

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);

        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
            if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div ref={containerRef}>
            <motion.div
                initial={false}
                animate={isReveal ? "reveal" : "not_reveal"}
                className="h-40 relative w-full flex items-center justify-center overflow-hidden p-5 select-none rounded-2xl"
            >
                <motion.img
                    src={imageSrc}
                    alt={imageAlt}
                    className="z-10 mr-6"
                    variants={iconVariants}
                    width={90}
                    draggable={false}
                />

                <motion.p
                    className={`z-20 items-center pointer-events-none ${textClassName}`}
                    variants={textVariants}
                >
                    {text}
                </motion.p>

                <motion.div
                    className={`z-0 ${bg_color} absolute top-0 left-0 bottom-0 w-[2500px]`}
                    variants={bannerVariants}
                />
            </motion.div>
        </div>
    );
};

const iconVariants: Variants = {
    reveal: {
        x: 0,
        transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
    not_reveal: {
        x: 100,
        transition: { delay: 0.0, type: "tween", ease: "easeOut", duration: 0.3 },
    },
};

const textVariants: Variants = {
    reveal: {
        x: 0,
        opacity: 1,
        transition: { delay: 1.1, type: "tween", ease: "easeOut", duration: 0.8 },
    },
    not_reveal: {
        x: -35,
        opacity: 0,
        transition: { type: "tween", ease: "easeOut", duration: 0.3 },
    },
};

const bannerVariants: Variants = {
    reveal: {
        clipPath: "inset(0 0% 0 0 round 16px)",
        opacity: 1,
        transition: { delay: 0.8, type: "tween", ease: "easeOut", duration: 1 },
    },
    not_reveal: {
        clipPath: "inset(0 100% 0 0 round 16px)",
        opacity: 0,
        transition: { delay: 0.2, type: "tween", ease: "easeOut", duration: 0.3 },
    },
};

export default IconTextRevealScrollMotion;

