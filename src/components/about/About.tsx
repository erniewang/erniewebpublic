import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function About() {
    const pM = useContext(phoneMode);
    return <SubHeader>
        <div className={`flex ${pM ? 'flex-col' : 'flex-row'} w-full h-full bg-black`}>
            <div className={`${pM ? 'w-full h-[45vh]' : 'w-[38vw] h-full'} bg-gray-800 flex flex-wrap`}>
                <iframe 
                    src="/gallery.html" 
                    title='fuck around'
                    className='w-full h-full border-none'
                ></iframe>
            </div>
            <div className={`${pM ? 'w-full h-[55vh]' : 'w-[78vw] h-full'} flex flex-col text-white gap-6 p-9 overflow-y-scroll overflow-x-hidden`}>
                <p className='text-2xl'><b>Hello! Thanks for checking out my website!</b></p>
                <p className='text-xl'>
                    My name is Ernie, and I am a software engineer, web developer, musician, and photograher. I speak Mandarin Chinese and English I recently got my Bacholelors in Computer Science and Jazz Studies. 
                </p>
                <div className='w-full h-[200px] pl-[5vh] pr-[5vh] flex-none flex justify-center items-center gap-4'>
                    <img 
                        src="/images/about/me.jpg" 
                        alt="me" 
                        className="h-full w-1/4 object-cover"
                    />
                    <img 
                        src="/images/about/mesax.jpg" 
                        alt="me with saxophone" 
                        className="h-full w-1/7 object-cover"
                    />
                    <img 
                        src="/images/about/estonia.jpg" 
                        alt="me with saxophone" 
                        className="h-full w-1/3 object-cover"
                    />
                </div>
                <p className='text-xl'>
                    I always had curisoity with the act of creation. Growing up, I messed around many creative genres such as Film Directing, Drawing/Sketching, Animations, Music, and much much more.
                </p>
            </div>
        </div>
    </SubHeader>;
}


//need to write a script to grab files from photography
