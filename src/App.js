// React and Librairies
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from './Routes';

// Style
import './App.sass';
import './fonts/HelveticaNeue.ttf';

const App = () => {
	return (
		<div className="App">
			<Router>
                <Routes />
			</Router>
		</div>
	)
}

export default App;