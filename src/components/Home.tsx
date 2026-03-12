import { Send } from 'lucide-react';

import FadeInSection from './FadeInSection';
import useScrollTo from '../hooks/useScrollTo';

export default function Home() {
	const scrollTo = useScrollTo();

	return (
		<section
			id="home"
			className="relative min-h-[calc(100dvh-3.5rem)] flex flex-col justify-center overflow-hidden">
			<FadeInSection>
				<div className="flex flex-row items-center justify-center h-full px-12">
					<div className="relative z-10 flex flex-col justify-center">
						<div className="w-[80%]">
							<p className="mb-6 text-6xl font-bold">Hello, I'm Alberto</p>
							<p className="text-4xl mb-6">Frontend Engineer</p>
							<p className="text-2xl mb-6">
								Turning complex ideas into elegant, fast, and intuitive digital
								product experiences.
							</p>
							<button className="lightning-btn" onClick={() => scrollTo('contact')}>
								<div className="border-mask">
									<div className="border-glow"></div>
								</div>
								Contact Me <Send />
							</button>
						</div>
					</div>
					<div>
						<img
							src="/profile.jpg"
							alt="Hero Image"
							className="w-[300px] h-[300px] object-cover rounded-full max-w-[initial]"
						/>
					</div>
				</div>
			</FadeInSection>
		</section>
	);
}
