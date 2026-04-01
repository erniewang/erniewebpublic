import { useState, useEffect } from "react";
import getImages from "./loadPhotos";
import PhotoObject from "./photoObject";

const Photos = () => {
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

	const [images, setImages] = useState<number[]>(getImages(n));

	useEffect(() => {
		const newImageList = getImages(page);
		//take not of this as well
		const atLimit = newImageList.length === 1 && newImageList[0] === 0;
		if (!atLimit) {
			setImages(newImageList);
		}
	}, [page]);

	return (
		<>
			<div
				//make it so the rows still continue afterwards
				className="grid w-full h-full grid-cols-10 md:grid-cols-10 lg:grid-cols-15 xl:grid-cols-20 auto-rows-[minmax(40px,70px)] sm:auto-rows-[minmax(50px,100px)] md:auto-rows-[minmax(60px,400px)] grid-flow-dense gap-2 bg-gray-700 overflow-y-scroll p-3"
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
				onClick={() => {
					//for now in the main place
					setPage(page + 1); //this does not update right away
					sessionStorage.setItem("photosPage", (page + 1).toString()); //+1 otherwise it is the stale value
				}}
				onDoubleClick={() => {
					//For Testing Purposes only
					setPage(0);
					sessionStorage.setItem("photosPage", "0");
				}}
				className="fixed w-screen bottom-0 h-1/8 flex flex-col items-center justify-center text-3xl text-white hover:text-4xl bg-[linear-gradient(to_bottom,transparent_0%,black_50%,black_100%)]"
			>
				<p className="pt-10">Show More</p>
			</div>
		</>
	); //keys somehow need to go here well
};

export default Photos;

//put a clicker at the bottom 20% of the screen overlay that automatically loads next images
