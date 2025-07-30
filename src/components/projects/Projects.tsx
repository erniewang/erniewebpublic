import { SubHeader } from '../shared/SubHeader';
import { useContext, useState, useEffect } from 'react';
import { phoneMode } from '../../App';
import { MovingWords } from '../movingWords/movingWords';
import { ProjectHolder } from './projectContent';
import { Gallery } from '../shared/gallery';

//list of images for testing at this moment
const r = (min:number, max:number) => Math.round(Math.random() * (max - min)) + min; //what the fuck is a spreading iterator

//dumb componet vs smart componet
export function Projects() {
    const pM = useContext(phoneMode);
    const [selectedProject, setSelectedProject] = useState<number>(1);
    const [photoList, setPhotoList] = useState<string[]>(Array.from({length: 15}, (_, i) => `images/Photography/${r(0,79)}.jpg`));

    useEffect(() => {
        setPhotoList(Array.from({length: 15}, (_, i) => `images/Photography/${r(0,79)}.jpg`));
    }, [selectedProject]);

    const titleObject: string = "flex items-center justify-center text-white p-[7px] text-[85%] hover:opacity-70 active:bg-black active:text-gray-800";
    return (
        <SubHeader>
            <div className={`${!pM ? "w-[70%] h-full" : "w-[100%] h-[70%]"}`}>
                {pM ? ( //mobile layout
                    <div className="flex flex-col h-full bg-gray-500">
                        <div className="flex h-auto min-h-[50px]">
                            <div className={`flex-1 bg-gray-950 ${titleObject} text-[77%]`} onClick={() => setSelectedProject(0)}>
                                Har.MXL
                            </div>
                            <div className={`flex-1 bg-gray-900 ${titleObject} text-[71%]`} onClick={() => setSelectedProject(1)}>
                                <b>CV Tuner</b>
                            </div>
                            <div className={`flex-1 bg-gray-800 ${titleObject} text-[89%]`} onClick={() => setSelectedProject(2)} >
                                Jottling
                            </div>
                            <div className={`flex-1 bg-gray-900 ${titleObject} text-[100%]`}  onClick={() => setSelectedProject(3)}  >
                                D2M
                            </div>
                            <div className={`flex-1 bg-gray-950 ${titleObject} text-[100%]`}  onClick={() => setSelectedProject(4)} >
                                LoopAI
                            </div>
                        </div>
                        <div className="flex-1 bg-black overflow-hidden">
                            <ProjectHolder projectIndex={selectedProject}></ProjectHolder>
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full">
                        <div className="w-[17vw] h-full flex flex-col justify-center bg-gradient-to-b from-black via-gray-800 to-black">
                            <div className={`bg-gray-950 h-[8vh] ${titleObject}`} onClick={() => setSelectedProject(0)}> 
                                <MovingWords>Har.MXL</MovingWords>
                            </div>
                            <div className={`bg-gray-900 h-[8vh] ${titleObject}`} onClick={() => setSelectedProject(1)}>
                                <MovingWords>CV-Tuner</MovingWords>
                            </div>
                            <div className={`bg-gray-800 h-[8vh] ${titleObject}`} onClick={() => setSelectedProject(2)}>
                                <MovingWords>Jottling</MovingWords>
                            </div>
                            <div className={`bg-gray-900 h-[8vh] ${titleObject}`} onClick={() => setSelectedProject(3)}>
                                <MovingWords>D2M</MovingWords>
                            </div>
                            <div className={`bg-gray-950 h-[8vh] ${titleObject}`} onClick={() => setSelectedProject(4)}>
                                <MovingWords>LoopAI</MovingWords>
                            </div>
                        </div>
                        <div className="flex-1 bg-black overflow-hidden">
                            <ProjectHolder projectIndex={selectedProject}></ProjectHolder>
                        </div>
                    </div>
                )}
            </div>
            <div className={`${!pM ? "w-[30%] h-full" : "w-full h-[30%]"} bg-black`}>
                <Gallery imageList={photoList}></Gallery>
            </div>
        </SubHeader>
    );
}

//harmonizer
//resume tuner
//map pinner
//research
//dad project
//looper ai