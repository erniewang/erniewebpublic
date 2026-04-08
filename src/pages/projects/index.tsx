import { useContext } from "react";
import { DecorativeSvgVisibility } from "../../App";
import { DecorSvgToggle } from "../../components/DecorSvgToggle";
import { ProjectShowcasePanel } from "./showcase";
import { SVG_LOAD_IN_CLASS } from "../../utils/svg";

export default function Projects() {
	const [showDecorativeSvgs] = useContext(DecorativeSvgVisibility);

	return (
		<div className="relative flex h-full min-h-0 w-full flex-col bg-gradient-to-b from-slate-800 to-zinc-900 md:flex-row">
			<div
				className="pointer-events-none absolute inset-0 z-0 bg-[url('/photos/lines.jpg')] bg-cover bg-center bg-no-repeat opacity-20"
				aria-hidden
			/>
			{showDecorativeSvgs ? (
				<>
					<div
						className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
						aria-hidden
					>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute left-[2%] top-[6%] h-auto w-[min(42vw,200px)] rotate-12 select-none object-contain opacity-[0.11]"
							draggable={false}
						/>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute bottom-[10%] left-[4%] h-auto w-[min(38vw,175px)] -rotate-[8deg] select-none object-contain opacity-[0.09]"
							draggable={false}
						/>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute left-[8%] top-[40%] h-auto w-[min(30vw,130px)] rotate-[33deg] select-none object-contain opacity-[0.08]"
							draggable={false}
						/>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute bottom-[22%] left-[18%] md:left-[24%] h-auto w-[min(34vw,155px)] -rotate-12 select-none object-contain opacity-[0.1]"
							draggable={false}
						/>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute left-[28%] top-[12%] hidden h-auto w-[min(26vw,120px)] rotate-6 select-none object-contain opacity-[0.07] sm:block"
							draggable={false}
						/>
					</div>
					<div
						className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(140vh,100vw)] w-[min(140vh,100vw)] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rotate-90 md:left-auto md:right-[-32vh] md:max-w-none md:translate-x-0 md:h-[140vh] md:w-[140vh]"
						aria-hidden
					>
						<img
							src="/svgs/faintlines.svg"
							alt=""
							className="absolute inset-0 h-full w-full -translate-y-[18vw] object-contain object-[100%_center] md:-translate-y-[28vh]"
							draggable={false}
						/>
						<img
							src="/svgs/colorful.svg"
							alt=""
							className="decor-svg-spin-ccw absolute inset-0 h-full w-full object-contain opacity-45 scale-150"
							draggable={false}
						/>
						<img
							src="/svgs/colorful2.svg"
							alt=""
							className="decor-svg-spin-cw absolute inset-0 h-full w-full object-contain opacity-85"
							draggable={false}
						/>
					</div>
				</>
			) : null}
			<div
				className={`relative z-10 hidden h-full min-h-0 w-full shrink-0 overflow-hidden md:flex md:w-1/6 xl:w-1/7
					bg-gradient-to-b from-slate-900 to-black ring-1 shadow-xl
					${SVG_LOAD_IN_CLASS}
					`}
				aria-hidden
			>
				{showDecorativeSvgs ? (
					<img
						src="/svgs/about-sidebar-lines.svg"
						alt=""
						className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.55]"
						draggable={false}
					/>
				) : null}
			</div>
			<div className="relative z-10 flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-6 py-8 text-white sm:px-8 md:px-10 lg:px-12">
				<ProjectShowcasePanel
					title="Projects"
					dataPath="/data/projects.json"
				/>
			</div>
			<div className="absolute bottom-4 left-4 z-20 hidden md:block">
				<DecorSvgToggle className="max-w-sm" />
			</div>
		</div>
	);
}
