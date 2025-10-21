import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';
import { useLayoutEffect,useEffect, useState } from 'react';

const position:LatLngTuple = [51.505, -0.09];

//TODO: add maxbounds
//Size of the Marker Determines amount of pictures taken at that place

const Photography = () => {
    const [cityList, setCityList]:any = useState();
    useEffect(() => {
        Papa.parse("/photography/visited.csv", {
        download: true,
        header: true,
        complete: (result) => {
            //you cannot trust. the order this prints is not the same as what actuall happens
            //console.log("resulting",result.data);
            setCityList(result.data);
            //console.log("city should be set",cityList);
            }
        });
    }, []);

    useEffect(() => {
        //console.log('cityList actually updated', cityList);
      }, [cityList]);

    return (
        <div className="fixed top-0 w-screen h-[92vh] bg-gray-500 md:top-[8vh] flex flex-row">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={4}
                maxZoom={7}
                minZoom={3}
                maxBounds={[
                    [0, -180],    // Southwest corner (0°N, 180°W)
                    [65, 170]     // Northeast corner (65°N, 170°E)
                  ]}                    
                scrollWheelZoom
                className="h-full md:w-2/3 w-full lg:w-[67vw]"   // or style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
                    <a href="https://carto.com/attributions">CARTO</a>'
                    subdomains={['a', 'b', 'c', 'd']}
                    maxZoom={20}
                />
                {cityList ?
                cityList.map((city:any) => {
                    const pos:LatLngTuple = [city.Lat,city.Lon];
                    if (pos[0] == undefined) return "";
                    return <Marker position={pos} key={pos[0]}>
                        <Popup>
                            {city.Name + " "+city.Region}
                        </Popup>
                    </Marker>;
                })
                : 
                ""}
                <Marker 
                riseOnHover={true}
                position={position}
                >
                    <Popup
                    className='w-[15px]'>
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
