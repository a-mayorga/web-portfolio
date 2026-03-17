import FadeInSection from '../ui/FadeInSection';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FileDown, Linkedin } from 'lucide-react';

const contactButtons = [
	{ id: 'github', icon: SiGithub, link: 'https://github.com/a-mayorga' },
	{
		id: 'linkedIn',
		icon: Linkedin,
		link: 'https://linkedin.com/in/alberto-torres-m',
	},
];

export default function Home() {
	return (
		<section
			id="home"
			className="relative overflow-hidden h-[100svh] sm:h-[calc(100svh-3.5rem)]"
		>
			<FadeInSection>
				<div className="flex flex-col-reverse gap-8 sm:flex-row items-center justify-center h-full md:px-12">
					<div className="flex flex-col text-center gap-8 sm:w-[80%] sm:text-left">
						<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							Hello! I'm Alberto
						</p>
						<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
							Senior Software Engineer (Frontend)
						</p>
						<p className="text-base sm:text-lg md:text-xl max-w-xl">
							Building fast, scalable, and intuitive web
							experiences with modern frontend technologies.
						</p>
						<div className="flex flex-col items-center gap-8 sm:flex-row">
							<a
								href="./resume/alberto-torres-resume.pdf"
								download="Alberto-Torres-Resume.pdf"
								className="lightning-btn place-self-center sm:place-self-start"
							>
								<div className="border-mask">
									<div className="border-glow"></div>
								</div>
								<FileDown /> Download Resume
							</a>
							<div className="flex flex-row gap-8">
								{contactButtons?.map(
									({ id, icon: Icon, link }) => (
										<a
											key={id}
											className="cursor-pointer"
											href={link}
											target="_blank"
										>
											<Icon size={32} />
										</a>
									)
								)}
							</div>
						</div>
					</div>
					<img
						src="./profile.jpg"
						alt="Profile picture"
						className="w-50 md:w-102 lg:w-124 max-w-[300px] aspect-square object-cover rounded-full"
					/>
				</div>
			</FadeInSection>
		</section>
	);
}
