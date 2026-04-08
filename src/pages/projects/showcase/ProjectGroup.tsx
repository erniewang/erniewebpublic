import type { ProjectEntry } from "./types";
import { ProjectCard } from "./ProjectCard";

/** Faint blue tints that fade right; each section cycles with a slightly different shade. */
const SECTION_RIGHT_FADE = [
	{ line: "from-sky-400", fill: "from-sky-500/5" },
	{ line: "from-blue-400", fill: "from-blue-600/5" },
	{ line: "from-indigo-400", fill: "from-indigo-500/[0.045]" },
	{ line: "from-cyan-400", fill: "from-cyan-500/[0.04]" },
	{ line: "from-sky-300", fill: "from-sky-600/[0.045]" },
	{ line: "from-blue-300", fill: "from-blue-500/[0.04]" },
] as const;

type ProjectGroupProps = {
	label: string;
	projects: ProjectEntry[];
	sectionKey: string;
	sectionIndex: number;
};

export function ProjectGroup({
	label,
	projects,
	sectionKey,
	sectionIndex,
}: ProjectGroupProps) {
	const { line, fill } =
		SECTION_RIGHT_FADE[sectionIndex % SECTION_RIGHT_FADE.length];

	return (
		<div className="space-y-4">
			<div>
				<h2 className="font-semibold tracking-tight text-gray-500 sm:text-4xl">
					{label}
				</h2>
				<div
					aria-hidden
					className={`mb-[-15px] mt-4 h-px w-20 bg-gradient-to-r ${line} to-transparent pl-[-10px] sm:w-[75vw]`}
				/>
			</div>
			<div className="relative">
				<div
					aria-hidden
					className={`pointer-events-none absolute left-0 top-[-1px] h-full w-px bg-gradient-to-b ${line} to-transparent`}
				/>
				<div
					className={`grid grid-cols-1 gap-x-8 gap-y-3 bg-gradient-to-r ${fill} to-transparent pb-5 pl-4 pt-5 shadow-sm backdrop-blur-[3px] md:grid-cols-2 pr-4 md:pr-1
                `}
				>
					{projects.map((project) => (
						<ProjectCard
							key={`${sectionKey}-${project.title}-${project.startDate}-${project.endDate}`}
							project={project}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
