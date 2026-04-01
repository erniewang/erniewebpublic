import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { useGracefullAnimation } from "../../utils/gracefull";
import { SwitchingTabs } from "../../App";
import { HEADER_NAV_BUTTON_CLASS, HEADER_TEXT_LINK_CLASS } from "../../utils/navClasses";
const closeAnimationMs = 400;

type MobileMenuProps = {
	exiting: boolean;
	closeMenu: (sameTab?: boolean, afterClose?: () => void) => void;
};

const menuMotionClasses = (exiting: boolean) =>
	exiting
		? "animate-out fade-out slide-out-to-top duration-300 fill-mode-forwards"
		: "animate-in fade-in slide-in-from-top duration-300";

function MobileMenu({ exiting, closeMenu }: MobileMenuProps) {
	const location = useLocation();
	const navigate = useNavigate();

	const go = (path: string) => {
		const sameTabInput: boolean = location.pathname === path ? true : false;
		//a boolean and a function is passed in
		closeMenu(sameTabInput, () => {
			navigate(path);
		});
	};

	return (
		<div
			className={`z-[1] fixed top-[8vh] left-0 h-auto min-h-[190px] w-full bg-black flex-shrink-0 flex flex-col items-center justify-start gap-10 p-7 text-[25px] shadow-xl ${menuMotionClasses(exiting)}`}
		>
			<button
				type="button"
				onClick={() => go("/")}
				className={HEADER_NAV_BUTTON_CLASS}
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
	);
}

export function HeaderMobile({ phoneMode }: { phoneMode: boolean }) {
	const [, setDeloading] = useContext(SwitchingTabs); //never once in my life knew this was every a thing
	const [expanded, setExpanded] = useState(false);
	const { exiting, exit } = useGracefullAnimation({
		speed: closeAnimationMs,
	});

	const closeMenu = (sameTab: boolean = false, onClose?: () => void) => {
		//will not cause a context change if it goes to the same url
		if (!sameTab) {
			setDeloading(true);
		}
		if (exiting) {
			//disable when exiting
			return;
		}
		if (expanded) {
			//expanded page close and also navigate.
			exit(() => {
				if (!sameTab) {
					setDeloading(false);
				}
				setExpanded(false);
				onClose?.();
			});
		} else {
			onClose?.();
		}
	};

	const animateOutClick = () => {
		if (expanded) {
			closeMenu();
			return;
		}
		setExpanded(true);
	};

	/*
    useEffect(() => { //turning expanded on and off. and resetting the expanded. useless
        if (!phoneMode) {
            setExpanded(false);
        }
    }, [phoneMode]);
    */

	return (
		<div
			className={
				phoneMode
					? "relative z-[2] h-full w-full animate-in fade-in duration-300"
					: "hidden"
			}
		>
			{/* Opaque layer above the sliding menu (z-[1]) so slide-in/out-from-top passes behind the title bar */}
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
			{expanded && <MobileMenu exiting={exiting} closeMenu={closeMenu} />}
		</div>
	);
}
