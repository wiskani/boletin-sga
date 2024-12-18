import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}", //configuration for tremor
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
                //keyframes for tremor
                hide: {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                slideDownAndFade: {
                    from: { opacity: "0", transform: "translateY(-6px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: "0", transform: "translateX(6px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideUpAndFade: {
                    from: { opacity: "0", transform: "translateY(6px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: "0", transform: "translateX(-6px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                accordionOpen: {
                    from: { height: "0px" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                accordionClose: {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: { height: "0px" },
                },
                dialogOverlayShow: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                dialogContentShow: {
                    from: {
                        opacity: "0",
                        transform: "translate(-50%, -45%) scale(0.95)",
                    },
                    to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
                },
                drawerSlideLeftAndFade: {
                    from: { opacity: "0", transform: "translateX(100%)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                drawerSlideRightAndFade: {
                    from: { opacity: "1", transform: "translateX(0)" },
                    to: { opacity: "0", transform: "translateX(100%)" },
                },
            },
            colors: {
                customRed: '#D0043C',
                customBlue: '#29338A',
                customYelow: '#E9BB00',
            },
        },
    },
    //animation config for tremor
    animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
        "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Accordion
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Dialog
        dialogOverlayShow:
        "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
        "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Drawer
        drawerSlideLeftAndFade:
        "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
    },
    plugins: [require("@tailwindcss/forms")], //requiere for tremor
};
export default config;
