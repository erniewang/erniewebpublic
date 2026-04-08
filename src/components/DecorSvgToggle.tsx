import { useContext } from "react";
import { DecorativeSvgVisibility } from "../App";

const SOUND_SVGS_OFF = "/sounds/fail.mp3";
const SOUND_SVGS_ON = "/sounds/success.mp3";

type DecorSvgToggleProps = {
	className?: string;
};

export function DecorSvgToggle({ className = "" }: DecorSvgToggleProps) {
	const [showDecorativeSvgs, setShowDecorativeSvgs] = useContext(
		DecorativeSvgVisibility,
	);

	return (
		<button
			type="button"
			aria-pressed={!showDecorativeSvgs}
			onClick={() =>
				setShowDecorativeSvgs((current) => {
					if (current) {
						void new Audio(SOUND_SVGS_OFF).play().catch(() => {});
					} else {
						void new Audio(SOUND_SVGS_ON).play().catch(() => {});
					}
					return !current;
				})
			}
			className={`rounded-full border border-white/15 bg-black/45 px-4 py-2 text-left text-sm text-zinc-200 shadow-lg backdrop-blur-[2px] transition-colors duration-200 ease-out hover:border-white/25 hover:bg-black/60 hover:text-white ${className}`}
		>
			{showDecorativeSvgs
				? "Lagging a little? Click to turn off all SVGs"
				: "Want things to be prettier?"}
		</button>
	);
}
