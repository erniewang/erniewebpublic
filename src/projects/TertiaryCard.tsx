import type { Project } from "./types";
import { getColorPalette } from "./types";
import { skillContainerClasses } from "./types";
import { defaultIconClasses } from "./types";
import StackIcon from "tech-stack-icons";

interface TertiaryCardProps {
  project: Project;
}

//flex-1 overrides shit?
const TertiaryCard = ({ project }: TertiaryCardProps) => {
    const colours:any = getColorPalette(project.baseColor);
    
    return <div className="flex-1 flex flex-row bg-slate-800 row-span-1 rounded-lg overflow-hidden shadow-lg"
    style={{border: `3px solid ${colours.darkest}`}}
    >
        <div className="w-[41%] flex flex-col"
        style={{background: colours.darker}}
        >
            <div className="h-3/4 flex flex-col p-3 text-2xl justify-center"
            style={{background: colours.darkerTopDown}}
            >
                <p>{project.name}</p>
                <div className={skillContainerClasses}>
                    {project.languages?.map((language) => <StackIcon name={language} className={defaultIconClasses}></StackIcon>)} |
                    {project.tools?.map((language) => <StackIcon name={language} className={defaultIconClasses}></StackIcon>)}
                </div>
            </div>
            <div className="h-1/4 centralized"
            style={{background: colours.darkest}}
            ></div>
        </div>
        <div className="flex-1 w-[59%] text-md lg:text-[14px] 2xl:text-lg p-3"
        style={{background: colours.leftRight}}
        >{project.smallDescription}</div>
    </div>;
};

export default TertiaryCard;


//flex has some defaults that importiant to know. does not grow. does shrink. bases itself off of specified width height. 
//flex grow and all the main shit is on the main axis. the other axis is handled by something else
//chris. the buff paiting nigga