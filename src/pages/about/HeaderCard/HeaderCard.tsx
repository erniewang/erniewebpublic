import { useContext, useLayoutEffect, useRef, useState } from "react";
import { DecorativeSvgVisibility } from "../../../App";
import { SVG_LOAD_IN_CLASS } from "../../../utils/svg";
import { SocialLogoRow, TechLogoRow } from "./HeaderCardLogos";

const cardShellClass =
	"relative mb-4 h-auto w-full shrink-0 overflow-hidden rounded-xl border border-white/20 bg-black/90 shadow-lg ring-1 ring-white/10";

const contentGridClass =
	"relative z-10 grid grid-cols-1 grid-rows-[auto_auto] items-start gap-3 p-3 sm:gap-4 sm:p-4 md:gap-5 md:p-5 lg:min-h-[20rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.55fr)] lg:grid-rows-1 lg:items-stretch lg:gap-5 lg:p-6";

// Below lg: fixed heights (h-52 / sm:h-56 / md:h-64). At lg+: stretch with the text column; card uses shrink-0 so the page flex column can’t compress it.
const imagePanelClass =
	"relative w-full min-w-0 overflow-hidden rounded-xl border border-white/30 h-52 sm:h-56 md:h-64 lg:h-full lg:min-h-[20rem] lg:self-stretch";

const profileSectionTitleClass =
	"font-medium text-[0.68rem] uppercase tracking-[0.2em] text-zinc-500 sm:text-[0.72rem]";

function ProfileColumn() {
	return (
		<div
			className="relative z-10 flex min-h-0 min-w-0 w-full flex-col rounded-lg border border-white/10 bg-zinc-900/40 p-3 text-left shadow-inner backdrop-blur-[1px] max-md:bg-zinc-950/45 sm:p-4 md:p-5 lg:h-full"
		>
			<div className="flex w-full flex-col gap-3">
				<p className={profileSectionTitleClass}>
					Author
				</p>
				<h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
					Ernie Wang
				</h2>
				<p className="w-full max-w-prose text-base leading-relaxed text-zinc-400">
					Software engineer focused on backend systems, developer tools,
					and full-stack applications. Degrees in Computer Science and Jazz
					Studies from Northwestern.
				</p>
			</div>
			<div className="mt-3 w-full sm:mt-4">
				<SocialLogoRow />
			</div>
			<div className="mt-3 w-full border-t border-white/5 pt-3 sm:mt-4 sm:pt-2 lg:mt-auto">
				<p className={`${profileSectionTitleClass} mb-2`}>
					Proficient at
				</p>
				<TechLogoRow />
			</div>
		</div>
	);
}

function HeaderCardPhoto() {
	const ref = useRef<HTMLImageElement>(null);
	const [loaded, setLoaded] = useState(false);

	useLayoutEffect(() => {
		const el = ref.current;
		if (el?.complete && el.naturalWidth > 0) {
			setLoaded(true);
		}
	}, []);

	return (
		<img
			ref={ref}
			className={`h-full w-full object-cover object-left transition-opacity duration-200 hover:opacity-100 ${
				loaded ? `opacity-70 ${SVG_LOAD_IN_CLASS}` : "opacity-0"
			}`}
			src="/photos/weinerwald.jpg"
			alt=""
			draggable={false}
			onLoad={() => setLoaded(true)}
			onError={() => setLoaded(true)}
		/>
	);
}

export function HeaderCard() {
	const [showDecorativeSvgs] = useContext(DecorativeSvgVisibility);

	return (
		<div className={`${cardShellClass} ${SVG_LOAD_IN_CLASS}`}>
			{showDecorativeSvgs ? (
				<>
					<div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full overflow-hidden rounded-lg">
						<img
							src="/svgs/fainter.svg"
							alt=""
							className="decor-svg-spin-cw block h-auto w-full origin-bottom scale-[1.35] object-contain opacity-70 md:scale-100"
							draggable={false}
						/>
					</div>
					<div
						className="pointer-events-none absolute inset-x-0 top-0 z-0 w-full overflow-hidden rounded-lg max-md:top-[34%] max-md:bottom-0 max-md:flex max-md:flex-col max-md:justify-end"
					>
						<img
							src="/svgs/colorful.svg"
							alt=""
							className="decor-svg-spin-ccw absolute inset-0 block h-full w-full origin-top scale-[1.28] object-cover opacity-40 max-md:origin-bottom max-md:object-bottom md:scale-100"
							draggable={false}
						/>
						<img
							src="/svgs/colorful2.svg"
							alt=""
							className="decor-svg-spin-cw relative z-[1] mt-auto block h-auto w-full shrink-0 origin-top scale-[1.3] object-cover opacity-90 max-md:origin-bottom max-md:object-bottom md:mt-0 md:scale-100"
							draggable={false}
						/>
					</div>
				</>
			) : null}
			<div className={contentGridClass}>
				<div
					className={imagePanelClass}
					aria-hidden
				>
					<HeaderCardPhoto />
				</div>
				<ProfileColumn />
			</div>
		</div>
	);
}

//min-h-0 and overflow-y-auto?