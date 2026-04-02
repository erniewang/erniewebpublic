const PAGE_IMAGE_COUNT = 15;
const LIMIT = 200;

// Page 0 -> 0..19, page 1 -> 0..39, page 2 -> 0..59, ...
export default function getImages(page: number) {
	const data: number[] = [];
	const total = page * PAGE_IMAGE_COUNT;

	if (total >= LIMIT) {
		return Array.from({ length: LIMIT }, (_, i) => i + 1);
	}
	for (let i = 0; i < total; i++) {
		data.push(i);
	}

	const tipData: number[] = [];
	for (let j = 0; j < PAGE_IMAGE_COUNT; j++) {
		tipData.push(total + j);
	}

	return data.concat(
		tipData
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value),
	);
}
