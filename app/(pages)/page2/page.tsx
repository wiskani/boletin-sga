"use client";

import { articles } from "@/content/articles";
import { data_per_aspect_value } from "@/content/survey";
import Image from "next/image";
import { BarList } from "@/components/BarList";
import EnterIconAnimation from "@/components/EnterIconMotion";

export default function Page() {
    return (
        <div>
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
                        src={articles[2].coverImage}
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
                                            src="/icons/survey_icon.svg"
                                            alt="Icono de encuesta"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-custom2025Purple">
                                        {articles[2].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">{articles[2].title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p className="firstparagraph first-letter:text-custom2025Purple">
                        {articles[2]?.content?.[0] ?? "Contenido no disponible"}
                    </p>
                    {articles[2]?.content?.slice(1)?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="paragraph"
                        >
                            {paragraph}
                        </p>

                    ))}

                    <BarList
                        data={data_per_aspect_value}
                        valueFormatter={(value) => `${value} %`}
                        className="mt-5"
                    />

                </div>
            </main>
        </div>
    );
}

