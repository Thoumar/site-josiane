import Footer from './components/Footer/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

import posed, { PoseGroup } from "react-pose";

import React, { useEffect, useState } from 'react'
import './App.sass';

const Routes = withRouter(({ location }) => {
    const [projects, setProjects] = useState([]);
	
    useEffect(() => {
        fetch("http://localhost:1337/projects").then((response) => {
            response.json().then((jsonResponse) => {
                setProjects(jsonResponse)
            })
        })
    }, [])

    if(projects.length >= 1) {
		return (
			<Switch>
				{projects.map((project, i) => {
					return (
						<Route key={i} path={'/' + project.path} component={() => <Project project={project} key={i} />} />
					);
				})}
				<Route exact path="/" component={() => <Home projects={projects} />} />
			</Switch>
		);
	} else {
		return <p>Loading ...</p>
	}
});


function App() {
	return (
		<div className="App">
			<Router>
				<Routes />
				<Footer scrollRef="contact" />
			</Router>
		</div>
	);
}

export default App;
