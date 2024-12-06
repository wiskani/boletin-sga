interface PageNavigationProps {
    prevPageLink?: string;
    nextPageLink?: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ prevPageLink, nextPageLink }) => {
    return(
        <div className="flex justify-between items-center">
            {prevPageLink && (
                <a href={prevPageLink} aria-label="Previous page" className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z"></path>
                        </g>
                    </svg>
                </a>
            )}

            {nextPageLink && (
                <a href={nextPageLink} aria-label="Next page" className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"></path>
                        </g>
                    </svg>
                </a>
            )}
        </div>
    )
}

export default PageNavigation;
