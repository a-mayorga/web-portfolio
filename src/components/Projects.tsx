import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FadeInSection from './FadeInSection';
import { projects } from '../data/projects';

export type Project = {
	id: number;
	title: string;
	description: string;
	problem: string;
	solution: string;
	stack: string[];
	image: string;
	github: string;
	demo: string;
	color: string;
};

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<section id="projects" className="min-h-[calc(100dvh-3.5rem)] flex flex-col justify-center items-center px-6 pt-14">
			<FadeInSection>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl md:text-4xl font-bold mt-8 mb-10">
						Projects
					</h2>

					<div className={`grid grid-cols-1 md:grid-cols-${projects.length} gap-12`}>
						{projects.map(project => (
							<ProjectCard
								key={project.id}
								{...project}
								onClick={() => setSelectedProject(project)}
							/>
						))}
					</div>
				</div>
			</FadeInSection>

			<ProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}
