import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';

var cities:any;
(async function() {
    await Papa.parse("/photography/visited.csv", {
    download: true,
    header: true,
    complete: (result) => {
      cities = result.data;
    }
});
})();
  

const position:LatLngTuple = [51.505, -0.09];

const Photography = () => {
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

//have a word map of photographies and place locations and shit
