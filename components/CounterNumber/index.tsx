"use client"

import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import { useEffect } from "react";

interface CounterNumberProps {
    initial_value: number;
    final_value:number;
    duration:number;
    className?: string;
}

const CounterNumber: React.FC<CounterNumberProps> =({
    initial_value,
    final_value,
    duration,
    className,
}) => {
    const count = useMotionValue(initial_value);
    const rounded = useTransform(count, Math.round);

    useEffect(()=>{
        const animation = animate(count, final_value, {duration: duration });

        return animation.stop;
    }, []);
    return (
        <motion.h1 className={className}>
            {rounded}
        </motion.h1>);
}

export default CounterNumber
