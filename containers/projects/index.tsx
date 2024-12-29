'use client'

import dynamic from "next/dynamic";
import { div } from "motion/react-client";
import React, { FC } from "react"
import { useState, useEffect, useMemo } from "react";
import { projects } from "@/content/projects";

//import with dynamic
const Map = dynamic(() => import('@/components/Map'), { ssr: false });



interface ProjectContainerProps {
    projectNumber: number;
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projectNumber }) => {
    const centerMap = useMemo(() => {
        if (projects[projectNumber].point.length>0) {
            return projects[projectNumber].point
        }
        else if (projects[projectNumber].line.length>0) {
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
            className="mt-9 bg-gray-500 dark:bg-gray-50"
        >
            <h2 className="toptitleextra mt-7 text-white dark:text-customGreen dark:text-black">
                Datos del proyecto:
            </h2>
            <h2 className="titleextra mt-5 text-white dark:text-customGreen dark:text-black">
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
                className="mt-5 grid gap-6 grid-cols-1 md:grid-cols-2"
            >

            </div>

        </div>

    )
}

export default ProjectContainer