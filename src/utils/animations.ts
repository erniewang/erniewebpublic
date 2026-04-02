import { FADE_IN_CLASS } from "./gracefull";

/** Fade layer only — keep on wrapper so long `duration-*` never sits on the hover `<img>`. */
const photoFadeLayerBase = "h-full w-full";

const PHOTO_FADE_IN_LOADED = `${photoFadeLayerBase} opacity-100 ${FADE_IN_CLASS}`;

/** One quick fade-in for every photo. */
export function getPhotoFadeInClasses(loaded: boolean): string {
	if (!loaded) {
		return `${photoFadeLayerBase} opacity-0`;
	}
	return PHOTO_FADE_IN_LOADED;
}

const colSpanClasses = [
	"",
	"col-span-1",
	"col-span-2",
	"col-span-3",
	"col-span-4",
	"col-span-5",
] as const;
const rowSpanClasses = [
	"",
	"row-span-1",
	"row-span-2",
	"row-span-3",
	"row-span-4",
	"row-span-5",
] as const;

/** Maps 1–10 bucket to span 1–5 (same as paired switch: 1–2→1, 3–4→2, …). */
function spanFromBucket(n: number): number {
	if (n < 1 || n > 10) return 1;
	return Math.ceil(n / 2);
}

/** Grid `col-span-*` / `row-span-*` classes from normalized dimensions. */
export function getPhotoGridSpanClasses(dimensions: [number, number]): string {
	const [x, y] = dimensions;
	const xSpan = spanFromBucket(x);
	const ySpan = spanFromBucket(y);
	return `${colSpanClasses[xSpan]} ${rowSpanClasses[ySpan]}`;
}
