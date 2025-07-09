import { useContext } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { phoneMode } from '../../App';
import HeaderSmall from './HeaderSmall';
import HeaderLink from './shared/HeaderLink';
import { MovingWords } from '../movingWords/movingWords';

const tw = {
    socialLink: "text-white hover:text-gray-700" as const,
    navLink: "text-white hover:text-gray-500 hover:text-md font-mono" as const,
    darkBg: "bg-neutral-900" as const,
} as const;

interface FuncProps {
    setterFunction(arg: number): void;
}

const Header : React.FC <FuncProps> = (props) => {
    const pM = useContext(phoneMode);

    return !pM ? (
        <header className={`${tw.darkBg} p-2 w-full`}>
            <div className="mx-auto flex justify-between items-center px-4">
                <h1 className="text-white text-3xl pl-2">Ernie Wang</h1>
                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <HeaderLink href="https://www.instagram.com/visualbasic_ernie/" icon={AiFillInstagram} />
                        <HeaderLink href="https://www.youtube.com/@erniewang399" icon={AiFillYoutube} />
                        <HeaderLink href="https://github.com/erniewang" icon={AiFillGithub} />
                        <HeaderLink href="https://www.linkedin.com/in/erniewang/" icon={AiFillLinkedin} />
                    </div>
                    <span className="text-white text-2xl">|</span>
                    <nav className="flex gap-5">
                        <a href="#about" className={tw.navLink} onClick={() => props.setterFunction(0)}><MovingWords>About</MovingWords></a>
                        <a href="#projects" className={tw.navLink} onClick={() => props.setterFunction(1)}><MovingWords>Projects</MovingWords></a>
                        <a href="#creative" className={tw.navLink} onClick={() => props.setterFunction(2)}><MovingWords>Creative</MovingWords></a>
                        <a href="#resume" className={tw.navLink} onClick={() => props.setterFunction(3)}><MovingWords>Resume</MovingWords></a>
                    </nav>
                </div>
            </div>
        </header>
    ) : (
        <HeaderSmall setterFunction={props.setterFunction} />
    );
};

export default Header;
