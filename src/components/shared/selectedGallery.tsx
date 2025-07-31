import { GalleryImage } from "./gallery"
import { useContext } from "react";
import { phoneMode } from "../../App";
//selected gallery

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

export function selectedGallery(props: { imageList: object }) {
    //have a useEffect that listens for changes from the imageList props and rerender accordingly
    //have lazy load images or queues or something to optimize because it gonna be cancer
    return <div></div>
}