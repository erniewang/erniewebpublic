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
            <div className="flex flex-col w-full sm:w-[90vw] md:w-[80vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw] h-full p-3 gap-3 overflow-y-auto text-gray-300 text-base md:text-lg element bg-gradient-to-b from-slate-700 to-gray-900 shadow-xl">
                <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white mb-1 pl-2">Featured Projects And Experiences</h1>
                <p className="mb-1 ml-2 text-sm md:text-base text-gray-300">Come back later to see If I put any new ones! Codebases for most projects are available on Github! Most are open soure! Feel free to contribute and improve upon them!
                </p>
                <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2  auto-rows-[175px] gap-4 grid-flow-dense">
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

export default Projects;
