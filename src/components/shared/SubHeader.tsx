import { ReactNode, useContext } from 'react';
import { phoneMode } from '../../App';

//10:30

interface SubHeaderProps {
    children: ReactNode;
}

export function SubHeader({ children }: SubHeaderProps) {
    const pM = useContext(phoneMode);
    return (
        pM ? 
        <div className="w-screen h-[93vh] mt-0 bg-white flex flex-col justify-evenly content-evenly overflow-hidden">{children}</div> : 
        <div className="w-screen h-[93vh] mt-0 bg-white flex flex-row justify-evenly content-evenly overflow-hidden">{children}</div>
    );
} 