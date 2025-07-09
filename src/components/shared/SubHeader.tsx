import { ReactNode, useContext } from 'react';
import { phoneMode } from '../../App';

interface SubHeaderProps {
    children: ReactNode;
}

export function SubHeader({ children }: SubHeaderProps) {
    const pM = useContext(phoneMode);
    return (
        pM ? 
        <div className="w-screen h-[87vh] mt-4 bg-white flex-row space-even content-center p-5 overflow-y-scroll">{children}</div> : 
        <div className="w-screen h-[87vh] mt-4 bg-white flex-column space-even content-center p-5 pl-[2vw] pr-[2vw] overflow-y-scroll">{children}</div>
    );
} 