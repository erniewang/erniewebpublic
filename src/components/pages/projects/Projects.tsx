import { useContext } from 'react';
import { phoneMode } from '../../../App';
import { projectData } from '../../../data/projectDesc';
import { Project } from '../../../data/projectDesc';

const tS = "text-shadow-strong text-gray-300 text-[clamp(20px,5vw,39px)]";
const gridS = "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4";

export default function Projects() {
    return (
        <div
            id="projects"
            className="w-[clamp(300px,90vw,100%)] h-auto flex flex-col items-start gap-2 p-3"
        >   
            <p className={tS}>In Progress</p>
            <div className={gridS}>
                <div className="w-full h-[100px] bg-gray-400"></div>
                <div className="w-full h-[100px] bg-gray-500"></div>
            </div>

            <p className={tS}>AI Focused</p>
            <div className={gridS}>
                <div className="w-full h-[100px] bg-gray-400"></div>
                <div className="w-full h-[100px] bg-gray-500"></div>
                <div className="w-full h-[100px] bg-gray-600"></div>
            </div>

            <p className={tS}>Musical Programming</p>
            <div className={gridS}>
                <div className="w-full h-[100px] bg-gray-400"></div>
                <div className="w-full h-[100px] bg-gray-500"></div>
                <div className="w-full h-[100px] bg-gray-600"></div>
                <div className="w-full h-[100px] bg-gray-700"></div>
            </div>

            <p className={tS}>Performance | Composition</p>
            <div className={gridS}>
                <div className="w-full h-[100px] bg-gray-400"></div>
                <div className="w-full h-[100px] bg-gray-500"></div>
                <div className="w-full h-[100px] bg-gray-600"></div>
            </div>
        </div>
    );
}
