import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './/components/Menu/Menu';

import './App.sass';

function App() {

	const handleNavigation = () => {
		alert('hey you !')
	}
	
	return (
		<div className="App">
            <Menu handleNavigation={handleNavigation} />
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
