import { useState, createContext, useEffect } from 'react';
import Header from './components/header/Header';
import PageBase from './components/pageBase';

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
        <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-blue-900 via-gray-900 to-black p-0 m-0">
            <phoneMode.Provider value={smallWidth}>
                <Header />
                <PageBase></PageBase>
            </phoneMode.Provider>
        </div>
    );
};

export default App;

//light and dark mode