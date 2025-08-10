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

//conficts between css is the bane of existence
function SProject() {
  return (
    <div className="w-full h-[14vh] min-h-[60px] bg-gray-400"></div>
  );
}

export default function Projects() {
    //why does turning the 100% into a screen or full fuck it up?

    //why does having something like screen fuck it up? full does not fuck it up. flex does not help

      // Projects container layout:
    // - max-w-[1200px] + mx-auto centers content without relying on parent flex
    // - pt-0 removes top padding to align with header
    // - scroll-mt-[65px] offsets scroll position by header height (65px)
    //   so when clicking "Projects" link, it stops right under the header
    return (
      <div
        id="projects"
        className="max-w-[1400px] w-full mx-auto h-auto flex flex-col gap-1 p-4 pt-0 scroll-mt-[65px]"
    >
      <p className={tS}><center>In Progress</center></p>
      <div className={gridS}>
        <SProject />
        <SProject />
      </div>

      <p className={tS}><center>AI Focused</center></p>
      <div className={gridSOdd}>
        <SProject />
        <SProject />
        <SProject />
      </div>

      <p className={tS}><center>Musical Programming</center></p>
      <div className={gridS}>
        <SProject />
        <SProject />
        <SProject />
        <SProject />
      </div>

      <p className={tS}><center>Performance | Composition</center></p>
      <div className={gridSOdd}>
        <SProject />
        <SProject />
        <SProject />
      </div>
    </div>
  );
}
