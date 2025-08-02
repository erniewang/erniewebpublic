import { useState, useContext } from "react";
import { phoneMode } from "../../App";

export function GalleryImage({ src, index }: { src: string; index?: number }) {
    const [imgDimensions, setImgDimensions] = useState<[number, number]>([1, 1]);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    var img = new Image(); 
    img.src = src;

    //modify the dimensions of the picture so it fits somewhat
    img.onload = function() {
        const dimension:number = Math.round((img.width / img.height) * 2) / 2;
        setImgDimensions([(dimension < 1 ? 2 : 1),(dimension < 1 ? 1: dimension)]);
    };

    return (
        <>
            <div 
                className="relative cursor-pointer group"
                style={{
                    gridRow: `span ${imgDimensions[0]}`,
                    gridColumn: `span ${imgDimensions[1]}`
                }}
                onClick={() => setIsFullscreen(true)}
            >
                <img
                    className="relative bg-black object-cover w-full h-full z-1 transition-all duration-300 group-hover:grayscale"
                    alt=""
                    loading="lazy"
                    src={src}
                />
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsFullscreen(false)}
                >
                    <img
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        src={src}
                        alt=""
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

//

//things to do. 
//add more images into the thing
//turn the about images into numbers. and import them with a direct for loop type shit.
//make it so the dimensions of the image are tall. or short. that is all


