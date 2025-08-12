import { projectData } from "../../../data/projectDesc";
import { Project } from "../../../data/projectDesc";

function randomColor():string {
    // Generate random hue (0-360)
    const hue:number = Math.floor(Math.random() * 360);
    // Keep saturation low-medium for pastel (30-50%)
    const saturation:number = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    // Keep lightness high for pastel (80-90%)
    const lightness:number = Math.floor(Math.random() * (90 - 80 + 1)) + 80;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getToolColor(tool: string): string {
    const normalized = tool.trim().toLowerCase();
  
    // --- Categories ---
    const jsKeywords = ["javascript", "js", "react", "nextjs", "node", "node.js"];
    const awsKeywords = ["aws", "s3", "cognito", "lambda", "dynamodb", "amplify"];
    const pythonKeywords = ["python", "flask", "fastapi", "django", "pandas", "numpy"];
  
    // --- Exact logo colors for specific tools ---
    const exactColorMap: Record<string, string> = {
      tailwind: "hsl(199, 100%, 35%)", // Tailwind blue
      gpt: "hsl(160, 40%, 35%)",       // OpenAI green-teal
      chatgpt: "hsl(160, 40%, 35%)",
      p5: "hsl(0, 70%, 40%)",          // p5.js red
      "p5.js": "hsl(0, 70%, 40%)",
      tone: "hsl(280, 40%, 40%)",      // Tone.js purple
      "tone.js": "hsl(280, 40%, 40%)",
      chrome: "hsl(50, 80%, 45%)",     // Chrome yellow
      extension: "hsl(0, 0%, 30%)",    // Neutral gray
      graphql: "hsl(320, 60%, 45%)",   // GraphQL pink
      postgres: "hsl(210, 40%, 35%)"   // PostgreSQL blue
    };
  
    // --- Category checks ---
    if (jsKeywords.some(k => normalized.includes(k))) {
      return "hsl(45, 80%, 40%)"; // dark golden yellow
    }
    if (awsKeywords.some(k => normalized.includes(k))) {
      return "hsl(30, 70%, 35%)"; // orange-brown
    }
    if (pythonKeywords.some(k => normalized.includes(k))) {
      return "hsl(210, 50%, 40%)"; // medium-dark blue
    }
  
    // --- Exact match check ---
    if (exactColorMap[normalized]) {
      return exactColorMap[normalized];
    }
  
    // --- Fallback ---
    return "hsl(0, 0%, 30%)"; // dark gray
  }
  

//in react, all props should be a pair type shit
export function SProject({ pageIndex, setIndexFunc }: { pageIndex: number; setIndexFunc: (index: number) => void }) {
    const { title, tech } = projectData[pageIndex];
    const techWords = tech.split(/\s+/);

    const baseColor = randomColor();

    return (
        <div
            style={{
                background: `linear-gradient(135deg, ${baseColor} 0%, white 100%)`
            }}
            className="w-full h-[14vh] min-h-[60px] 
                       flex flex-col justify-center 
                       items-center box-shadow-glow text-black
                       hover:opacity-60 hover:text-black
                       cursor-pointer p-2"
            onClick={() => setIndexFunc(pageIndex)}
        >
            <p className="text-2xl text-shadow-glow"><b>{title}</b></p>
            <p>
                {techWords.map((word, idx) => (
                    <b key={idx} style={{ color: getToolColor(word) }}>
                        {word}
                        {idx < techWords.length - 1 && " "}
                    </b>
                ))}
            </p>
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
            {projectEntry.description.map((entry:string, index:number) => {
                return <p key={index} dangerouslySetInnerHTML={{__html: entry}}></p>;
                //what is __html: doing? 
            })}
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