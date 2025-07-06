import React, { useState, useContext, createContext, useEffect } from 'react';
import Header from './components/Header';

export const phoneMode = createContext(false);

const App = () => {

    //make the screen large mode
    const mediaQ = window.matchMedia("(max-width: 685px)");
    const [smallWidth, setSmallWidth] = useState(window.innerWidth < 685);
    useEffect(() => {
        mediaQ.addEventListener("change", (e) => {
            setSmallWidth(e.matches);
        });
    },[]);

    
    return (
        <phoneMode.Provider value={smallWidth}>
            <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black">
            <Header />
            <main className="mx-auto p-5">
            <h1 className="text-white">Welcome</h1>
            </main>
            </div>
        </phoneMode.Provider>
    );
};

export default App;

//light and dark mode