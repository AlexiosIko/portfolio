import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './lib/scroll-animations.css';
import './lib/scroll-animations.js';

function App() {
	return (
		<div className="App max-w-7xl m-auto text-center"> 
			{/* <Navigation /> */}
			<Intro />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
