import { Header } from "../../components/header";
import { ContentPage } from "../../components/contentPage";
import StackIcon from "tech-stack-icons";
import { FaInstagram, FaYoutube, FaReddit, FaMusic } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const defaultIconClasses = "w-[40px] h-[40px] rounded-sm ";
const skillContainerClasses = "w-full xl:w-auto h-[50px] flex flex-row gap-3 items-center justify-start rounded-xl p-3";
const socialsContainerClasses = "w-full h-[50px] flex flex-row gap-4 items-center justify-start rounded-xl p-3";


//moving words hover and shit
const About = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div className="flex flex-col w-full sm:w-[89vw] md:w-[80vw] lg:w-[70vw] h-full p-5 gap-3 overflow-y-auto text-gray-300 text-lg element bg-gradient-to-b from-slate-700 to-gray-900 shadow-lg">
            <h1 className="mt-3 text-5xl mb-2 text-white">Ernie Wang</h1>
            <p className="mb-1 ml-2 text-lg">
            My name is Ernie, and I am a software engineer, web developer, musician, and photographer. I recently earned my Bachelor’s in Computer Science and Jazz Studies from Northwestern University.
            Thanks for checking out my website!
            </p>
            <div className="w-full h-auto flex flex-col xl:flex-row justify-evenly items-center">
                    <div className={skillContainerClasses}><b>Languages:</b>
                        <StackIcon name="python" className={defaultIconClasses} />
                        <StackIcon name="js" className={defaultIconClasses} />
                        <StackIcon name="typescript" className={defaultIconClasses} />
                        <StackIcon name="go" className={defaultIconClasses} />
                        <StackIcon name="mysql" className={`${defaultIconClasses} bg-white p-1`} />
                    </div>
                    <div className={skillContainerClasses}><b>Tools:</b>
                        <StackIcon name="react" className={defaultIconClasses} />
                        <StackIcon name="nextjs" className={`${defaultIconClasses} bg-white p-1`} />
                        <StackIcon name="npm" className={defaultIconClasses} />
                        <StackIcon name="electron" className={defaultIconClasses} />
                        <StackIcon name="tailwindcss" className={defaultIconClasses} />
                        <StackIcon name="aws" className={`${defaultIconClasses} p-1 bg-white`} />
                    </div>
            </div>
            <h1 className="text-3xl text-white">Current Ambitions</h1>
            <p className="ml-2 text-lg">My current ambition is to bridge the gap between improvisation, music geneartion, and composition. I am currently working on tools that leverage LLMS and existing musical generation models to help composers
                write music with blazing speed. The goal is to make it available as a extension for music notation software such as MuseScore and NoteFlight. Try it out! 
            </p>
            
            <h1 className="text-3xl mt-2 text-white">Hobbies And Interests</h1>
            <p className="ml-2 text-lg">
            I have always been curious about the act of creation. Growing up, I experimented with many creative mediums such as film directing, drawing/sketching, animation, music, and much more.
            </p>
            <p className="ml-2 text-lg">
            As you might guess, I enjoy exploring a variety of activities in my free time. I love traveling (see travel photos in the Creative section), playing video games such as SCP: Containment Breach, and developing useful, innovative applications for AI. I’ve showcased them here—please browse around!
            </p>



             <h1 className="text-3xl mt-3 text-white">My Socials</h1>
             <div className={socialsContainerClasses}>
                <FaInstagram className={`${defaultIconClasses} text-white`} />
                <StackIcon name="github" className={`${defaultIconClasses} bg-white p-1`} />
                <FaYoutube className={`${defaultIconClasses} text-white`} />
                <FaReddit className={`${defaultIconClasses} text-white`} />
                <SiGmail className={`${defaultIconClasses} text-white`} />
            </div>
         </div>
      </ContentPage>
    </>
  );
};

export default About;

