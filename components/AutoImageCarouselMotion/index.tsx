"use client"

import {
    AnimatePresence,
    motion,
    wrap,
    usePresence,
} from "motion/react"
import type React from "react"
import { forwardRef, useEffect, useState } from "react"

type CarouselImage = {
    src: string
    alt?: string
}

type AutoImageCarouselProps = {
    images: CarouselImage[]
    intervalMs?: number
    height?: number | string
}

const AutoImageCarouselMotion: React.FC<AutoImageCarouselProps> = ({
    images,
    intervalMs = 3000,
    height = 260,
}) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)

    useEffect(() => {
        if (images.length <= 1) return

        const id = setInterval(() => {
            setDirection(1)
            setIndex((prev) => wrap(0, images.length, prev + 1))
        }, intervalMs)

        return () => clearInterval(id)
    }, [images.length, intervalMs])

    if (images.length === 0) return null

    const image = images[index]

    return (
        <div style={container}>
            <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
            >
                <Slide
                    key={image.src + index}
                    image={image}
                    custom={direction}
                    height={height}
                />
            </AnimatePresence>
        </div>
    )
}

type SlideProps = {
    image: CarouselImage
    custom: 1 | -1
    height: number | string
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(function Slide(
    { image, custom, height },
    ref
) {
    const [isPresent] = usePresence()

    const boxStyle: React.CSSProperties = {
        ...baseBox,
        height,
        width: "100%",     // siempre ocupa todo el ancho disponible
    }

    return (
        <motion.div
            ref={ref}
            custom={custom}
            initial={{ opacity: 0, x: custom * 60 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.5,
                },
            }}
            exit={{
                opacity: 0,
                x: custom * -60,
                transition: { duration: 0.35 },
            }}
            style={{ ...boxStyle, height }}
        >
            <img
                src={image.src}
                alt={image.alt ?? ""}
                style={imageStyle}
            />
        </motion.div>
    )
})

/**
 * ==============   STYLES   ================
 */

const container: React.CSSProperties = {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    border: "none",
}

const baseBox: React.CSSProperties = {
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
}

const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block",
    margin: 0,
    padding: 0,
    border: "none",
}

export default AutoImageCarouselMotion

