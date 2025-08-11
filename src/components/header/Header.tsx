import React, { useContext, Dispatch, SetStateAction } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { phoneMode } from '../../App';
import HeaderSmall, { HeaderSmallProps } from './HeaderSmall';
import HeaderLink from './shared/HeaderLink';
import { MovingWords } from '../movingWords/movingWords';

const tw = {
    socialLink: "text-white hover:text-gray-700" as const,
    navLink: "text-white hover:text-gray-500 hover:text-md max-w-[76px] overflow-hidden font-mono" as const,
    fixedBottom: "fixed bottom-0 w-full" as const,
    darkBg: "bg-neutral-900" as const,
    flexCenter: "flex items-center justify-between" as const,
} as const;

export interface HeaderProps {
    setCurrPage: Dispatch<SetStateAction<number>>;
}

const Header = ({ setCurrPage }: HeaderProps) => {
    const pM = useContext(phoneMode);

    if (!pM) {
        return (
            <header className={`${tw.darkBg} p-3 w-full h-[65px] fixed top-0 z-[3]`} id='header'>
                <div className={`mx-auto ${tw.flexCenter} pl-4 pr-2 w-full`}>
                    <div>
                        <h1 className="text-white text-3xl">Ernie Wang</h1>
                    </div>
                    <div className="flex items-center gap-3 mr-0">
                        <div className="flex gap-2 mt-1">
                            <HeaderLink href="https://www.instagram.com/visualbasic_ernie/" icon={AiFillInstagram} />
                            <HeaderLink href="https://www.youtube.com/@erniewang399" icon={AiFillYoutube} />
                            <HeaderLink href="https://github.com/erniewang" icon={AiFillGithub} />
                            <HeaderLink href="https://www.linkedin.com/in/erniewang/" icon={AiFillLinkedin} />
                            <span className="text-white ml-3 text-2xl pb-1">|</span>
                        </div>
                        <nav className="flex gap-6 ml-2">
                            <a onClick={() => setCurrPage(0)} href="#about" className={tw.navLink}><MovingWords>About</MovingWords></a>
                            <a onClick={() => setCurrPage(1)} href="#projects" className={tw.navLink}><MovingWords>Projects</MovingWords></a>
                            <a onClick={() => setCurrPage(2)} href="#creative" className={`${tw.navLink} hidden`}><MovingWords>Creative</MovingWords></a>
                            <a href={`${process.env.PUBLIC_URL}/Resume-1.pdf`} target="_blank" rel="noopener noreferrer" className={tw.navLink}><MovingWords>Resume</MovingWords></a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
    return <HeaderSmall setCurrPage={setCurrPage} />;
};

export default Header;
