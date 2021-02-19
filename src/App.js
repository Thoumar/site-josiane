import Footer from './components/Footer/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

import React, { useEffect, useState } from 'react'
import './App.sass';


const serverUri = process.env.REACT_APP_BASE_URL || "https://admin-josiane.herokuapp.com"

const Routes = withRouter(({ location }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(serverUri + "/projects").then((response) => {
            response.json().then((jsonResponse) => {
				const jsonProjectsOrdered = jsonResponse.sort((a, b) => a.id < b.id )
				setProjects(jsonProjectsOrdered)
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
