import { ReactNode, useContext } from 'react';
import { phoneMode } from '../../App';

interface SubHeaderProps {
    children: ReactNode;
}

export function SubHeader({ children }: SubHeaderProps) {
    const pM = useContext(phoneMode);
    return (
        pM ? 
        <div className="w-screen h-[93vh] mt-0 bg-white flex-row space-even content-center">{children}</div> : 
        <div className="w-screen h-[93vh] mt-0 bg-white flex-column space-even content-center">{children}</div>
    );
} 