import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isMobile, setIsMobile] = useState(!window.matchMedia("(min-width: 768px)").matches)
    const [expanded, setExpanded] = useState<Boolean>(false);
    
    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)")
        media.onchange = (e) => setIsMobile(!e.matches)
        return () => { 
            media.onchange = null;
        }
    }, []);
    useEffect(() => {
        if (isMobile) setExpanded(false);
    }, [isMobile]);

    return (
        <div className="w-screen h-[8vh] fixed bottom-0 md:top-0 bg-black text-white z-1">
            {isMobile ? (
                <>
                { !expanded ? <div className="centralized flex-col text-4xl" onClick={() => setExpanded(!expanded)}>↑</div> :
                <div className='fixed bottom-0 h-[55vh] w-full bg-black flex-shrink-0 flex flex-col p-[20px] pb-0 items-center justify-evenly text-[29px]' onClick={() => setExpanded(!expanded)}>
                    <Link to="/about" className="hover:text-gray-300 cursor-pointer">About</Link>
                    <Link to="/blog" className="hover:text-gray-300 cursor-pointer">Blog</Link>
                    <Link to="/music" className="hover:text-gray-300 cursor-pointer">Music</Link>
                    <Link to="/photography" className="hover:text-gray-300 cursor-pointer">Photography</Link>
                    <div className="hover:text-gray-300 cursor-pointer" onClick={() => {window.open("resume.pdf")}}>Resume</div>
                    <div className="hover:text-gray-300 cursor-pointer text-4xl mt-[10px]">↓</div>
                </div>
                }
                </>
                ) : (
                <div className="centralized flex-row">
                    <div className='centralized gap-4 text-xl w-1/2 h-full'>
                        <div className='w-[50px] h-[29px] rounded-xl bg-white flex-shrink-0'></div>
                        <Link to="/about" className="pl-2 hover:text-gray-300 cursor-pointer">About</Link>
                        <Link to="/blog" className="hover:text-gray-300 cursor-pointer">Blog</Link>
                        <Link to="/music" className="hover:text-gray-300 cursor-pointer">Music</Link>
                        <Link to="/photography" className="hover:text-gray-300 cursor-pointer">Photography</Link>
                        <div className="hover:text-gray-300 cursor-pointer" onClick={() => {window.open("resume.pdf"); }}>Resume</div>
                    </div>
                </div>
                )}
        </div>
    )
}

//invert colors button