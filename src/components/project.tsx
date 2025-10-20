import type { IconType } from "react-icons/lib";

interface Project {
    name: string;
    techStack: IconType[];
    description:  HTMLElement | null;
    downloadLink?: string; // Optional property
    imagePath?: string;
}