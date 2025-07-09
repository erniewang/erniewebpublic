import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function Projects() {
    const pM = useContext(phoneMode);

    return <SubHeader>
        <div className={`
            ${pM 
                ? 'flex flex-col w-full overflow-y-auto' 
                : 'flex flex-col h-full w-full'
            }
        `}>
            {!pM ? (
                <>
                    {/* First Row */}
                    <div className="flex h-1/2">
                        <div className="w-[43.5vw] bg-gray-600" />
                        <div className="w-[23vw] bg-gray-700" />
                        <div className="w-[33.5vw] bg-gray-800" />
                    </div>
                    {/* Second Row */}
                    <div className="flex h-1/2">
                        <div className="w-[35.5vw] bg-gray-500" />
                        <div className="w-[37vw] bg-gray-900" />
                        <div className="w-[27.5vw] bg-gray-400" />
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full h-[30vh] flex-shrink-0 bg-gray-400" />
                    <div className="w-full h-[25vh] flex-shrink-0 bg-gray-500" />
                    <div className="w-full h-[18vh] flex-shrink-0 bg-gray-600" />
                    <div className="w-full h-[30vh] flex-shrink-0 bg-gray-700" />
                    <div className="w-full h-[40vh] flex-shrink-0 bg-gray-800" />
                    <div className="w-full h-[15vh] flex-shrink-0 bg-gray-900" />
                </>
            )}
        </div>
    </SubHeader>;
} 

//harmonizer
//resume tuner
//map pinner
//research
//dad project
//looper ai