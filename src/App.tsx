import { useState, createContext, useEffect } from 'react';
import Header from './components/header/Header';
import { ImageDeck } from './components/imageDeck/ImageDeck';

export const phoneMode = createContext(false);

const App = () => {

    //make the screen large mode
    const mediaQ = window.matchMedia("(max-width: 724px)");
    const [smallWidth, setSmallWidth] = useState(window.innerWidth < 724);

    useEffect(() => {
        mediaQ.addEventListener("change", (e) => {
            setSmallWidth(e.matches);
        });
    });

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black">
            <phoneMode.Provider value={smallWidth}>
                <Header />
                <main className="flex-row items-center content-between h-auto w-auto">
                    <ImageDeck></ImageDeck>
                </main>
            </phoneMode.Provider>
        </div>
    );
};

export default App;

//light and dark mode