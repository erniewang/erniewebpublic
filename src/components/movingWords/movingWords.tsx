import { useRef } from "react"

const baseMap: Record<string, string[]> = {
    A: ['А', 'Λ', 'Д', 'Л', 'Я'],
    B: ['В', 'Б', 'Ь', 'Ъ', 'Ы'],
    C: ['С', 'Ҫ', 'Ч', 'Ц', 'Ш'],
    D: ['Д', 'ԁ', 'Ж', 'Ѕ', 'Џ'],
    E: ['Е', 'Є', 'Э', 'Ә', 'Ӗ'],
    F: ['Ф', 'Ғ', 'Ӿ', 'Ҳ', 'Ҕ'],
    G: ['Г', 'Ґ', 'Ғ', 'Ӷ', 'Ѓ'],
    H: ['Н', 'Һ', 'Ӈ', 'Ӊ', 'Ҥ'],
    I: ['І', 'И', 'Й', 'Ӏ', 'Ꙇ'],
    J: ['Ј', 'Ҷ', 'Ӂ', 'Ӷ', 'Ӝ'],
    K: ['К', 'Қ', 'Ҝ', 'Ҡ', 'Ӄ'],
    L: ['Л', 'Љ', 'Ӆ', 'Ҥ', 'Ҷ'],
    M: ['М', 'Ӎ', 'ӎ', 'Ҥ', 'ӊ'],
    N: ['Н', 'Ң', 'Ӊ', 'ӊ', 'Ҥ'],
    O: ['О', 'Ө', 'Ҩ', 'Ԛ', 'Ӯ'],
    P: ['Р', 'Ҏ', 'Ԛ', 'Ҟ', 'Қ'],
    Q: ['Қ', 'Ҩ', 'Ғ', 'Ӷ', 'Ҡ'],
    R: ['Р', 'Я', 'Ҏ', 'Қ', 'Ҟ'],
    S: ['С', 'Ѕ', 'Ҫ', 'Ш', 'Щ'],
    T: ['Т', 'Ћ', 'Ҭ', 'Ӿ', 'Ҳ'],
    U: ['У', 'Ұ', 'Ў', 'Ӯ', 'Ҳ'],
    V: ['В', 'Ѵ', 'Ғ', 'Ӿ', 'Ҕ'],
    W: ['Ш', 'Щ', 'Ѡ', 'Ѵ', 'Ғ'],
    X: ['Х', 'Ҳ', 'Ӿ', 'Ӽ', 'Ғ'],
    Y: ['У', 'Ұ', 'Ы', 'Ў', 'Ҳ'],
    Z: ['З', 'Ж', 'Ѕ', 'Ҙ', 'Ҳ'],
    a: ['А', 'Λ', 'Д', 'Л', 'Я'],
    b: ['В', 'Б', 'Ь', 'Ъ', 'Ы'],
    c: ['С', 'Ҫ', 'Ч', 'Ц', 'Ш'],
    d: ['Д', 'ԁ', 'Ж', 'Ѕ', 'Џ'],
    e: ['Е', 'Є', 'Э', 'Ә', 'Ӗ'],
    f: ['Ф', 'Ғ', 'Ӿ', 'Ҳ', 'Ҕ'],
    g: ['Г', 'Ґ', 'Ғ', 'Ӷ', 'Ѓ'],
    h: ['Н', 'Һ', 'Ӈ', 'Ӊ', 'Ҥ'],
    i: ['І', 'И', 'Й', 'Ӏ', 'Ꙇ'],
    j: ['Ј', 'Ҷ', 'Ӂ', 'Ӷ', 'Ӝ'],
    k: ['К', 'Қ', 'Ҝ', 'Ҡ', 'Ӄ'],
    l: ['Л', 'Љ', 'Ӆ', 'Ҥ', 'Ҷ'],
    m: ['М', 'Ӎ', 'ӎ', 'Ҥ', 'ӊ'],
    n: ['Н', 'Ң', 'Ӊ', 'ӊ', 'Ҥ'],
    o: ['О', 'Ө', 'Ҩ', 'Ԛ', 'Ӯ'],
    p: ['Р', 'Ҏ', 'Ԛ', 'Ҟ', 'Қ'],
    q: ['Қ', 'Ҩ', 'Ғ', 'Ӷ', 'Ҡ'],
    r: ['Р', 'Я', 'Ҏ', 'Қ', 'Ҟ'],
    s: ['С', 'Ѕ', 'Ҫ', 'Ш', 'Щ'],
    t: ['Т', 'Ћ', 'Ҭ', 'Ӿ', 'Ҳ'],
    u: ['У', 'Ұ', 'Ў', 'Ӯ', 'Ҳ'],
    v: ['В', 'Ѵ', 'Ғ', 'Ӿ', 'Ҕ'],
    w: ['Ш', 'Щ', 'Ѡ', 'Ѵ', 'Ғ'],
    x: ['Х', 'Ҳ', 'Ӿ', 'Ӽ', 'Ғ'],
    y: ['У', 'Ұ', 'Ы', 'Ў', 'Ҳ'],
    z: ['З', 'Ж', 'Ѕ', 'Ҙ', 'Ҳ'],
};

export function MovingWords({ children }: { children: React.ReactNode }) {

    //create html ref
    const eventToggler = useRef(false);
    const wordHolder = useRef<HTMLDivElement>(null);

    //function that alters the characters 
    async function alterWords(): Promise<void> {
        if (wordHolder.current && wordHolder.current.textContent) {
            //get the original word before looping starts
            if (!eventToggler.current) {
                return;
            }

            const originalWord:string = wordHolder.current.textContent;
            for (let i:number = 0; i < 5; i++) {

                //get a list and subsitute each word for something on the cryllic
                const wordList:string[] = originalWord.split("");
                const wordListChanged:string = (wordList.map((char) => {
                    return baseMap[char] ? baseMap[char][i] : char})
                ).join("");

                //phyiscal subsitution and then wait
                wordHolder.current.textContent = wordListChanged;
                await new Promise(resolve => setTimeout(resolve, 50));

                if (!eventToggler.current) {
                    break;
                }
            }
            
            //set back to original at the end
            wordHolder.current.textContent = originalWord;
        }
    }

    const handleMouseEnter = () => {
        eventToggler.current = true;
        alterWords();
    };

    return <div ref={wordHolder} onMouseEnter={handleMouseEnter} onMouseLeave={() => {eventToggler.current = false}}>{children}</div>
}
