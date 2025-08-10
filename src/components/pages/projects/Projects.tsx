import React, { useContext } from 'react';
import { phoneMode } from '../../../App';

export default function Projects() {
    const pM = useContext(phoneMode);

    return (
        <div
            id="projects"
            className="grid h-full grid-rows-[repeat(3,minmax(200px,full))] sm:grid-cols-2 lg:grid-cols-3 gap-[10px] p-2"
        >
            {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="bg-gray-800 rounded">
                </div>
            ))}
        </div>
    );
}
