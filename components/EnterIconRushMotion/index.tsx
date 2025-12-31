"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type EnterAnimationProps = {
  children: ReactNode;
  delay?: number;
};

const EnterIconRushAnimation = ({
  children,
  delay = 0,
}: EnterAnimationProps) => {
  const distance = 320; // >= 100px

  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay,

        // MOVIMIENTO: lento y frenado (desacelera hasta detenerse)
        x: {
          duration: 1.2,
          ease: "easeOut",
        },

        // OPACIDAD: rápida al entrar (no afecta el movimiento)
        opacity: {
          duration: 0.08,
          ease: "linear",
        },
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

export default EnterIconRushAnimation;
