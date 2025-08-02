import { SubHeader } from '../shared/SubHeader';
import { useContext, useState, useEffect, createContext } from 'react';
import { phoneMode } from '../../App';
import { ImagesSelector } from './imagesSelect';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Gallery } from '../shared/selectedGallery';

export function Creative() {
    const pM = useContext(phoneMode);
    const [phoneFilters, setPhoneFilters] = useState<boolean>(false);
    const [selectedImages, setSelectedImages] = useState<number[]>([]);

    return (
        <SubHeader>
            
            {pM && <div className='relative w-screen h-full bg-black overflow-y-hidden'>
                <div
                    className={` absolute top-0 left-0 right-0 bottom-[60px] bg-black`}>
                        <Gallery imageList={selectedImages.map(id => `images/photography/${id}.jpg`)} />
                    </div>
                {phoneFilters && (
                    <div className='absolute w-full h-[340px] bg-gray-400 bottom-[60px]'>
                        <ImagesSelector onUpdate={setSelectedImages} />
                    </div>
                )}
                <div 
                    onClick={() => {setPhoneFilters(!phoneFilters);}}
                    className='absolute w-full h-[60px] bg-gray-400 bottom-0 cursor-pointer hover:bg-gray-500 transition-colors flex items-center justify-center'
                >
                    {phoneFilters ? 
                        <ChevronDownIcon className="w-6 h-6 text-gray-700" /> :
                        <ChevronUpIcon className="w-6 h-6 text-gray-700" />
                    }
                </div>
            </div>}
            {!pM && (
                <div className="flex flex-row w-full h-full">
                    <div className='w-1/3 h-full bg-gray-400'>
                    <ImagesSelector onUpdate={setSelectedImages} />
                    </div>
                    <div className='w-1/3 h-full bg-black'>
                    <Gallery imageList={selectedImages.slice(0, selectedImages.length/2).map(id => `images/photography/${id}.jpg`)} />
                    </div>
                    <div className='w-1/3 h-full bg-black'>
                    <Gallery imageList={selectedImages.slice(selectedImages.length/2).map(id => `images/photography/${id}.jpg`)} />
                    </div>
                </div>
            )}
        
        </SubHeader>
    );
} 
//once 
