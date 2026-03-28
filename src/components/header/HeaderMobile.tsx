import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router";
import { useGracefullAnimation } from "../utils/gracefull";
import { SwitchingTabs } from '../../App';

const hoverEffectClasses = "hover:text-gray-300 cursor-pointer";
const closeAnimationMs = 300;

type HeaderMobileProps = {
    phoneMode: boolean;
};

type MobileMenuProps = {
    exiting: boolean;
    onClose: (callback?: () => void) => void;
};

const menuMotionClasses = (exiting: boolean) =>
    exiting
        ? "animate-out fade-out slide-out-to-top duration-300 fill-mode-forwards"
        : "animate-in fade-in slide-in-from-top duration-300";

function MobileMenu({ exiting, onClose }: MobileMenuProps) {
    const navigate = useNavigate();
    return (
        <div
            className={`z-[1] fixed top-[8vh] left-0 h-auto min-h-[190px] w-full bg-black flex-shrink-0 flex flex-col items-center justify-start gap-10 p-7 text-[25px] shadow-xl ${menuMotionClasses(exiting)}`}
        >
            <button type="button" onClick={() => onClose(() => navigate("/"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>About</button>
            <button type="button" onClick={() => onClose(() => navigate("/projects"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>Projects</button>
            <button type="button" onClick={() => onClose(() => navigate("/creative"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>Creative</button>
            <button type="button" onClick={() => onClose(() => navigate("/photos"))} className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}>Photos</button>
            <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>Resume</a>
        </div>
    );
}

export function HeaderMobile({ phoneMode }: HeaderMobileProps) {
    const [deloading, setDeloading] = useContext(SwitchingTabs);
    const [expanded, setExpanded] = useState(false);
    const { exiting, exit } = useGracefullAnimation({ speed: closeAnimationMs });

    const closeMenu = (onClose?: () => void) => {
        setDeloading(true);
        if (exiting) {
            return;
        }
        if (expanded) {
            exit(() => {
                setDeloading(false);
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
        <div
            className={
                phoneMode
                    ? "relative z-[2] h-full w-full animate-in fade-in duration-300"
                    : "hidden"
            }
        >
            {/* Opaque layer above the sliding menu (z-[1]) so slide-in/out-from-top passes behind the title bar */}
            <div className="relative z-[20] flex h-full min-h-[60px] w-full items-center bg-black">
                <button
                    type="button"
                    className="centralized flex-row text-4xl p-2 pt-[10px] pl-7 pr-6 justify-between w-full text-left"
                    onClick={animateOutClick}
                >
                    <p className="text-4xl">Ernie Wang</p>
                    <p className="hover:text-gray-300 cursor-pointer text-5xl">
                        {expanded && !exiting ? "x" : "☰"}
                    </p>
                </button>
            </div>
            {expanded && <MobileMenu exiting={exiting} onClose={closeMenu} />}
        </div>
    );
}
