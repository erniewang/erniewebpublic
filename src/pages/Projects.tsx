import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
 
//web applications
//seperate into sections. desktop applications.
//browser applications

const Projects = () => {
  return (
    <>
      <Header />
      <ContentPage>
        <div className="w-full max-w-4xl p-8 text-white overflow-y-scroll element">
          {/* Header */}
          <div className="mb-9">
            <h1 className="text-4xl font-bold mb-1">Projects</h1>
          </div>

          {/* Content goes here */}
          
        </div>
      </ContentPage>
    </>
  );
};

export default Projects;
