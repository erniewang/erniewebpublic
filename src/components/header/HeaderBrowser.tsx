import { useNavigate } from "react-router";
import { useContext } from "react";
import { SwitchingTabs } from "../../App";
import { useGracefullAnimation } from "../utils/gracefull";

const hoverEffectClasses =
    "hover:text-gray-300 cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit";

type HeaderBrowserProps = {
    phoneMode: boolean;
};

export function HeaderBrowser({ phoneMode }: HeaderBrowserProps) {
    //notice the differnece between these 2
    const [deloading,setDeloading] = useContext(SwitchingTabs);
    const { exit } = useGracefullAnimation();
    const navigate = useNavigate();

    const go = (path: string) => {
        if (!deloading) {
            browserChangePageStatus(()=>navigate(path));
        }
    };

    const browserChangePageStatus = (onFinish?: () => void) => {
        setDeloading(true);
        exit(() => {
            setDeloading(false);
            onFinish?.();
        });
    };

    return (
        <div
            className={
                phoneMode
                    ? "hidden"
                    : "flex centralized flex-row z-[25] animate-in fade-in duration-300"
            }
        >
            <div className="centralized gap-4 text-lg w-1/2 h-full">
            <span className="w-auto text-white text-xl font-semibold whitespace-nowrap pr-3">
                Ernie Wang
            </span>
                <div className='w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0'
                onClick={() => {console.log("invert shit idk");}}
                ></div>
                <button type="button" onClick={() => go("/")} className={`pl-2 ${hoverEffectClasses}`}>
                    About
                </button>
                <button type="button" onClick={() => go("/projects")} className={hoverEffectClasses}>
                    Projects
                </button>
                <button type="button" onClick={() => go("/creative")} className={hoverEffectClasses}>
                    Creative
                </button>
                <button type="button" onClick={() => go("/photos")} className={hoverEffectClasses}>
                    Photos
                </button>
                <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>Resume</a>
            </div>
        </div>
    );
}


//maybe a over nav