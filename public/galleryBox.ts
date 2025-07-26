import { initializeAndPlaySound } from './galleryMusic.js';

//utilities
const speed: number = 20000;
export const r = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min;
export const rPN = (): number => ((Math.round(r(0,1))) ? -1 : 1);

//create a flying box object
const createBox = (): HTMLDivElement => {
    const box: HTMLDivElement = document.createElement("div");

    //styles
    Object.assign(box.style, {
        width: `${r(25, 150)}px`,
        height: `${r(25, 150)}px`,
        position: 'absolute',
        left: `${r(-10, 100)}%`,
        top: `${r(-10, 100)}%`,
        transform: `rotate(${r(0, 90)}deg)`,
        background: `rgb(${r(100, 175)}, ${r(100, 175)}, ${r(100, 175)})`,
        boxShadow: `0 10px 35px rgba(${r(100, 175)}, ${r(100, 175)}, ${r(100, 175)}, 0.3)`,
        borderRadius: `${r(0,9)}px`
    });
    
    //dynamic backgrounds
    const oldBackground: string = box.style.background;
    const hoverBackground: string = `rgb(${r(100, 175)}, ${r(100, 150)}, ${r(200, 235)})`;
    const clickBackground: string = "white";
    (box as any).hoverTimer = false;

    //event listeners
    box.addEventListener("mouseover", async () => {
        if ((box as any).hoverTimer) return;
        //color function plays here
        //await initializeAndPlaySound();
        
        const colorAnim: Animation = box.animate([ //this starts a animation even if it the object is stored in a colorAnim object
            { 
                background: oldBackground,
                scale: 1
            },
            { 
                background: hoverBackground,
                scale: 1.03
            }
        ], {
            duration: 100,
            fill: "forwards"
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        await colorAnim.reverse();
    });

    box.addEventListener("click", async () => {
        (box as any).hoverTimer = true;
        //color thing plays here
        //await initializeAndPlaySound();
        
        const colorAnim: Animation = box.animate([
            { 
                background: oldBackground,
                scale: 1.03
            },
            { 
                background: clickBackground,
                scale: 1.2
            }
        ], {
            duration: 300,
            fill: "forwards"
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await colorAnim.reverse();
        (box as any).hoverTimer = false;
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
async function startBoxAnimation(element: HTMLElement): Promise<void> {
    await initializeAndPlaySound();
    Array.from({ length: 50 }, () => document.body.appendChild(createBox()));
    element.parentElement!.style.display = "none";
}

// Export the function to make it available globally
(window as any).startBoxAnimation = startBoxAnimation;