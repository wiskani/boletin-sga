"use client"

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageNavigation from "@/components/PageNavigation";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function WizardLayout({ children }: React.PropsWithChildren) {
    const pathname = usePathname();
    const pages = [
        { path: "/", title: "Home" },
        { path: "/page1", title: "Introducción" },
        { path: "/page2", title: "Resultados Encuesta Ambiental" },
        { path: "/page3", title: "Cambios en el SGA" },
    ];
    const currentIndex = pages.findIndex((page) => page.path === pathname);

    // Determinar los enlaces de las páginas anterior y siguiente
    const prevPageLink = currentIndex > 0 ? pages[currentIndex - 1].path : null;
    const nextPageLink =
        currentIndex < pages.length - 1 ? pages[currentIndex + 1].path : null;
    return (
        <>
            <Navbar pageNumber={currentIndex} totalPageNumber={pages.length -1} title={pages[currentIndex].title} />
                <div className="flex flex-column h-full items-center">
                    <div className="px-4 w-full md:max-w-screen-md md:mx-auto">
                        {children}
                    </div>
                </div>
            <PageNavigation prevPageLink={prevPageLink} nextPageLink={nextPageLink}/>
            <ScrollIndicator/>
        </>
    )
}
