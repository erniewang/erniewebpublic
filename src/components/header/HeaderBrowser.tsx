import { useNavigate, useLocation } from "react-router";
import { useContext } from "react";
import { SwitchingTabs } from "../../App";
import { PAGE_EXIT_MS, useGracefullAnimation } from "../../utils/gracefull";
import {
	HEADER_ABOUT_BUTTON_CLASS,
	HEADER_NAV_BUTTON_CLASS,
	HEADER_TEXT_LINK_CLASS,
} from "../../utils/navClasses";

type HeaderBrowserProps = {
	phoneMode: boolean;
};

export function HeaderBrowser({ phoneMode }: HeaderBrowserProps) {
	//notice the differnece between these 2
	const [deloading, setDeloading] = useContext(SwitchingTabs);
	const { exit, exiting } = useGracefullAnimation({ speed: PAGE_EXIT_MS });
	const navigate = useNavigate();
	const location = useLocation();

	const go = (path: string) => {
		if (exiting || deloading) {
			return;
		}
		if (location.pathname === path) {
			return;
		}
		browserChangePageStatus(() => navigate(path));
	};

	const browserChangePageStatus = (onFinish?: () => void) => {
		setDeloading(true);
		exit(() => {
			setDeloading(false);
			onFinish?.();
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
				<div
					className="w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0"
					onClick={() => {
						console.log("invert shit idk");
					}}
				></div>
				<button
					type="button"
					onClick={() => go("/")}
					className={HEADER_ABOUT_BUTTON_CLASS}
				>
					About
				</button>
				<button
					type="button"
					onClick={() => go("/projects")}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Projects
				</button>
				<button
					type="button"
					onClick={() => go("/creative")}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Creative
				</button>
				<button
					type="button"
					onClick={() => go("/photos")}
					className={HEADER_NAV_BUTTON_CLASS}
				>
					Photos
				</button>
				<a
					href="/ernie-resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className={HEADER_TEXT_LINK_CLASS}
				>
					Resume
				</a>
			</div>
		</div>
	);
}

//maybe a over nav
