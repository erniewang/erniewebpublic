import type { IconType } from 'react-icons';
import { SiPython, SiJavascript, SiCplusplus, SiMysql, SiReact, SiNodedotjs, SiNextdotjs, SiFastapi, SiPandas, SiGithub, SiYoutube, SiInstagram, SiLinkedin, SiGmail } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { GiSaxophone, GiFlute, GiClarinet, GiGrandPiano, GiMicrophone } from 'react-icons/gi';

// Icon style constants
export const iconStyle = "text-4xl md:text-4xl lg:text-[39px]";
export const iconGap = "gap-4 md:gap-3 lg:gap-5";
export const instrumentIconStyle = "w-15 h-10 transition-transform";

// Programming Languages Icons
export const programmingIcons = [
    { icon: SiPython, color: "text-yellow-400" },
    { icon: SiJavascript, color: "text-yellow-300" },
    { icon: FaJava, color: "text-orange-500" },
    { icon: SiCplusplus, color: "text-blue-400" },
    { icon: SiMysql, color: "text-blue-500" },
];

// Skills Icons
export const skillIcons = [
    { icon: SiReact, color: "text-cyan-400" },
    { icon: SiNodedotjs, color: "text-green-500" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: SiFastapi, color: "text-teal-400" },
    { icon: SiPandas, color: "text-purple-400" },
];

// Social Media Icons
export const socialIcons = [
    { icon: SiGithub, color: "text-white", link: "https://github.com" },
    { icon: SiInstagram, color: "text-pink-500", link: "https://instagram.com" },
    { icon: SiLinkedin, color: "text-blue-500", link: "https://linkedin.com" },
    { icon: SiGmail, color: "text-red-400", link: "mailto:your.email@gmail.com" },
];

// Musical Instruments with ratings
export const instruments = [
    { icon: GiSaxophone, color: "text-amber-400", rating: "★ ★ ★ ★ ★" },
    { icon: GiGrandPiano, color: "", rating: "★ ★ ☆ ☆ ☆" },
    { icon: GiFlute, color: "text-sky-300", rating: "★ ★ ★ ★ ☆" },
    { icon: GiClarinet, color: "text-amber-900", rating: "★ ★ ☆ ☆ ☆" }
];

// Reusable Icon Component
interface IconProps {
    icon: IconType;
    className?: string;
}

export const Icon = ({ icon: IconComponent, className = "" }: IconProps) => {
    return <IconComponent className={className} />;
};