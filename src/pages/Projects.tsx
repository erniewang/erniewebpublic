import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { useEffect, useState } from "react";
import yaml from 'js-yaml';
import StackIcon from "tech-stack-icons";

//have some over-rides for all these divs and type shit

//what is that plugin that lets you fix the css everyhwere such that the order does not fuck shit up

interface Project {
  name: string;
  languages: string[];
  tools: string[];
  startDate: string;
  endDate: string;
  description: string[];
  smallDescription: string;
  baseColor: string;
  githubLink?: string;
  previewLink?: string;
  videoDemoLink?: string;
}

const skillContainerClasses = "w-full h-[25px] flex flex-row gap-2 items-center justify-start";
const defaultIconClasses = "w-[25px] h-[25px] rounded-lg ";

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
            <div className="flex flex-col w-full sm:w-[90vw] md:w-[80vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw] h-full p-3 gap-3 overflow-y-auto text-gray-300 text-base md:text-lg element bg-gradient-to-b from-slate-700 to-gray-900 shadow-xl">
                <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white mb-1 pl-2">Featured Projects</h1>
                <p className="mb-1 ml-2 text-sm md:text-base text-gray-400">Come back later to see If I put any new ones! Codebases for most projects are available on Github!
                </p>
                <div className="w-full h-[250vh] grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {projData.projects.map((project, index) => <RenderProject key={index} project={project} />)}
                </div>
            </div>
        </ContentPage>
        </>
  );
};

//need to clean up shit because the tailwind is gonna be so fucked up

//get rid of the bottom one for things that do not have links
function RenderProject({ project }: { project: Project }) {
    return <div className="min-h-[300px] flex flex-col rounded-lg overflow-hidden"
    style={{ background: `linear-gradient(to left, rgb(69, 69, 69) 0%, ${project.baseColor} 1%, rgb(21, 19, 22) 99%)`, border: '2px solid rgb(29, 29, 29)' }}>
        <div className="flex-1 flex flex-row">
            <div className="w-auto p-5 pl-7 flex flex-col justify-center gap-3"
            >
                <p className="text-xl 2xl:text-2xl text-white font-bold">{project.name}</p>
                <div className={skillContainerClasses}>
                    {project.languages.map((language, index) => <StackIcon key={index} name={language} className={defaultIconClasses}></StackIcon>)}
                    | {project.tools.map((tool, index) => <StackIcon key={index} name={tool} className={defaultIconClasses}></StackIcon>)}
                </div>
            </div>
        </div>
        <div className="p-4 bg-gray-900 text-white text-sm sm:text-md 2xl:text-lg pt-2" 
            style={{ boxShadow: '0 0 60px rgba(86, 86, 86, 0.4)',  background: `linear-gradient(to right, rgb(34, 34, 34) 0%, rgb(21, 19, 22) 70%)`, border: '2px solid rgb(29, 29, 29)'  }}
         >
            {project.smallDescription}
        </div>
        {(project.githubLink || project.previewLink || project.videoDemoLink) && (
            <div className="p-3 glow-sm"
                style={{ background: `linear-gradient(to bottom, rgb(20, 20, 20) 0%, rgb(0, 0, 0) 100%)` }}>
                <div className="flex flex-row flex-wrap justify-evenly items-center gap-4 text-white text-sm">
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Github
                        </a>
                    )}
                    {project.previewLink && (
                        <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Preview
                        </a>
                    )}
                    {project.videoDemoLink && (
                        <a href={project.videoDemoLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Video Demo
                        </a>
                    )}
                </div>
            </div>
        )}
    </div>;
}

export default Projects;


//i misconstrued what the yaml format is supposed to function. so i was trying shit that didnt really do any good for any shit. 

//react componets always recieve exactly 1 argument. and there are 2 ways to write it. you can recieve the entire props object. 
//or you could immedieetley destructure the object. 
//for passing multiple props. it is still one prop. 

//have creatviethings where some of them wont have any links. 
