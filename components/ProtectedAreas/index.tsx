"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

type AreaProtegida = {
    id: string;
    shortName: string;
    fullName: string;
};

const ProtectedAreasMap = () => {
    const AREAS: AreaProtegida[] = useMemo(
        () => [
            { id: "AP_4", shortName: "Apolobamba", fullName: "Área Natural de Manejo Integado Nacional Apolobamba" },
            { id: "AP_5", shortName: "Manuripi", fullName: "Reserva Nacional de Vida Silvestre Amazónica Manuripi" },
            { id: "AP_43", shortName: "Tunari", fullName: "Parque Nacional Tunari" },
            { id: "AP_49", shortName: "Eduardo Avaroa", fullName: "Reserva Nacional de Fauna Andina Eduardo Avaroa" },
            { id: "AP_50", shortName: "Tariquía", fullName: "Reserva Nacional de Flora y Fauna Tariquía" },
            { id: "AP_51", shortName: "Cordillera de Sama", fullName: "Reserva Biológica Cordillera de Sama" },
            { id: "AP_53", shortName: "El Palmar", fullName: "Área Natural de Manejo Integrado El Palmar" },
            { id: "AP_54", shortName: "Toro Toro", fullName: "Parque Nacional Toro Toro" },
            { id: "AP_57", shortName: "Carrasco", fullName: "Parque Nacional Carrasco" },
            { id: "AP_58", shortName: "San Matías", fullName: "Área Natural de Manejo Integrado San Matías" },
            { id: "AP_59", shortName: "Estación Biológica del Beni", fullName: "Reserva de la Biósfera y Estación Biológica del Beni" },
            { id: "AP_60", shortName: "Noel Kempff", fullName: "Parque Nacional Noel Kempff Mercado" },
            { id: "AP_61", shortName: "Cotapata", fullName: "Parque Nacional y Area Natural de Manejo Integrado Cotapata" },
            { id: "AP_62", shortName: "Sajama", fullName: "Parque Nacional Sajama" },
            { id: "AP_63", shortName: "Isiboro Sécure", fullName: "Parque Nacional y Territorio Indígena Isiboro Sécure" },
            { id: "AP_87", shortName: "Iñao", fullName: "Área Natural de Manejo Integrado y Parque Nacional Iñao" },
            { id: "AP_88", shortName: "Aguaragüe", fullName: "Parque Nacional y Área Natural de Manejo Integrado Serranía de Aguaragüe" },
            { id: "AP_90", shortName: "Kaa-iya del Gran Chaco", fullName: "Área Natural de Manejo Integrado y Parque Nacional Kaa-iya del Gran Chaco" },
            { id: "AP_103", shortName: "Pilón Lajas", fullName: "Reserva de la Biósfera y Territorio Comunitario de Origen Pilón Lajas" },
            { id: "AP_191", shortName: "El Cardón", fullName: "Parque Natural y Área de Manejo Integrado El Cardón" },
            { id: "AP_3", shortName: "Madidi", fullName: "Área Natural de Manejo Integrado Madidi" },
            { id: "AP_52", shortName: "Otuquis", fullName: "Área Natural de Manejo Integrado Otuquis" },
            { id: "AP_55", shortName: "Amboró", fullName: "Parque Nacional Amboró" },
        ],
        []
    );

    const byId = useMemo(() => {
        const m = new Map<string, AreaProtegida>();
        for (const a of AREAS) m.set(a.id, a);
        return m;
    }, [AREAS]);

    const hostRef = useRef<HTMLElement | null>(null);
    const svgWrapRef = useRef<HTMLDivElement | null>(null);

    const [svgLoaded, setSvgLoaded] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const activeId = selectedId;
    const active = activeId ? byId.get(activeId) : undefined;

    const clearSelection = () => setSelectedId(null);

    const resetSvgClasses = () => {
        const wrap = svgWrapRef.current;
        if (!wrap) return;
        const svg = wrap.querySelector("svg");
        if (!svg) return;

        const apNodes = svg.querySelectorAll<SVGGraphicsElement>('[id^="AP_"]');
        apNodes.forEach((node) => {
            node.classList.remove("ap-selected", "ap-faded", "ap-region");
            node.classList.add("ap-region");
        });
    };

    const applySelectionToSvg = (id: string | null) => {
        const wrap = svgWrapRef.current;
        if (!wrap) return;
        const svg = wrap.querySelector("svg");
        if (!svg) return;

        const apNodes = svg.querySelectorAll<SVGGraphicsElement>('[id^="AP_"]');

        // siempre limpia primero
        apNodes.forEach((node) => {
            node.classList.remove("ap-selected", "ap-faded");
            node.classList.add("ap-region");
        });

        // si no hay selección => que quede “normal”, sin fades
        if (!id) return;

        // si hay selección => aplica fade a los demás
        apNodes.forEach((node) => {
            if (node.id === id) node.classList.add("ap-selected");
            else node.classList.add("ap-faded");
        });
    };

    useEffect(() => {
        applySelectionToSvg(activeId);
    }, [activeId]);

    useEffect(() => {
        let cancelled = false;

        const loadSvg = async () => {
            try {
                const res = await fetch("/images/areas_protegidas.svg", { cache: "force-cache" });
                const text = await res.text();
                if (cancelled) return;

                const wrap = svgWrapRef.current;
                if (!wrap) return;

                wrap.innerHTML = text;

                const svg = wrap.querySelector("svg");
                if (svg) {
                    // recorta viewBox al contenido real + padding
                    try {
                        const bbox = svg.getBBox();
                        const pad = Math.max(bbox.width, bbox.height) * 0.08;
                        const x = bbox.x - pad;
                        const y = bbox.y - pad;
                        const w = bbox.width + pad * 2;
                        const h = bbox.height + pad * 2;

                        if (Number.isFinite(x) && Number.isFinite(y) && w > 0 && h > 0) {
                            svg.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
                        }
                    } catch { }

                    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
                    svg.style.width = "100%";
                    svg.style.height = "100%";
                    svg.style.display = "block";
                    svg.style.userSelect = "none";
                    (svg as any).style.webkitUserSelect = "none";
                }

                // FIX 1: fuerza estado inicial SIN selección (limpio, sin fades)
                setSelectedId(null);
                resetSvgClasses();
                applySelectionToSvg(null);

                const onSvgClick = (ev: MouseEvent) => {
                    const t = ev.target as Element | null;
                    if (!t) return;

                    const apEl = (t.closest?.('[id^="AP_"]') as Element | null) ?? null;
                    if (apEl && (apEl as any).id?.startsWith("AP_")) {
                        const id = (apEl as any).id as string;
                        setSelectedId((prev) => (prev === id ? null : id));
                        return;
                    }

                    setSelectedId(null);
                };

                wrap.addEventListener("click", onSvgClick);
                setSvgLoaded(true);

                return () => wrap.removeEventListener("click", onSvgClick);
            } catch {
                setSvgLoaded(false);
            }
        };

        let cleanup: void | (() => void);
        loadSvg().then((c) => (cleanup = c as any));

        return () => {
            cancelled = true;
            if (cleanup) cleanup();
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") clearSelection();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!selectedId) return;

            const target = e.target as Node | null;
            if (!target) return;

            const section = hostRef.current;
            if (section && section.contains(target)) return;

            clearSelection();
        };

        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, [selectedId]);

    return (
        <section ref={hostRef} className="w-full">
            <style>{`
        .ap-region {
          cursor: pointer;
          transform-box: fill-box;
          transform-origin: center;
          transition: transform 180ms ease, opacity 180ms ease, filter 180ms ease;
          will-change: transform, opacity, filter;
        }
        .ap-region.ap-faded {
          opacity: 0.18;
          filter: blur(1.2px);
        }
        .ap-region.ap-selected {
          opacity: 1;
          transform: scale(1.14);
          filter: none;
        }
      `}</style>

            <div className="w-full flex flex-col gap-1">
                <p className="text-sm md:text-base italic text-center text-gray-500 ">
                    Conoce las áreas protegidas nacionales: haz clic en el mapa o en los nombres
                </p>

                <div className="w-full">
                    <div className="relative w-full rounded-2xl overflow-hidden bg-white">
                        <div className="relative w-full h-[52vh] sm:h-[56vh] lg:h-[60vh]">
                            <div ref={svgWrapRef} className="absolute inset-0" />
                            {!svgLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center text-black/60">
                                    Cargando mapa...
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className={clsx(
                            "mt-1 text-center font-semibold text-custom2025StrongGreen transition-opacity",
                            activeId ? "opacity-100" : "opacity-0"
                        )}
                    >
                        {active?.fullName ?? ""}
                    </div>

                    <div className="mt-1 rounded-2xl bg-white p-2">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
                            {AREAS.map((a) => {
                                const isActive = a.id === activeId;

                                return (
                                    <li key={a.id}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedId((prev) => (prev === a.id ? null : a.id))}
                                            className={clsx(
                                                // FIX 2: cero “borde”/ring/outline en cualquier estado
                                                "w-full text-center px-2 py-1 rounded-lg",
                                                "text-[12px] sm:text-[13px] leading-snug",
                                                "outline-none border-0 ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0",
                                                "active:outline-none active:ring-0",
                                                "select-none",
                                                isActive ? "bg-black/5" : "bg-white"
                                            )}
                                            style={{ WebkitTapHighlightColor: "transparent" }}
                                            aria-pressed={isActive}
                                            title={a.fullName}
                                        >
                                            <span className={clsx("font-semibold", isActive ? "text-custom2025StrongGreen" : "text-black/80")}>
                                                {a.shortName}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className={clsx("mt-2 flex justify-center", selectedId ? "opacity-100" : "opacity-0 pointer-events-none")}>
                            <button
                                type="button"
                                onClick={clearSelection}
                                className={clsx(
                                    "px-3 py-1 rounded-lg bg-white text-sm text-black/70",
                                    "outline-none border-0 ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                                )}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                Cerrar selección
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProtectedAreasMap;

