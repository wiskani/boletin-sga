"use client"

import Image from "next/image"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <nav className="border-gray-200 bg-gray-500 bg-opacity-50">
            <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-0">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button
                    aria-expanded="false"
                    aria-label="Index"
                    className="p-2 bg-transparent text-white"
                >
                        <svg
                        fill="rgba(255,255,255,1)"
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
                    <div className="text-white">3/21</div>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <span className="text-white">Página de Prueba</span>
                </div>

                {/* Logo */}
                <a
                href="#"
                target="_blank"
                className="block"
            >
                    <Image
                    alt="logo"
                    src="/images/logo_white.png"
                    className="h-8"
                    width={100}
                    height={56}
                />
                </a>

            </div>
            </nav>
    )
}

export default Navbar
