"use client"

import Navbar from "@/components/Navbar";
import { TransitionProvider } from "./_components/transition-provider"

export default function WizardLayout({children}: React.PropsWithChildren) {
    return(
        <>
            <Navbar/>
            <TransitionProvider containerClassName="h-full" >
                <div className="flex flex-column h-full items-center">
                    <div className="px-4 w-full md:max-w-screen-md md:mx-auto">
                        {children}
                    </div>
                </div>
            </TransitionProvider >
        </>
    )
}
