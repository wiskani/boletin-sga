"use client"

import { useEffect } from "react"
import { useTransitions } from "../_hooks/use-transitions"

export default function Page() {
    const transitions = useTransitions();

    useEffect(() => {
        transitions.slideIntoViewport();
    }, []);

    return(
        <div>
            <h1 className="text-9xl text-gray-800 font-acad tracking-tight">BOLETÍN</h1>
            <h1 className="text-5xl text-gray-800 font-tahu tracking-tight">Del Sistema de Gestión Ambiental</h1>
        </div>
    )
}
