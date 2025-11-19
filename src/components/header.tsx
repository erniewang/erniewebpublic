import { useState, useEffect } from 'react';
import { NavLink } from "react-router";
import { useMobile } from "../context/MobileContext";

const hoverEffectClasses = "hover:text-gray-300 hover:scale-105 cursor-pointer transition-transform duration-200";

export function Header() {

    //mobile checker and a conditinoal expanded - collapse that works conditinoally
    const isMobile = useMobile();
    const [expanded, setExpanded] = useState<Boolean>(false);
    useEffect(() => {
        if (isMobile) setExpanded(false);
    }, [isMobile]);

    return (
        <div className="w-screen h-[8vh] min-h-[60px] fixed bottom-0 md:top-0 bg-black text-white z-1 bg-gradient-to-b from-zinc-900 to-black">
            {isMobile ? (
                <>
                { !expanded ? <div className={`centralized flex-col text-4xl ${hoverEffectClasses}`} onClick={() => setExpanded(!expanded)}>↑</div> :
                <div className='fixed bottom-0 h-[55vh] min-h-[190px] w-full bg-black flex-shrink-0 flex flex-col p-[20px] pb-0 items-center justify-evenly text-[29px] bg-gradient-to-b from-zinc-900 to-black' onClick={() => setExpanded(!expanded)}>
                    <NavLink to="/" className={`${hoverEffectClasses}`}>About</NavLink>
                    <NavLink to="/projects" className={`${hoverEffectClasses}`}>Projects</NavLink>
                    <NavLink to="/creative" className={`${hoverEffectClasses}`}>Creative</NavLink>
                    <div className={hoverEffectClasses} onClick={() => {window.open("resume.pdf")}}>Resume</div>
                    <div className={`${hoverEffectClasses} text-4xl mt-[10px]`}>↓</div>
                </div>
                }
                </>
                ) : (
                <div className="centralized flex-row">
                    <div className='centralized gap-4 text-lg w-1/2 h-full'>
                        <div className='w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0'
                        onClick={() => {console.log("invert shit idk");}}
                        ></div>
                        <NavLink to="/" className={`pl-2 ${hoverEffectClasses}`}>About</NavLink>
                        <NavLink to="/projects" className={`${hoverEffectClasses}`}>Projects</NavLink>
                        <NavLink to="/creative" className={`${hoverEffectClasses}`}>Creative</NavLink>
                        <div className={hoverEffectClasses} onClick={() => {window.open("resume.pdf"); }}>Resume</div>
                    </div>
                </div>
                )}
        </div>
    )
}

//invert colors button