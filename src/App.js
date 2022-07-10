import './App.css';
import Header from './components/Header';
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
			<Header />
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
