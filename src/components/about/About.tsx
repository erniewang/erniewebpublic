import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function About() {
    const pM = useContext(phoneMode);
    
    return <SubHeader>
        <div className={`flex ${pM ? 'flex-col' : 'flex-row'} w-full h-full bg-black`}>
            {/* Left section */}
            <div className={`${pM ? 'w-full h-[45vh]' : 'w-[38vw] h-full'} bg-gray-800`} />
            
            {/* Right section with three stacked divs */}
            <div className={`${pM ? 'w-full h-[55vh]' : 'w-[58vw] h-full'} flex flex-col`}>
                <div className="flex-1 bg-gray-500" />
                <div className="flex-1 bg-gray-600" />
                <div className="flex-1 bg-gray-700" />
            </div>
        </div>
    </SubHeader>;
}

