import { useState, useEffect, useRef } from "react";
import {
	getPhotoFadeInClasses,
	getPhotoGridSpanClasses,
} from "../../utils/animations";

const CDN_BASELINK = "https://res.cloudinary.com/dz2rdajca/image/upload/";

export default function PhotoObject({ imageId }: { imageId: number }) {
	if (imageId === 0) {
		return;
	}

	let url:string = `${CDN_BASELINK}SMALL_${imageId}`;
    const largeUrl:string = `${CDN_BASELINK}${imageId}`;
	const imgRef = useRef<HTMLImageElement>(null);
	const [loaded, setLoaded] = useState(false);
	const [dimensions, setDimensions] = useState("");

	useEffect(() => {
		setLoaded(false);
		const img = imgRef.current;
		if (!img) return;
		const onLoad = () => {
			const newD: [number, number] = calculateSize(
				img.naturalWidth,
				img.naturalHeight,
			);
            url = largeUrl;
            setLoaded(true);
			setDimensions(getPhotoGridSpanClasses(newD));
		};
		img.addEventListener("load", onLoad);
		if (img.complete) onLoad();
		return () => img.removeEventListener("load", onLoad);
	}, [url]);

	return (
		<div
			className={`${dimensions} min-w-0 h-full w-full overflow-hidden rounded-md shadow-2xl`}
		>
			<div className={getPhotoFadeInClasses(loaded)}>
				<img
					ref={imgRef}
					className="h-full w-full object-cover transition-transform duration-200 ease-out hover:scale-125"
					src={url}
					alt=""
				/>
			</div>
		</div>
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
