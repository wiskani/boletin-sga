"use client";
 
import { waterSaving } from "@/content/water-saving";
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

                    <Image
                        src={articles[4].coverImage}
                        alt="Article image"
                        fill
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />

                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="w-1/2 toptitle text-black">
                            {articles[4].toptitle}
                        </h2>
                        <h2 className="title text-customBlueWater">
                            {articles[4].title}
                        </h2>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p className="firstparagraph">
                        {articles[4]?.content?.[0]}
                    </p>
                    {articles[4]?.content?.slice(1)?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="paragraph"
                        >
                            {paragraph}
                        </p>

                    ))}


                </div>
                <div
                    className="
                    mt-9
                    bg-customYellowPastel
                    grid
                    gap-6
                    grid-cols-1
                    md:grid-cols-2
                    " 
                >
                    {waterSaving.map((recommendation, index) => (
                        <div
                            key={index}
                            className="flex flex-col m-5 space-y-7 items-center justify-center"
                        >
                            <Image
                                src={recommendation.image}
                                alt="recomendación"
                                width={110}
                                height={110}

                            />
                            <p
                                className="
                                mt-2
                                b-9
                                text-center
                                text-xs
                                font-stemligth
                                md:text-base
                                dark:text-black
                                "
                            >
                                {recommendation.recommendation}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}


