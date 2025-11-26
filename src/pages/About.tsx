import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { FaGithub, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div
          className="w-full h-full flex relative"
          style={{
            backgroundImage: `url('/about/kongensHave.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay over whole bg */}
          <div className="absolute inset-0 pointer-events-none" />

          {/* Left rail */}
          <div className="w-0 lg:w-[11%] h-[150vh] lg:h-full relative bg-gradient-to-b from-slate-800 to-stone-900" />

          {/* Main content panel */}
          <div
            className="w-full h-full md:max-w-[629px] lg:max-w-[730px] xl:max-w-[800px] text-white overflow-y-scroll overflow-visible element relative
                       bg-slate-950/80 backdrop-blur-[5px]"
          >
            {/* Inner right gradient tint */}
            <div
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(81, 80, 80, 0.2) 100%)",
              }}
            />

            <div className="relative z-10 flex flex-col">
              <div className="p-7 sm:p-10 md:p-12 lg:px-16 lg:pl-20 pt-6 md:pt-8 lg:pt-10">
                {/* Header */}
                <div className="mb-10 max-w-[700px] pb-6 border-b-2 border-white/10">
                  <h1 className="text-5xl font-bold mb-2">About Me</h1>
                  <p className="text-gray-400">Born June 6 1967</p>
                </div>

                {/* Author Section */}
                <div className="flex items-start gap-8 mb-12 w-auto">
                  <img
                    src="/about/monsClintColor.png"
                    alt="Ernie Wang"
                    className="w-36 h-36 rounded-full object-cover ring-1 ring-white/20 shadow-md"
                  />

                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-1">Ernie Wang</h2>
                    <p className="text-gray-300 mb-4 max-w-lg">
                      Fullstack developer with experience in programmatic music composition,
                      and other creative and practical applications with AI.
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="mailto:your.email@example.com"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <SiGmail size={20} />
                      </a>
                      <a
                        href="https://github.com/erniewang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaYoutube size={20} />
                      </a>
                      <a
                        href="https://reddit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaReddit size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8 md:space-y-6 text-gray-200 leading-relaxed max-w-xl text-lg sm:text-base md:text-md">
                  <p>
                    I'm currently working to bridge the gap between improvisation, music generation,
                    and composition. I develop tools that leverage LLMs and existing musical generation
                    models to help composers write music with unprecedented speed and creativity.
                  </p>

                  <p>
                    I have experience across the full stack, working with{" "}
                    <span className="text-blue-400 font-medium">Python</span>,{" "}
                    <span className="text-yellow-400 font-medium">JavaScript</span>,{" "}
                    <span className="text-blue-300 font-medium">TypeScript</span>, and{" "}
                    <span className="text-cyan-400 font-medium">Go</span>. I enjoy building with{" "}
                    <span className="text-cyan-400 font-medium">React</span> and{" "}
                    <span className="text-white font-medium">Next.js</span>, always
                    focusing on intuitive and powerful user experiences. Check out my
                    contributions on{" "}
                    <a
                      href="#"
                      className="text-red-500 font-medium underline hover:text-red-400"
                    >
                      NPM
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-blue-400 font-medium underline hover:text-blue-300"
                    >
                      PYPI
                    </a>
                    .
                  </p>

                  <p>
                    Outside of development, I'm exploring photography, music composition,
                    and digital art. I love traveling and capturing moments — you can see
                    some of my work in the creative section.
                  </p>

                  <p>
                    I'm always eager to connect with fellow developers, musicians, and
                    creatives. Feel free to reach out!
                  </p>
                </div>
              </div>

              {/* mobile spacer so the bg image still peeks through below */}
              <div className="mt-5 md:hidden w-full h-[30vh]" />
            </div>
          </div>

          {/* right side filler with gradient overlay */}
          <div 
            className="md:flex-1"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 100%)" }}
          />
        </div>
      </ContentPage>
    </>
  );
};

export default About;
