import { useRef } from "react"
import { imgRanges } from "../../data/imageCountryData";
import { CountrySelection } from "./countryButtons";

//will take in a function from the parent that will be a useState changer. 
export function ImagesSelector() {
    //declare a ref that will make sure the information lasts between renders
    return <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black flex flex-col p-2 text-white">
        <p><b className="text-xl m-5">Filter By Location</b></p>
        <CountrySelection></CountrySelection>
        <div className="w-full h-[60px] flex flex-row justify-evenly items-center">
                <button 
                    onClick={() => {}} 
                    className="w-[45%] h-[45px] bg-gray-400 hover:bg-gray-500 text-white rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                    Reset
                </button>
                <button 
                    onClick={() => {}} 
                    className="w-[45%] h-[45px] bg-gray-600 hover:bg-gray-700 text-white rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                    Update
                </button>
            </div>
    </div>
}

function fetchImages(places:[string, string][]):number[]{
    const imageIndexs = places.map(place => imgRanges[place[0]][place[1]]);
    //the best way to filter this
    return [1];
}