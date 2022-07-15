import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App bg-slate-300 ">
			<Navbar />
			<Hero />
			<Services />
			<Features />
			<SocialProof />
			<Pricing />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
