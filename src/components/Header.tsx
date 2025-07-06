import { useContext, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { phoneMode } from '../App';

const Header = () => {
  const pM = useContext(phoneMode);

  return !pM ?(
    <header className="bg-neutral-900 p-3 w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-between pl-5 w-full">
        <div>
          <h1 className='text-white text-3xl'>Ernie Wang</h1>
        </div>
        <div className="flex items-center gap-3 mr-0">
          <div className="flex gap-2 mt-1">
            <a href="#" className="text-white hover:text-gray-700"><AiFillInstagram size={30} /></a>
            <a href="#" className="text-white hover:text-gray-700"><AiFillYoutube size={30} /></a>
            <a href="#" className="text-white hover:text-gray-700"><AiFillGithub size={30} /></a>
            <a href="#" className="text-white hover:text-gray-700"><AiFillLinkedin size={30} /></a>
            <span className="text-white ml-3">|</span>
          </div>
          <nav className="flex gap-6 ml-2">
            <a href="#about" className="text-white hover:text-gray-500">About</a>
            <a href="#projects" className="text-white hover:text-gray-500">Projects</a>
            <a href="#creative" className="text-white hover:text-gray-500">Creative</a>
            <a href="#resume" className="text-white hover:text-gray-500">Resume</a>
          </nav>
        </div>
      </div>
    </header>
  ) : 
    <HeaderSmall></HeaderSmall>
};


function HeaderSmall(): React.ReactElement {
    const [toggled,setToggled]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    return !toggled ? <header className="fixed bottom-0 w-full bg-neutral-900 text-white">
        <div className="max-w-lg mx-auto flex items-center justify-between pl-5 w-full p-2">
            <div className="text-3xl font-medium ml-2">Ernie Wang</div>
            <button
            onClick={() => setToggled(true)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-md text-sm font-semibold hover:bg-neutral-700 transition"
            aria-label="Open Table of Contents"
            >
      <span className="text-lg pb-1">☰</span>
      <span>Table of Contents</span>
    </button>
    </div>
  </header>
   :
    <div className="bg-neutral-900 p-2 fixed bottom-0 w-full flex flex-col justify-between items-center text-white gap-8 pb-8"
            onClick={(e) => {
                e.stopPropagation();
                setToggled(false);
            }}
            >
            <div className="flex gap-9 mt-1 pt-8">
                <a href="#" className="text-white hover:text-gray-700"><AiFillInstagram size={30} /></a>
                <a href="#" className="text-white hover:text-gray-700"><AiFillYoutube size={30} /></a>
                <a href="#" className="text-white hover:text-gray-700"><AiFillGithub size={30} /></a>
                <a href="#" className="text-white hover:text-gray-700"><AiFillLinkedin size={30} /></a>
            </div>
            <a href="#about" className="text-white hover:text-gray-500 text-2xl">About</a>
            <a href="#projects" className="text-white hover:text-gray-500 text-2xl" >Projects</a>
            <a href="#creative" className="text-white hover:text-gray-500 text-2xl">Creative</a>
            <a href="#resume" className="text-white hover:text-gray-500 text-2xl">Resume</a>
    </div>
}

export default Header; 