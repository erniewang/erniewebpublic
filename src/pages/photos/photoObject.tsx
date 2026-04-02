import { useState, useEffect, useRef } from "react";
import ImageViewer from "./imageViewer";
import {
	getPhotoFadeInClasses,
	getPhotoGridSpanClasses,
} from "../../utils/animations";

const CDN_BASELINK = "https://res.cloudinary.com/dz2rdajca/image/upload/";

export default function PhotoObject({ imageId }: { imageId: number }) {
    //retarded edge case but is not worth trying to fix 
	if (imageId === 0) {
		return;
	}

    //urls for both small and large
	let url:string = `${CDN_BASELINK}SMALL_${imageId}`;

	const imgRef = useRef<HTMLImageElement>(null);
	const [loaded, setLoaded] = useState(false);
	const [dimensions, setDimensions] = useState("");
    const [viewingPhoto, setViewingPhoto] = useState<boolean>(false);

	useEffect(() => {
		setLoaded(false);
		const img = imgRef.current;
		if (!img) return;
		const onLoad = () => {
			const newD: [number, number] = calculateSize(
				img.naturalWidth,
				img.naturalHeight,
			);

            setLoaded(true);
			setDimensions(getPhotoGridSpanClasses(newD));
		};

		img.addEventListener("load", onLoad);
		if (img.complete) onLoad();
		return () => img.removeEventListener("load", onLoad);
	}, []);

	return (
        <>
		<div
			className={`relative ${dimensions} min-w-0 h-full w-full overflow-hidden rounded-md shadow-2xl`}
		>
			<div className={getPhotoFadeInClasses(loaded)}>
				<img
                    onClick={(event)=>{
                        event.stopPropagation();
                        setViewingPhoto(true);
                    }}
                    loading="lazy"
					ref={imgRef}
					className="h-full w-full object-cover transition-transform duration-200 ease-out 
                    hover:scale-105 active:opacity-67 active:scale-110"
					src={url}
					alt=""
				/>
			</div>
			<div
				className="pointer-events-none absolute inset-0 rounded-md inset-shadow-sm inset-shadow-gray-800"
				aria-hidden
			/>
		</div>
        {viewingPhoto && <ImageViewer imageId={imageId} demountCall={setViewingPhoto}></ImageViewer>}
        </>
	);
}

//explain this later on
function calculateSize(x: number, y: number): [number, number] {
	if (x < y) {
		//
		const newX = (10 * x) / y;
		return [Math.trunc(newX), 10];
	} else {
		const newY = (10 * y) / x;
		return [10, Math.trunc(newY)];
	}
}
