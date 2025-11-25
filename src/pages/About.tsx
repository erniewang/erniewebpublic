import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import StackIcon from "tech-stack-icons";
import { FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const infoCard:string = "w-full h-auto flex rounded-md p-2 md:p-6 border-2 border-gray-900";
const iconClasses = "w-[30px] h-[30px] transition-all duration-200 hover:scale-110 hover:opacity-80 p-1 shadow-md";


//maybe some more variation in the middle so there is less uniformity?
const About = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div 
        style={{
            backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.92) 20%, rgba(30, 41, 59, 0.85) 40%, rgba(30, 41, 59, 0.7) 55%, rgba(30, 41, 59, 0.5) 70%, rgba(30, 41, 59, 0.3) 80%, rgba(30, 41, 59, 0.15) 90%, transparent 100%), url('/about/kongensHave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
        className="flex flex-col w-full sm:w-[90vw] md:w-[80vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[75vw] h-full p-5 gap-2 overflow-y-auto text-white text-base md:text-lg element shadow-xl border-2 border-gray-700">
            <div className="w-full h-auto min-h-[340px] md:min-h-[220px] lg:max-h-[250px] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg mt-1 mb-3">
                
                {/* Left side - Name and title */}
                <div className="w-full md:w-[39%] xl:w-[30%] flex flex-col justify-center p-4 sm:p-5 lg:p-7 space-y-1 pl-6 border-b-3 md:border-b-0  md:border-r-4 border-gray-800"
                style={{background: "linear-gradient(77deg, rgba(72, 87, 97, 1) 10%, rgb(63, 88, 79) 49%, rgb(47, 56, 61) 100%)"}}
                >
                    <h1 className="text-3xl lg:text-4xl font-bold mb-3">Ernie Wang</h1>
                    <p className="text-lg lg:text-xl font-light">Fullstack Developer</p>
                    <p className="text-lg lg:text-xl mb-3">Musician • Artist • Photographer</p>
                    <div className="flex flex-wrap gap-1 lg:gap-2 items-center mt-1">
                        <a href="https://github.com/erniewang" target="_blank" rel="noopener noreferrer" 
                           className="transition-transform hover:scale-110 hover:opacity-80">
                            <StackIcon name="github" className={`${iconClasses} bg-white rounded`} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                           className="transition-transform hover:scale-110 hover:opacity-80">
                            <FaInstagram className={`${iconClasses} text-white`} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                           className="transition-transform hover:scale-110 hover:opacity-80">
                            <FaYoutube className={`${iconClasses} text-white`} />
                        </a>
                        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" 
                           className="transition-transform hover:scale-110 hover:opacity-80">
                            <FaReddit className={`${iconClasses} text-white`} />
                        </a>
                        <a href="mailto:your.email@example.com" 
                           className="transition-transform hover:scale-110 hover:opacity-80">
                            <SiGmail className={`${iconClasses} text-white`} />
                        </a>
                    </div>
                </div>
                
                {/* Right side - Profile photo */}
                <div className="w-full md:w-[61%] xl:w-[70%] flex items-center justify-center bg-slate-800/30 overflow-hidden">
                    <img 
                        src="/about/monsClint.png" 
                        alt="Ernie Wang" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
            </div>

            <div className={infoCard + " flex-col p-4 gap-[1px] bg-gray-700 opacity-78"}>
                <p className="text-lg mb-3">Thanks for checking out my website! Here is a older verison of this site! Its pretty terrible right?</p>
                <div className="flex flex-wrap gap-1 lg:gap-2 items-center text-md">
                    <span>Currently fluent in</span>
                    <StackIcon name="python" className={iconClasses} />
                    <StackIcon name="js" className={iconClasses} />
                    <StackIcon name="typescript" className={iconClasses} />
                    <StackIcon name="go" className={iconClasses} />
                    <StackIcon name="mysql" className={`${iconClasses} bg-white p-1 rounded`} />
                    <span>and I like to use</span>
                    <StackIcon name="react" className={iconClasses} />
                    <StackIcon name="nextjs" className={`${iconClasses} bg-white p-1 rounded`} />
                    <StackIcon name="npm" className={iconClasses} />
                    <StackIcon name="electron" className={iconClasses} />
                    <StackIcon name="tailwindcss" className={iconClasses} />
                    <StackIcon name="aws" className={`${iconClasses} p-1 bg-white rounded`} />
                </div>
            </div>

            <h2 className="text-4xl mb-2 ml-1 mt-3">My Current Ambitions</h2>
            <div className={infoCard + " flex-col opacity-72"} style={{background: "linear-gradient(to bottom, rgb(50, 60, 75), rgb(40, 50, 65))"}}>
                <p className="text-sm md:text-base leading-relaxed m-0">
                    My current ambition is to bridge the gap between improvisation, music generation, and composition. I am currently working on tools that leverage LLMs and existing musical generation models to help composers
                    write music with blazing speed. The goal is to make it available as an extension for music notation software such as MuseScore and NoteFlight. Try it out!
                </p>
            </div>

            <h2 className="text-4xl mb-1 mt-3 ml-1">Hobbies And Interests</h2>
            <div className={infoCard + " flex-col space-y-4 opacity-69"} style={{background: "linear-gradient(to bottom, rgb(50, 65, 55), rgb(40, 55, 45))"}}>
                <p className="text-sm md:text-base leading-relaxed m-0">
                    I have always been curious about the act of creation. Growing up, I experimented with many creative mediums such as film directing, drawing/sketching, animation, music, and much more.
                </p>
                <p className="text-sm md:text-base leading-relaxed m-0">
                    As you might guess, I enjoy exploring a variety of activities in my free time. I love traveling (see travel photos in the Creative section), playing video games such as SCP: Containment Breach, and developing useful, innovative applications for AI. I've showcased them here—please browse around!
                </p>
            </div>
            
        </div>
      </ContentPage>
    </>
  );
};

export default About;
