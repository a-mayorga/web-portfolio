import {
	SiDeezer,
	SiDeezerHex,
	SiGithub,
	SiNextdotjs,
	SiNextdotjsHex,
	SiPostgresql,
	SiPostgresqlHex,
	SiReact,
	SiReactHex,
	SiReactquery,
	SiReactqueryHex,
	SiTypescript,
	SiTypescriptHex,
	SiVite,
	SiViteHex
} from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface Props {
	title: string;
	stack: string[];
	description: string;
	color: string;
	image: string;
	demo: string;
	github: string;
	onClick: () => void;
}

const projectButtons = [
	{ id: 'live-demo', label: 'Live Demo', icon: <Eye size={20} /> },
	{ id: 'github-repo', label: 'GitHub Repo', icon: <SiGithub size={20} /> }
];

export default function ProjectCard({
	title,
	stack,
	image,
	description,
	demo,
	github,
	color,
	onClick
}: Props) {
	const TechIcon = ({ tech }: { tech: string }) => {
		switch (tech) {
			case 'React':
				return <SiReact color={SiReactHex} size={20} />;
			case 'TypeScript':
				return <SiTypescript color={SiTypescriptHex} size={20} />;
			case 'Vite':
				return <SiVite color={SiViteHex} size={20} />;
			case 'Deezer':
				return <SiDeezer color={SiDeezerHex} size={20} />;
			case 'Next.js':
				return <SiNextdotjs color={SiNextdotjsHex} size={20} />;
			case 'TanStack Query':
				return <SiReactquery color={SiReactqueryHex} size={20} />;
			case 'PostgreSQL':
				return <SiPostgresql color={SiPostgresqlHex} size={20} />;
			default:
				return null;
		}
	};

	return (
		<motion.div
			className="w-[360px] min-h-[400px] cursor-pointer rounded-xl border-white/10 border-2"
			whileHover={{ scale: 1.05 }}
			transition={{ type: 'tween', stiffness: 100 }}
			style={{
				boxShadow: `0 0 30px ${color}20`
			}}
			onClick={onClick}>
			<div className="w-full h-48 rounded-tl-xl rounded-tr-xl overflow-hidden">
				<img src={image} alt={title} className="w-full h-full object-cover" />
			</div>
			<div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
				<div>
					<h3 className="text-2xl font-semibold mb-4">{title}</h3>
					<p className="text-gray-400 text-sm">{description}</p>
				</div>
				<div className="flex justify-start items-center -space-x-3 mt-8">
					{stack.map(tech => (
						<div
							className="flex justify-center items-center h-10 w-10 rounded-full border border-black bg-white/15 backdrop-blur"
							key={tech}>
							<TechIcon tech={tech} />
						</div>
					))}
				</div>
				<div className="mt-8 flex items-center justify-between space-x-4">
					{projectButtons.map(button => (
						<a
							href={button.id === 'live-demo' ? `https://${demo}` : github}
							target="_blank"
							key={button.id}
							className={`flex items-center gap-2 grow text-sm text-gray-400 px-4 py-2 rounded-lg transition
								${button.id === 'live-demo' ? 'bg-[#6366F1] hover:bg-[#585CF0] text-white' : 'border border-white/20 hover:border-white/40 hover:bg-[#1b1b1b]'}`
							}
							onClick={e => e.stopPropagation()}>
							{button.icon} {button.label}
						</a>
					))}
				</div>
			</div>
		</motion.div>
	);
}
