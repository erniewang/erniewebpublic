import type { ProjectEntry } from "./types";
import { formatDateRange } from "./projectShowcaseUtils";

const PROJECT_CARD_SOUNDS = ["/sounds/pick.mp3", "/sounds/pick2.mp3"] as const;

function playPickSound() {
	const src =
		PROJECT_CARD_SOUNDS[
			Math.floor(Math.random() * PROJECT_CARD_SOUNDS.length)
		];
	void new Audio(src).play().catch(() => {});
}

export function ProjectCard({ project }: { project: ProjectEntry }) {
	return (
		<a
			className="group block min-w-0 rounded-md px-1 py-1 pl-4 text-inherit no-underline
            bg-slate-900/15 backdrop-blur-[4px]
            animate-in fade-in duration-600
            transition-colors duration-200 ease-out hover:bg-blue-900/25 active:bg-blue-900/35"
			href={project.link ?? "#"}
			target="_blank"
			rel="noopener noreferrer"
			onClick={playPickSound}
		>
			<div className="flex items-start gap-3">
				{project.image ? (
					<div className="mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-zinc-900/60">
						<img
							className="h-full w-full object-cover"
							src={project.image}
							alt={`${project.title} icon`}
							draggable={false}
						/>
					</div>
				) : null}
				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-zinc-200">
						<h3 className="text-lg font-semibold tracking-tight text-zinc-100 transition-colors duration-200 ease-out group-hover:text-white">
							{project.title}
						</h3>
						<span aria-hidden className="text-zinc-500">
							|
						</span>
						<p className="text-xs uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-200 ease-out group-hover:text-zinc-400">
							{formatDateRange(project.startDate, project.endDate)}
						</p>
						<span aria-hidden className="text-zinc-500">
							|
						</span>
					</div>
					<p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-zinc-300 transition-colors duration-200 ease-out group-hover:text-zinc-200 sm:text-base">
						{project.description}
					</p>
				</div>
			</div>
		</a>
	);
}
