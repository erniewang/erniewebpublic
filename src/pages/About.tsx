import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import StackIcon from "tech-stack-icons";
import { FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

//maybe some more variation in the middle so there is less uniformity?

//for phone mode maybe the text should be alittle bit larger?
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
        className="flex flex-col w-full sm:w-[95vw] md:w-[90vw] lg:w-[88vw] xl:w-[84vw] 2xl:w-[82vw] h-full p-5 gap-2 overflow-y-auto text-white text-base md:text-lg element shadow-xl border-2 border-gray-700">
            
        </div>
      </ContentPage>
    </>
  );
};

export default About;
/*
    style={{
            backgroundImage: "linear-gradient(to bottom, rgba(30, 41, 59, 0.95) 0%, rgba(30, 41, 59, 0.92) 20%, rgba(30, 41, 59, 0.85) 40%, rgba(30, 41, 59, 0.7) 55%, rgba(30, 41, 59, 0.5) 70%, rgba(30, 41, 59, 0.3) 80%, rgba(30, 41, 59, 0.15) 90%, transparent 100%), url('/about/kongensHave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
*/

