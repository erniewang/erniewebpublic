import type { ProjectShowcaseData } from "./types";
import { groupProjectsBySection, pageWidthClass } from "./projectShowcaseUtils";
import { ProjectGroup } from "./ProjectGroup";

type ProjectShowcasePanelContentProps = {
	title: string;
	data: ProjectShowcaseData | null;
	loading: boolean;
	error: string | null;
};

export function ProjectShowcasePanelContent({
	title,
	data,
	loading,
	error,
}: ProjectShowcasePanelContentProps) {
	return (
		<section className={`${pageWidthClass} text-left`}>
			<header className="max-w-3xl text-left">
				<h1 className="text-4xl font-semibold tracking-tight text-gray-400 sm:text-4xl">
					{title}
				</h1>
				{data?.description ? (
					<p className="mt-4 text-lg leading-relaxed text-zinc-400">
						{data.description}
					</p>
				) : null}
			</header>
			<div className="mt-7">
				{loading ? (
					<p className="text-base leading-relaxed text-zinc-400">
						Loading projects...
					</p>
				) : null}
				{error ? (
					<p className="text-base leading-relaxed text-rose-300">
						Unable to load this section right now. {error}
					</p>
				) : null}
				{!loading && !error && data && data.projects.length === 0 ? (
					<p className="text-base leading-relaxed text-zinc-400">
						No projects have been added here yet.
					</p>
				) : null}
				{data?.projects.length ? (
					<div className="space-y-12">
						{groupProjectsBySection(data.projects).map((group, sectionIndex) => (
							<ProjectGroup
								key={group.section}
								sectionKey={group.section}
								sectionIndex={sectionIndex}
								label={group.label}
								projects={group.projects}
							/>
						))}
					</div>
				) : null}
			</div>
		</section>
	);
}
