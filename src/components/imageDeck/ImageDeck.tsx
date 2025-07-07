import { useContext } from 'react';
import { phoneMode } from '../../App';

const tw = {
	background: 'bg-gradient-to-r from-blue-1000 from-blue-800 via-blue-700 to-blue-800 from-blue-1000'
} as const;

export function ImageDeck() {
    const pM = useContext(phoneMode);

    return (
        !pM ? (
            <div className={`w-auto h-[30vh] mt-5 ${tw.background}`}>
            </div>
        ) : (
            <div className='w-auto h-[40vh] mt-4 flex-row'>
                <div className={`w-auto h-[48%] ${tw.background}`}></div>
                <div className={`w-auto h-[48%] mt-5 ${tw.background}`}></div>
            </div>
        )
    );
} 
