import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageNavigation from "@/components/PageNavigation";

export default function Home() {
    return (
        <>
            <Navbar/>
            <PageNavigation prevPageLink="./" nextPageLink="./introducing-our-zoo" />
        </>
    );
}
