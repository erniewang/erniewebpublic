import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';
import { MovingWords } from '../movingWords/movingWords';

//dumb componet vs smart componet
export function Projects() {
    const pM = useContext(phoneMode);
    const titleObject: string = "flex items-center justify-center text-white p-2 text-[85%] hover:opacity-70";
    return <SubHeader>
        <div className="w-full h-full">
            {pM ? ( //mobile layout
                <div className="flex flex-col h-full bg-gray-500">
                    <div className="flex h-auto min-h-[50px]">
                        <div className={`flex-1 bg-gray-950 ${titleObject} text-[75%]`}>
                            <MovingWords>Harmonizer</MovingWords>
                        </div>
                        <div className={`flex-1 bg-gray-900 ${titleObject}`}>
                            <MovingWords>CV-Tuner</MovingWords>
                        </div>
                        <div className={`flex-1 bg-gray-800 ${titleObject}`}>
                            <MovingWords>Jottling</MovingWords>
                        </div>
                        <div className={`flex-1 bg-gray-900 ${titleObject}`}>
                            <MovingWords>D2M</MovingWords>
                        </div>
                        <div className={`flex-1 bg-gray-950 ${titleObject}`}>
                            <MovingWords>LoopAI</MovingWords>
                        </div>
                    </div>
                    <div className="flex-1 bg-black overflow-y-scroll" />
                </div>
            ) : ( //desktop layout
                <div className="flex h-full">
                    <div className="w-[17vw] h-full flex flex-col justify-center bg-gradient-to-b from-black via-gray-800 to-black">
                        <div className={`bg-gray-950 h-[8vh] ${titleObject}`}>
                            <MovingWords>Harmonizer</MovingWords>
                        </div>
                        <div className={`bg-gray-900 h-[8vh] ${titleObject}`}>
                            <MovingWords>CV-Tuner</MovingWords>
                        </div>
                        <div className={`bg-gray-800 h-[8vh] ${titleObject}`}>
                            <MovingWords>Jottling</MovingWords>
                        </div>
                        <div className={`bg-gray-900 h-[8vh] ${titleObject}`}>
                            <MovingWords>D2M</MovingWords>
                        </div>
                        <div className={`bg-gray-950 h-[8vh] ${titleObject}`}>
                            <MovingWords>LoopAI</MovingWords>
                        </div>
                    </div>
                    <div className="flex-1 bg-black overflow-y-scroll" />
                </div>
            )}
        </div>
    </SubHeader>;
}

//harmonizer
//resume tuner
//map pinner
//research
//dad project
//looper ai