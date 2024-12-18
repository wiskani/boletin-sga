"use client"

import { articles } from "@/content/articles";
import Image from "next/image";

export default function Page() {

    return(
        <div className="flex flex-col z-10 items-center justify-center h-screen">
            <Image
                src="/images/pag_1_01.jpg"
                alt="photo"
                className="h-auto max-w-full rounded-lg mb-9"
                sizes="40vw"
                style={{
                    width: '40%',
                    height: 'auto',
                }}
                width={400}
                height={533}
            />

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
                {articles[0].content}
            </p>

        </div>
    )
}
