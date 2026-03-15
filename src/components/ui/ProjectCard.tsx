import { useState } from 'react';

import { Eye } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';

import { TechIcons } from '../../lib/TechIcons';
import type { TechIconId } from '../../types/TechIconId';

type ProjectCardProps = {
	title: string;
	stack: TechIconId[];
	description: string;
	color: string;
	image: string;
	demo: string;
	github: string;
	onClick: () => void;
};

const projectButtons = [
	{ id: 'live-demo', label: 'Live Demo', icon: <Eye size={20} /> },
	{ id: 'github-repo', label: 'GitHub Repo', icon: <SiGithub size={20} /> },
];

export default function ProjectCard({
	title,
	stack,
	image,
	description,
	demo,
	github,
	color
}: ProjectCardProps) {
	const [tooltip, setTooltip] = useState({
		text: '',
		x: 0,
		y: 0,
		visible: false,
	});

	const handleMouseEnter = (e: React.MouseEvent, text: string) => {
		const rect = e.currentTarget.getBoundingClientRect();

		setTooltip({
			text,
			x: rect.left + rect.width / 2,
			y: rect.top,
			visible: true,
		});
	};

	const handleMouseLeave = () => {
		setTooltip(t => ({ ...t, visible: false }));
	};

	return (
		<>
			<motion.div
				className="w-full md:w-[360px] min-h-[400px] rounded-xl"
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'tween', stiffness: 100 }}
				style={{ boxShadow: `0 0 30px ${color}20` }}
			>
				<div className="w-full h-48 rounded-tl-xl rounded-tr-xl overflow-hidden">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
					<div>
						<h3 className="text-2xl font-semibold mb-4">{title}</h3>
						<p className="text-gray-400 text-sm">{description}</p>
					</div>
					<div className="flex justify-start items-center -space-x-3 mt-8">
						{stack.map((tech: TechIconId) => {
							const {
								icon: Icon,
								color,
								label,
							} = TechIcons[tech];

							return (
								<div
									className="flex justify-center items-center h-10 w-10 rounded-full border border-black bg-white/15 backdrop-blur"
									onMouseEnter={e =>
										handleMouseEnter(e, label)
									}
									onMouseLeave={handleMouseLeave}
									key={tech}
								>
									{Icon && (
										<Icon
											size={20}
											color={color}
										/>
									)}
								</div>
							);
						})}
					</div>
					<div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-between gap-4">
						{projectButtons.map(button => (
							<a
								href={button.id === 'live-demo' ? demo : github}
								target="_blank"
								key={button.id}
								className={`flex w-full items-center justify-center sm:justify-start gap-2 grow text-[14px] text-gray-400 px-4 py-2 rounded-lg transition
								${button.id === 'live-demo' ? 'bg-[#6366F1] hover:bg-[#585CF0] text-white' : 'border border-white/20 hover:border-white/40 hover:bg-[#1b1b1b]'}`}
							>
								{button.icon} <p>{button.label}</p>
							</a>
						))}
					</div>
				</div>
			</motion.div>
			{tooltip.visible && (
				<div
					className="fixed z-50 pointer-events-none"
					style={{
						left: tooltip.x,
						top: tooltip.y - 30,
						transform: 'translateX(-50%)',
					}}
				>
					<div className="bg-neutral-900 text-white text-xs px-2 py-1 rounded shadow-lg">
						{tooltip.text}
					</div>
				</div>
			)}
		</>
	);
}
