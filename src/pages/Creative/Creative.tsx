import MusicDescription from './musicDesc';
import { instrumentIconStyle, instruments, Icon } from '../../components/icons';

const Creative = () => {
  return (
    <div className="fixed top-0 w-screen h-[92vh] bg-gray-700 md:top-[8vh] overflow-y-auto flex flex-col md:flex-row">
      
      {/* Left side – Creative Overview */}
      <div className="w-full md:w-1/2 bg-gray-700 flex flex-col items-start flex-shrink-0 p-4 text-white gap-3 md:rounded-lg md:overflow-y-scroll text-xl bg-gradient-to-b from-gray-900 to-neutral-600">
        
        <h2 className="text-2xl font-bold mb-4">Creative Passions</h2>
        <p>
          I’ve always been drawn to creative expression — whether that’s through <strong>music, art, or photography</strong>. 
          Each gives me a different way to explore emotion, color, and rhythm in life. 
        </p>

        <p>
          Music was my first love. I started as a classical band kid, but quickly fell in love with jazz and its freedom of improvisation. 
          Any note played with confidence can be right in jazz! These days I blend my music experience with visual storytelling through art and photography.
        </p>

        <div className="w-full flex flex-col items-start mb-6">
            <div className="flex flex-wrap gap-1">
                <span className='text-2xl pt-1'><b>I Play the</b></span> {instruments.map((instrument, index) => (
                <Icon key={index} icon={instrument.icon} className={`${instrumentIconStyle} ${instrument.color}`} />
                ))}
            </div>
        </div>


        <p>
          When I’m not jamming or sketching, you can usually find me capturing life’s small details through a lens — 
          candid moments, vibrant city scenes, or quiet reflections. Each creative outlet fuels the next.
        </p>
        <p>
            I currently reside around Plano TX. If you in the area , and want to draw, jam, or study, hit me up!
        </p>

        <div className="centralized flex-col text-2xl mt-4">
          <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-blue-400" href="https://example.com" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        </div>
      </div>

      {/* Right side – Placeholder */}
      <div className="w-full md:w-1/2 bg-gray-800 h-[50vh] md:h-full flex items-center justify-center flex-shrink-0">
        <div className="text-gray-400 text-xl text-center px-4">
          Coming Soon...
        </div>
      </div>
    </div>
  );
};

export default Creative;
