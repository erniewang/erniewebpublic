import { useState, useEffect } from 'react';
import { HeaderMobile } from './HeaderMobile';
import { HeaderBrowser } from './HeaderBrowser';
import { useGracefullAnimation } from '../animations/gracefull';

//matches tailwinds MD size thing
const phoneModeQuery = '(max-width: 767px)';

export function Header() {
    const {exiting, exit} = useGracefullAnimation();
    //check the initial size of the window on during the first load
    const [phoneMode, setPhoneMode] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia(phoneModeQuery).matches : false
    );

    useEffect(() => {
        const mq = window.matchMedia(phoneModeQuery);
        //onchange function to utilize the usegracefull hook and the callback function
        const onChange = () => {
            exit(() => {
                setPhoneMode(mq.matches);
            });
        };
        // Initial value already comes from useState; don't run exit here or the header
        // fade-out plays on first paint. Only animate on real breakpoint crossings.
        setPhoneMode(mq.matches);
        mq.addEventListener('change', onChange);
        return () => {
            //just removes it down if it unmounts to not leave shit behind??
            mq.removeEventListener('change', onChange);
        };
    }, []);

    return (
        <div className="w-screen h-[8vh] min-h-[60px] fixed top-0 bg-black text-white z-25 shadow-xl">
            <div className={(exiting ? "fade-out " : "")+ "w-full h-full"}>
                <HeaderMobile phoneMode={phoneMode} />
                <HeaderBrowser phoneMode={phoneMode} />
            </div>
        </div>
    );
}
