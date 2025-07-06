import { useContext } from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { phoneMode } from '../App';
import HeaderSmall from './HeaderSmall';

const tw = {
	socialLink: "text-white hover:text-gray-700" as const,
	navLink: "text-white hover:text-gray-500" as const,
	fixedBottom: "fixed bottom-0 w-full" as const,
	darkBg: "bg-neutral-900" as const,
	flexCenter: "flex items-center justify-between" as const,
} as const;

const Header = () => {
	const pM = useContext(phoneMode);

	return !pM ? (
		<header className={`${tw.darkBg} p-3 w-full`}>
			<div className={`max-w-4xl mx-auto ${tw.flexCenter} pl-3 pr-2 w-full`}>
				<div>
					<h1 className="text-white text-3xl">Ernie Wang</h1>
				</div>
				<div className="flex items-center gap-3 mr-0">
					<div className="flex gap-2 mt-1">
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
						<span className="text-white ml-3 text-2xl pb-1">|</span>
					</div>
					<nav className="flex gap-6 ml-2">
						<a href="#about" className={tw.navLink}>About</a>
						<a href="#projects" className={tw.navLink}>Projects</a>
						<a href="#creative" className={tw.navLink}>Creative</a>
						<a href="#resume" className={tw.navLink}>Resume</a>
					</nav>
				</div>
			</div>
		</header>
	) : (
		<HeaderSmall />
	);
};

export default Header;
