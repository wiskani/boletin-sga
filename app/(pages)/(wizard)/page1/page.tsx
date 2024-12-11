"use client"

import { useEffect } from "react"
import { useTransitions } from "../_hooks/use-transitions"

export default function Page() {
    const transitions = useTransitions();

    useEffect(() => {
        transitions.slideIntoViewport();
    }, []);

    return(
        <h1 className="text-9xl font-bold text-gray-800">Pagina 1</h1>
    )
}
