import { articles } from "@/content/articles"
import Image from "next/image"

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
                        {articles[2].content[0]}
                    </p>
                    {articles[2].content.slice(1).map((paragraph, index) => {
                        if (paragraph.trim().startsWith('-')){
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
                <div
                    className="mt-9 bg-customGreen dark:bg-emerald-50"
                >
                    <h2 className="toptitle mt-7 text-white dark:text-customGreen">
                        {articles[2].content_extra_1?.title}
                    </h2>
                    <div className="m-5 pb-5">
                        {articles[2].content_extra_1?.content.map((paragraph, index) => {
                            if (paragraph.trim().startsWith('-')){
                                return (
                                    <li
                                        key={index}
                                        className="bullet-text-extra"
                                    >
                                        {paragraph.trim().substring(1).trim()}
                                    </li>)
                            }
                            return (<p
                                key={index}
                                className="paragraph-extra"
                            >
                                {paragraph}
                            </p>)

                        })}
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/_MOPu_uL-fI?si=3SYfMfUDD2EYokIU"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </main>
        </div>
    );
}

