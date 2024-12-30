'use client'

import dynamic from "next/dynamic";
import { FaPeopleGroup } from "react-icons/fa6";
import { div } from "motion/react-client";
import React, { FC } from "react"
import { useState, useEffect, useMemo } from "react";
import { projects } from "@/content/projects";
import { BarChart } from "@/components/BarChart";

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
            className="mt-9 bg-gray-50 dark:bg-gray-500"
        >
            <h2 className="toptitleextra mt-7 text-black dark:text-white">
                Datos del proyecto:
            </h2>
            <h2 className="titleextra mt-5 text-black dark:text-white">
                {projects[projectNumber].title}
            </h2>
            <div
                className="mt-4"
            >
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
                    <div className="flex mt-5 justify-center items-center text-2xl md:text-5xl">
                        <h3 className="flex items-center font-stemligth text-gray-800">
                            <FaPeopleGroup className="text-blue-500 mr-2" />
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

        </div>

    )
}

export default ProjectContainer