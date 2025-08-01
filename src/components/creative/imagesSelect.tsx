import { useRef } from "react"
import { imgRanges } from "../../data/imageCountryData";

//will take in a function from the parent that will be a useState changer. 
export function ImagesSelector() {
    //declare a ref that will make sure the information lasts between renders
    //have a useState with the inputs. 

    //the div will utilize the passed function to do send the information back

    //there will be a button at the bottom that will update the schema

    //also include a reset function that will make the ref default again
    return <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black flex flex-col p-3 text-white">
        <p><b className="text-xl"><center>Filter By Location</center></b></p>
        <div className="flex-1">
            <CountrySelection></CountrySelection>
        </div>
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

function CountrySelection() {
    return <div></div>
}

function fetchImages(places:[string, string][]):number[]{
    const imageIndexs = places.map(place => imgRanges[place[0]][place[1]]);
    //the best way to filter this
    return [1];
}