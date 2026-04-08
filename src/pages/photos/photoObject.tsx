import { useState, useEffect, useRef } from "react";
import ImageViewer from "./imageViewer";
import {
	getPhotoFadeInClasses,
	getPhotoGridSpanClasses,
} from "../../utils/animations";

const CDN_BASELINK = "https://res.cloudinary.com/dz2rdajca/image/upload/";
const SOUND_GALLERY_OPEN = "/sounds/Button.mp3";

/** Full class strings so Tailwind scans every variant. Subtle black gradients (opacity in from/to/via). */
const OVERLAY_TINT_CLASSES = [
	"bg-gradient-to-b from-black/40 to-black/10",
	"bg-gradient-to-t from-black/45 to-black/10",
	"bg-gradient-to-br from-black/50 via-black/20 to-black/5",
	"bg-gradient-to-bl from-black/40 via-black/25 to-black/10",
] as const;

function overlayTintClassForImageId(id: number): (typeof OVERLAY_TINT_CLASSES)[number] {
	return OVERLAY_TINT_CLASSES[((id * 7 + 13) % 4 + 4) % 4];
}

export default function PhotoObject({ imageId }: { imageId: number }) {
    //retarded edge case but is not worth trying to fix 
	if (imageId === 0) {
		return;
	}

	const url = `${CDN_BASELINK}SMALL_${imageId}`;
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
	}, [url]);

	return (
        <>
		<div
			className={`relative ${dimensions} min-w-0 h-full w-full overflow-hidden rounded-md shadow-2xl ${getPhotoFadeInClasses(loaded)}`}
		>
			<div className="group relative isolate h-full w-full">
				<img
					onClick={(event) => {
						event.stopPropagation();
						void new Audio(SOUND_GALLERY_OPEN).play().catch(() => {});
						setViewingPhoto(true);
					}}
					loading="lazy"
					ref={imgRef}
					className="relative z-0 h-full w-full object-cover transition-transform duration-200 ease-out hover:scale-105 active:scale-110"
					src={url}
					alt=""
				/>
				<div
					className={`pointer-events-none absolute inset-0 z-10 rounded-md opacity-100 transition-opacity duration-200 group-hover:opacity-0 ${overlayTintClassForImageId(imageId)}`}
					aria-hidden
				/>
			</div>
			<div
				className="pointer-events-none absolute inset-0 z-20 rounded-md inset-shadow-sm inset-shadow-gray-800"
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
