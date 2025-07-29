import { projectData } from "../../data/projects";

interface ProjectHolderProps {
  projectIndex: number;
}

export function ProjectHolder({ projectIndex }: ProjectHolderProps) {
    const title:string = projectData["projects"][projectIndex].title;
    const description:string[] = projectData["projects"][projectIndex].description;
    //console.log(description);
    return <div
        className="w-full h-full text-white flex flex-col content-start p-6 gap-5 overflow-y-scroll overflow-x-hidden">
            <p className="text-shadow-glow text-gray-100 text-4xl">{title}</p>
            {description.map((sentence, index) => (
                <p key={index} className="text-gray-100 text-xl">{sentence}</p>
            ))}
        </div>
}