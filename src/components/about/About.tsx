import { SubHeader } from '../shared/SubHeader';
import { useContext } from 'react';
import { phoneMode } from '../../App';
import { Gallery } from '../shared/gallery';

const galleryList:string[] = [
    '/images/about/about.jpg',
    '/images/about/a.jpg',
    '/images/about/dog.jpg',
    '/images/about/estonia.jpg',
    '/images/about/grad.jpg'
];

export function About() {
    const pM = useContext(phoneMode);
    return <SubHeader>
        <div className={`flex ${pM ? 'flex-col' : 'flex-row'} w-full h-full bg-black`}>
            <div className={`${pM ? 'w-full h-[45vh]' : 'w-[48vw] h-full'} bg-gray-800 flex flex-wrap`}>
                <Gallery imageList={galleryList}></Gallery>
            </div>
            <div className={`${pM ? 'w-full h-[55vh]' : 'w-[68vw] h-full'} flex flex-col`}>
            </div>
        </div>
    </SubHeader>;
}


//need to write a script to grab files from photography
