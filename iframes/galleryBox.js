import { initializeAndPlaySound, tonicNote } from './galleryMusic.js';

//utilities
var speed = 20000;
const r = (min, max) => Math.round(Math.random() * (max - min)) + min;
const rPN = () => ((Math.round(r(0,1))) ? -1 : 1);

//create a flying box object
const createBox = () => {
    const box = document.createElement("div");
    const boxWidth = r(20, 120);
    const boxHeight = r(25, 160);

    //styles
    Object.assign(box.style, {
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        position: 'absolute',
        left: `${r(-10, 100)}%`,
        top: `${r(-10, 100)}%`,
        transform: `rotate(${r(0, 90)}deg)`,
        background: `rgb(${r(180, 255)}, ${r(180, 255)}, ${r(180, 255)})`,
        boxShadow: `0 10px 85px 5px rgba(${r(100, 255)}, ${r(100, 255)}, ${r(100, 255)}, 0.6)`,
        borderRadius: `${r(0,9)}px`,
        padding: "5px",
        zIndex: 1
    });
    
    //dynamic backgrounds
    const oldBackground = box.style.background;
    const hoverBackground = `rgb(${r(120, 155)}, ${r(120, 155)}, ${r(120, 155)})`;
    const clickBackground = "white";
    box.hoverTimer = false;

    //event listeners
    const handleInteraction = async () => {
        if (box.hoverTimer) return;
        await initializeAndPlaySound();
        const colorAnim = box.animate([
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
    };

    box.addEventListener("mouseover", handleInteraction);
    box.addEventListener("click", handleInteraction);

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

// Add single double-click listener to body
document.body.addEventListener("dblclick", async () => {
    await tonicNote();
});

// Create boxes and start animation
async function startBoxAnimation(element) {
    await tonicNote();
    Array.from({ length: 50 }, () => document.body.appendChild(createBox()));
    element.parentElement.style.display = "none";
}

// Export the function to make it available globally
window.startBoxAnimation = startBoxAnimation;