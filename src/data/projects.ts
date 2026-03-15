import type { Project } from '../types/Project';

export const projects: Project[] = [
	{
		id: 1,
		title: 'Waves Player',
		description:
			'A modern browser-based music player built with React that lets users search artists and instantly play song previews powered by the Deezer API.',
		problem:
			'Discovering new music can be overwhelming. The goal was to create a simple interface to explore bands based on user preferences.',
		solution:
			'Built a responsive UI that recommends bands using the Spotify API and provides preview playback for quick discovery.',
		stack: ['react', 'typescript', 'vite', 'deezer'],
		image: './projects/waves-player/thumbnail.png',
		github: 'https://github.com/a-mayorga/WavesPlayer',
		demo: 'https://waves-player-v1.vercel.app',
		color: '#6366F1',
	},
	{
		id: 2,
		title: 'Job Application Tracker',
		description:
			'A full-stack web application that helps developers organize and track their job search process. Manage applications, monitor interview stages, and keep a clear overview of opportunities in one place.',
		problem:
			'Managing job applications can be time-consuming and disorganized.',
		solution:
			'Created a comprehensive application tracking system with status updates, notes, and analytics.',
		stack: ['nextjs', 'reactquery', 'postgresql'],
		image: './projects/job-application-tracker/thumbnail.png',
		github: 'https://github.com/a-mayorga/JobApplicationTracker',
		demo: 'https://job-application-tracker-demo-amayorga.vercel.app',
		color: '#A78BFA',
	},
];
