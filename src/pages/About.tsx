import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { FaGithub, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


//element does the hiding scrollbar thing
const About = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div className="w-full max-w-4xl p-8 text-white overflow-y-scroll element">
          {/* Header */}
          <div className="mb-9">
            <h1 className="text-4xl font-bold mb-1">About Me</h1>
            <p className="text-gray-400">Born June 6 1967</p>
          </div>

          {/* Author Section */}
          <div className="flex items-start gap-7 mb-11">
            <img 
              src="/about/monsClintColor.png" 
              alt="Ernie Wang" 
              className="w-30 h-38 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">Ernie Wang</h2>
              <p className="text-gray-300 mb-4 w-full md:w-[77%]">
                Fullstack developer with experience in programmatic music composition, and other creative and practical applications with AI.
              </p>
              <div className="flex gap-3">
                <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
                  <SiGmail size={20} />
                </a>
                <a href="https://github.com/erniewang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaYoutube size={20} />
                </a>
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaReddit size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I am developing tools that leverage LLMs and existing musical generation models to help composers write music 
              with unprecedented speed and creativity. Gone are the days of repeatative 4 chord changes!
            </p>

            <p>
              I have experience across the full stack, working with <span className="text-blue-400 font-medium">Python</span>, <span className="text-yellow-400 font-medium">JavaScript</span>, <span className="text-blue-300 font-medium">TypeScript</span>, and <span className="text-cyan-400 font-medium">Go</span>. 
              I enjoy building with <span className="text-cyan-400 font-medium">React</span>, <span className="text-white font-medium">Next.js</span>, and modern web technologies, always focusing on creating 
              intuitive and powerful user experiences. Check out my contributions on <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-red-500 font-medium hover:text-red-400 transition-colors underline">NPM</a> and <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors underline">PYPI</a>!
            </p>

            <p>
              Offline, I'm exploring creative mediums like photography, music composition, and digital art. 
              I love traveling and capturing moments through my lens - you can see some of my work in the creative section.
            </p>

            <p>
              I'm always eager to connect with fellow developers, musicians, and artists. Feel free to reach out!
            </p>
          </div>
        </div>
      </ContentPage>
    </>
  );
};

export default About;