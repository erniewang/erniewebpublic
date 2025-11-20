import { Header } from "../components/header";
import { ContentPage } from "../components/contentPage";
import { useMobile } from "../context/MobileContext";

const Creative = () => {
  return (
    <>
      <Header />
      <ContentPage>
      <div className="w-screen h-full flex flex-row">
            <div className="bg-white w-1/4 h-full"></div>
            <div className="bg-black w-3/4 h-full"></div>
        </div>
      </ContentPage>
    </>
  );
};

export default Creative;

