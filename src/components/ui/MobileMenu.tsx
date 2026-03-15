import { useEffect, useRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { useActiveSection } from '../../hooks/useActiveSection';
import { sections } from '../../data/sections';
import useScrollTo from '../../hooks/useScrollTo';
import type { MobileMenuProps } from '../../types/MobileMenuProps';

const MobileMenu = ({ isOpen, onClose, buttonRef }: MobileMenuProps) => {
	const menu = useRef<any>(null);
	const scrollTo = useScrollTo();
	const activeSection = useActiveSection(['home', 'about-me', 'projects']);

	useEffect(() => {
		if (!isOpen) return;

		const closeMenu = () => onClose();
		const menuClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;

			if (menu.current?.contains(target)) return;
			if (buttonRef.current?.contains(target)) return;

			onClose();
		};
		window.addEventListener('scroll', closeMenu);
		document.addEventListener('click', menuClickOutside);

		return () => {
			window.removeEventListener('scroll', closeMenu);
			document.removeEventListener('click', menuClickOutside);
		};
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					ref={menu}
					className="fixed top-0 left-0 w-full z-50 p-6 backdrop-blur bg-black/50"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
				>
					<button
						className="absolute right-4 top-4 p-2 hover:bg-[#1b1b1b]"
						onClick={onClose}
					>
						<X />
					</button>
					<ul className="flex flex-col items-center justify-center gap-6 mt-10 text-2xl">
						{sections?.map(({ id, label }) => (
							<li
								key={id}
								className={`${activeSection === id ? 'font-bold' : 'font-light'}`}
							>
								<button
									onClick={() => {
										scrollTo(id);
										onClose();
									}}
								>
									{label}
								</button>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;
