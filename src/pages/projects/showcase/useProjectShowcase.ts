import { useEffect, useState } from "react";
import type {
	ProjectEntry,
	ProjectSection,
	ProjectShowcaseData,
} from "./types";

type ProjectShowcaseState = {
	data: ProjectShowcaseData | null;
	loading: boolean;
	error: string | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function normalizeOptionalString(value: unknown): string | undefined {
	if (typeof value !== "string") {
		return undefined;
	}

	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : undefined;
}

function normalizeDescription(value: unknown): string | undefined {
	if (typeof value === "string") {
		const trimmed = value.trim();
		return trimmed.length > 0 ? trimmed : undefined;
	}

	if (!Array.isArray(value)) {
		return undefined;
	}

	const paragraphs = value
		.filter((item): item is string => typeof item === "string")
		.map((item) => item.trim())
		.filter((item) => item.length > 0);

	if (paragraphs.length === 0) {
		return undefined;
	}

	return paragraphs.join(" ");
}

function normalizeSection(value: unknown): ProjectSection | undefined {
	switch (value) {
		case "current":
		case "fullstack":
		case "computerVision":
		case "aiTools":
		case "others":
			return value;
		default:
			return undefined;
	}
}

function normalizeProject(value: unknown): ProjectEntry | null {
	if (!isRecord(value)) {
		return null;
	}

	const title = normalizeOptionalString(value.title);
	const startDate = normalizeOptionalString(value.startDate);
	const endDate = normalizeOptionalString(value.endDate);
	const description = normalizeDescription(value.description);
	const section = normalizeSection(value.section);

	if (!title || !startDate || !endDate || !description || !section) {
		return null;
	}

	return {
		title,
		startDate,
		endDate,
		description,
		link: normalizeOptionalString(value.link),
		image: normalizeOptionalString(value.image),
		section,
	};
}

function normalizeProjectShowcaseData(value: unknown): ProjectShowcaseData {
	if (!isRecord(value)) {
		throw new Error("Invalid project data.");
	}

	const rawProjects = Array.isArray(value.projects) ? value.projects : [];

	return {
		description: normalizeOptionalString(value.description) ?? "",
		projects: rawProjects
			.map((entry) => normalizeProject(entry))
			.filter((entry): entry is ProjectEntry => entry !== null),
	};
}

export function useProjectShowcase(path: string): ProjectShowcaseState {
	const [state, setState] = useState<ProjectShowcaseState>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const controller = new AbortController();

		async function loadData() {
			setState((current) => ({
				...current,
				loading: true,
				error: null,
			}));

			try {
				const response = await fetch(path, { signal: controller.signal });
				if (!response.ok) {
					throw new Error(`Request failed with status ${response.status}.`);
				}

				const raw = (await response.json()) as unknown;
				const data = normalizeProjectShowcaseData(raw);

				setState({
					data,
					loading: false,
					error: null,
				});
			} catch (error) {
				if (controller.signal.aborted) {
					return;
				}

				setState({
					data: null,
					loading: false,
					error:
						error instanceof Error
							? error.message
							: "Unable to load project data.",
				});
			}
		}

		void loadData();

		return () => controller.abort();
	}, [path]);

	return state;
}
