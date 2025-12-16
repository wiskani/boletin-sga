"use client";

import { articles } from "@/content/articles";
import solidWasted from "@/content/solid_wasted.json"
import Image from "next/image";
import EnterIconAnimation from "@/components/EnterIconMotion";
import AutoImageCarouselMotion from "@/components/AutoImageCarouselMotion";
import ParallaxBannerMotion from "@/components/ParallaxBannerMotion";

export default function Page() {
    const images = [
        { src: "/images/reducir.jpg", alt: "Reducir residuos" },
        { src: "/images/reusar.jpg", alt: "Reusar materiales" },
        { src: "/images/reciclar.jpg", alt: "Reciclar" },
    ]

    return (
        <div>
            <main className="pb-32">
                {/* HERO */}
                <div className="relative w-full" style={{ height: "24em" }}>
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg,transparent,rgba(0,0,0,.45))",
                        }}
                    ></div>

                    <Image
                        src={articles[6].coverImage}
                        alt="Article image"
                        fill
                        className="absolute inset-0 z-0 object-cover"
                    />

                    {/* BLOQUE TEXTO + ICONO */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-4">
                        <div className="w-full flex justify-center">
                            {/* CONTENEDOR RESPONSIVO */}
                            <div className="flex flex-col md:flex-row items-center">

                                {/* ICONO */}
                                <div className="order-1 md:order-2 mb-3 md:mb-0 md:ml-4 self-center md:self-start md:mt-2">
                                    <EnterIconAnimation delay={0.9}>
                                        <Image
                                            src="/icons/wasted_container.svg"
                                            alt="Icono residuos"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-customYelow">
                                        {articles[6].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">
                                        {articles[6].title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENIDO EN GRID */}
                <div className="px-4 md:px-8 lg:px-12 mt-12 text-gray-700 text-lg leading-relaxed">
                    <div className="
    mx-auto
    px-4 md:px-8 lg:px-12
    max-w-screen-xl
    2xl:max-w-[1200px]
    3xl:max-w-[1280px]
  ">
                        <div className="flex flex-col gap-y-10">

                            {/* INTRODUCCIÓN (full width) */}
                            <section className="space-y-6 border-b border-customYelow pb-2">
                                <p className="firstparagraph first-letter:text-customYelow">
                                    {solidWasted.intro[0]}
                                </p>
                                {solidWasted.intro.slice(1).map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                            </section>

                            {/* PRINCIPIOS + CARRUSEL (2 cols, texto más ancho) */}
                            <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-6 gap-y-8 items-center">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        <strong>{solidWasted.principles.title}</strong>
                                    </p>
                                    {solidWasted.principles.text.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>

                                <AutoImageCarouselMotion
                                    images={images}
                                    intervalMs={4000}
                                    height="clamp(180px, 40vw, 320px)"
                                />
                            </section>

                            {/* BANNER (full width) */}
                            <section>
                                <ParallaxBannerMotion
                                    imageSrc="/images/residuos_municipales_bg.jpg"
                                    text={solidWasted.municipalWaste.title}
                                    textColorClass="text-white"
                                    height="18vh"
                                    strengthPx={100}
                                />
                            </section>

                            {/* CAMIÓN + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <div
                                    className="relative w-full overflow-hidden rounded-xl"
                                    style={{ background: "#E9BB00", height: 220 }}
                                >
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="truck-drive">
                                            <Image
                                                src="/icons/wasted_trunck.svg"
                                                alt="Camión de residuos"
                                                width={350}
                                                height={150}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {solidWasted.municipalWaste.intro.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>
                            {/* contenedores */}
                            <section className="space-y-6 flex items-center text-center justify-center">
                                <h3 className="paragraph text-black">
                                    <strong>
                                        SEPARACIÓN DE RESIDUOS MUNICIPALES
                                    </strong>
                                </h3>
                            </section>
                            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 items-center">
                                <Image
                                    src="/images/bannerVerticaRSNoApro.svg"
                                    alt="no aprovechables"
                                    width={200}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/images/bannerVerticaRSOrg.svg"
                                    alt="no aprovechables"
                                    width={200}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/images/bannerVerticaRSPla.svg"
                                    alt="no aprovechables"
                                    width={200}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/images/bannerVerticaRSPaper.svg"
                                    alt="no aprovechables"
                                    width={200}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </section>

                            {/* VEHICULOS + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">

                                <div className="space-y-4">
                                    {solidWasted.municipalWaste.vehicles.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                                <div className="items-center justify-center">
                                    <Image
                                        src="/images/uso_bolsa_basura.png"
                                        alt="uso bolsa de basura"
                                        width={550}
                                        height={150}
                                    />
                                </div>
                            </section>

                            {/* BANNER RESIDOS PELIGROSOS (full width) */}
                            <section className="mt-20">
                                <ParallaxBannerMotion
                                    imageSrc="/images/residuos_peligrosos_bg.jpg"
                                    text={solidWasted.hazardousWaste.title}
                                    textColorClass="text-white"
                                    height="18vh"
                                    strengthPx={100}
                                />
                            </section>

                            {/* CONTENEDOR  + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <Image
                                    src="/images/hazard_container.jpg"
                                    alt="Contenedor residuos de sólidos contaminados"
                                    width={350}
                                    height={150}
                                />

                                <div className="space-y-4">
                                    {solidWasted.hazardousWaste.intro.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>

                            {/* EJEMPLOS DE RESIDUSO PELIGROSOS (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[0]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/pilas.svg"
                                    alt="pilas secas"
                                    width={100}
                                    height={100}
                                />

                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[1]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/focos_flour.svg"
                                    alt="focos flourescentes"
                                    width={100}
                                    height={100}
                                />
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[2]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/residuos_conta.svg"
                                    alt="focos flourescentes"
                                    width={150}
                                    height={100}
                                />
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[3]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/equipos_elec_usado.svg"
                                    alt="focos flourescentes"
                                    width={180}
                                    height={100}
                                />
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[4]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/medicinas_vencidas.svg"
                                    alt="medicamentos vencidos"
                                    width={150}
                                    height={100}
                                />
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph">
                                        {solidWasted.hazardousWaste.examples[5]}
                                    </p>
                                </div>
                                <Image
                                    src="/icons/cartuchos.svg"
                                    alt="cartuchos y tintas"
                                    width={180}
                                    height={100}
                                />
                            </section>

                            {/*EMPRESA GESTORA + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <Image
                                    src="/icons/empresa_gestora.svg"
                                    alt="Empresa gestora"
                                    width={350}
                                    height={150}
                                />

                                <div className="space-y-4">
                                    {solidWasted.hazardousWaste.storage.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>

                            {/* BANNER RESIDOS ESPECIALES (full width) */}
                            <section className="mt-20">
                                <ParallaxBannerMotion
                                    imageSrc="/images/residuos_especiales_bg.jpg"
                                    text={solidWasted.specialWaste.title}
                                    textColorClass="text-white"
                                    height="18vh"
                                    strengthPx={100}
                                />
                            </section>

                            {/* CONTENEDOR  + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-x-16 gap-y-8 items-center ">

                                <div className="space-y-4">
                                    {solidWasted.specialWaste.text.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                                <Image
                                    src="/images/hazard_container.jpg"
                                    alt="Contenedor residuos de sólidos contaminados"
                                    width={350}
                                    height={150}
                                />
                            </section>

                            {/* CONTENEDOR  + TEXTO (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <Image
                                    src="/images/hazard_container.jpg"
                                    alt="Contenedor residuos de sólidos contaminados"
                                    width={350}
                                    height={150}
                                />

                                <div className="space-y-4">
                                    {solidWasted.specialWaste.management.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>

                            {/* CLOSING  */}
                            <section className="border-t border-customYelow pb-10 items-center justify-center ">
                                <Image
                                    src="/images/worker_waste.png"
                                    alt="Contenedor residuos de sólidos contaminados"
                                    width={350}
                                    height={150}
                                     className="mx-auto"
                                />
                                    
                            </section>
                            <section >
                                {solidWasted.closing.map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                    ))}
                                    
                            </section>
                        </div>
                    </div>

                </div>


            </main>
        </div>
    );
}


