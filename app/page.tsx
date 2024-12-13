import PageNavigation from "@/components/PageNavigation";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="
            w-full
            h-screen
            bg-no-repeat
            bg-cover
            bg-center
            bg-[url('/images/background_initial.jpg')]
            ">
            <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
                <div className="lg:w-fit">
                    <div
                        className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-left text-white font-adca font-extrabold uppercase">
                        <h1>BOLETÍN</h1>
                    </div>
                    <div
                        className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-left text-white font-tahu font-extrabold">
                        <h2 className="text-customRed">Del Sistema de Gestión Ambiental</h2>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300">
                        Comenza
                    </button>
                </div>

            </div>
        </div>
    );
}
