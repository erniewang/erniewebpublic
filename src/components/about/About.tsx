import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function About() {
    const pM = useContext(phoneMode);
    
    return <SubHeader>
        <div className={`flex ${pM ? 'flex-col' : 'flex-row'} w-full h-full gap-4`}>
            <div className={`${pM ? 'w-full h-[45vh]' : 'w-[38vw] h-full'} bg-gray-800`}>
            </div>
            <div className={`${pM ? 'w-full h-[55vh]' : 'w-[58vw] h-full'} overflow-y-auto p-4`}>
                <div className="space-y-4">
                    {/* Add your content here */}
                    <p>Your text content goes here...</p>
                </div>
            </div>
        </div>
    </SubHeader>;
}

