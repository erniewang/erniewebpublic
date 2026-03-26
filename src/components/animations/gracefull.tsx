import { useState } from "react";

type GracefullProps = {
    speed?: number;
};

export const useGracefullAnimation = ({ speed = 500 }: GracefullProps = {}) => {
    const [exiting, setExiting] = useState(false);
    const exit = (onFinish?: () => void) => {
        setExiting(true);
        setTimeout(() => {
            setExiting(false);
            onFinish?.();
        }, speed);
    };
    return { exiting, exit };
};


//problems with the old one: 
//  usefeffect that ran exit animation
//  in react, function props get new identity?
//