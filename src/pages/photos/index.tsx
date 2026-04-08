import { useState, useEffect, useRef } from "react";
import getImages from "./loadPhotos";
import PhotoObject from "./photoObject";

const SOUND_SHOW_MORE = "/sounds/brush.mp3";
const SOUND_NO_MORE = "/sounds/fail.mp3";

const Photos = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	let n: number;
	(() => {
		const raw = sessionStorage.getItem("photosPage");
		n = raw != null ? Number(raw) : NaN;
		n = Number.isFinite(n) ? n : 0;
	})();

	//"lazy" initalizer. it gets something the moment this usestate is declared
	const [page, setPage] = useState(() => {
		return n;
	});

	const [limitReached, setLimitReached] = useState<boolean>(false);
	const [images, setImages] = useState<number[]>(getImages(n));

	useEffect(() => {
		const newImageList = getImages(page);
		//take not of this as well
		const atLimit = newImageList.length === 200;
		if (!atLimit) {
			const element = containerRef.current;
			if (element) {
				element.scrollTop = element.scrollHeight;
			}
			setImages(newImageList);
		} else {
			setLimitReached(true);
		}
	}, [page]);

	return (
		<>
			<div className="relative h-full w-full min-h-0 flex flex-row justify-center items-center bg-black">
				<div
					ref={containerRef}
					//make it so the rows still continue afterwards
					className="grid w-full h-full
                    grid-cols-10 md:grid-cols-10 lg:grid-cols-15 xl:grid-cols-20 auto-rows-[minmax(40px,70px)] sm:auto-rows-[minmax(50px,100px)] md:auto-rows-[minmax(60px,400px)] grid-flow-dense gap-2 
                    bg-gradient-to-b from-black to-slate-700 shadow-2xl overflow-y-scroll p-3 pb-20"
				>
					{images.map((img: number) => {
						return (
							<PhotoObject
								imageId={img}
								key={"photoGalleryObject" + img}
							></PhotoObject>
						);
					})}
				</div>
				<div
					className="pointer-events-none absolute inset-0 z-[1] bg-gray-800/15"
					aria-hidden
				/>
			</div>
			<div
				onClick={(e) => {
					//for now in the main place
					e.stopPropagation(); //tis just a precaution
					if (limitReached) {
						void new Audio(SOUND_NO_MORE).play().catch(() => {});
						return;
					}
					void new Audio(SOUND_SHOW_MORE).play().catch(() => {});
					setPage(page + 1); //this does not update right away
					sessionStorage.setItem("photosPage", (page + 1).toString()); //+1 otherwise it is the stale value
				}}
				className="fixed w-screen bottom-0 h-[10vh]
                flex flex-col items-center justify-start active:text-glow
                text-[25px] text-white hover:text-[27px] active:text-[30px]
                bg-[linear-gradient(to_bottom,transparent_0%,black_50%,black_100%)]
                md:opacity-0 md:transition-opacity md:duration-300 md:hover:opacity-100 md:h-[20vh]"
			>
				<p className="pt-10 md:pt-29">
					{limitReached ? "No More Photos" : "Show More"}
				</p>
			</div>
		</>
	); //keys somehow need to go here well
};

export default Photos;

//put a clicker at the bottom 20% of the screen overlay that automatically loads next images
