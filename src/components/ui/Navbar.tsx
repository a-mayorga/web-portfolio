import { useRef, useState } from 'react';

import { Menu } from 'lucide-react';
import { TabNav } from '@radix-ui/themes/dist/cjs/components/index.js';

import MobileMenu from './MobileMenu';
import useScrollTo from '../../hooks/useScrollTo';
import { sections } from '../../data/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';

const Navbar = () => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const scrollTo = useScrollTo();
	const scrolled = useScrolled();
	const activeSection = useActiveSection(['home', 'about-me', 'projects']);

	return (
		<>
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-end py-2 px-4 ${
					scrolled ? 'backdrop-blur bg-black/50' : ''
				}`}
			>
				<TabNav.Root
					size="2"
					className="sm:flex hidden w-full"
				>
					{sections.map(({ id, label }) => (
						<TabNav.Link
							active={activeSection === id}
							key={id}
							href={`#${id}`}
							onClick={() => scrollTo(id)}
						>
							{label}
						</TabNav.Link>
					))}
				</TabNav.Root>
				<button
					ref={buttonRef}
					className="sm:hidden z-50 p-2 mt-2 mr-2 rounded-lg border border-white/20 hover:bg-[#1b1b1b]"
					onClick={() => setIsMenuOpen(true)}
				>
					<Menu />
				</button>
			</nav>
			<MobileMenu
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
				buttonRef={buttonRef}
			/>
		</>
	);
};

export default Navbar;
