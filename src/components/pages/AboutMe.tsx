import FadeInSection from "../ui/FadeInSection";
import SkillCard from "../ui/SkillCard";
import { techStacks } from "../../data/techStacks";

export default function AboutMe() {
	return (
		<section
			id="about-me"
			className="pt-20 md:py-22"
		>
			<FadeInSection>
				<div className="w-full md:px-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">
						About Me
					</h2>

					<p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
						I’m a frontend engineer with 6+ years of experience
						building modern web applications and product interfaces.
						I specialize in creating fast, scalable, and
						user-friendly experiences using technologies like React,
						Angular, and TypeScript. <br />
						<br /> I enjoy solving complex UI challenges, improving
						performance, and turning product ideas into polished,
						reliable interfaces that people genuinely enjoy using.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
						<SkillCard
							stack={techStacks[0]}
							className="md:row-span-2"
						/>
						<SkillCard stack={techStacks[1]} />
						<SkillCard stack={techStacks[2]} />
					</div>
				</div>
			</FadeInSection>
		</section>
	);
}
