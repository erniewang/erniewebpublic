import { useState } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import HeaderLink from './shared/HeaderLink';
import { MovingWords } from '../movingWords/movingWords';

//tailwind shit that is repeated. so put them at the top. not sure if this is good practice
const tw = {
    navLink: "text-white hover:text-gray-500 text-2xl" as const,
    fixedBottom: "fixed bottom-0 w-full" as const,
    darkBg: "bg-neutral-900" as const,
    flexCenter: "flex items-center justify-between" as const,
} as const;

interface FuncProps {
    setterFunction(arg: number): void;
}

//header when mode is small. sizes are fixed because they have to go outside traditional dom placement
export default function HeaderSmall({ setterFunction }: FuncProps): React.ReactElement {
    const [toggled, setToggled] = useState<boolean>(false);

    if (!toggled) {
        //had to really do some fuck ass shit because i dont fucking understsand what the fuck is going on anymore.
        return (
            <div className='w-full mt-[-12px]'> 
            <header className={`${tw.fixedBottom} ${tw.darkBg} text-white z-100`}>
                <div className="max-w-xl mx-auto max-h-[66px]">
                    <div className={`${tw.flexCenter} pl-5 w-full p-2`}>
                        <div className="text-[22px] sm:text-3xl font-medium sm:ml-2">
                            Ernie Wang
                        </div>
                        <button
                            onClick={() => setToggled(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-md text-sm font-semibold hover:bg-neutral-700 transition"
                            aria-label="Open Table of Contents"
                        >
                            <span className="text-lg pb-1">☰</span>
                            <span className="text-[16px] sm:text-2xl"><small>Table of Contents</small></span>
                        </button>
                    </div>
                </div>
            </header>
            </div>
        );
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setToggled(false)}
        >
            <div className={`${tw.darkBg} p-6 fixed bottom-0 w-full`}>
                <div className="max-w-xl mx-auto flex flex-col justify-between items-center text-white gap-8 pb-8">
                    <div className="flex gap-9 mt-1 pt-8">
                        <HeaderLink href="https://www.instagram.com/visualbasic_ernie/" icon={AiFillInstagram} />
                        <HeaderLink href="https://www.youtube.com/@erniewang399" icon={AiFillYoutube} />
                        <HeaderLink href="https://github.com/erniewang" icon={AiFillGithub} />
                        <HeaderLink href="https://www.linkedin.com/in/erniewang/" icon={AiFillLinkedin} />
                    </div>

                    <a href="#about" className={tw.navLink} onClick={() => setterFunction(0)}><MovingWords>About</MovingWords></a>
                    <a href="#projects" className={tw.navLink} onClick={() => setterFunction(1)}><MovingWords>Projects</MovingWords></a>
                    <a href="#creative" className={tw.navLink} onClick={() => setterFunction(2)}><MovingWords>Creative</MovingWords></a>
                    <a href="#resume" className={tw.navLink} onClick={() => setterFunction(3)}><MovingWords>Resume</MovingWords></a>
                </div>
            </div>
        </div>
    );
} 