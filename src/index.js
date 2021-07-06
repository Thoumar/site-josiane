import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";

import "./index.sass";

ReactDOM.render(
	<React.StrictMode>
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
