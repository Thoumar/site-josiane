// Copmonents
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

// Style
import './App.sass';

const App = () => (
	<div className="App">
		<Router>
			<Routes />
		</Router>
	</div>
)

export default App;