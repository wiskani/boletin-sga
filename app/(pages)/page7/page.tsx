
"use client";

import { articles } from "@/content/articles";
import floraFauna from "@/content/flora_fauna.json"
import Image from "next/image";
import EnterIconAnimation from "@/components/EnterIconMotion";
import AutoImageCarouselMotion from "@/components/AutoImageCarouselMotion";
import ParallaxBannerMotion from "@/components/ParallaxBannerMotion";

export default function Page() {

    return (
        <div >
            <main className="pb-32">
                {/* HERO */}
                <div className="relative w-full" style={{ height: "24em" }}>
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg,transparent,rgba(0,0,0,.45))",
                        }}
                    ></div>

                    <Image
                        src={articles[7].coverImage}
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
                                    <EnterIconAnimation delay={0.9}>
                                        <Image
                                            src="/icons/wild_icon.svg"
                                            alt="Icono de fauna"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-custom2025SoftGreen">
                                        {articles[7].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">
                                        {articles[7].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENIDO EN GRID */}
                <div className="px-4 md:px-8 lg:px-12 mt-12 text-gray-700 text-lg leading-relaxed">
                    <div className="
                    mx-auto
                    px-4 md:px-8
                    lg:px-12
                    max-w-screen-xl
                    2xl:max-w-[1200px]
                    3xl:max-w-[1280px]
                    ">
                        <div className="flex flex-col gap-y-7">

                            {/* INTRODUCCIÓN (full width) */}
                            <section className="mx-5">
                                <p className="firstparagraph first-letter:text-custom2025StrongGreen">
                                    {floraFauna.intro[0]}
                                </p>
                                {floraFauna.intro.slice(1).map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                            </section>

                            {/* FONDO NENUFAR TITULO + TEXTO */}
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-x-16 gap-y-8 items-center ">
                                <div className="mx-5 items-center justify-center">
                                    <p className="text-center text-custom2025StrongGreen font-tahu text-5xl sm:xl md:3xl"
                                    >{floraFauna.biodiversity.title}</p>
                                </div>
                                <div className="lg:px-14 md:px-10 px-5">
                                    <div className="px-5 rounded-lg border-2 border-custom2025StrongGreen py-3">
                                        {floraFauna.biodiversity.text.map((text, i) => (
                                            <p key={i} className="paragraph"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}


