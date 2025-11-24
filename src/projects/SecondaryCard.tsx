import type { Project } from "./types";
import { getColorPalette } from "./types";
import { skillContainerClasses } from "./types";
import { defaultIconClasses } from "./types";
import { getProjectImagePath } from "./types";
import StackIcon from "tech-stack-icons";


interface SecondaryCardProps {
  project: Project;
}

const gradientOverlayStyle = {
    background: "radial-gradient(circle at top right, rgba(75,85,99,0.85), rgba(75,85,99,0) 60%)"
};

const SecondaryCard = ({ project }: SecondaryCardProps) => {
    const colours:any = getColorPalette(project.baseColor);
    const imageSrc = getProjectImagePath(project.imageFile);
    
    return <div className="flex-1 bg-slate-800 row-span-2 flex flex-col rounded-lg overflow-hidden shadow-lg"
    style={{border: `3px solid ${colours.darkest}`}}
    >
        <div className="h-6/10 flex flex-row" style={{background: colours.leftRight}}
        >
            <div className="w-3/7 flex flex-col" style={{background: colours.darker}}
            >
                <div className="h-4/5 p-3 text-2xl flex flex-col justify-center" style={{background: colours.darker}}>
                    <p>{project.name}</p>
                    <div className={skillContainerClasses}>
                        {project.languages?.map((language, index) => <StackIcon key={index} name={language} className={defaultIconClasses}></StackIcon>)} |
                        {project.tools?.map((tool, index) => <StackIcon key={index} name={tool} className={defaultIconClasses}></StackIcon>)}
                    </div>
                </div>
                <div className="h-1/5 flex flex-row justify-center items-center gap-4 border-t border-black" style={{background: colours.darkest}}
                >
                    {project.previewLink && <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Preview</a>}
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">Github</a>}
                    {project.videoDemoLink && <a href={project.videoDemoLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">Demo</a>}
                </div>
            </div>
            <div className="w-4/7 relative overflow-hidden" style={{background: colours.darkerTopDown}}>
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
                    <div className="centralized text-sm text-gray-400 h-full w-full">Image coming soon</div>
                )}
            </div>
        </div>
        <div className="h-4/10 p-3 text-md lg:text-[16px] xl:text-lg" style={{background: colours.lighterMid}}
        >
                {project.smallDescription}
        </div>
    </div>;
};

export default SecondaryCard;
