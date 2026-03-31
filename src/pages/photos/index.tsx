import { useState, useEffect } from "react";
import getImages from "./loadPhotos";

const Photos = () => {
    const [images, setImages] = useState<any[]>([]);
    
    //"lazy" initalizer. it gets something the moment this usestate is declared
    const [page, setPage] = useState(() => {
        const raw = sessionStorage.getItem("photosPage");
        const n = raw != null ? Number(raw) : NaN;
        return Number.isFinite(n) ? n : 0;
    });

    useEffect(() => {
        getImages(page).then(setImages); //call setImages with the result of getImages
    }, [page]);

    return <div
        onClick={()=> { //for now in the main place
            setPage(page+1); //this does not update right away
            sessionStorage.setItem("photosPage",(page+1).toString()); //+1 otherwise it is the stale value
        }} 
        className="w-full h-[125vh] grid-cols-20 grid-flow-dense gap-2 bg-gray-700 overflow-y-scroll">
    </div>;
};

export default Photos;


//a few concerns: 
// how does react cache images already loaded?