import type { Project } from "./types";
import { getColorPalette } from "./types";
import { skillContainerClasses } from "./types";
import { defaultIconClasses } from "./types";
import { getProjectImagePath } from "./types";
import StackIcon from "tech-stack-icons";

interface PrimaryCardProps {
  project: Project;
}

const gradientOverlayStyle = {
    background: "radial-gradient(circle at top right, rgba(75,85,99,0.85), rgba(75,85,99,0) 60%)"
};

//have a reveal thing that acts like a spoilder ot show the text

//eplain how the cover gradient thing works
const PrimaryCard = ({ project }: PrimaryCardProps) => {
    const colours:any = getColorPalette(project.baseColor);
    const imageSrc = getProjectImagePath(project.imageFile);
    return <div className="flex-1 bg-slate-800 row-span-3 flex flex-col rounded-lg overflow-hidden shadow-lg"
    style={{border: `3px solid ${colours.darkest}`}}
    >
        <div className="h-1/10 flex flex-row p-1 pr-4 gap-5"
        style={{background: colours.leftRight}}
        >
            <p className="p-1 pl-2 text-3xl">{project.name}</p>
            <div className={skillContainerClasses}>
                {project.languages?.map((language, index) => <StackIcon key={index} name={language} className={defaultIconClasses}></StackIcon>)} |
                {project.tools?.map((tool, index) => <StackIcon key={index} name={tool} className={defaultIconClasses}></StackIcon>)}
            </div>
        </div>
        <div className="h-4/10 relative overflow-hidden"
        style={{background: colours.darkest}}
        >
            {imageSrc ? (
                <>
                    <img
                        src={imageSrc}
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={gradientOverlayStyle}></div>
                </>
            ) : (
                <div className="centralized text-sm text-gray-400">Image coming soon</div>
            )}
        </div>
        <div className="h-4/10 flex flex-col gap-3 bg-slate-900 p-4 text-sm overflow-y-scroll"
        style={{background: colours.darkerTopDown}}
        >
            <p>{project.smallDescription}</p>
            {project.description?.map((desc, index) => <p key={`${project.name}-desc-${index}`}>{desc}</p>)}

        </div>
        <div className="h-1/10 bg-slate-700 flex flex-row justify-center  items-center gap-5 border-t border-black"
        style={{background: colours.darker}}
        >
                {project.previewLink && <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Preview</a>}
                {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">Github</a>}
                {project.videoDemoLink && <a href={project.videoDemoLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">Demo</a>}
        </div>
    </div>;
};

export default PrimaryCard;


/*
worst fucking thing ever
<div className="h-1/10 flex flex-row"
        style={{background: colours.leftRight}}
        >
            <div className="w-[100%] text-3xl pl-4 p-1 flex flex-row items-center">
                <p className="flex-1 pt-1">{project.name}</p>
                <div className={skillContainerClasses}>
                    {project.languages?.map((language, index) => <StackIcon key={index} name={language} className={defaultIconClasses}></StackIcon>)} |
                    {project.tools?.map((tool, index) => <StackIcon key={index} name={tool} className={defaultIconClasses}></StackIcon>)}
                </div>
            </div>
        </div>
*/