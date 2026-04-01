import { useCallback, useRef, useState } from "react";

type GracefullProps = {
	speed?: number;
};

/** Outbound transition — must match `ContentPage` fade-out (`duration-[400ms]`). */
export const PAGE_EXIT_MS = 400;

export const useGracefullAnimation = ({
	speed = PAGE_EXIT_MS,
}: GracefullProps = {}) => {
	const [exiting, setExiting] = useState(false);
	const speedRef = useRef(speed);
	speedRef.current = speed;
	const exit = useCallback((onFinish?: () => void) => {
		setExiting(true);
		setTimeout(() => {
			setExiting(false);
			onFinish?.();
		}, speedRef.current);
	}, []);
	return { exiting, exit };
};
