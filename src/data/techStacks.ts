import type { TechStack } from '../types/TechStack';

export const techStacks: TechStack[] = [
	{
		id: 'frontend',
		label: 'Frontend',
		skills: [
			'angular',
			'react',
			'typescript',
			'javascript',
			'html',
			'css',
			'tailwind',
		],
	},
	{
		id: 'testing',
		label: 'Testing',
		skills: ['cypress', 'jest'],
	},
	{
		id: 'tools',
		label: 'Tools',
		skills: ['azuredevops', 'git', 'nx'],
	},
];
