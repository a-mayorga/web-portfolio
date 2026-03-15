import { useState } from 'react';

import FadeInSection from '../ui/FadeInSection';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import type { Project } from '../../types/Project';
import { projects } from '../../data/projects';

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	return (
		<section
			id="projects"
			className="py-20"
		>
			<FadeInSection>
				<div className="w-full sm:px-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">
						Projects
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center gap-12">
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
				project={selectedProject!}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}
