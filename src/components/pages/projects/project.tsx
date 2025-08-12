import { projectData } from "../../../data/projectDesc";
import { Project } from "../../../data/projectDesc";

function randomColor():string {
    const r:number = Math.floor(Math.random() * (130 - 70 + 1)) + 100;
    const g:number = Math.floor(Math.random() * (120 - 80 + 1)) + 100;
    const b:number = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    return `rgb(${r.toString()},${g.toString()},${b.toString()})`;
}

//in react, all props should be a pair type shit
export function SProject({ pageIndex, setIndexFunc }: { pageIndex: number; setIndexFunc: (index: number) => void }) {
    const title:string = projectData[pageIndex].title;
    console.log(title);
    const tech:string = projectData[pageIndex].tech;
    return (
      <div 
      style={{background: randomColor()}}
      className="w-full h-[14vh] min-h-[60px] 
                flex flex-col justify-center 
                items-center box-shadow-glow text-white
                hover:opacity-60 hover:text-black
                cursor-pointer p-2"
      onClick={() => setIndexFunc(pageIndex)}>
        <p className="text-2xl text-shadow-glow">{title}</p>
        <p>{tech}</p>
      </div>
    );
}

//why do i have to do this bullshit for classname like {``} instead of just ``

//tailwind is JIT. so it purges dynamic class names oshit
export function ProjectSelected({ pageIndex, setIndexFunc }: { pageIndex: number; setIndexFunc: (index: number) => void }) {
    const projectEntry:Project = projectData[pageIndex];
    return <div 
    className="w-full h-full bg-black 
               flex flex-col 
               justify-center items-center"
    style={{ background: `linear-gradient(to right, ${projectEntry.colorPalette[0]},  ${projectEntry.colorPalette[1]},black,${projectEntry.colorPalette[1]},  ${projectEntry.colorPalette[0]})` }}
    >
        <div
            className="h-full w-full sm:w-[60%] text-black overflow-y-scroll flex flex-col justify-start items-center p-5 gap-5"
            style={{background: projectEntry.colorPalette[2]}}
        >
            <p className="text-5xl text-shadow-colored">{projectEntry.title}</p>
            <p className="text-2xl text-shadow-glow">{projectEntry.tech}</p>
            {projectEntry.description.map((entry:string) => {return <p>{entry}</p>})}
            </div>
        <div 
            onClick={() => {setIndexFunc(-1)}}
            className="w-full sm:w-[60%] h-[80px] hover:opacity-90 text-6xl flex flex-row items-center justify-center text-black"
            style={{background: projectEntry.colorPalette[0]}}
        >
            ←
        </div>
    </div>
}


//why is the padding thing fucked up?