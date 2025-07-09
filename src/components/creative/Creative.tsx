import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function Creative() {
    const pM = useContext(phoneMode);
    
    return <SubHeader>
        <div className="w-full h-full">
            {pM ? (
                // Mobile Layout
                <div className="flex flex-col h-full">
                    <div className="h-[12vh] flex gap-2">
                        <div className="flex-1 bg-gray-500" />
                        <div className="flex-1 bg-gray-600" />
                        <div className="flex-1 bg-gray-700" />
                    </div>
                    <div className="flex-1 bg-gray-800 overflow-y-scroll" />
                </div>
            ) : (
                // Desktop Layout
                <div className="flex h-full">
                    <div className="w-[12vw] h-full flex flex-col justify-center gap-4 bg-gray-900">
                        <div className="h-[12vh] bg-gray-500" />
                        <div className="h-[12vh] bg-gray-600" />
                        <div className="h-[12vh] bg-gray-700" />
                    </div>
                    <div className="flex-1 bg-gray-800 overflow-y-scroll" />
                </div>
            )}
        </div>
    </SubHeader>;
} 

//for creative it will be split into 3 sections. art photography, and music. 
//once 