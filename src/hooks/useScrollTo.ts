const useScrollTo = () => {
	const scrollTo = (id: string) => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	return scrollTo;
};

export default useScrollTo;