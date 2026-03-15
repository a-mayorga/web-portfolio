export type MobileMenuProps = {
	isOpen: boolean;
	onClose: () => void;
	buttonRef: React.RefObject<HTMLButtonElement | null>;
};
