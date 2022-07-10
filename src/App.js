import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';

function App() {
	return (
		<div className="App bg-slate-300 ">
			<Header />
			<Hero />
			<Services />
			<Features />
			<SocialProof />
			<Pricing />
			<Contact />
		</div>
	);
}

export default App;
