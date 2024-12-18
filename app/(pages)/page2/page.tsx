"use client";

import { articles } from "@/content/articles";
import Image from "next/image";

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
                        src={articles[1].coverImage}
                        alt="Article image"
                        fill
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />

                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2
                            className="
                            text-2xl
                            px-4
                            text-customYelow
                            font-tahu
                            inline-flex
                            items-center
                            justify-center
                            sm:text-2xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-4xl
                            2xl:text-5xl
                            mb-0"

                        >
                            {articles[1].toptitle}
                        </h2>
                        <h2
                            className="
                            text-3xl
                            px-4
                            font-adca
                            text-gray-100
                            items-center
                            justify-center
                            leading-tight
                            sm:text-3xl
                            md:text-4xl
                            lg:text-4xl
                            xl:text-5xl
                            2xl:text-6xl
                            uppercase
                            "
                        >
                            {articles[1].title}
                        </h2>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p
                        className="
                        mb-3
                        font-geistsans
                        text-gray-500
                        dark:text-gray-400
                        first-letter:text-7xl
                        first-letter:font-bold
                        first-letter:text-gray-900
                        dark:first-letter:text-gray-100
                        first-letter:me-3
                        first-letter:float-start
                        text-justify
                        sm:text-sm"
                    >
                        {articles[0].content[0]}
                    </p>
                    {articles[1].content.slice(1).map((paragraph, index) => (
                    <p
                            key={index}
                        className="
                        mb-3
                        font-geistsans
                        text-gray-500
                        dark:text-gray-400
                        dark:first-letter:text-gray-100
                        text-justify
                        sm:text-sm"
                    >
                        {paragraph}
                    </p>

                    ))}
                    {/* Más contenido */}
                </div>
            </main>
        </div>
    );
}

