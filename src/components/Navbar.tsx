import { TabNav } from '@radix-ui/themes/dist/cjs/components/index.js';
import { useScrolled } from '../hooks/useScrolled';
import { useActiveSection } from '../hooks/useActiveSection';
import useScrollTo from '../hooks/useScrollTo';

const links = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' }
];

const Navbar = () => {
	const scrollTo = useScrollTo();
	const scrolled = useScrolled();
	const activeSection = useActiveSection([
		'home',
		'about',
		'projects',
		'contact'
	]);

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled ? 'backdrop-blur bg-black/50' : ''
			}`}>
			<div className="flex justify-end w-full py-2 px-4">
				<TabNav.Root size="2">
					{links.map(({ id, label }) => (
						<TabNav.Link
							active={activeSection === id}
							key={id}
							href={`#${id}`}
							style={{
								color: activeSection === id ? '#FFFFFF' : '#a9a9a9',
								cursor: 'pointer'
							}}
							onClick={() => scrollTo(id)}>
							{label}
						</TabNav.Link>
					))}
				</TabNav.Root>
			</div>
		</nav>
	);
};

export default Navbar;
