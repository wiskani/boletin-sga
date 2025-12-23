"use client";

import { articles } from "@/content/articles";
import hazardMaterial from "@/content/hazardous_materials.json"
import Image from "next/image";
import EnterIconAnimation from "@/components/EnterIconMotion";
import ProtectedAreasMap from "@/components/ProtectedAreas";
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
                                "linear-gradient(180deg,transparent,rgba(0,0,0,.6))",
                        }}
                    ></div>

                    <Image
                        src={articles[8].coverImage}
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
                                            src="/icons/hazard_icon.svg"
                                            alt="Icono de peligro"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-custom2025DeepOrange">
                                        {articles[8].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">
                                        {articles[8].title}
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
                                <p className="firstparagraph first-letter:text-custom2025DeepOrange">
                                    {hazardMaterial.intro[0]}
                                </p>
                                {hazardMaterial.intro.slice(1).map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                            </section>

                            {/* DEFINICION (full width) */}
                            <section className="mx-5">
                                <div>
                                    <p className="paragraph font-bold">{hazardMaterial.definition.title}</p>
                                    {hazardMaterial.definition.text.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>


                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}


