import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { useEffect, useState } from "react";
import yaml from 'js-yaml';
import type { Project } from "./types";

import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import TertiaryCard from "./TertiaryCard";

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
            <div 
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.92) 20%, rgba(30, 41, 59, 0.85) 40%, rgba(30, 41, 59, 0.7) 55%, rgba(30, 41, 59, 0.5) 70%, rgba(30, 41, 59, 0.3) 80%, rgba(30, 41, 59, 0.15) 90%, transparent 100%), url('/about/copenhagen.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                className="flex flex-col w-full sm:w-[90vw] md:w-[80vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw] h-full p-3 gap-3 overflow-y-auto text-white text-base md:text-lg element shadow-xl">
                <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white mb-1 pl-2">Featured Projects And Experiences</h1>
                <p className="mb-1 ml-2 text-sm md:text-base text-gray-300">Come back later to see If I put any new ones! Codebases for most projects are available on Github! Most are open soure! Feel free to contribute and improve upon them!
                </p>
                <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2  auto-rows-[175px] gap-4 grid-flow-dense p-1">
                    {projData.projects.map((project, index) => <RenderProject key={index} project={project} />)}
                </div>
            </div>
        </ContentPage>
        </>
  );
};

function RenderProject({ project }: { project: Project }) {
    switch (project.variant) {
        case "secondary":
          // Code to execute if expression === value1
            return <SecondaryCard project={project}></SecondaryCard>;
        case "tertiary":
            return <TertiaryCard project={project}></TertiaryCard>;
        default:
            return <PrimaryCard project={project}></PrimaryCard>;
      }
}

//have a project seciton that changes the background color gradient smoothly to the selected project's basecolor. with prop drilling

//music wave file thing at the bottom

//think of IOS things as a priority. so no hover. just click

export default Projects;
