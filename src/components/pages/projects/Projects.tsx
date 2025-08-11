import { SProject } from './projectSections';

const tS = "text-shadow-strong text-gray-300 text-[clamp(20px,5vw,39px)] ml-2";
const gridS =
  "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-2 gap-0";

const gridSOdd = "rounded-md overflow-hidden bg-gray-200 w-full h-auto mb-4 " +
  "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-0";

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
      <center><p className={tS}>In Progress</p></center>
      <div className={gridS}>
        <SProject objectIndex={0}/> 
        <SProject objectIndex={1}/>
      </div>

      <center><p className={tS}>AI Focused</p></center>
      <div className={gridSOdd}>
        <SProject objectIndex={2}/>
        <SProject objectIndex={3}/>
        <SProject objectIndex={4}/>
      </div>

      <center><p className={tS}>Musical Programming</p></center>
      <div className={gridS}>
        <SProject objectIndex={5}/>
        <SProject objectIndex={6}/>
        <SProject objectIndex={7}/>
        <SProject objectIndex={8}/>
      </div>

      <center><p className={tS}>Performance | Composition</p></center>
      <div className={gridSOdd}>
        <SProject objectIndex={9}/>
        <SProject objectIndex={10}/>
        <SProject objectIndex={11}/>
      </div>
    </div>
  );
}

//watch out for center inside p. its gonna cause some hydration error or some bullshit. 
