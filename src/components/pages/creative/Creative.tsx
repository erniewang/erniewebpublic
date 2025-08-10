import React, { useContext } from 'react';
import { phoneMode } from '../../../App';

export default function About() {
  const pM = useContext(phoneMode);

  // PHONE MODE: stacked, 1/3 + 2/3 of available height
  if (pM) {
    return (
      <div id="about" className="flex flex-col w-full min-h-screen">
        <div className="w-full p-4 bg-gray-200 flex-[1]">
        </div>
        <div className="w-full p-4 bg-white flex-[2]">
        </div>
      </div>
    );
  }

  // DESKTOP: left 30% fixed, right fills
  return (
    <div id="about" className="flex flex-row w-full min-h-screen">
      <div className="w-[25%] p-4 bg-gray-200">
      </div>
      <div className="flex-1 p-4 bg-white">
      </div>
    </div>
  );
}
