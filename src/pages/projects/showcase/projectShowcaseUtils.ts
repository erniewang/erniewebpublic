import type { ProjectEntry, ProjectSection } from "./types";

export const pageWidthClass = "w-full max-w-5xl";

const sectionOrder: ProjectSection[] = [
	"current",
	"fullstack",
	"computerVision",
	"aiTools",
	"others",
];

const sectionLabels: Record<ProjectSection, string> = {
	current: "Current",
	fullstack: "Fullstack",
	computerVision: "Computer Vision",
	aiTools: "AI Tools",
	others: "Others",
};

export function formatDateRange(startDate: string, endDate: string): string {
	return startDate === endDate ? startDate : `${startDate} - ${endDate}`;
}

export function groupProjectsBySection(projects: ProjectEntry[]) {
	return sectionOrder.map((section) => ({
		section,
		label: sectionLabels[section],
		projects: projects.filter((project) => project.section === section),
	}));
}
