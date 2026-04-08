import { ProjectShowcasePanel } from "../projects/showcase";

export default function Interaction() {
	return (
		<div className="relative isolate h-full min-h-0 w-full overflow-hidden bg-gradient-to-b from-slate-700 to-zinc-900">
			<div className="relative z-40 h-full min-h-0 w-full overflow-y-auto p-4 sm:p-6 md:p-8">
				<ProjectShowcasePanel
					title="Interaction"
					dataPath="/data/interaction.json"
				/>
			</div>
		</div>
	);
}
