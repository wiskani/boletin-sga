"use client"

import Image from "next/image"
import { DropdownMenu } from "../DropdownButton";

interface NavbarProps {
    title?: string | null;
    pageNumber?: number | null;
    totalPageNumber?: number;
}

const Navbar: React.FC<NavbarProps> = ({title, pageNumber, totalPageNumber}) => {


    return (
        <header className="sticky inset-0 z-50 border-b border-slate-100 bg-gray/80 backdrop-blur-lg">
            <nav
                className="bg-opacity-50 transition-all duration-500 "
            >
                <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-0">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <DropdownMenu/>
                        <div className="text-gray">{pageNumber}/{totalPageNumber}</div>
                    </div>
                    <div className="hidden w-full md:block md:w-auto">
                        {title? (
                            <span className="font-stemlight text-gray uppercase">{title}</span>

                        ): null}
                    </div>

                    {/* Logo */}
                    <Image
                        alt="logo"
                        src="/images/logo_blue.png"
                        className="h-8 dark:hidden"
                        width={100}
                        height={56}
                    />
                    <Image
                        alt="logo"
                        src="/images/logo_white.png"
                        className="h-8 hidden dark:block"
                        width={100}
                        height={56}
                    />

                </div>
            </nav>
        </header>
    )
}

export default Navbar
