import { projectData } from "../../data/projects";
import { phoneMode } from "../../App";
import { useContext } from 'react';

interface ProjectHolderProps {
  projectIndex: number;
}

export function ProjectHolder({ projectIndex }: ProjectHolderProps) {
    const pM = useContext(phoneMode);
    const title:string = projectData["projects"][projectIndex].title;
    const techStack:string = projectData["projects"][projectIndex].tech;
    const description:string[] = projectData["projects"][projectIndex].description;
    //console.log(description);
    return <div
        className={`w-full h-full text-white flex flex-col content-start p-6 gap-4 ${pM ? "overflow-y-hidden" : "overflow-y-scroll"} overflow-x-hidden`}>
            <p className="text-shadow-glow text-white text-4xl">{title}</p>
            <p className="text-shadow-glow text-gray-200 text-2xl mt-1 mb-2"><b>{techStack}</b></p>
            {description.map((sentence, index) => (
                <p key={index} className="text-gray-400 text-xl">{sentence}</p>
            ))}
        </div>
}