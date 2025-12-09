import { articles } from "@/content/articles";

export default function Page() {
    return (
        <div className="flex flex-col z-10 items-center h-screen bg-custom2025SoftYellow">

            <div className="
                relative
                mt-4 mb-9
                w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4
                aspect-[876/547]  /* relación del fondo */
            ">
                <img
                    src="/images/pag_1_01_1.svg"
                    alt="Laptop boletín SGA"
                    className="absolute inset-0 w-full h-full"
                />

                <div className="newsletter-window">
                    <img
                        src="/images/pag_1_01_2.svg"
                        alt="Boletín del SGA"
                        className="newsletter-sheet"
                    />
                </div>

                <img
                    src="/images/pag_1_01_3.svg"
                    alt="Sobre boletín SGA"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />
            </div>

            <p className="firstparagraph px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
                {articles[1].content}
            </p>
        </div>
    );
}

