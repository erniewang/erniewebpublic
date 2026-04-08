import { useCallback, useState } from "react";

type GracefullProps = {
	speed?: number;
};

/** Shared animation timings. */
export const FADE_OUT_MS = 500;
export const GRACEFULL_SPEED_MS = FADE_OUT_MS;

/** Shared animation utility classes — 900ms enter everywhere. */
export const FADE_IN_CLASS = "animate-in fade-in duration-900";
export const FADE_OUT_CLASS =
	"animate-out fade-out duration-500 fill-mode-forwards";

export function getTransitionClass(deloading: boolean): string {
	return deloading ? FADE_OUT_CLASS : FADE_IN_CLASS;
}

export const useGracefullAnimation = ({
	speed = GRACEFULL_SPEED_MS,
}: GracefullProps = {}) => {
	const [exiting, setExiting] = useState(false);
	const exit = useCallback((onFinish?: () => void) => {
		setExiting(true);
		window.setTimeout(() => {
			onFinish?.();
			setExiting(false);
		}, speed);
	}, [speed]);
	return { exiting, exit };
};