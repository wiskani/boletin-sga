"use client"

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageNavigation from "@/components/PageNavigation";
import ScrollIndicator from "@/components/ScrollIndicator";
import { articles } from "@/content/articles";

export default function WizardLayout({ children }: React.PropsWithChildren) {
    const pathname = usePathname();
    const currentIndex = articles.findIndex((page) => page.path === pathname);

    // Determinar los enlaces de las páginas anterior y siguiente
    const prevPageLink = currentIndex > 0 ? articles[currentIndex - 1].path : null;
    const nextPageLink =
        currentIndex < articles.length - 1 ? articles[currentIndex + 1].path : null;
    return (
        <>
            <Navbar
                pageNumber={currentIndex}
                totalPageNumber={articles.length - 1}
                title={articles[currentIndex].fulltitle}
            />
            <div className="flex flex-column h-full items-center">
                <div className="w-full">
                    {children}
                </div>
            </div>
            <PageNavigation prevPageLink={prevPageLink} nextPageLink={nextPageLink} />
            <ScrollIndicator />
        </>
    )
}
