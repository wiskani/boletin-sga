"use client";

import { articles } from "@/content/articles";
import hazardMaterial from "@/content/hazardous_materials.json"
import Image from "next/image";
import EnterIconAnimation from "@/components/EnterIconMotion";
import IconTextRevealMotion from "@/components/IconTextRevealMotion";
import Link from "next/link";
import ParallaxBannerMotion from "@/components/ParallaxBannerMotion";

export default function Page() {

    return (
        <div >
            <main className="pb-32">
                {/* HERO */}
                <div className="relative w-full" style={{ height: "24em" }}>
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg,transparent,rgba(0,0,0,.6))",
                        }}
                    ></div>

                    <Image
                        src={articles[8].coverImage}
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
                                            src="/icons/hazard_icon.svg"
                                            alt="Icono de peligro"
                                            width={120}
                                            height={120}
                                            className="w-14 h-14 md:w-24 md:h-24"
                                        />
                                    </EnterIconAnimation>
                                </div>

                                {/* TEXTOS */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="toptitle text-custom2025DeepOrange">
                                        {articles[8].toptitle}
                                    </h2>
                                    <h2 className="title text-gray-100">
                                        {articles[8].title}
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
                    px-4 md:px-8
                    lg:px-12
                    max-w-screen-xl
                    2xl:max-w-[1200px]
                    3xl:max-w-[1280px]
                    ">
                        <div className="flex flex-col gap-y-7">

                            {/* INTRODUCCIÓN (full width) */}
                            <section className="mx-5">
                                <p className="firstparagraph first-letter:text-custom2025DeepOrange">
                                    {hazardMaterial.intro[0]}
                                </p>
                                {hazardMaterial.intro.slice(1).map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                            </section>

                            {/* DEFINICION (full width) */}
                            <section className="mx-5 ">
                                <div>
                                    <p className="paragraph font-bold">{hazardMaterial.definition.title}</p>
                                    {hazardMaterial.definition.text.map((text, i) => (
                                        <p key={i} className="paragraph">{text}</p>
                                    ))}
                                </div>
                            </section>

                            {/* CORROSIVE (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[0].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/corrosive_icon.svg"
                                    text={hazardMaterial.definition.items[0].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>

                            {/* EXPLOSIVE (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[1].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/explosive_icon.svg"
                                    text={hazardMaterial.definition.items[1].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>

                            {/* FLAMABLE (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[2].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/flamable_icon.svg"
                                    text={hazardMaterial.definition.items[2].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>

                            {/* TOXIC (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[3].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/toxic_icon.svg"
                                    text={hazardMaterial.definition.items[3].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>

                            {/* RADIACTIVE (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[4].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/radiactive_icon.svg"
                                    text={hazardMaterial.definition.items[4].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>

                            {/* BIOINFECCIOSO (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-16 gap-y-8 items-center ">
                                <p className="sm:text-lg md:text-xl text-md uppercase md:text-right text-center text-custom2025DeepOrange font-bold">
                                    {hazardMaterial.definition.items[5].name}
                                </p>
                                <IconTextRevealMotion
                                    imageSrc="/icons/bioinfeccioso_icon.svg"
                                    text={hazardMaterial.definition.items[5].description}
                                    bg_color="bg-custom2025DeepOrange"
                                    textClassName="text-black md:text-lg text-sm"
                                />
                            </section>
                            
                            {/* IMPACTS (2 rows */}
                            <section className="mx-5 mt-8">
                                {hazardMaterial.impacts.text.map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                            </section>
                            <section>
                                <div className="items-center flex justify-center">
                                <Image
                                    src="/images/hazard_materials.jpg"
                                    alt="Impacts of hazardous materials"
                                    width={700}
                                    height={500}
                                    className="h-auto"   
                                >
                                </Image>

                                </div>
                            </section>
                             {/* DOCUMENTOS DE SUSTANCIAS PELIGROSAS (2 cols) */}
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <div className="space-y-4">
                                    <p className="paragraph font-bold">
                                        {hazardMaterial.documentation.title}
                                    </p>
                                     {hazardMaterial.documentation.text.map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                                <Image
                                    src="/images/hazarous_document.jpg"
                                    alt="docuemtos"
                                    width={500}
                                    height={100}
                                />
                                </div>
                                <div className="flex ">
                                    <ul className="list-disc pl-7 md:pl-9 space-y-2 md:space-y-3 paragraph marker:text-[1.1em] md:marker:text-[1.25em] marker:text-gray-500 dark:marker:text-gray-400">
                                        <li>
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                                                2-I-2500 Requisitos para Sustancias químicas peligrosas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                                                1-P-1003 Manejo de Aceites Dieléctricos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                                                2-P-1000 Atención de Emergencias Ambientales
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                                                2-I-1001 Atención de Emergencias Ambientales
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                                                2-I-1002 Atención de Emergencias Ambientales, relacionadas con Almacenamiento de Sustancias o Residuos Peligrosos
                                            </Link>
                                        </li>
                                    </ul>
                            </div>

                            {/* LABELING + PARALLAX */}
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <div>

                                    <p className="paragraph font-bold">
                                        {hazardMaterial.labeling.title}
                                    </p>
                                     {hazardMaterial.labeling.text.map((text, i) => (
                                    <p key={i} className="paragraph">{text}</p>
                                ))}
                                </div>
                                <div className="space-y-8">
                                <Image
                                    src="/images/labeling_hazard.jpg"
                                    alt="etiquetado"
                                    width={500}
                                    height={100}
                                />
                                <Image
                                    src="/images/warming_hazard.jpg"
                                    alt="senalizacion"
                                    width={500}
                                    height={100}
                                />
                                </div>
                            </section>
                            
                            {/* TITULO + PARALLAX */}
                            <section className="mt-8">
                                <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
                                    <ParallaxBannerMotion
                                        imageSrc="/images/storage_bg.jpg"
                                        text={hazardMaterial.spillPrevention.title}
                                        height="20vh"
                                        strengthPx={100}
                                        textClassName="text-center text-custom2025DeepOrange font-tahu text-2xl sm:text-3xl md:text-5xl"
                                    />
                                </div>
                            
                            </section>

                            {/* RECOMENDATIONS (2 colums) */}
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <p className="paragraph">
                                    {hazardMaterial.spillPrevention.text[0]}
                                </p>
                                <Image
                                    src="/images/storage1.jpg"
                                    alt="senalizacion"
                                    width={400}
                                    height={100}
                                />
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <p className="paragraph">
                                    {hazardMaterial.spillPrevention.text[1]}
                                </p>
                                <Image
                                    src="/images/storage2.jpg"
                                    alt="senalizacion"
                                    width={400}
                                    height={100}
                                />
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <p className="paragraph">
                                    {hazardMaterial.spillPrevention.text[2]}
                                </p>
                                <Image
                                    src="/images/storage3.jpg"
                                    alt="senalizacion"
                                    width={400}
                                    height={100}
                                />
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <p className="paragraph">
                                    {hazardMaterial.spillPrevention.text[3]}
                                </p>
                                <Image
                                    src="/images/storage4.jpg"
                                    alt="senalizacion"
                                    width={400}
                                    height={100}
                                />
                            </section>
                            <section className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-x-16 gap-y-8 items-center ">
                                <p className="paragraph">
                                    {hazardMaterial.spillPrevention.text[4]}
                                </p>
                                <Image
                                    src="/images/storage5.jpg"
                                    alt="senalizacion"
                                    width={400}
                                    height={100}
                                />
                            </section>
                            {/* SPLIT REACTION (2 rows */}
                            <section className="mx-5 mt-8">
                                <div>
                                    <p className="font-bold">
                                        {hazardMaterial.spillResponse.title}
                                    </p>

<ul className="list-disc pl-6 space-y-2">
    {hazardMaterial.spillResponse.steps.map((text, i) => (
        <li key={i} className="paragraph">
            {text}
        </li>
    ))}
</ul>

                                </div>
                            </section>
                            <section>
                                <div className="items-center flex justify-center">
                                <Image
                                    src="/images/split_response.jpg"
                                    alt="respuesta a derrames"
                                    width={700}
                                    height={500}
                                    className="h-auto"   
                                >
                                </Image>

                                </div>
                                </section>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}


