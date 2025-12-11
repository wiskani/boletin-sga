import { motion } from "motion/react";
import type { ReactNode } from "react";

type EnterAnimationProps = {
    children: ReactNode;
    delay?: number;
};

const EnterIconAnimation = ({ children, delay = 0 }: EnterAnimationProps) => {
    return (
        <motion.div
            initial={{
                opacity: 1,   // sin fade
                y: -40,       // entra desde arriba
                scale: 0,   // un poco más pequeño
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                delay,
                type: "spring",
                bounce: 0.6,   // cuánto rebota (0–1)
                duration: 0.8, // tiempo “visible” de la animación
            }}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {children}
        </motion.div>
    );
};

export default EnterIconAnimation;

