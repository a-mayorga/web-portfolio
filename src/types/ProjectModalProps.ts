import type { Project } from './Project';

export type ProjectModalProps = {
	project: Project;
	onClose: () => void;
};
