'use client'

import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"
import {LatLngExpression} from "leaflet";


//import with dynamic
const MapContainer = dynamic(
    async () => (await import('react-leaflet')).MapContainer,
    { ssr: false }
)

const TileLayer = dynamic(
    async () => (await import('react-leaflet')).TileLayer,
    { ssr: false }
)


const Polyline = dynamic(
    async () => (await import('react-leaflet')).Polyline,
    { ssr: false }
)

const Circle = dynamic(
    async () => (await import('react-leaflet')).Circle,
    { ssr: false }
)
const Tooltip = dynamic(
    async () => (await import('react-leaflet')).Tooltip,
    { ssr: false }
)


interface MapProps {
    point?: LatLngExpression;
    line?: LatLngExpression[];
    lineOptions?: { color: string };
    pointsOptions?: { color: string };
    centerMap: LatLngExpression;
    zoomMap: number;
    nameProject: string;
}

const Map:  React.FC<MapProps>= ({
    point,
    line,
    lineOptions,
    pointsOptions,
    centerMap,
    zoomMap,
    nameProject,
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
            {line && (
                <Polyline
                    pathOptions={lineOptions} positions={line}
                >
                    <Tooltip>
                        <div>
                            <p>{nameProject}</p>
                        </div>
                    </Tooltip>
                </Polyline>

            )}
            {point && (
                <Circle
                    center={point}
                    pathOptions={pointsOptions}
                    radius={15}
                >
                    <Tooltip>
                        <div>
                            <p>{nameProject}</p>
                        </div>
                    </Tooltip>
                </Circle>

            )}
        </MapContainer>
    )
}

export default Map

