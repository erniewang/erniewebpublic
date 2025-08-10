import React, { useContext } from 'react';
import { phoneMode } from '../../../App';
import AboutRight from './aboutRight';

//Flex rations can be easily over-ridden like a bitch

export default function About() {
  const pM = useContext(phoneMode);

  if (pM) {
    return (
      <div id="about" className="flex flex-col w-full h-full">
        <div className="w-full bg-gray-200 h-[40vh] relative">
            <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={`${process.env.PUBLIC_URL}/iframes/gallery.html`}
            allow="autoplay"
            title="Interactive Gallery"
            />
        </div>
        <div className="w-full flex-1 bg-gray-400 overflow-hidden">
            <AboutRight />
        </div>
      </div>
    );
  }

  return (
    <div id="about" className="flex flex-row w-full h-full">
      <div className="flex-[1] bg-gray-200 relative h-full">
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={`${process.env.PUBLIC_URL}/iframes/gallery.html`}
          allow="autoplay"
          title="Interactive Gallery"
        />
      </div>
      <div className="flex-[2] bg-black h-full overflow-hidden">
        <AboutRight />
      </div>
    </div>
  );
}
