import { useContext } from "react";
import { DecorativeSvgVisibility } from "../../App";
import { DecorSvgToggle } from "../../components/DecorSvgToggle";
import { HeaderCard } from "./HeaderCard/HeaderCard";
import { SVG_LOAD_IN_CLASS } from "../../utils/svg";

export default function About() {
	const [showDecorativeSvgs] = useContext(DecorativeSvgVisibility);

	return (
		<div className="relative flex h-full w-full flex-col items-stretch bg-gradient-to-b from-slate-800 to-zinc-900 md:flex-row">
			<div
				className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
				aria-hidden
			>
				<div
					className="absolute left-1/2 top-1/2 h-[200%] w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[url('/photos/lines.jpg')] bg-cover bg-center bg-no-repeat opacity-5"
				/>
			</div>
			{showDecorativeSvgs ? (
				<div
					className="pointer-events-none fixed inset-x-0 bottom-0 z-0 flex items-end justify-between gap-4 px-2 pb-0 md:px-6"
					aria-hidden
				>
					<img
						src="/svgs/fainter.svg"
						alt=""
						className="max-h-[min(38vh,280px)] w-auto max-w-[45%] select-none object-contain opacity-[0.07]"
						draggable={false}
					/>
					<img
						src="/svgs/fainter2.svg"
						alt=""
						className="max-h-[min(42vh,320px)] w-auto max-w-[50%] select-none object-contain opacity-[0.11]"
						draggable={false}
					/>
				</div>
			) : null}
			<div
				className={`relative z-10 hidden h-full min-h-0 w-full shrink-0 overflow-hidden bg-gradient-to-b from-slate-900 to-black ring-1 shadow-xl
            [@media(min-width:768px)_and_(min-height:700px)]:flex [@media(min-width:768px)_and_(min-height:700px)]:w-1/6 [@media(min-width:1280px)_and_(min-height:700px)]:w-1/7
            ${SVG_LOAD_IN_CLASS}
            `}
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
			<div className="relative z-10 flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden p-4 text-white sm:p-6 md:p-8 lg:p-9 lg:pl-10">
				{showDecorativeSvgs ? (
					<div
						className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
						aria-hidden
					>
						<div className="absolute bottom-0 left-0 right-0 z-10 mb-[4vh] flex w-full justify-center md:mb-[-9vh] xl:mb-[-24vh]">
							<img
								className="h-auto w-full scale-[1.7] object-contain opacity-50 md:scale-[1]"
								src="/svgs/fainter.svg"
								alt=""
								draggable={false}
							/>
						</div>
						<div className="absolute bottom-0 left-0 right-0 z-0 mb-[4vh] flex w-full justify-center md:mb-[-2vh] xl:mb-[-5vh]">
							<img
								className="h-auto w-full scale-[1.2] object-contain md:scale-[1]"
								src="/svgs/faintlines.svg"
								alt=""
								draggable={false}
							/>
						</div>
					</div>
				) : null}
				<div className="relative z-10 flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overflow-x-hidden xl:overflow-hidden">
					<HeaderCard />
					<p className="text-2xl md:text-xl">
						<b className="text-shadow-glow text-gray-100 pr-5">
							Greetings, I am Ernie
						</b>
					</p>

					<p className="pl-1 pr-2 text-lg text-gray-400 md:pl-2 md:pr-6 md:text-lg lg:pr-9">
						I build{" "}
						<span className="text-gray-200">
							production-grade systems
						</span>
						—<span className="text-indigo-400">APIs</span>,{" "}
						<span className="text-indigo-400">data pipelines</span>,
						and
						<span className="text-indigo-400">
							{" "}
							internal tools
						</span>{" "}
						focused on reducing operational complexity and cost. My
						work centers on designing{" "}
						<span className="text-gray-200">
							systems with efficient data flow
						</span>{" "}
						and{" "}
						<span className="text-gray-200">
							minimal abstraction
						</span>
						, avoiding patterns that degrade performance or
						maintainability.
					</p>

					<p className="pl-1 pr-2 text-lg text-gray-400 md:pl-2 md:pr-6 md:text-lg lg:pr-9">
						Alongside infrastructure work, I build{" "}
						<span className="text-indigo-400">
							technical tools and interactive systems
						</span>
						, including
						<span className="text-gray-200">
							{" "}
							music tooling
						</span>{" "}
						and
						<span className="text-gray-200">
							{" "}
							interactive applications
						</span>
						. These projects serve as a testing ground for applying
						engineering principles in less structured environments.
					</p>

					<p className="text-2xl md:text-xl">
						<b className="text-shadow-glow text-gray-100">
							Outside of Work
						</b>
					</p>

					<p className="pl-1 pr-2 text-lg text-gray-400 md:pl-2 md:pr-6 md:text-lg lg:pr-9">
						Outside of engineering, I maintain a daily
						<span className="text-gray-200">
							{" "}
							music performance
						</span>{" "}
						practice, explore
						<span className="text-gray-200"> photography</span>{" "}
						through travel, and experiment with{" "}
						<span className="text-indigo-400">
							applied AI systems
						</span>
						—focusing on where existing tools break down and how
						they can be made more robust.
					</p>
				</div>
			</div>
			<div className="absolute bottom-4 left-4 z-20 hidden md:block">
				<DecorSvgToggle className="max-w-sm" />
			</div>
		</div>
	);
}
