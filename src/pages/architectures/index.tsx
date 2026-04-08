import { ProjectShowcasePanel } from "../projects/showcase";

export default function Architectures() {
	return (
		<div className="relative isolate h-full min-h-0 w-full overflow-hidden bg-black">
			<img
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
				src="/photos/about.jpg"
				alt=""
				draggable={false}
			/>
			<div
				className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-black/85 via-black/65 to-black/90"
				aria-hidden
			/>
			<div className="relative z-40 h-full min-h-0 w-full overflow-y-auto px-4 pt-5 pb-5 sm:px-6 md:px-8">
				<ProjectShowcasePanel
					title="Architectures"
					dataPath="/data/architectures.json"
				/>
			</div>
		</div>
	);
}
