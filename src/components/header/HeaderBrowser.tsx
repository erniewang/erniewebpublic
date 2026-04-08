import { useNavigate, useLocation } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
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
const SOUND_PHOTOS = "/sounds/ring.mp3";
const SOUND_RESUME = "/sounds/lever.mp3";
const SOUND_DEBUSSY = "/sounds/debussy.mp3";

function playSound(src: string) {
	void new Audio(src).play().catch(() => {});
}

type HeaderBrowserProps = {
	phoneMode: boolean;
};

export function HeaderBrowser({ phoneMode }: HeaderBrowserProps) {
	const [deloading, setDeloading] = useContext(SwitchingTabs);
	const { exit, exiting } = useGracefullAnimation({ speed: GRACEFULL_SPEED_MS });
	const [isDebussyPlaying, setIsDebussyPlaying] = useState(false);
	const debussyAudioRef = useRef<HTMLAudioElement | null>(null);
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

	return (
		<div
			className={
				phoneMode
					? "hidden"
					: "flex centralized flex-row z-[25] animate-in fade-in duration-900"
			}
		>
			<div className="centralized gap-4 text-lg w-1/2 h-full">
				<span className="w-auto text-white text-xl font-semibold whitespace-nowrap pr-3">
					Ernie Wang
				</span>
				<button
					type="button"
					onClick={toggleDebussy}
					aria-label={
						isDebussyPlaying ? "Pause Debussy music" : "Play Debussy music"
					}
					className={`w-[50px] h-[22px] rounded-xl flex-shrink-0 centralized text-black transition-colors ${
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
