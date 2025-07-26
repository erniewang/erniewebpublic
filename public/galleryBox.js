import { initializeAndPlaySound, tonicNote } from './galleryMusic.js';

//utilities
var speed = 20000;
const r = (min, max) => Math.round(Math.random() * (max - min)) + min;
const rPN = () => ((Math.round(r(0,1))) ? -1 : 1);

//create a flying box object
const possibleNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const createBox = () => {
    const box = document.createElement("div");
    const boxWidth = r(20, 120);
    const boxHeight = r(25, 160);
    
    box.innerHTML = `<b>${possibleNotes[r(0,11)]}</b>`;
    //styles
    Object.assign(box.style, {
        width: `${boxWidth}px`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${Math.max(boxWidth, boxHeight)}%`,
        height: `${boxHeight}px`,
        position: 'absolute',
        left: `${r(-10, 100)}%`,
        top: `${r(-10, 100)}%`,
        transform: `rotate(${r(0, 90)}deg)`,
        background: `rgb(${r(140, 220)}, ${r(120, 205)}, ${r(150, 235)})`,
        boxShadow: `0 10px 65px rgba(${r(100, 175)}, ${r(100, 175)}, ${r(100, 175)}, 0.3)`,
        borderRadius: `${r(0,9)}px`,
        padding: "5px",
        zIndex: 1
    });
    
    //dynamic backgrounds
    const oldBackground = box.style.background;
    const hoverBackground = `rgb(${r(180, 200)}, ${r(180, 200)}, ${r(180, 200)})`;
    const clickBackground = "white";
    box.hoverTimer = false;

    //event listeners
    box.addEventListener("mouseover", async () => {
        if (box.hoverTimer) return;
        await initializeAndPlaySound();
        const colorAnim = box.animate([ //this starts a animation even if it the object is stored in a colorAnim object
            { 
                scale: 1
            },
            { 
                background: hoverBackground,
                scale: 1.01
            }
        ], {
            duration: 100,
            fill: "forwards"
        });

        await new Promise(resolve => setTimeout(resolve, 1200));
        await colorAnim.reverse();
    });

    box.addEventListener("click", async () => {
        box.hoverTimer = true;
        box.style.zIndex = 2;
        //color thing plays here
        await initializeAndPlaySound();
        
        const colorAnim = box.animate([
            {   
                background: hoverBackground,
            },
            { 
                background: clickBackground,
            }
        ], {
            duration: 500,
            fill: "forwards"
        });

        await new Promise(resolve => setTimeout(resolve, 600));
        
        await colorAnim.reverse();
        box.style.zIndex = 1;
        box.hoverTimer = false;
    });

    //forever animations
    box.animate([
        {transform: `translateX(0px) translateY(0px) rotate(0deg)`},
        {transform: `translateX(${r(0,400) * rPN() }px) translateY(${r(0,400) * rPN()}px) rotate(${r(0, 360) * rPN()}deg)`},
        {transform: `translateX(0px) translateY(0px) rotate(0deg)`}
    ], 
    {
        duration: r(5000, speed),
        iterations: "Infinity"
    });

    return box;
};

// Create boxes and start animation
async function startBoxAnimation(element) {
    await tonicNote();
    Array.from({ length: 35 }, () => document.body.appendChild(createBox()));
    element.parentElement.style.display = "none";
    document.getElementById("chordSelectors").style.display = "flex";
}

// Export the function to make it available globally
window.startBoxAnimation = startBoxAnimation;