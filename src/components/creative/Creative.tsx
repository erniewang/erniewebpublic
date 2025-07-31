import { SubHeader } from '../shared/SubHeader';
import { useContext, useState } from 'react';
import { phoneMode } from '../../App';
import { ImagesSelector } from './imagesSelect';

export function Creative() {
    const pM = useContext(phoneMode);
    const [phoneFilters, setPhoneFilters] = useState<boolean>(false);

    //declare a const of selected stuff. it will be a json file of selected entires in the like "country, year, state, and shit like that"
    //this will be a usestate that will be modified by the child ImageSelector. the selected stuff will be passed upwards from
    //the child and thrown into its sibling, which will have a gallery featuring the pictures type shit

    return (
        <SubHeader>
            {pM && <div className='relative w-screen h-full bg-black overflow-y-hidden'>
                <div
                    className={` absolute top-0 left-0 right-0 bottom-[60px] bg-black`}></div>
                {
                    !phoneFilters ? 
                    <div onClick={() => {setPhoneFilters(!phoneFilters);}}
                    className='absolute w-full h-[60px] bg-gray-400 bottom-0'></div> :
                    <div onClick={() => {setPhoneFilters(!phoneFilters);}}
                    className='absolute w-full h-[300px] bg-gray-400 bottom-0'>
                        <ImagesSelector></ImagesSelector>
                        </div>}
            </div>}
            {!pM && (
                <>
                    <div className='w-1/4 h-full bg-gray-400'>
                    <ImagesSelector></ImagesSelector>
                    </div>
                    <div className='w-3/4 h-full bg-black'>
                    </div>
                </>
            )}
        </SubHeader>
    );
} 
//once 