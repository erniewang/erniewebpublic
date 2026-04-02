import { useNavigate, useLocation } from "react-router";
import { useContext } from "react";
import { SwitchingTabs } from "../../App";
import {
	GRACEFULL_SPEED_MS,
	useGracefullAnimation,
} from "../../utils/gracefull";
import {
	HEADER_ABOUT_BUTTON_CLASS,
	HEADER_NAV_BUTTON_CLASS,
	HEADER_TEXT_LINK_CLASS,
} from "../../utils/navClasses";

const SOUND_ABOUT = "/sounds/pick.mp3";
const SOUND_PROJECTS = "/sounds/pick2.mp3";
const SOUND_CREATIVE = "/sounds/brush.mp3";
const SOUND_PHOTOS = "/sounds/ring.mp3";
const SOUND_RESUME = "/sounds/lever.mp3";

function playSound(src: string) {
	void new Audio(src).play().catch(() => {});
}

type HeaderBrowserProps = {
	phoneMode: boolean;
};

export function HeaderBrowser({ phoneMode }: HeaderBrowserProps) {
	const [deloading, setDeloading] = useContext(SwitchingTabs);
	const { exit, exiting } = useGracefullAnimation({ speed: GRACEFULL_SPEED_MS });
	const navigate = useNavigate();
	const location = useLocation();

	const go = (path: string) => {
		if (exiting || deloading || location.pathname === path) {
			return;
		}
		setDeloading(true);
		exit(() => {
			setDeloading(false);
			navigate(path);
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
				<div className="w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0"></div>
				<button
					type="button"
					onClick={() => {
						playSound(SOUND_ABOUT);
						go("/");
					}}
					className={HEADER_ABOUT_BUTTON_CLASS}
				>
					About
				</button>
				<button
					type="button"
					onClick={() => {
						playSound(SOUND_PROJECTS);
						go("/projects");
					}}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Projects
				</button>
				<button
					type="button"
					onClick={() => {
						playSound(SOUND_CREATIVE);
						go("/creative");
					}}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Creative
				</button>
				<button
					type="button"
					onClick={() => {
						playSound(SOUND_PHOTOS);
						go("/photos");
					}}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Photos
				</button>
				<a
					href="/ernie-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => playSound(SOUND_RESUME)}
					className={HEADER_TEXT_LINK_CLASS}
				>
					Resume
				</a>
			</div>
		</div>
	);
}
