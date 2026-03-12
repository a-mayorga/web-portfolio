import FadeInSection from './FadeInSection';

export default function About() {
	return (
		<section id="about" className="min-h-[calc(100dvh-3.5rem)] flex flex-col justify-center items-center px-6">
			<FadeInSection>
				<div className="max-w-4xl w-full">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>

					<p className="text-gray-400 mb-12 max-w-2xl">
						Frontend engineer with 6+ years of experience building scalable
						interfaces and design systems. I focus on creating high-quality user
						experiences using modern technologies like React, Angular and
						TypeScript.
					</p>

					<div className="grid md:grid-cols-3 gap-10">
						<div>
							<h3 className="font-semibold mb-4 text-lg">Frontend</h3>

							<ul className="space-y-2 text-gray-400">
								<li>React</li>
								<li>Angular</li>
								<li>TypeScript</li>
								<li>JavaScript</li>
								<li>HTML / CSS / SASS</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold mb-4 text-lg">Testing</h3>

							<ul className="space-y-2 text-gray-400">
								<li>Cypress</li>
								<li>Jest</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold mb-4 text-lg">Tools</h3>

							<ul className="space-y-2 text-gray-400">
								<li>Git</li>
								<li>Node.js</li>
								<li>REST APIs</li>
								<li>Agile / Scrum</li>
							</ul>
						</div>
					</div>
				</div>
			</FadeInSection>
		</section>
	);
}
