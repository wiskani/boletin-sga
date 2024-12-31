"use client";

import { articles } from "@/content/articles";
import { data_per_aspect_value } from "@/content/survey";
import Image from "next/image";
import { BarList } from "@/components/BarList";

export default function Page() {
    return (
        <div>
            <main className="mt-10">
                <div
                    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: "24em" }}
                >
                    {/* Fondo degradado */}
                    <div
                        className="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{
                            backgroundImage:
                            "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                        }}
                    ></div>

                    {/* Imagen principal */}
                    <Image
                        src={articles[2].coverImage}
                        alt="Article image"
                        fill
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />

                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="toptitle text-customYelow">
                            {articles[2].toptitle}
                        </h2>
                        <h2 className="title text-gray-100">
                            {articles[2].title}
                        </h2>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p className="firstparagraph">
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

