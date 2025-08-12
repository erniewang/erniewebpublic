import { createContext, useState } from "react"
import { imgRanges } from "../../../data/imageCountryData";
import { CountrySelection } from "./countryButtons";

export const resetAction = createContext(true);
//will take in a function from the parent that will be a useState changer. 
export function ImagesSelector({ onUpdate }: { onUpdate: (ids: number[]) => void }) {
    //declare a ref that will make sure the information lasts between renders
    const [resetToggle, setResetToggle] = useState(false);
    return <resetAction.Provider value={resetToggle}>
    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black flex flex-col p-2 text-white">
        <p><b className="text-xl m-5">Filter By Location</b></p>
        <CountrySelection></CountrySelection>
        <div className="w-full h-[60px] flex flex-row justify-evenly items-center">
                <button 
                    onClick={() => { 
                        clearData(); 
                        onUpdate([]); 
                        setResetToggle(prev => !prev); 
                    }} 
                    className="w-[45%] h-[45px] bg-gray-400 hover:bg-gray-500 text-white rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                    <span>Reset</span>
                </button>
                <button 
                    onClick={() => onUpdate(fetchImages())} 
                    className="w-[45%] h-[45px] bg-gray-600 hover:bg-gray-700 text-white rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                    <span>Update</span>
                </button>
            </div>
    </div>
    </resetAction.Provider>
}

function clearData():void {
    Object.keys(imgRanges).forEach((nation:string) => {
        Object.keys(imgRanges[nation]).forEach((city:string) => {
            if (imgRanges[nation][city].selected) {
                imgRanges[nation][city].selected = false;
            }
        });
    });
}

function fetchImages():number[]{
    let imageIds:number[] = [];
    Object.keys(imgRanges).forEach((nation:string) => {
        Object.keys(imgRanges[nation]).forEach((city:string) => {
            if (imgRanges[nation][city].selected) {
                const placeRange = imgRanges[nation][city].ranges;
                placeRange.forEach(([start, end]) => {
                    for (let i = start; i <= end; i++) {
                        imageIds.push(i);
                    }
                });
            }
        });
    });

    return imageIds;
}