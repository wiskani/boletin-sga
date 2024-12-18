import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                adca: ['var(--font-adca)'],
                tahu: ['var(--font-tahu)'],
                stemligth:['var(--font-stem-ligth)'],
                geistsans:['var(--font-geist-sans)'],
                geistmono:['var(--font-geist-mono)'],
            },
            animation: {
                "slide-left-out": "0.4s ease-in forwards slide-left-out",
                "slide-left-in": "0.4s ease-out slide-left-in",
                "slide-right-out": "0.4s ease-in forwards slide-right-out",
                "slide-right-in": "0.4s ease-out slide-right-in",
            },
            keyframes: {
                "slide-left-out": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                "slide-left-in": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(0)" },
                },
                "slide-right-out": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(100%)" },
                },
                "slide-right-in": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(0)" },
                },
            },
            colors: {
                customRed: '#D0043C',
                customBlue: '#29338A',
            },
        },
    },
    plugins: [],
};
export default config;
