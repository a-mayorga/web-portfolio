import { motion, AnimatePresence } from 'framer-motion';

import type { ProjectModalProps } from '../../types/ProjectModalProps';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	return (
		<AnimatePresence>
			{project && (
				<motion.div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
				>
					<motion.div
						className="bg-[#111] border border-white/10 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
						initial={{ scale: 0.96, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.96, opacity: 0 }}
						transition={{ duration: 0.15 }}
						style={{
							boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
						}}
						onClick={e => e.stopPropagation()}
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-64 object-cover"
						/>
						<div className="p-8">
							<h2 className="text-2xl font-bold mb-4">
								{project.title}
							</h2>

							<p className="text-gray-400 mb-6">
								{project.description}
							</p>

							<div className="mb-6">
								<h3 className="font-semibold mb-2">Problem</h3>
								<p className="text-gray-400 text-sm">
									{project.problem}
								</p>
							</div>

							<div className="mb-6">
								<h3 className="font-semibold mb-2">Solution</h3>
								<p className="text-gray-400 text-sm">
									{project.solution}
								</p>
							</div>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.stack.map((tech: any) => (
									<span
										key={tech}
										className="text-xs bg-white/10 px-2 py-1 rounded"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<a
									href={project.demo}
									className="bg-indigo-500 px-4 py-2 rounded"
								>
									Live Demo
								</a>

								<a
									href={project.github}
									className="border border-white/20 px-4 py-2 rounded"
								>
									GitHub
								</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
