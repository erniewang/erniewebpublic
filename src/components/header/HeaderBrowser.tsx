import { NavLink } from "react-router";

const hoverEffectClasses = "hover:text-gray-300 hover:scale-105 cursor-pointer transition-transform duration-200 hover:animate-pulse";

type HeaderBrowserProps = {
    phoneMode: boolean;
};

export function HeaderBrowser({ phoneMode }: HeaderBrowserProps) {
    return (
        <div
            className={
                phoneMode
                    ? "hidden"
                    : "fade-in flex centralized flex-row z-25"
            }
        >
            <div className="centralized gap-4 text-lg w-1/2 h-full">
            <span className="w-auto text-white text-xl font-semibold whitespace-nowrap pr-3">
                Ernie Wang
            </span>
                <div className='w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0'
                onClick={() => {console.log("invert shit idk");}}
                ></div>
                <NavLink to="/" className={`pl-2 ${hoverEffectClasses}`}>About</NavLink>
                <NavLink to="/projects" className={hoverEffectClasses}>Projects</NavLink>
                <NavLink to="/creative" className={hoverEffectClasses}>Creative</NavLink>
                <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>Resume</a>
            </div>
        </div>
    );
}


//maybe a over nav