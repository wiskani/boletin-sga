"use client";

import { articles } from "@/content/articles";
import { data_per_aspect_value } from "@/content/survey";
import Image from "next/image";
import { BarList } from "@/components/BarList";

export default function Page() {
    const content = articles[6]?.content ?? [];
    const firstParagraph = content[0];
    const otherParagraphs = content.slice(1);

    return (
        <div>
            <main>
                {/* HERO */}
                <div
                    className="relative w-full"
                    style={{ height: "24em" }}
                >
                    <div
                        className="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg,transparent,rgba(0,0,0,.45))",
                        }}
                    ></div>

                    <Image
                        src={articles[6].coverImage}
                        alt="Article image"
                        fill
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-4">
                        <h2 className="toptitle text-customYelow">
                            {articles[6].toptitle}
                        </h2>
                        <h2 className="title text-gray-100 text-center">
                            {articles[6].title}
                        </h2>
                    </div>
                </div>

                {/* CONTENIDO EN GRID */}
                <div className="px-4 md:px-8 lg:px-12 mt-12 text-gray-700 text-lg leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Primer párrafo especial */}
                        {firstParagraph && (
                            <p className="firstparagraph">
                                {firstParagraph}
                            </p>
                        )}

                        {/* Resto de párrafos como elementos independientes */}
                        {otherParagraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="paragraph"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Gráfico ocupando todo el ancho en escritorio */}
                        <div className="md:col-span-2 mt-4">
                            <BarList
                                data={data_per_aspect_value}
                                valueFormatter={(value) => `${value} %`}
                                className="mt-5"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

