import AboutDescription from './About/AboutDescription';

const Home = () => {
  return (
    <div className="fixed top-0 w-screen h-[92vh] bg-gray-800 md:top-[8vh] overflow-y-scroll flex flex-col md:flex-row items-center md:p-5 p-0">
        <AboutDescription />
    </div>
  );
};

export default Home;