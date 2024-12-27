'use cliente'

import { MapContainer, TileLayer,Circle, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"
import {LatLngExpression} from "leaflet";

import Legend from '../Legend'

interface MapProps {
    points: LatLngExpression[];
    line: LatLngExpression[];
    legendColors: string[];
    legendLabels: string[];
    lineOptions?: { color: string };
    pointsOptions?: { color: string };
    centerMap: LatLngExpression;
    zoomMap: number;
}

const Map:  React.FC<MapProps>= ({
    points,
    line,
    legendColors,
    legendLabels,
    lineOptions,
    pointsOptions,
    centerMap,
    zoomMap
})  => {
    return(
        <MapContainer
            center={centerMap}
            zoom={zoomMap}
            scrollWheelZoom={false}
            className='h-80 w-full 2xl:h-[40rem] xl:h-[40rem] lg:h-[35rem]'
        >
            <TileLayer

                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <Polyline pathOptions={lineOptions} positions={line} />
            {points.map((point, index) => (
                <Circle
                    key={index}
                    center={point}
                    pathOptions={pointsOptions}
                    radius={10}
                />
            ))}

            <Legend colors={legendColors} labels={legendLabels} />

        </MapContainer>
    )
}

export default Map

