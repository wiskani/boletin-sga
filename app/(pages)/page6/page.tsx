"use client";

import { articles } from "@/content/articles";
import solidWasted from "@/content/solid_wasted.json"
import Image from "next/image";
import EnterIconAnimation from "@/components/EnterIconMotion";
import AutoImageCarouselMotion from "@/components/AutoImageCarouselMotion";
import ParallaxBannerMotion from "@/components/ParallaxBannerMotion";

export default function Page() {
    const images = [
        { src: "/images/reducir.jpg", alt: "Reducir residuos" },
        { src: "/images/reusar.jpg", alt: "Reusar materiales" },
        { src: "/images/reciclar.jpg", alt: "Reciclar" },
    ]

    return (
        <div>
            <main>
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
                        src={articles[6].coverImage}
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
                                            src="/icons/wasted_container.svg"
                                            alt="Icono residuos"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-customYelow">
                                        {articles[6].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">
                                        {articles[6].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* CONTENIDO EN GRID */}
                <div className="px-4 md:px-8 lg:px-12 mt-12 text-gray-700 text-lg leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-2 gap-y-1 md:gap-y-2 items-center">
                        <p className="firstparagraph first-letter:text-customYelow md:col-span-2">
                            {solidWasted.intro}
                        </p>
                        <p className="paragraph">
                            <strong>{solidWasted.separation.title}</strong><br />
                            {solidWasted.separation.text.map((p, i) => (
                                <span key={i}>
                                    {p}
                                    {i < solidWasted.separation.text.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                        <AutoImageCarouselMotion
                            images={images}
                            intervalMs={4000}
                            height="clamp(180px, 40vw, 320px)"
                        />
                        <div className="md:col-span-2">
                            <ParallaxBannerMotion
                                imageSrc="/images/residuos_municipales_bg.jpg"
                                text="Residuos sólidos municipales"
                                textColorClass="text-customYelow"
                                height={100}
                            />
                            <p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

