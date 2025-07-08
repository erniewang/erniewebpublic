import { useContext, useEffect } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { phoneMode } from '../../App';
import HeaderSmall from './HeaderSmall';
import HeaderLink from './shared/HeaderLink';
import { MovingWords } from '../movingWords/movingWords';

const tw = {
	socialLink: "text-white hover:text-gray-700" as const,
	navLink: "text-white hover:text-gray-500 hover:text-md max-w-[76px] overflow-hidden font-mono" as const,
	fixedBottom: "fixed bottom-0 w-full" as const,
	darkBg: "bg-neutral-900" as const,
	flexCenter: "flex items-center justify-between" as const,
} as const;

interface FuncProps {
    setterFunction(arg: number): void;
}

const Header : React.FC <FuncProps> = (props) => {
	const pM = useContext(phoneMode);

	return !pM ? (
		<header className={`${tw.darkBg} p-3 w-full`}>
			<div className={`max-w-4xl mx-auto ${tw.flexCenter} pr-2 pl-1 w-full`}>
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
						<a href="#about" className={tw.navLink} onClick={() => props.setterFunction(0)}><MovingWords>About</MovingWords></a>
						<a href="#projects" className={tw.navLink} onClick={() => props.setterFunction(1)}><MovingWords>Projects</MovingWords></a>
						<a href="#creative" className={tw.navLink} onClick={() => props.setterFunction(2)}><MovingWords>Creative</MovingWords></a>
						<a href="#resume" className={tw.navLink} onClick={() => props.setterFunction(3)}><MovingWords>Resume</MovingWords></a>
					</nav>
				</div>
			</div>
		</header>
	) : (
		<HeaderSmall />
	);
};

export default Header;
