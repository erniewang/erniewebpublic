import { useProjectShowcase } from "./useProjectShowcase";
import { ProjectShowcasePanelContent } from "./ProjectShowcasePanelContent";

export function ProjectShowcasePanel({
	title,
	dataPath,
}: {
	title: string;
	dataPath: string;
}) {
	const { data, loading, error } = useProjectShowcase(dataPath);

	return (
		<div className="relative z-10 h-full min-h-0 w-full overflow-y-auto overflow-x-hidden">
			<ProjectShowcasePanelContent
				title={title}
				data={data}
				loading={loading}
				error={error}
			/>
		</div>
	);
}
