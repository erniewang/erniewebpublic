import React, { useContext } from 'react';
import { phoneMode } from '../../../App';

export default function About() {
  const pM = useContext(phoneMode);

  // PHONE MODE: stacked, 1/3 + 2/3 of available height
  if (pM) {
    return (
      <div id="about" className="flex flex-col w-full h-full">
        <div className="w-full bg-gray-200 flex-[2] relative">
            <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={`${process.env.PUBLIC_URL}/iframes/gallery.html`}
            allow="autoplay"
            title="Interactive Gallery"
            />
        </div>
        <div className="w-full p-4 bg-white flex-[3]">
        </div>
      </div>
    );
  }

  // DESKTOP: left 30% fixed, right fills
  return (
    <div id="about" className="flex flex-row w-full h-full">
      <div className="flex-[1] bg-gray-200 relative">
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={`${process.env.PUBLIC_URL}/iframes/gallery.html`}
          allow="autoplay"
          title="Interactive Gallery"
        />
      </div>
      <div className="flex-[2] p-4 bg-white">
      </div>
    </div>
  );
}
