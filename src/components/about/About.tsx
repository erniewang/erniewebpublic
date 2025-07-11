import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';

export function About() {
    const pM = useContext(phoneMode);
    return <SubHeader>
        <div className={`flex ${pM ? 'flex-col' : 'flex-row'} w-full h-full bg-black`}>
            <div className={`${pM ? 'w-full h-[45vh]' : 'w-[38vw] h-full'} bg-gray-800 flex flex-wrap overflow-hidden`}>
                <iframe 
                    src="/gallery.html" 
                    title='fuck around'
                    className='w-full h-full border-none'
                ></iframe>
            </div>
            <div className={`${pM ? 'w-full h-[55vh]' : 'w-[78vw] h-full'} flex flex-col text-white gap-6 p-9 overflow-y-scroll overflow-x-hidden`}>
                <p className='text-2xl'><b className='text-shadow-glow text-gray-100'>Hello! Thanks for checking out my website!</b></p>
                <p className='text-xl text-gray-400'>
                    My name is Ernie, and I am a software engineer, web developer, musician, and photograher. I speak Mandarin Chinese and English I recently got my Bacholelors in Computer Science and Jazz Studies from Northwestern University. 
                </p>
                <div className='w-full h-[200px] flex-none flex justify-between items-center gap-2'>
                    <img 
                        src="/images/about/warsawleft.jpg" 
                        alt="me with saxophone" 
                        className={`h-full ${pM ? 'w-[31%]' : 'w-[22%]'} object-cover object-[45%_center] rounded-md`}
                    />
                    <img 
                        src="/images/about/me.jpg" 
                        alt="me" 
                        className={`h-full ${pM ? 'w-[31%]' : 'w-[24%]'} object-cover rounded-md`}
                    />
                    <img 
                        src="/images/about/mesax.jpg" 
                        alt="me with saxophone" 
                        className={`h-full ${pM ? 'w-[31%]' : 'w-[20%]'} object-cover object-[center_-5%] rounded-md`}
                    />
                    <img 
                        src="/images/about/estonia.jpg" 
                        alt="me with saxophone" 
                        className={`h-full ${pM ? 'hidden' : 'w-[25%]'} object-cover rounded-md`}
                    />
                </div>
                <p className='text-xl text-gray-400'>
                    I always had curisoity with the act of creation. Growing up, I messed around many creative genres such as Film Directing, Drawing/Sketching, Animations, Music, and much much more.
                </p>
                <p className='text-2xl'><b className='text-shadow-glow text-gray-100'>Hobbies and Interests</b></p>
                <p className='text-xl text-gray-400'>
                    As you would of guessed, I like to try out many things in my free time. I like to explore the world (see travel photos in the creative section), play video games such as SCP containment breach, and develop usefull and undiscovered applications for AI. I tried showcasing them all here. Please browse around!
                </p>
            </div>
        </div>
    </SubHeader>;
}


//need to write a script to grab files from photography
