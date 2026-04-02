import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
const CDN_BASELINK = "https://res.cloudinary.com/dz2rdajca/image/upload/";
import type { SetStateAction, Dispatch } from "react";
import {
	FADE_IN_CLASS,
	FADE_OUT_CLASS,
	GRACEFULL_SPEED_MS,
	useGracefullAnimation,
} from "../../utils/gracefull";
import { useContext } from "react";
import { SwitchingTabs } from "../../App";

export default function ImageViewer({
	imageId,
	demountCall,
}: {
	imageId: number;
	demountCall: Dispatch<SetStateAction<boolean>>;
}) {
	const largeUrl: string = `${CDN_BASELINK}${imageId}`;
	const smallUrl: string = `${CDN_BASELINK}SMALL_${imageId}`;

	const [largeLoaded, setLargeLoaded] = useState<boolean>(false);
	const { exit, exiting } = useGracefullAnimation({ speed: GRACEFULL_SPEED_MS });
	const [deloading] = useContext(SwitchingTabs);

	useEffect(() => {
		const largeImage = new Image();
		largeImage.onload = function () {
			setLargeLoaded(true);
		};
		largeImage.src = largeUrl;
	}, [largeUrl]);

	const motionClass = exiting || deloading ? FADE_OUT_CLASS : FADE_IN_CLASS;

	return createPortal(
		<div
			role="dialog"
			aria-modal="true"
			className={`fixed inset-x-0 top-[8vh] bottom-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-700 to-neutral-900 ${motionClass}`}
			onClick={(e) => {
				exit(() => {
					e.stopPropagation();
					demountCall(false);
				});
			}}
		>
			<img
				loading="lazy"
				src={largeLoaded ? largeUrl : smallUrl}
				alt=""
				className="h-full w-full object-contain active:opacity-95 active:scale-95 active:rounded-xl"
				draggable={false}
			/>
		</div>,
		document.body,
	);
}

// Portal to document.body keeps position:fixed relative to the viewport (not an ancestor
// with transform, which would create a new containing block for fixed).

// Overlay: pinned with inset-x-0 + top + bottom (not w-screen / negative margin), so the
// gradient layer always fills the viewport on resize. Image: flex center + max-h/w + object-contain.
