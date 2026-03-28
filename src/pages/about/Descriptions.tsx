export function Descriptions() {
    return (
        <div className="enter-animated-intestines flex min-w-0 flex-col gap-3 text-white p-8 pr-7 xl:gap-4 2xl:gap-5 md:min-h-0 md:flex-1">
            <p className="text-2xl">
                <b className="text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
                    Hello! Thanks for checking out my website!
                </b>
            </p>
            <p className="text-xl text-gray-400">
                My name is Ernie, and I am a software engineer, web developer, musician, and photographer. I speak
                Mandarin Chinese and English. I recently got my Bachelor&apos;s in Computer Science and Jazz Studies
                from Northwestern University.
            </p>
            <div className="my-2 flex h-[200px] w-full flex-none items-center justify-between gap-2">
                <div
                    className="h-full w-[31%] shrink-0 rounded-md border border-gray-600 bg-gray-700/50 md:w-[22%]"
                    aria-hidden
                />
                <div
                    className="h-full w-[31%] shrink-0 rounded-md border border-gray-600 bg-gray-700/50 md:w-[24%]"
                    aria-hidden
                />
                <div
                    className="h-full w-[31%] shrink-0 rounded-md border border-gray-600 bg-gray-700/50 md:w-[20%]"
                    aria-hidden
                />
                <div
                    className="hidden h-full w-[25%] shrink-0 rounded-md border border-gray-600 bg-gray-700/50 md:block"
                    aria-hidden
                />
            </div>
            <p className="text-xl text-gray-400">
                I always had curiosity with the act of creation. Growing up, I messed around many creative genres such
                as Film Directing, Drawing/Sketching, Animations, Music, and much much more.
            </p>
            <p className="text-2xl">
                <b className="text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">Hobbies and Interests</b>
            </p>
            <p className="text-xl text-gray-400">
                As you would have guessed, I like to try out many things in my free time. I like to explore the world
                (see travel photos in the creative section), play video games such as SCP containment breach, and develop
                useful and undiscovered applications for AI. I tried showcasing them all here. Please browse around!
            </p>
            <p className="text-2xl">
                <b className="text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">Links</b>
            </p>
            <div className="flex flex-row flex-wrap items-center gap-x-10 gap-y-1 pb-1 text-lg lg:text-xl 2xl:text-2xl">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 underline-offset-4 hover:text-white hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 underline-offset-4 hover:text-white hover:underline"
                >
                    YouTube
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 underline-offset-4 hover:text-white hover:underline"
                >
                    Instagram
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 underline-offset-4 hover:text-white hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
