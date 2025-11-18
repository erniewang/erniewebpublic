import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { useEffect, useState } from "react";
import yaml from 'js-yaml';
import StackIcon from "tech-stack-icons";

//have some over-rides for all these divs and type shit

interface Project {
  name: string;
  languages: string[];
  tools: string[];
  year: number;
  description: string[];
  smallDescription: string;
}

const skillContainerClasses = "w-full xl:w-auto h-[50px] flex flex-row gap-2 items-center justify-start rounded-xl p-3";
const defaultIconClasses = "w-[20px] h-[20px] rounded-sm ";

//moving words hover and shit
const Projects = () => {
    const [projData, setProjData] = useState<{projects: Project[]}>({projects: []});

    useEffect(() => {
        fetch('/projects.yaml')
          .then(res => res.text())
          .then(text => yaml.load(text) as {projects: Project[]})
          .then(data => setProjData(data))
      }, []);
    return (
        <>
        <Header />
        <ContentPage>
            <div className="flex flex-col w-full sm:w-[89vw] md:w-[80vw] lg:w-[70vw] h-full p-5 gap-3 overflow-y-auto text-gray-300 text-lg element bg-gradient-to-b from-slate-700 to-gray-900 shadow-xl">
                <h1 className="mt-3 text-5xl text-white mb-1">Featured Projects</h1>
                <p className="mb-1 ml-2 text-md">Come back later to see If I put any new ones! Codebases for most projects are available on Github!
                </p>
                {projData.projects.map((project, index) => <RenderProject key={index} project={project} />)}
            </div>
        </ContentPage>
        </>
  );
};

function RenderProject({ project }: { project: Project }) {
    return <div className="flex flex-col gap-3 w-full h-[20vh] min-h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.3)] p-3 rounded-lg">
        <div className="w-full flex flex-row justify-between items-between">
            <div className="flex flex-col">
                <p className="text-2xl pl-2">{project.name}</p>
                <div className={skillContainerClasses}>
                    {project.languages.map((lang, index) => (
                        <StackIcon 
                            key={`lang-${index}`}
                            name={lang} 
                            className={lang === "mysql" ? `${defaultIconClasses} bg-white p-1` : defaultIconClasses} 
                        />
                    ))}
                    <span className="text-gray-400">|</span>
                    {project.tools.map((tool, index) => (
                        <StackIcon 
                            key={`tool-${index}`}
                            name={tool} 
                            className={tool === "mysql" ? `${defaultIconClasses} bg-white p-1` : defaultIconClasses} 
                        />
                    ))}
                </div>
            </div>
            <p>{project.year}</p>
        </div>
        <p className="pl-6">{project.smallDescription}</p>
    </div>;
}

export default Projects;


//i misconstrued what the yaml format is supposed to function. so i was trying shit that didnt really do any good for any shit. 

//react componets always recieve exactly 1 argument. and there are 2 ways to write it. you can recieve the entire props object. 
//or you could immedieetley destructure the object. 
//for passing multiple props. it is still one prop. 

//