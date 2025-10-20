import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

const position:LatLngTuple = [51.505, -0.09];

const Photography = () => {
    const [cityList, setCityList]:any = useState();
    useEffect(() => {
        Papa.parse("/photography/visited.csv", {
        download: true,
        header: true,
        complete: (result) => {
            setCityList(result.data);
            }
        });
    }, []);
    return (
        <div className="fixed top-0 w-screen h-[92vh] bg-gray-500 md:top-[8vh]">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={4}
                maxZoom={6}
                scrollWheelZoom
                className="h-full w-full"   // or style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
                    <a href="https://carto.com/attributions">CARTO</a>'
                    subdomains={['a', 'b', 'c', 'd']}
                    maxZoom={20}
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
  );
};

export default Photography;

/*
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem. react.development.js:518:17
Uncaught TypeError: can't access property "useEffect", resolveDispatcher() is null
    useEffect React
    <anonymous> Photography.tsx:7
react.development.js:1225:14

*/
