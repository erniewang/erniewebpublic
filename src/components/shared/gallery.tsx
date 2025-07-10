export function Gallery(props: { imageList: string[] }) {
    return (
        <div className="w-full h-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-y-scroll">
            {props.imageList.map((src, index) => (
                <img
                    key={index}
                    className="bg-gray-200 object-cover w-full h-auto"
                    alt="Gallery photo"
                    src={src}
                />
            ))}
        </div>
    );
}


//things to do. 

//add more images into the thing

//turn the about images into numbers. and import them with a direct for loop type shit.

