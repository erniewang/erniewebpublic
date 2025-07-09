import { useState, createContext, useEffect } from 'react';
import Header from './components/header/Header';
import { About} from './components/about/About';
import { Creative } from './components/creative/Creative';
import { Projects } from './components/projects/Projects';

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

    //what is selected
    const [selected, setSelected] = useState<number>(0);
    function setterFunction (page:number) {
        setSelected(page);
    }
    function renderSwitch(select:number) {
        switch(select) {
            case 0:
                return <About></About>;
            case 2:
                return <Creative></Creative>;
            case 1:
                return <Projects></Projects>;
            case 3:
                //incorrect
                return <>window.open("https://www.educative.io/", "_blank")</> 
        }
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black overflow-hidden">
            <phoneMode.Provider value={smallWidth}>
                <Header setterFunction={setterFunction}></Header>
                {renderSwitch(selected)}
            </phoneMode.Provider>
        </div>
    );
};

export default App;

//light and dark mode


//declare animations that pop in and out of existance. 