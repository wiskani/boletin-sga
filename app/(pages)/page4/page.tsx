"use client";

import FaucetDripMotion from "@/components/FaucetDripPropsMotion";
import { articles } from "@/content/articles";
import Image from "next/image";
import waterSaving from "@/content/water_saving.json";
import IconTextRevealScrollMotion from "@/components/IconTextRevealScrollMotion";

export default function Page() {
    return (
        <div>
            <main className="pb-96">
                {/* HERO */}
                <div className="relative w-full" style={{ height: "24em" }}>
                    <Image
                        src={articles[4].coverImage}
                        alt="Article image"
                        fill
                        className="absolute inset-0 z-0 object-cover"
                    />

                    {/* BLOQUE TEXTO + ICONO */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-4">
                        <div className="w-full flex justify-center">
                            {/* CONTENEDOR RESPONSIVO */}
                            <div className="flex flex-col md:flex-row items-center">
                                {/* ICONO */}
                                <div className="order-1 md:order-2 mb-3 md:mb-0 md:ml-4 self-center md:self-start md:mt-2">
                                    <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
                                        <FaucetDripMotion />
                                    </div>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-white">
                                        {articles[4].toptitle}
                                    </h2>
                                    <h2 className="title text-custom2025WaterBlue">
                                        {articles[4].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENIDO EN GRID */}
                <div className="px-4 md:px-8 lg:px-12 mt-12 text-gray-700 text-lg leading-relaxed">
                    <div
                        className="
                    mx-auto
                    px-4 md:px-8
                    lg:px-12
                    max-w-screen-xl
                    2xl:max-w-[1200px]
                    3xl:max-w-[1280px]
                    "
                    >
                        <div className="flex flex-col gap-y-7">
                            {/* INTRODUCCIÓN (full width) */}
                            <section className="mx-5">
                                <p className="firstparagraph first-letter:text-custom2025WaterBlue">
                                    {waterSaving.intro[0]}
                                </p>
                                {waterSaving.intro.slice(1).map((text, i) => (
                                    <p key={i} className="paragraph">
                                        {text}
                                    </p>
                                ))}
                            </section>
                            {/* 1 colum) */}
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/grifo.png"
                                    text={waterSaving.recommendations.items[0]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/toillet.png"
                                    text={waterSaving.recommendations.items[1]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/cepillo_dientes.png"
                                    text={waterSaving.recommendations.items[2]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/Lavavo.png"
                                    text={waterSaving.recommendations.items[3]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/auto_balde.png"
                                    text={waterSaving.recommendations.items[4]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/icons/reuse_water.svg"
                                    text={waterSaving.recommendations.items[5]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                            <section className="grid grid-cols-1 gap-y-8 items-center ">
                                <IconTextRevealScrollMotion
                                    imageSrc="/images/ducha.png"
                                    text={waterSaving.recommendations.items[6]}
                                    bg_color="bg-custom2025SlateBlue"
                                    textClassName="text-white md:text-lg text-sm"
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
