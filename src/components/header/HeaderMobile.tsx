import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import {
	GRACEFULL_SPEED_MS,
	useGracefullAnimation,
} from "../../utils/gracefull";
import { SwitchingTabs } from "../../App";
import { DecorSvgToggle } from "../DecorSvgToggle";
import { HEADER_NAV_BUTTON_CLASS, HEADER_TEXT_LINK_CLASS } from "../../utils/navClasses";

const SOUND_ABOUT = "/sounds/pick.mp3";
const SOUND_PROJECTS = "/sounds/pick2.mp3";
const SOUND_PHOTOS = "/sounds/ring.mp3";
const SOUND_RESUME = "/sounds/lever.mp3";
const SOUND_MENU = "/sounds/Button.mp3";
const SOUND_DEBUSSY = "/sounds/debussy.mp3";

function playSound(src: string) {
	void new Audio(src).play().catch(() => {});
}

type MobileMenuProps = {
	exiting: boolean;
	closeMenu: (sameTab?: boolean, afterClose?: () => void) => void;
	isDebussyPlaying: boolean;
	toggleDebussy: () => void;
};

const menuMotionClasses = (exiting: boolean) =>
	exiting
		? "animate-out fade-out slide-out-to-top duration-500 fill-mode-forwards"
		: "animate-in fade-in slide-in-from-top duration-900";

function MobileMenu({ exiting, closeMenu, isDebussyPlaying, toggleDebussy }: MobileMenuProps) {
	const location = useLocation();
	const navigate = useNavigate();

	const go = (path: string, soundSrc: string) => {
		playSound(soundSrc);
		closeMenu(location.pathname === path, () => navigate(path));
	};

	return (
		<div
			className={`z-[1] fixed top-[8vh] left-0 h-auto min-h-[320px] w-full bg-black flex-shrink-0 flex flex-col items-center justify-start gap-10 p-7 text-[25px] shadow-xl ${menuMotionClasses(exiting)}`}
		>
			<button
				type="button"
				onClick={() => go("/", SOUND_ABOUT)}
				className={HEADER_NAV_BUTTON_CLASS}
			>
				About
			</button>
			<button
				type="button"
				onClick={() => go("/projects", SOUND_PROJECTS)}
				className={HEADER_NAV_BUTTON_CLASS}
			>
				Projects
			</button>
			<button
				type="button"
				onClick={() => go("/photos", SOUND_PHOTOS)}
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
		<div className="mt-auto flex w-full items-center justify-center gap-4 pt-3">
			<button
				type="button"
				onClick={toggleDebussy}
				aria-label={
					isDebussyPlaying ? "Pause Debussy music" : "Play Debussy music"
				}
				className={`h-[22px] w-[50px] shrink-0 rounded-xl centralized text-black transition-colors ${
					isDebussyPlaying
						? "bg-gray-600 hover:bg-gray-700"
						: "bg-white hover:bg-gray-200"
				}`}
			>
				<svg
					viewBox="0 0 24 24"
					className="w-3.5 h-3.5"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M16 3v10.55a4 4 0 1 0 2 3.45V7h3V3h-5zM8 5v8.55a4 4 0 1 0 2 3.45V9h3V5H8z" />
				</svg>
			</button>
			<DecorSvgToggle className="max-w-[18rem] px-3 py-2 text-center text-xs leading-snug" />
		</div>
		</div>
	);
}

export function HeaderMobile({ phoneMode }: { phoneMode: boolean }) {
	const [deloading, setDeloading] = useContext(SwitchingTabs);
	const [expanded, setExpanded] = useState(false);
	const [isDebussyPlaying, setIsDebussyPlaying] = useState(false);
	const debussyAudioRef = useRef<HTMLAudioElement | null>(null);
	const { exiting, exit } = useGracefullAnimation({
		speed: GRACEFULL_SPEED_MS,
	});

	useEffect(() => {
		return () => {
			if (debussyAudioRef.current) {
				debussyAudioRef.current.pause();
				debussyAudioRef.current.currentTime = 0;
			}
		};
	}, []);

	const toggleDebussy = () => {
		if (isDebussyPlaying && debussyAudioRef.current) {
			debussyAudioRef.current.pause();
			debussyAudioRef.current.currentTime = 0;
			setIsDebussyPlaying(false);
			return;
		}

		const audio = debussyAudioRef.current ?? new Audio(SOUND_DEBUSSY);
		debussyAudioRef.current = audio;
		audio.onended = () => setIsDebussyPlaying(false);
		void audio
			.play()
			.then(() => setIsDebussyPlaying(true))
			.catch(() => setIsDebussyPlaying(false));
	};

	const closeMenu = (sameTab: boolean = false, onClose?: () => void) => {
		if (exiting || deloading) {
			return;
		}
		const willNavigate = !sameTab && onClose != null;
		if (willNavigate) {
			setDeloading(true);
		}
		if (expanded) {
			exit(() => {
				setExpanded(false);
				if (willNavigate) {
					setDeloading(false);
				}
				onClose?.();
			});
		} else {
			if (willNavigate) {
				setDeloading(false);
			}
			onClose?.();
		}
	};

	const animateOutClick = () => {
		playSound(SOUND_MENU);
		if (expanded) {
			closeMenu();
			return;
		}
		setExpanded(true);
	};

	return (
		<div
			className={
				phoneMode
					? "relative z-[2] h-full w-full animate-in fade-in duration-900"
					: "hidden"
			}
		>
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
			{expanded && <MobileMenu exiting={exiting} closeMenu={closeMenu} isDebussyPlaying={isDebussyPlaying} toggleDebussy={toggleDebussy} />}
		</div>
	);
}
