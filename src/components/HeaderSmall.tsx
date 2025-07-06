import { useState } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const tw = {
    socialLink: "text-white hover:text-gray-700" as const,
    navLink: "text-white hover:text-gray-500 text-2xl" as const,
    fixedBottom: "fixed bottom-0 w-full" as const,
    darkBg: "bg-neutral-900" as const,
    flexCenter: "flex items-center justify-between" as const,
} as const;

export default function HeaderSmall(): React.ReactElement {
    const [toggled, setToggled] = useState<boolean>(false);

    if (!toggled) {
        return (
            <header className={`${tw.fixedBottom} ${tw.darkBg} text-white`}>
                <div className={`max-w-lg mx-auto ${tw.flexCenter} pl-5 w-full p-2`}>
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
        );
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setToggled(false)}
        >
            <div
                className={`${tw.darkBg} p-6 fixed bottom-0 w-full flex flex-col justify-between items-center text-white gap-8 pb-8`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex gap-9 mt-1 pt-8">
                    <a
                        href="https://www.instagram.com/visualbasic_ernie/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tw.socialLink}
                    >
                        <AiFillInstagram size={30} />
                    </a>
                    <a
                        href="https://www.youtube.com/@erniewang399"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tw.socialLink}
                    >
                        <AiFillYoutube size={30} />
                    </a>
                    <a
                        href="https://github.com/erniewang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tw.socialLink}
                    >
                        <AiFillGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/erniewang/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={tw.socialLink}
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </div>

                <a href="#about" className={tw.navLink}>About</a>
                <a href="#projects" className={tw.navLink}>Projects</a>
                <a href="#creative" className={tw.navLink}>Creative</a>
                <a href="#resume" className={tw.navLink}>Resume</a>
            </div>
        </div>
    );
} 