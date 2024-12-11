import PageNavigation from "@/components/PageNavigation";
import Link from "next/link";

export default function Home() {
    return (
        <>
  <Link
          className="text-center outline-none h-fit px-4 py-2 bg-blue-600 text-white rounded-lg focus:border-2 focus:border-black mt-8 inline-block"
          href="/page1"
        >
          Start Wizard
        </Link>
            <PageNavigation prevPageLink="./" nextPageLink="./page1" />
        </>
    );
}
