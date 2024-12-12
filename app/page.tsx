import PageNavigation from "@/components/PageNavigation";
import Link from "next/link";

export default function Home() {
    return (
    <div
    className="w-full h-screen bg-no-repeat bg-cover bg-center">
    <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div className="lg:w-fit">
            <div
                className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
                <h1>Get</h1>
                <h1>in</h1>
                <h1 className="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">Health</h1>
                <h1>Today</h1>
            </div>
            <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm">
                <h3 className="text-white text-lg font-semibold">join now</h3>
                <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
                    <hr className="w-full border border-gray-700 relative -right-3" />
                </div>
            </div>
            <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">25% Discount on first
                month</p>
        </div>

        <div>
            <ul className="text-3xl text-white">
                <li className="flex justify-center items-center p-1 bg-black/40 rounded-full">
                </li>
                <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                </li>
                <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                </li>
                <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
}
