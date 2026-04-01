/** Hover + pulse for primary nav `<button>`s (browser + mobile menu). */
export const HEADER_NAV_BUTTON_CLASS =
	"hover:text-gray-300 hover:animate-pulse hover:font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit font-inherit";

/** About tab — extra left padding to align with the name row. */
export const HEADER_ABOUT_BUTTON_CLASS = `${HEADER_NAV_BUTTON_CLASS} pl-2`;

/** Resume / plain text links: hover only, no pulse (matches previous mobile Resume). */
export const HEADER_TEXT_LINK_CLASS =
	"hover:text-gray-300 cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit";
