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

            <p className="firstparagraph">
                {articles[0].content}
            </p>

        </div>
    )
}
