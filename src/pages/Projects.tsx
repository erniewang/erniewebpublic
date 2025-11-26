import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";

const Projects = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div
          className="w-full h-full flex relative"
          style={{
            backgroundImage: `url('/about/copenhagen.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left rail */}
          <div className="w-0 lg:w-[11%] h-[150vh] md:h-full relative bg-slate-900" />

          {/* Main content panel */}
          <div
            className="w-full lg:max-w-[549px] text-white overflow-y-scroll element relative
                       bg-slate-950/60 backdrop-blur-[1px]
                       shadow-[10px_0_50px_-15px_rgba(0,0,0,0.8)]"
          >
            <div className="relative z-10 flex flex-col">
              <div className="p-7 md:p-12 lg:px-13 lg:pl-14 pt-6 md:pt-8 lg:pt-10">
                <div className="mb-10 max-w-[700px] pb-6 border-b-2 border-white/10">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">Projects</h1>
                  <p className="text-gray-400">Born June 6 1967</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentPage>
    </>
  );
};

export default Projects;


