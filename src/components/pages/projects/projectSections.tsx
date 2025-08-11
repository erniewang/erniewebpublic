import { projectData } from '../../../data/projectDesc';
import { Project } from '../../../data/projectDesc';
import { MovingWords } from '../../movingWords/movingWords';

//Random number generator for RGB values
const r = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;


//conficts between css is the bane of existence
export function SProject({objectIndex} : {objectIndex:number}) {
  const selectedProj = projectData[objectIndex] as Project;
  const color = {
    r: r(50,100),
    g: r(50,100),
    b: r(50,150)
  };
  return (
    <div className="w-full h-[14vh] min-h-[60px] flex flex-col justify-center items-center gap-2 hover:opacity-70"
    style={{
      backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
      boxShadow: `0 0 15px rgb(${color.r}, ${color.g}, ${color.b})`
    }}>
        <p className='text-xl text-shadow-strong'><b>{selectedProj.title}</b></p>
        <MovingWords>{selectedProj.tech}</MovingWords>
    </div>
  );
}

// Fixed:
// 1. style={{ }} needs both closing braces before the closing angle bracket
// 2. Wrong: style={{ ... } }>
// 3. Right: style={{ ... }}>
