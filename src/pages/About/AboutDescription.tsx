import { iconStyle, iconGap, programmingIcons, skillIcons, socialIcons, Icon } from '../../components/icons';

const AboutDescription = () => {
    return (
        <div className="h-[55vh] md:h-full w-full md:w-4/10 flex flex-col items-start flex-shrink-0 p-5 text-white gap-2 
        bg-gradient-to-r from-slate-900 to-slate-800
        md:rounded-lg
        overflow-y-none
        h-auto
        text-xl md:overflow-y-scroll">
            <div className="text-[50px] leading-none"><b>Ernie Wang</b></div>
            <div className="text-xl"><i className="drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">Full Stack Developer</i> and <i className="drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">UI Designer</i> exploring the intersection of Optimization, Music, and Art. Thanks for checking out my website!
            </div>
            <p className="self-center">Languages I use:</p>
            <div className="w-full flex flex-col items-center h-[50px] bg-black justify-center rounded-lg bg-gradient-to-r from-slate-900 to-slate-700">
                <div className={`flex items-center justify-center ${iconGap} flex-wrap`}>
                    {programmingIcons.map((item, index) => (
                        <Icon key={index} icon={item.icon} className={`${iconStyle} ${item.color}`} />
                    ))}
                </div>
            </div>
            <p className="self-center">My Skills:</p>
            <div className="w-full flex flex-col items-center h-[50px] bg-black justify-center rounded-lg bg-gradient-to-r from-gray-700 to-stone-700">
                <div className={`flex items-center justify-center ${iconGap} flex-wrap`}>
                    {skillIcons.map((item, index) => (
                        <Icon key={index} icon={item.icon} className={`${iconStyle} ${item.color}`} />
                    ))}
                </div>
            </div>

            <p> <i>Repetition</i> is a sin to the universe. The universe is defined by the increase of <i className="drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">entropy</i>, never repeating itself or staying the same. 
                As someone addicted to <i className="drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">Optimization</i> (<small>Yeah Im Cooked</small>), I am always in favor of making people's lives <i>easier</i> and vehemently oppose repetition.
                Check out some of my projects!
            </p>
            <p>Of course some repetition is required for modern society to function, so I extend my <i>greatest respects</i> for people who work in occupations that include
                extensive repetition.
            </p>
            <div className={`flex items-center centralized ${iconGap} flex-wrap w-full h-[70px] bg-gradient-to-tr from-slate-900 to-slate-600 rounded-xl p-1`}>
                {socialIcons.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <Icon icon={item.icon} className={`${iconStyle} ${item.color}`} />
                    </a>
                ))}
            </div>
            <p>I got my Bachelors in <i className="drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">Computer Science</i> and Jazz from Northwestern University. Outside of my work, I like to draw, take pictures, and travel, if $ and time permit of course.</p>
            <a href="http://example.com" target="_blank" rel="noopener noreferrer" className="self-center pt-5 text-[17px] hover:text-blue-400 transition-colors"><b>Check Out A Early Version Of This Site!</b></a>
            <p className="self-center text-sm mt-[-10px] text-red-400">(2023) Be Warned! It sucks!</p>
        </div>
    );
};

export default AboutDescription;