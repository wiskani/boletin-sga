"use client"
 
import Image from "next/image"
import { PiKeyReturnFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div
            className="
            relative
            w-full
            h-screen
            bg-no-repeat
            bg-cover
            bg-center
            bg-[url('/images/background_back_cover.jpg')]
            " 
        >
            <div
                className="
                pt-20
                grid
                gap-6
                grid-cols-1
                md:grid-cols-2
                "
            >
                <div
                    className="flex flex-col m-5 space-y-7 items-center justify-center"
                >
                    <Image
                        src="/images/logo_white_full.png"
                        alt="recomendación"
                        width={310}
                        height={310}

                    />
                </div>
                <div
                    className="flex flex-col m-5 space-y-5 items-center justify-center"
                >
                    <p
                        className="text-sm font-stemligth md:text-lg"
                    >
                        Una empresa filial de
                    </p>

                    <Image
                        src="/images/logo_corporacion.png"
                        alt="recomendación"
                        width={280}
                        height={280}

                    />
                </div>
            </div>
            <div
                className="flex flex-col m-5 space-y-7 items-center justify-center"
            >
                <p
                    className="text-center text-sm font-stemligth md:text-lg"
                >
                    Calle Walter Galindo No S-3643, entre calles Hernan Muller y Aranibar Orozco <br />
                    (Av. Victor Ustáriz km 4 1⁄2). Casilla No 640<br/>
                    Teléfonos: (591-4) 425900 - 4259512<br/>
                    Fax: (591-4) 4259516<br/>
                    E-mail: endetransmision@endetransmision.bo<br/>
                    Cochabamba - Bolivia<br/>
                </p>
                <PiKeyReturnFill
                    className="text-3xl md:text-5xl cursor-pointer hover:text-blue-700"
                    onClick={()=>router.push("/")}
                />

            </div>
        </div>
    )
};
