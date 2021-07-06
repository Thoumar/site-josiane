// React and Librairies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from "./Routes";

// Style
import "./App.sass";

const App = () => (
	<div className="App">
		<Router>
			<Routes />
		</Router>
	</div>
);

export default App;
