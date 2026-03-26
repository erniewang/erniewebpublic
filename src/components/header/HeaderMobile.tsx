import { useEffect, useState } from 'react';
import { useNavigate } from "react-router"; //navlink navigates instantly after click, while usenavigate can be put as a callback
import { useGracefullAnimation } from "../animations/gracefull";

const hoverEffectClasses = "hover:text-gray-300 hover:scale-105 cursor-pointer transition-transform duration-200 hover:animate-pulse";
const closeAnimationMs = 240;

type HeaderMobileProps = {
    phoneMode: boolean;
};

type MobileMenuProps = {
    exiting: boolean;
    onClose: (callback?: () => void) => void;
};

//seperated the menu so it will not cause the upper part of the mobile header to re-load and cause a animation
function MobileMenu({ exiting, onClose }: MobileMenuProps) {
    const navigate = useNavigate();
    return (
        <div className={`${exiting ? "shrink-from-top" : "grow-from-top"} fixed top h-auto min-h-[190px] w-full bg-black flex-shrink-0 flex flex-col items-center justify-start gap-10 p-7 text-[25px] bg-black`}>
            <button type="button" onClick={() => onClose(() => navigate("/"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>About</button>
            <button type="button" onClick={() => onClose(() => navigate("/projects"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>Projects</button>
            <button type="button" onClick={() => onClose(() => navigate("/creative"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>Creative</button>
            <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>Resume</a>
        </div>
    );
}

export function HeaderMobile({ phoneMode }: HeaderMobileProps) {

    const [expanded, setExpanded] = useState(false); //state used to dictate appearnce of child
    const { exiting, exit } = useGracefullAnimation({ speed: closeAnimationMs });
    const closeMenu = (onClose?: () => void) => {
        if (expanded) {
            exit(() => {
                setExpanded(false);
                onClose?.();
            });
        } else {
            onClose?.();
        }
    };

    const animateOutClick = () => {
        if (expanded) {
            closeMenu();
            return;
        }
        setExpanded(true);
    };

    useEffect(() => {
        if (!phoneMode) {
            setExpanded(false);
        }
    }, [phoneMode]);

    return (
        <div className={phoneMode ? "h-auto fade-in" : "hidden"}>
            <div className="centralized flex-row text-4xl p-2 pt-[10px] pl-7 pr-6 justify-between" onClick={() => animateOutClick()}>
                <p className='text-4xl'>Ernie Wang</p>
                <p className='hover:text-gray-300 cursor-pointer transition-transform duration-200 hover:scale-105 text-5xl'>☰</p>
            </div>
            {expanded && <MobileMenu exiting={exiting} onClose={closeMenu} />}
        </div>
    );
}
