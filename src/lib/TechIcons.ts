import {
	SiAngular,
	SiCss,
	SiCssHex,
	SiCypress,
	SiCypressHex,
	SiDeezer,
	SiDeezerHex,
	SiGit,
	SiGitHex,
	SiHtml5,
	SiHtml5Hex,
	SiJavascript,
	SiJavascriptHex,
	SiJest,
	SiJestHex,
	SiNextdotjs,
	SiNextdotjsHex,
	SiNx,
	SiNxHex,
	SiPostgresql,
	SiPostgresqlHex,
	SiReact,
	SiReactHex,
	SiReactquery,
	SiReactqueryHex,
	SiTailwindcss,
	SiTailwindcssHex,
	SiTypescript,
	SiTypescriptHex,
	SiVite,
	SiViteHex,
} from '@icons-pack/react-simple-icons';

import type { Skill } from '../types/Skill';

export const TechIcons: Record<any, Skill> = {
	react: {
		icon: SiReact,
		color: SiReactHex,
		label: 'React',
	},
	typescript: {
		icon: SiTypescript,
		color: SiTypescriptHex,
		label: 'TypeScript',
	},
	vite: {
		icon: SiVite,
		color: SiViteHex,
		label: 'Vite',
	},
	deezer: {
		icon: SiDeezer,
		color: SiDeezerHex,
		label: 'Deezer',
	},
	nextjs: {
		icon: SiNextdotjs,
		color: SiNextdotjsHex,
		label: 'Next.js',
	},
	reactquery: {
		icon: SiReactquery,
		color: SiReactqueryHex,
		label: 'React Query',
	},
	postgresql: {
		icon: SiPostgresql,
		color: SiPostgresqlHex,
		label: 'PostgreSQL',
	},
	angular: {
		icon: SiAngular,
		color: '#DD0031',
		label: 'Angular',
	},
	javascript: {
		icon: SiJavascript,
		color: SiJavascriptHex,
		label: 'Javascript',
	},
	html: {
		icon: SiHtml5,
		color: SiHtml5Hex,
		label: 'HTML',
	},
	css: {
		icon: SiCss,
		color: SiCssHex,
		label: 'CSS',
	},
	tailwind: {
		icon: SiTailwindcss,
		color: SiTailwindcssHex,
		label: 'TailwindCSS',
	},
	cypress: {
		icon: SiCypress,
		color: SiCypressHex,
		label: 'Cypress',
	},
	jest: {
		icon: SiJest,
		color: SiJestHex,
		label: 'Jest',
	},
	azuredevops: {
		color: '#0078D4',
		label: 'Azure DevOps',
	},
	git: {
		icon: SiGit,
		color: SiGitHex,
		label: 'Git',
	},
	nx: {
		icon: SiNx,
		color: SiNxHex,
		label: 'Nx',
	},
} as const;
