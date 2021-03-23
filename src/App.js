import { useLoading, BallTriangle } from '@agney/react-loading';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Home from './pages/Home/Home'
import Project from './pages/Project/Project'

import { useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import './App.sass';

import ScrollReveal from 'scrollreveal'


const serverUri = process.env.REACT_APP_BASE_URL || "https://admin-josiane.herokuapp.com"

const Routes = withRouter(({ location }) => {
	const [isLoading, setLoadingState] = useState(true)
	const [locationKeys, setLocationKeys] = useState([])
	
    const history = useHistory();

    const handleClick = (data) => {
		const path = data ? data.path : ""
		ScrollReveal().destroy();
		setLoadingState(true)
		setTimeout(() => {
			history.push("/" + path);
			setLoadingState(false)
		}, 1000)
    }

    const [projects, setProjects] = useState([]);

	const { containerProps, indicatorEl } = useLoading({
		loading: true,
		indicator: <BallTriangle width="50" />,
	});

    useEffect(() => {
		fetch(serverUri + "/projects").then((response) => {
			response.json().then((jsonResponse) => {
				const jsonProjectsOrdered = jsonResponse.sort((a, b) => a.id - b.id )
				setProjects(jsonProjectsOrdered)
				setLoadingState(false)
			})
		})
    }, [])

	return [
		<section
			{...containerProps}
			className={"Loader " + (isLoading ? "loading" : "loaded")}
			style={{height: "100vh", display: " flex"}}
		>
			{indicatorEl}
		</section>,
		<Switch>
			{projects.map((project, i) => {
				return (
					<Route key={i} path={'/' + project.path} component={() => <Project goToPage={() => handleClick(null)} project={project} key={i} />} />
				);
			})}
			<Route exact path="/" component={() => <Home projects={projects} goToPage={(data) => handleClick(data)} />} />
		</Switch>
	];
});


const App = () => {
	
	

	return (
		<div className="App">
			<Router>
				<Routes />
			</Router>
		</div>
	);
}

export default App;
