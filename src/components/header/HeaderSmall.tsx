import React, { useState, Dispatch, SetStateAction, FC } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import HeaderLink from './shared/HeaderLink';
import { MovingWords } from '../movingWords/movingWords';

export interface HeaderSmallProps {
    setCurrPage: Dispatch<SetStateAction<number>>;
}

const tw = {
    navLink: "text-white hover:text-gray-500 text-2xl" as const,
    fixedBottom: "fixed bottom-0 w-full" as const,
    darkBg: "bg-neutral-900" as const,
    flexCenter: "flex items-center justify-between" as const,
} as const;

const HeaderSmall: FC<HeaderSmallProps> = ({ setCurrPage }) => {
    const [toggled, setToggled] = useState<boolean>(false);

    if (!toggled) {
        return (
            <header className={`${tw.fixedBottom} ${tw.darkBg} text-white fixed bottom-0 h-[65px]`}>
                <div className="mx-auto">
                    <div className={`${tw.flexCenter} pl-5 w-full p-2`}>
                        <div className="text-[5vw] font-medium sm:text-2xl">
                            Ernie Wang
                        </div>
                        <button
                            onClick={() => setToggled(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-md text-sm font-semibold hover:bg-neutral-700 transition"
                            aria-label="Open Table of Contents"
                        >
                            <span className="text-lg pb-1">☰</span>
                            <span className='text-[6vw] sm:text-2xl'><small>Table of Contents</small></span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 fixed bottom-0"
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
                    <a
                        onClick={() => { setCurrPage(0); setToggled(false); }}
                        href="#about"
                        className={tw.navLink}
                    >
                        <MovingWords>About</MovingWords>
                    </a>
                    <a
                        onClick={() => { setCurrPage(1); setToggled(false); }}
                        href="#projects"
                        className={tw.navLink}
                    >
                        <MovingWords>Projects</MovingWords>
                    </a>
                    <a
                        onClick={() => { setCurrPage(2); setToggled(false); }}
                        href="#creative"
                        className={tw.navLink}
                    >
                        <MovingWords>Creative</MovingWords>
                    </a>
                    <a
                        onClick={() => setToggled(false)}
                        href={`${process.env.PUBLIC_URL}/Resume-1.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tw.navLink}
                    >
                        <MovingWords>Resume</MovingWords>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderSmall;
