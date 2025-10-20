import { instrumentIconStyle, instruments, Icon } from '../../components/icons';

const containerStyle = "w-full md:h-full md:w-4/10 bg-gray-700 flex flex-col items-start flex-shrink-0 p-5 text-white gap-2 md:rounded-lg md:overflow-y-scroll text-xl bg-gradient-to-b from-gray-900 to-neutral-600";
const instrumentRowStyle = "w-full flex items-center justify-center sm:gap-2 md:gap-4 lg:gap-6";
const starStyle = "text-2xl";

const MusicDescription = () => {
    return (
        <div className={containerStyle}>
            <div className="w-full flex flex-col items-start mb-6">
                <p className="font-bold mb-4">Instruments I Play:</p>
                <div className="flex flex-col w-full gap-5 bg-gray-900 p-3 rounded-md bg-gradient-to-t from-zinc-800 to-zinc-700">
                    {instruments.map((instrument, index) => (
                        <div key={index} className={instrumentRowStyle}>
                            <Icon icon={instrument.icon} className={`${instrumentIconStyle} ${instrument.color}`} />
                            <span className={starStyle}>{instrument.rating}</span>
                        </div>
                    ))}
                </div>
            </div>
            <p>
                Although I started off as a classical music focused band kid, I fell in love in Jazz due to the freedom it allows in improvisation. Any note played with confidence is right in Jazz!
            </p>
            <p> My favorite musicians are Laufey, Kenny G, and Sam Greenfield. I enjoy a variety of different genres of music, including Bebop, Swing, Impressionist Music, Asian Pop, some of Free Jazz. Check what some other songs I 
                enjoy in my <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">Most Diverse Playlist</a>!
            </p>
            <p>Check out recordings of me playing in different settings with different insturments, and let me know if you are in the area! I am always down to Jam!</p>
            <div className='centralized flex-col text-2xl'>
                <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">Youtube Music Page</a>
                <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">Instagram Music Page</a>
                <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">SoundCloud</a>
            </div>
        </div>
    );
};

export default MusicDescription;