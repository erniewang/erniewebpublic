import { useContext } from 'react';
import { phoneMode } from '../../../App';
import { projectData } from '../../../data/projectDesc';
import { Project } from '../../../data/projectDesc';

const tS = "text-shadow-strong text-gray-300 text-[clamp(20px,5vw,39px)] ml-2";
const gridS =
  "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-2 gap-3";

const gridSOdd = "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3";

// ✅ Child component without color prop
function SProject() {
  return (
    <div className="w-full h-[14vh] min-h-[60px] bg-gray-400"></div>
  );
}

export default function Projects() {
    //why does turning the 100% into a screen or full fuck it up?
  return (
    <div
      id="projects"
      className="w-[clamp(300px,96vw,100%)] h-auto flex flex-col items-start gap-1 p-4"
    >
      <p className={tS}>In Progress</p>
      <div className={gridS}>
        <SProject />
        <SProject />
      </div>

      <p className={tS}>AI Focused</p>
      <div className={gridSOdd}>
        <SProject />
        <SProject />
        <SProject />
      </div>

      <p className={tS}>Musical Programming</p>
      <div className={gridS}>
        <SProject />
        <SProject />
        <SProject />
        <SProject />
      </div>

      <p className={tS}>Performance | Composition</p>
      <div className={gridSOdd}>
        <SProject />
        <SProject />
        <SProject />
      </div>
    </div>
  );
}
