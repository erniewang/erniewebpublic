import { SProject, ProjectSelected } from "./project";
import { useState } from "react";

const tS = "text-shadow-strong text-gray-300 text-[clamp(20px,4.4vw,39px)] ml-2";
const gridS =
  "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-2 gap-0";

const gridSOdd = "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-0 box-shadow-glow";

export default function Projects() {
  //why does turning the 100% into a screen or full fuck it up?
  const [selectedProject, setSelectedProject] = useState<number>(-1);
  return (
    selectedProject === -1 ? (
      <div
        id="projects"
        className="w-[clamp(300px,96vw,100%)] h-auto flex flex-col items-start gap-1 p-4"
      >
        <p className={tS}>In Progress</p>
        <div className={gridS}>
          <SProject pageIndex={0} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={1} setIndexFunc={setSelectedProject}/>
        </div>
        <p className={tS}>AI Focused</p>
        <div className={gridSOdd}>
          <SProject pageIndex={2} setIndexFunc={setSelectedProject}/>
                    <SProject pageIndex={3} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={4} setIndexFunc={setSelectedProject}/>
        </div>

        <p className={tS}>Musical Programming</p>
        <div className={gridS}>
          <SProject pageIndex={5} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={6} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={7} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={8} setIndexFunc={setSelectedProject}/>
        </div>

        <p className={tS}>Performance | Composition</p>
        <div className={gridSOdd}>
          <SProject pageIndex={9} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={10} setIndexFunc={setSelectedProject}/>
          <SProject pageIndex={11} setIndexFunc={setSelectedProject}/>
        </div>
      </div>
    ) : (
      <ProjectSelected pageIndex={selectedProject} setIndexFunc={setSelectedProject}></ProjectSelected>
    )
  );
}
