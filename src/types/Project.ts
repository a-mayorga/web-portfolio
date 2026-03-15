import type { TechIconId } from './TechIconId';

export type Project = {
	id: number;
	title: string;
	description: string;
	problem: string;
	solution: string;
	stack: TechIconId[];
	image: string;
	github: string;
	demo: string;
	color: string;
};
