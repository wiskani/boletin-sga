"use client"
 
import { projects } from "@/content/projects";
import { articles } from "@/content/articles"
import dynamic from 'next/dynamic'
import Image from "next/image"
import CounterNumber from "@/components/CounterNumber";
import ProjectContainer from "@/containers/projects";



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
                        src={articles[5].coverImage}
                        alt="Article image"
                        fill
                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />

                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="toptitle text-customYelow">
                            {articles[5].toptitle}
                        </h2>
                        <h2 className="title text-gray-100">
                            {articles[5].title}
                        </h2>
                    </div>
                </div>

                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p className="firstparagraph">
                        {articles[5].content[0]}
                    </p>
                    {articles[5].content.slice(1).map((paragraph, index) => {
                        if (paragraph.trim().startsWith('-')) {
                            return (
                                <li
                                    key={index}
                                    className="bullet-text"
                                >
                                    {paragraph.trim().substring(1).trim()}
                                </li>)
                        }
                        return (<p
                            key={index}
                            className="paragraph"
                        >
                            {paragraph}
                        </p>)

                    })}

                </div>
            <ProjectContainer projectNumber={0} />
            </main>
        </div>
    );
}

