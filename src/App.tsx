import { useState, createContext, useEffect } from 'react';
import Header from './components/header/Header';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import { Creative } from './components/pages/creative/Creative';
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

    //pager shit
    const [currPage, setCurrPage] = useState<number>(0);
    
    return (
        <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-blue-900 via-gray-900 to-black p-0 m-0 z-[1]">
            <phoneMode.Provider value={smallWidth}>
                <Header setCurrPage={setCurrPage} />
                <PageBase>
                    {currPage === 0 && <About />}
                    {currPage === 1 && <Projects />}
                    {currPage === 2 && <Creative />}
                </PageBase>
            </phoneMode.Provider>
        </div>
    );
};

export default App;

//light and dark mode
