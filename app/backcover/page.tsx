"use client"
 
import Image from "next/image"
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Page() {
    const router = useRouter();

    return (
        <div
            className="
            relative
            w-full
            min-h-screen
            h-screen
            bg-no-repeat
            bg-cover
            bg-center
            bg-[url('/images/background_back_cover.jpg')]
            " 
        >
            <div
                className="
                md:pt-32
                grid
                gap-6
                grid-cols-1
                sm:grid-cols-2
                "
            >
                <motion.div
                    className="flex flex-col m-5 space-y-7 items-center justify-center"
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                >
                    <Image
                        src="/images/logo_white_full.png"
                        alt="recomendación"
                        width={310}
                        height={310}
                        className="w-40 md:w-60 lg:w-80 h-auto"

                    />
                </motion.div>
                <motion.div
                    className="flex flex-col m-5 space-y-5 items-center justify-center"
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                >
                    <p
                        className="text-sm text-white font-stemligth md:text-lg"
                    >
                        Una empresa filial de
                    </p>

                    <Image
                        src="/images/logo_corporacion.png"
                        alt="recomendación"
                        width={280}
                        height={280}
                        className="w-36 md:w-56 lg:w-72 h-auto"

                    />
                </motion.div>
            </div>
            <div
                className="flex flex-col m-5 space-y-7 items-center justify-center"
            >
                <motion.p
                    className="text-center text-white text-sm font-stemligth md:text-lg"
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                >
                    Calle Walter Galindo No S-3643, entre calles Hernan Muller y Aranibar Orozco <br />
                    (Av. Victor Ustáriz km 4 1⁄2). Casilla No 640<br />
                    Teléfonos: (591-4) 425900 - 4259512<br />
                    Fax: (591-4) 4259516<br />
                    E-mail: endetransmision@endetransmision.bo<br />
                    Cochabamba - Bolivia<br />
                </motion.p>
                <motion.button
                    className="
                        text-sm
                        font-stemligth
                        bg-white
                        text-customBlue
                        py-2
                        px-9
                        rounded
                        mt-9
                        uppercase "
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/')}
                >

                    Volver al inicio
                </motion.button>

            </div>
        </div>
    )
};
