import MusicDescription from "./musicDesc";

const Music = () => {
  return (
    <div className="fixed top-0 w-screen h-[92vh] bg-gray-700 md:top-[8vh] overflow-y-scroll flex flex-col md:flex-row items-center p-0">
      <MusicDescription />
      <div className="w-full md:h-full md:w-6/10 bg-gray-800 h-[100vh] rounded-sm p-2 flex-col flex flex-shrink-0">
        <GenreSection />
        <GenreSection />
        <GenreSection />
        <GenreSection />
        <GenreSection />
      </div>
    </div>
  );
};

function GenreSection() {
    return <div className="w-full h-1/5 bg-blue-600">
    </div>
}

export default Music;