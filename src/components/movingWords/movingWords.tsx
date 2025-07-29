import { useRef, useEffect } from "react"

const rawBaseMap: Record<string, string[]> = { A: ['А', 'Λ', 'Д', 'Л', 'Я'], B: ['В', 'Б', 'Ь', 'Ъ', 'Ы'], C: ['С', 'Ҫ', 'Ч', 'Ц', 'Ш'], D: ['Д', 'ԁ', 'Ж', 'Ѕ', 'Џ'], E: ['Е', 'Є', 'Э', 'Ә', 'Ӗ'], F: ['Ф', 'Ғ', 'Ӿ', 'Ҳ', 'Ҕ'], G: ['Г', 'Ґ', 'Ғ', 'Ӷ', 'Ѓ'], H: ['Н', 'Һ', 'Ӈ', 'Ӊ', 'Ҥ'], I: ['І', 'И', 'Й', 'Ӏ', 'Ꙇ'], J: ['Ј', 'Ҷ', 'Ӂ', 'Ӷ', 'Ӝ'], K: ['К', 'Қ', 'Ҝ', 'Ҡ', 'Ӄ'], L: ['Л', 'Љ', 'Ӆ', 'Ҥ', 'Ҷ'], M: ['М', 'Ӎ', 'ӎ', 'Ҥ', 'ӊ'], N: ['Н', 'Ң', 'Ӊ', 'ӊ', 'Ҥ'], O: ['О', 'Ө', 'Ҩ', 'Ԛ', 'Ӯ'], P: ['Р', 'Ҏ', 'Ԛ', 'Ҟ', 'Қ'], Q: ['Қ', 'Ҩ', 'Ғ', 'Ӷ', 'Ҡ'], R: ['Р', 'Я', 'Ҏ', 'Қ', 'Ҟ'], S: ['С', 'Ѕ', 'Ҫ', 'Ш', 'Щ'], T: ['Т', 'Ћ', 'Ҭ', 'Ӿ', 'Ҳ'], U: ['У', 'Ұ', 'Ў', 'Ӯ', 'Ҳ'], V: ['В', 'Ѵ', 'Ғ', 'Ӿ', 'Ҕ'], W: ['Ш', 'Щ', 'Ѡ', 'Ѵ', 'Ғ'], X: ['Х', 'Ҳ', 'Ӿ', 'Ӽ', 'Ғ'], Y: ['У', 'Ұ', 'Ы', 'Ў', 'Ҳ'], Z: ['З', 'Ж', 'Ѕ', 'Ҙ', 'Ҳ'], a: ['А', 'Λ', 'Д', 'Л', 'Я'], b: ['В', 'Б', 'Ь', 'Ъ', 'Ы'], c: ['С', 'Ҫ', 'Ч', 'Ц', 'Ш'], d: ['Д', 'ԁ', 'Ж', 'Ѕ', 'Џ'], e: ['Е', 'Є', 'Э', 'Ә', 'Ӗ'], f: ['Ф', 'Ғ', 'Ӿ', 'Ҳ', 'Ҕ'], g: ['Г', 'Ґ', 'Ғ', 'Ӷ', 'Ѓ'], h: ['Н', 'Һ', 'Ӈ', 'Ӊ', 'Ҥ'], i: ['І', 'И', 'Й', 'Ӏ', 'Ꙇ'], j: ['Ј', 'Ҷ', 'Ӂ', 'Ӷ', 'Ӝ'], k: ['К', 'Қ', 'Ҝ', 'Ҡ', 'Ӄ'], l: ['Л', 'Љ', 'Ӆ', 'Ҥ', 'Ҷ'], m: ['М', 'Ӎ', 'ӎ', 'Ҥ', 'ӊ'], n: ['Н', 'Ң', 'Ӊ', 'ӊ', 'Ҥ'], o: ['О', 'Ө', 'Ҩ', 'Ԛ', 'Ӯ'], p: ['Р', 'Ҏ', 'Ԛ', 'Ҟ', 'Қ'], q: ['Қ', 'Ҩ', 'Ғ', 'Ӷ', 'Ҡ'], r: ['Р', 'Я', 'Ҏ', 'Қ', 'Ҟ'], s: ['С', 'Ѕ', 'Ҫ', 'Ш', 'Щ'], t: ['Т', 'Ћ', 'Ҭ', 'Ӿ', 'Ҳ'], u: ['У', 'Ұ', 'Ў', 'Ӯ', 'Ҳ'], v: ['В', 'Ѵ', 'Ғ', 'Ӿ', 'Ҕ'], w: ['Ш', 'Щ', 'Ѡ', 'Ѵ', 'Ғ'], x: ['Х', 'Ҳ', 'Ӿ', 'Ӽ', 'Ғ'], y: ['У', 'Ұ', 'Ы', 'Ў', 'Ҳ'], z: ['З', 'Ж', 'Ѕ', 'Ҙ', 'Ҳ'] };
const baseMapUpper: Record<string, string[]> = {};
const baseMapLower: Record<string, string[]> = {};

for (const [key, arr] of Object.entries(rawBaseMap)) {
  if (key === key.toUpperCase()) {
    baseMapUpper[key] = arr;
  } else {
    baseMapLower[key] = arr;
  }
}

export function MovingWords({ children }: { children: React.ReactNode }) {
    //create html ref
    const eventToggler = useRef(false);
    const wordHolder = useRef<HTMLDivElement>(null);
    const originalWord = useRef<string>("");

    //function that alters the characters 
    async function alterWords(): Promise<void> {
        // Add null check at the very beginning
        if (!wordHolder.current || !originalWord.current) {
            return;
        }
        
        if (!eventToggler.current) {
            return;
        }

        for (let i:number = 0; i < 5; i++) {
            // Check again inside the loop in case component unmounts during animation
            if (!wordHolder.current || !eventToggler.current) {
                break;
            }
            
            //prepare the subsitution
            const wordList:string[] = originalWord.current.split("");
            const wordListChanged = wordList.map((char) => {
                const substitution = baseMapUpper[char] || baseMapLower[char];
                return substitution ? substitution[i] : char;
            }).join("");

            //phyiscal subsitution and then wait
            wordHolder.current.textContent = wordListChanged;
            await new Promise(resolve => setTimeout(resolve, 50));

            if (!eventToggler.current) {
                break; //breaks out of the loop if the mouse leaves early
            }
        }
        
        //set back to original at the end - with null check
        if (wordHolder.current && originalWord.current) {
            wordHolder.current.textContent = originalWord.current;
        }
    }

    const handleMouseEnter = () => {
        eventToggler.current = true;
        alterWords();
    };

    const handleMouseLeave = () => {
        eventToggler.current = false;
    };

    useEffect(() => {
        if (wordHolder.current && wordHolder.current.textContent) {
            originalWord.current = wordHolder.current.textContent;
        }
        
        const element = wordHolder.current;
        if (element) {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
            
            // Cleanup function to remove event listeners
            return () => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []); // Empty dependency array since we only want to add listeners once

    return <div 
        className="hover:text-gray-500 active:text-gray-800"
        ref={wordHolder}>
        {children}
    </div>
}
