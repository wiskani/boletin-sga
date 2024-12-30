'use client'

import dynamic from "next/dynamic";
import { FaPeopleGroup, FaMapLocationDot, FaTrashCan, FaCarSide, FaToilet } from "react-icons/fa6";
import { BsClipboard2CheckFill } from "react-icons/bs";
import React, { FC } from "react"
import { projects } from "@/content/projects";
import { useMemo } from "react";
import { BarChart } from "@/components/BarChart";
import CounterNumber from "@/components/CounterNumber";
import { DonutChart } from "@/components/DonutChart";

//import with dynamic
const Map = dynamic(() => import('@/components/Map'), { ssr: false });



interface ProjectContainerProps {
    projectNumber: number;
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projectNumber }) => {
    const centerMap = useMemo(() => {
        if (projects[projectNumber].point.length > 0) {
            return projects[projectNumber].point
        }
        else if (projects[projectNumber].line.length > 0) {
            let totalLat = 0;
            let totalLng = 0;

            projects[projectNumber].line.forEach(([lat, lng]) => {
                totalLat += lat;
                totalLng += lng;
            });

            const centroidLat = totalLat / projects[projectNumber].line.length;
            const centroidLng = totalLng / projects[projectNumber].line.length;

            return [centroidLat, centroidLng];
        }
        else {
            return [-16.5, -65.2]
        }
    }
        , []
    );

    return (
        <div
            className="mt-9 bg-gray-50 dark:bg-gray-900"
        >
            <h2 className="toptitleextra mt-7 text-black dark:text-gray-50">
                Datos del proyecto:
            </h2>
            <h2 className="titleextra mt-5 text-black dark:text-gray-50">
                {projects[projectNumber].title}
            </h2>
            <div
                className="mt-6"
            >
                <div className="flex mt-5 justify-center items-center">
                    <FaMapLocationDot className="text-blue-500 mr-2 text-lg md:text-2xl" />
                    <h3 className="flex items-center text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                        Ubicación del Proyecto 
                    </h3>
                </div>

                <Map
                    centerMap={centerMap}
                    line={projects[projectNumber].line}
                    point={projects[projectNumber].point}
                    zoomMap={16}
                    nameProject={projects[projectNumber].title
                    }

                />

            </div>
            <div
            >
                <div
                >
                    <div className="flex mt-6 justify-center items-center">
                        <FaPeopleGroup className="text-blue-500 mr-2 text-lg md:text-2xl" />
                        <h3 className="flex items-center text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                            Cantidad de sensibilizaciones al personal 
                        </h3>
                    </div>
                    <BarChart
                        className="h-80"
                        data={projects[projectNumber].environmentalAwareness}
                        index="name"
                        categories={["cantidad"]}
                        yAxisWidth={190}
                        tickGap={15}
                        layout="vertical"
                        showLegend={false}
                    />

                </div>

            </div>
            <div
                className="flex mt-6 justify-center items-center"
            >
                <BsClipboard2CheckFill className="text-blue-500 mr-2 text-lg md:text-2xl" />
                <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                    Evaluación de contratistas 
                </h3>
            </div>

            <div
                className="flex mt-2 justify-center items-center space-x-4"
            >
                <h2>
                    Cantidad de contratistas
                </h2>
                <p
                    className="font-stemligth text-3xl md:text-4xl"
                >
                    {projects[projectNumber].contractors}
                </p>
            </div>
            <div
                className="flex mt-2 justify-center items-center space-x-4"
            >
                <h2>
                    Porcentaje de cumplimiento promedio
                </h2>
                <CounterNumber
                    initial_value={10}
                    final_value={projects[projectNumber].totalEvaluation}
                    duration={4}
                    className="font-stemligth text-3xl md:text-4xl"
                />
                <p
                    className="font-stemligth text-3xl md:text-4xl"
                >
                    %
                </p>
            </div>
            <div
            >
                <div
                >
                    <div className="flex mt-6 justify-center items-center">
                        <FaTrashCan className="text-blue-500 mr-2 text-lg md:text-2xl" />
                        <h3 className="flex items-center text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                            Residuos sólidos dispuestos
                        </h3>
                    </div>
                    <DonutChart
                        className="mx-auto mt-2"
                        data={projects[projectNumber].solidWasted}
                        category="name"
                        value="amount"
                        showLabel={true}
                        valueFormatter={(number: number) =>
                            `${Intl.NumberFormat("us").format(number).toString()} kg.`
                        }
                    />
                </div>

            </div>

            <div
                className="flex mt-6 justify-center items-center"
            >
                <FaCarSide className="text-blue-500 mr-2 text-lg md:text-2xl" />
                <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                    Control de vehículos 
                </h3>
            </div>

            <div
                className="flex mt-2 justify-center items-center space-x-4"
            >
                <h2>
                    Cantidad de vehículos controlados
                </h2>
                <CounterNumber
                    initial_value={0}
                    final_value={projects[projectNumber].vehicules}
                    duration={3}
                    className="font-stemligth text-3xl md:text-4xl"
                />
            </div>

            <div
                className="flex mt-6 justify-center items-center"
            >
                <FaToilet className="text-blue-500 mr-2 text-lg md:text-2xl" />
                <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
                    Control de aguas residuales 
                </h3>
            </div>

            <div
                className="flex mt-2 pb-10 justify-center items-center space-x-4"
            >
                <h2>
                    Cantidad de conexiones de aguas residuales
                </h2>
                <CounterNumber
                    initial_value={0}
                    final_value={projects[projectNumber].wasteWater.amount}
                    duration={3}
                    className="font-stemligth text-3xl md:text-4xl"
                />
            </div>
        </div>

    )
}

export default ProjectContainer
