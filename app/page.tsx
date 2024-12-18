"use client"

import { useRouter } from 'next/navigation'
import { motion } from "motion/react";

export default function Home() {
    const router = useRouter();
    return (
        <div
            className="
            w-full
            h-screen
            bg-no-repeat
            bg-cover
            bg-center
            bg-[url('/images/background_initial.jpg')]
            ">
            <div
                className="
                w-[90%]
                mx-auto
                h-full
                flex
                items-center justify-between py-10"
            >
                <div className="lg:w-fit">
                    <div
                        className="
                        text-6xl
                        sm:text-6xl
                        md:text-6xl
                        lg:text-7xl
                        xl:text-8xl
                        2xl:text-9xl
                        text-left
                        text-white
                        font-adca
                        uppercase"
                    >
                        <motion.h1
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                            }}
                            initial={{ opacity: 0, scale: 0.7 }}
                        >BOLETÍN
                        </motion.h1>
                    </div>
                    <div
                        className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-left text-white font-tahu">
                        <motion.h2
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                            }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            className="text-customRed"
                            >Del Sistema de Gestión Ambiental</motion.h2>
                    </div>
                    <motion.button
                        className="font-stemligth bg-customBlue text-white py-2 px-9 rounded mt-9 uppercase "
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                        onClick={()=> router.push('/page1')}
                    >

                        Comenzar
                    </motion.button>
                </div>

            </div>
        </div>
    );
}
