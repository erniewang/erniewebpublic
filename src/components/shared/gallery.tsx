import { useState, useContext } from "react";
import { phoneMode } from "../../App";

function GalleryImage({ src, index }: { src: string; index?: number }) {

    const [imgDimensions, setImgDimensions] = useState<[number, number]>([1, 1]);

    var img = new Image(); 
    img.src = src;

    //modify the dimensions of the picture so it fits somewhat
    img.onload = function() {
        const dimension:number = Math.round((img.width / img.height) * 2) / 2;
        setImgDimensions([(dimension < 1 ? 2 : 1),(dimension < 1 ? 1: dimension)]);
    };

    return (
        <div 
            className="relative"
            style={{
                gridRow: `span ${imgDimensions[0]}`,
                gridColumn: `span ${imgDimensions[1]}`
            }}
        >
            <img
                className="bg-gray-200 object-cover w-full h-full"
                alt="testing"
                loading="lazy"
                src={src}
            />
        </div>
    );
}

export function Gallery(props: { imageList: string[] }) {
    const pM = useContext(phoneMode);
    //dense can violate the spirit of
    return (
        <div className={`w-full h-full grid grid-cols-[repeat(auto-fit,minmax(1fr,2fr))] grid-flow-dense ${pM ? "overflow-y-hidden" : "overflow-y-scroll"}`}>
            {props.imageList.map((src, index) => {
                return <GalleryImage key={index} src={src} index={index} />;
            })}
        </div>
    );
}

//

//things to do. 
//add more images into the thing
//turn the about images into numbers. and import them with a direct for loop type shit.
//make it so the dimensions of the image are tall. or short. that is all