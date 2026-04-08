export type ProjectSection =
	| "current"
	| "fullstack"
	| "computerVision"
	| "aiTools"
	| "others";

export type ProjectEntry = {
	title: string;
	startDate: string;
	endDate: string;
	description: string;
	link?: string;
	image?: string;
	section: ProjectSection;
};

export type ProjectShowcaseData = {
	description: string;
	projects: ProjectEntry[];
};
