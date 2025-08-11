import React, { useContext } from 'react';
import { phoneMode } from '../../../App';

export default function About() {
  const pM = useContext(phoneMode);

  if (pM) {
    // Phone: vertical layout
    return (
      <div>
        <div style={{ height: '33vh', width: '100%', background: 'gray' }}><PhotoOptions></PhotoOptions></div>
        <div style={{ height: '67vh', width: '100%', background: 'white' }}>Bottom</div>
      </div>
    );
  }

  // Desktop: horizontal layout
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div style={{ width: '30vw', height: '100vh', background: 'gray' }}><PhotoOptions></PhotoOptions></div>
      <div style={{ width: '70vw', height: '100vh', background: 'white' }}>Right</div>
    </div>
  );
}

function PhotoOptions() {
    return (
      <div className='w-full h-full bg-black flex items-center justify-center'>
        {/* Added content to make the black box visible */}
        <span className="text-white">Photo Options</span>
      </div>
    );
  }