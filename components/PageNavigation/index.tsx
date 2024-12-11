interface PageNavigationProps {
    prevPageLink?: string;
    nextPageLink?: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ prevPageLink, nextPageLink }) => {
    return(
        <div className="fixed bottom-4 right-4">
        <div className="flex items-center">
            {/* Botón de página anterior */}
            <a
                aria-label="Previous page"
                className="flex items-center justify-center mx-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 40 40"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    className="text-gray-600"
                >
                    <g>
                        <path d="M33.4 18.4v3.2H13l9.3 9.4-2.3 2.4L6.6 20l13.4-13.4 2.3 2.4-9.3 9.4h20.4z" />
                    </g>
                </svg>
            </a>

            {/* Botón de página siguiente */}
            <a
                href={nextPageLink }
                aria-label="Next page"
                className="flex items-center justify-center mx-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 40 40"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    className="text-gray-600"
                >
                    <g>
                        <path d="M20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4H6.6v-3.2h20.4l-9.3-9.4z" />
                    </g>
                </svg>
            </a>
        </div>
        </div>

    )
}

export default PageNavigation;
