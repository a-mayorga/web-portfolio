import '@radix-ui/themes/styles.css';

import './App.css';

import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { useMousePosition } from './hooks/useMousePosition';

function App() {
	const { x, y } = useMousePosition();

	return (
		<div className="bg-[#0B0B0F] text-white min-h-screen relative overflow-hidden">
			<div
				className="absolute w-[900px] h-[900px] rounded-full blur-[120px] opacity-20 pointer-events-none z-0 transition-transform duration-500 ease-out"
				style={{
					transform: `translate(${x - 450}px, ${y - 450}px)`,
					background: 'radial-gradient(circle, #6366F1, transparent 60%)'
				}}
			/>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
