export const skillContainerClasses = "w-auto h-[50px] flex flex-row gap-3 items-center justify-start rounded-xl";
export const defaultIconClasses = "w-[20px] h-[20px] rounded-sm ";

export interface Project {
  name: string;
  variant?: string;
  smallDescription?: string;
  description?: string[];
  languages?: string[];
  tools?: string[];
  githubLink?: string;
  previewLink?: string;
  videoDemoLink?: string;
  baseColor: string;
  startDate?: string;
  endDate?: string;
  imageFile?: string;
}

const DEFAULT_PROJECT_IMAGE_BASE = "/projects/";

export function getProjectImagePath(imageFile?: string | null) {
  if (!imageFile) return null;
  const trimmed = imageFile.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  if (trimmed.includes("/")) {
    const withoutRoot = trimmed.replace(/^projects\//i, "");
    return `/projects/${withoutRoot}`;
  }

  return `${DEFAULT_PROJECT_IMAGE_BASE}${trimmed}`;
}

//extracts a list of gradients that will be utilized by all of the color things
export function getColorPalette(baseColor: string) {
  return {
    darker: (() => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
      if (!result) return baseColor;
      const r = Math.round(parseInt(result[1], 16) * 0.6);
      const g = Math.round(parseInt(result[2], 16) * 0.6);
      const b = Math.round(parseInt(result[3], 16) * 0.6);
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    })(),
    darkest: (() => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
      if (!result) return baseColor;
      const r = Math.round(parseInt(result[1], 16) * 0.3);
      const g = Math.round(parseInt(result[2], 16) * 0.3);
      const b = Math.round(parseInt(result[3], 16) * 0.3);
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    })(),
    darkerTopDown: (() => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
      if (!result) return `linear-gradient(to bottom, ${baseColor}, ${baseColor})`;
      const darker = "#" + ((1 << 24) + (Math.round(parseInt(result[1], 16) * 0.6) << 16) + (Math.round(parseInt(result[2], 16) * 0.6) << 8) + Math.round(parseInt(result[3], 16) * 0.6)).toString(16).slice(1);
      const slightlyDarker = "#" + ((1 << 24) + (Math.round(parseInt(result[1], 16) * 0.8) << 16) + (Math.round(parseInt(result[2], 16) * 0.8) << 8) + Math.round(parseInt(result[3], 16) * 0.8)).toString(16).slice(1);
      return `linear-gradient(to bottom, ${darker}, ${slightlyDarker})`;
    })(),
    leftRight: (() => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
      if (!result) return `linear-gradient(to right, ${baseColor}, ${baseColor})`;
      const r = Math.min(255, Math.round(parseInt(result[1], 16) * 1.8));
      const g = Math.min(255, Math.round(parseInt(result[2], 16) * 1.8));
      const b = Math.min(255, Math.round(parseInt(result[3], 16) * 1.8));
      const lighter = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      return `linear-gradient(to right, ${baseColor}, ${lighter})`;
    })(),
    lighterMid: (() => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
      if (!result) return `linear-gradient(to right, ${baseColor}, ${baseColor}, ${baseColor})`;
      const darker = "#" + ((1 << 24) + (Math.round(parseInt(result[1], 16) * 0.6) << 16) + (Math.round(parseInt(result[2], 16) * 0.6) << 8) + Math.round(parseInt(result[3], 16) * 0.6)).toString(16).slice(1);
      const darkest = "#" + ((1 << 24) + (Math.round(parseInt(result[1], 16) * 0.3) << 16) + (Math.round(parseInt(result[2], 16) * 0.3) << 8) + Math.round(parseInt(result[3], 16) * 0.3)).toString(16).slice(1);
      return `linear-gradient(to right, ${darkest}, ${darker}, ${darkest})`;
    })()
  };
}

//have some over-rides for all these divs and type shit
//what is that plugin that lets you fix the css everyhwere such that the order does not fuck shit up
//moving words hover and shit

//need to clean up shit because the tailwind is gonna be so fucked up

//get rid of the bottom one for things that do not have links

//i misconstrued what the yaml format is supposed to function. so i was trying shit that didnt really do any good for any shit. 

//react componets always recieve exactly 1 argument. and there are 2 ways to write it. you can recieve the entire props object. 
//or you could immedieetley destructure the object. 
//for passing multiple props. it is still one prop. 

//have creatviethings where some of them wont have any links. 