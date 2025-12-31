"use client";

import dynamic from "next/dynamic";
import {
  FaPeopleGroup,
  FaMapLocationDot,
  FaTrashCan,
  FaCarSide,
  FaToilet,
} from "react-icons/fa6";
import { BsClipboard2CheckFill } from "react-icons/bs";
import React, { FC, useEffect, useState } from "react";
import { projects } from "@/content/projects";
import { BarChart } from "@/components/BarChart";
import CounterNumber from "@/components/CounterNumber";
import { DonutChart } from "@/components/DonutChart";

//import with dynamic
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

interface ProjectContainerProps {
  projectNumber: number;
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projectNumber }) => {
  const [centerMap, setCenterMap] = useState([-16.5, -65.2]);

  useEffect(() => {
    if (projects[projectNumber].point.length > 0) {
      setCenterMap(projects[projectNumber].point);
    }
  }, [projectNumber]);

  return (
    <div className="mt-9 bg-gray-50 dark:bg-gray-900">
      <h2 className="toptitleextra mt-7 text-custom2025RoseRed dark:text-gray-50">
        Datos del proyecto:
      </h2>
      <h2 className="titleextra mt-5 text-black dark:text-gray-50">
        {projects[projectNumber].title}
      </h2>
      <div>
        <div>
          <div className="flex mt-6 justify-center items-center">
            <FaPeopleGroup className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
            <h3 className="flex items-center text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
              Cantidad de sensibilizaciones al personal
            </h3>
          </div>
          <BarChart
            className="h-80"
            data={projects[projectNumber].environmentalAwareness}
            index="name"
            categories={["cantidad"]}
            colors={["custom2025RoseRed"]}
            yAxisWidth={190}
            tickGap={15}
            layout="vertical"
            showLegend={false}
          />
        </div>
      </div>
      <div className="flex mt-6 justify-center items-center">
        <BsClipboard2CheckFill className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
        <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
          Evaluación de contratistas
        </h3>
      </div>

      <div className="flex mt-2 justify-center items-center space-x-4">
        <h2>Cantidad de contratistas</h2>
        <p className="font-stemligth text-3xl md:text-4xl">
          {projects[projectNumber].contractors}
        </p>
      </div>
      <div className="flex mt-2 justify-center items-center space-x-4">
        <h2>Porcentaje de cumplimiento promedio</h2>
        <CounterNumber
          initial_value={10}
          final_value={projects[projectNumber].totalEvaluation}
          duration={4}
          className="font-stemligth text-3xl md:text-4xl"
        />
        <p className="font-stemligth text-3xl md:text-4xl">%</p>
      </div>
      <div>
        <div>
          <div className="flex mt-6 justify-center items-center">
            <FaTrashCan className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
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

      <div className="flex mt-6 justify-center items-center">
        <FaCarSide className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
        <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
          Control de vehículos
        </h3>
      </div>

      <div className="flex mt-2 justify-center items-center space-x-4">
        <h2>Cantidad de vehículos controlados</h2>
        <CounterNumber
          initial_value={0}
          final_value={projects[projectNumber].vehicules}
          duration={3}
          className="font-stemligth text-3xl md:text-4xl"
        />
      </div>

      <div className="flex mt-6 justify-center items-center">
        <FaToilet className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
        <h3 className="text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
          Control de aguas residuales
        </h3>
      </div>

      <div className="flex mt-2 pb-10 justify-center items-center space-x-4">
        <h2>Cantidad de conexiones de aguas residuales</h2>
        <CounterNumber
          initial_value={0}
          final_value={projects[projectNumber].wasteWater.amount}
          duration={3}
          className="font-stemligth text-3xl md:text-4xl"
        />
      </div>
      <div className="mt-6">
        <div className="flex mt-5 justify-center items-center">
          <FaMapLocationDot className="text-custom2025RoseRed mr-2 text-lg md:text-2xl" />
          <h3 className="flex items-center text-base text-gray-950 font-stemligth dark:text-gray-50 md:text-xl">
            Ubicación del Proyecto
          </h3>
        </div>

        <Map
          centerMap={centerMap as [number, number]}
          line={projects[projectNumber].line}
          point={projects[projectNumber].point as [number, number]}
          zoomMap={13}
          nameProject={projects[projectNumber].title}
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
