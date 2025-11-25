import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { useMobile } from "../context/MobileContext";

//have moving notes on the left and right of the screen

const Creative = () => {
  return (
    <>
      <Header />
      <ContentPage>
      <div className="w-screen h-full flex flex-col md:flex-row">
            <div className="bg-white w-full h-1/5 md:h-full md:w-1/5"></div>
            <div className="bg-black w-full h-4/5 md:h-full md:w-4/5"></div>
        </div>
      </ContentPage>
    </>
  );
};

export default Creative;

