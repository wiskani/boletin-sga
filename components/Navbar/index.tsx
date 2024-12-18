"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

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
                    <button
                        aria-expanded="false"
                        aria-label="Index"
                        className="p-2 bg-transparent text-gray"
                    >
                        <svg
                            fill="rgba(155,155,155,1)"
                            height="24"
                            width="24"
                            viewBox="0 0 40 40"
                            className="align-middle"
                        >
                            <g>
                                <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"></path>
                            </g>
                        </svg>
                    </button>
                    <div className="text-gray">{pageNumber}/{totalPageNumber}</div>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    {title? (
                    <span className="font-stemlight text-gray uppercase">{title}</span>

                    ): null}
                </div>

                {/* Logo */}
                <a
                    href="#"
                    target="_blank"
                    className="block"
                >
                    <Image
                        alt="logo"
                        src="/images/logo_blue.png"
                        className="h-8"
                        width={100}
                        height={56}
                    />
                </a>

            </div>
        </nav>
        </header>
    )
}

export default Navbar
