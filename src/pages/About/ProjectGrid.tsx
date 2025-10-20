const ProjectGrid = () => {
    return (
        <div className="h-[175vh] md:h-full w-full md:w-6/10 bg-gray-900 flex-shrink-0 z-4">
            <div className="grid
            grid-cols-2  grid-rows-8
            md:grid-cols-4 md:grid-rows-4
            w-full h-full
            grid-flow-dense">
                <div className="bg-gray-950 col-span-2 row-span-2"></div>
                <div className="bg-gray-900"></div>
                <div className="bg-gray-800 col-span-2"></div>
                <div className="bg-gray-700 row-span-2"></div>
                <div className="bg-gray-600 col-span-2 row-span-2"></div>
                <div className="bg-gray-500"></div>
                <div className="bg-gray-400 col-span-2"></div>
                <div className="bg-gray-300"></div>
                <div className="bg-gray-200"></div>
                
            </div>
        </div>
    );
};

export default ProjectGrid;


//if you give padding or gaps, there are extra pixels accumulated at the bottom