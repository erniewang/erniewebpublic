import { useCallback, useRef, useState } from "react";

type GracefullProps = {
    speed?: number;
};

export const useGracefullAnimation = ({ speed = 500 }: GracefullProps = {}) => {
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
